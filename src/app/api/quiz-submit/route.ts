import { NextRequest, NextResponse } from "next/server";

// Webhook n8n: riceve il payload del quiz, salva su Google Sheet,
// invia il report all'utente e notifica il team.
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Valori canonici ammessi per ogni domanda (devono combaciare con lib/qualificazione.ts)
const VALID: Record<string, string[]> = {
  q1: ["solo", "banca", "mix", "fermo"],
  q2: ["si_punto_di_partenza", "no_prodotti", "mai_chiesto", "no"],
  q3: ["figli", "azienda", "pensione_anticipata", "protezione", "eredita", "idee_non_chiare"],
  q4: ["fino_100k", "100k_300k", "300k_1m", "1m_3m", "oltre_3m"],
  q5: ["al_centesimo", "approssimativa", "mai_calcolato"],
  q6: ["pianificazione_attiva", "pensato_nulla", "mai_affrontato"],
  q7: ["sereno", "manca_strategia", "solo_spero", "perso_fiducia"],
  q8: ["si", "in_parte", "no"],
};

type Answers = Record<string, string | string[]>;

function answersValid(answers: unknown): answers is Answers {
  if (!answers || typeof answers !== "object") return false;
  const a = answers as Record<string, unknown>;
  for (const q of ["q1", "q2", "q4", "q5", "q6", "q7", "q8"]) {
    if (!VALID[q].includes(a[q] as string)) return false;
  }
  // q3 è array: ogni valore deve essere ammesso (può essere vuoto)
  if (!Array.isArray(a.q3)) return false;
  if ((a.q3 as string[]).some((v) => !VALID.q3.includes(v))) return false;
  return true;
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON non valido" }, { status: 400 });
  }

  // Honeypot anti-spam: se compilato, fingiamo successo senza inoltrare.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Validazione contatti
  const { name, email, phone } = body as { name?: string; email?: string; phone?: string };
  if (!name || !email || !EMAIL_RE.test(email) || !phone) {
    return NextResponse.json({ ok: false, error: "Dati di contatto mancanti o non validi" }, { status: 400 });
  }

  // Validazione risposte (codici canonici)
  if (!answersValid(body.answers)) {
    return NextResponse.json({ ok: false, error: "Risposte non valide" }, { status: 400 });
  }

  // Senza webhook configurato: logga e ritorna ok (testabile in locale)
  if (!N8N_WEBHOOK_URL) {
    console.log("Quiz submit (N8N_WEBHOOK_URL non configurato):", JSON.stringify(body, null, 2));
    return NextResponse.json({ ok: true, message: "Dati ricevuti (n8n non configurato)" });
  }

  // Inoltro a n8n con timeout 8s
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      console.error("n8n ha risposto con stato", res.status);
      return NextResponse.json({ ok: false, error: "Errore dal servizio a valle" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    clearTimeout(timeout);
    console.error("Errore inoltro a n8n:", error);
    return NextResponse.json({ ok: false, error: "Servizio non raggiungibile" }, { status: 502 });
  }
}
