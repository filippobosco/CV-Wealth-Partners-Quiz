import { NextRequest, NextResponse } from "next/server";

// Webhook n8n: riceve il payload completo del quiz, salva su Google Sheet
// e compone/invia il report personalizzato via email.
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validazione base dei contatti obbligatori
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    // Se il webhook non è ancora configurato, logga e ritorna success
    // così il quiz è testabile in locale senza n8n.
    if (!N8N_WEBHOOK_URL) {
      console.log("Quiz submit (N8N_WEBHOOK_URL non configurato):", JSON.stringify(body, null, 2));
      return NextResponse.json({ success: true, message: "Dati ricevuti (n8n non configurato)" });
    }

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Errore nell'invio al webhook n8n");
    }

    return NextResponse.json({ success: true, message: "Dati inviati con successo" });
  } catch (error) {
    console.error("Error submitting quiz:", error);
    return NextResponse.json(
      { error: "Errore nell'invio del quiz" },
      { status: 500 }
    );
  }
}
