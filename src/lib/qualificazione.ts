/**
 * Modulo di qualificazione — UNICA fonte di verità della logica nel frontend.
 *
 * Il quiz internamente usa codici brevi (vedi src/lib/quiz.ts). Il backend n8n
 * si aspetta i CODICI CANONICI definiti qui sotto. Questo modulo converte gli uni
 * negli altri (`toCanonicalAnswers`) ed espone la logica di aree/qualifica.
 */

import type { Answers } from "@/lib/quiz";

/* -------------------------------------------------------------------------- */
/* Codici canonici (quelli attesi dal backend n8n — non cambiare)             */
/* -------------------------------------------------------------------------- */

export type CanonicalAnswers = {
  q1: "solo" | "banca" | "mix" | "fermo";
  q2: "si_punto_di_partenza" | "no_prodotti" | "mai_chiesto" | "no";
  q3: Array<
    | "figli"
    | "azienda"
    | "pensione_anticipata"
    | "protezione"
    | "eredita"
    | "idee_non_chiare"
  >;
  q4: "fino_100k" | "100k_300k" | "300k_1m" | "1m_3m" | "oltre_3m";
  q5: "al_centesimo" | "approssimativa" | "mai_calcolato";
  q6: "pianificazione_attiva" | "pensato_nulla" | "mai_affrontato";
  q7: "sereno" | "manca_strategia" | "solo_spero" | "perso_fiducia";
  q8: "si" | "in_parte" | "no";
};

/* -------------------------------------------------------------------------- */
/* Mappa: codici interni del quiz → codici canonici                           */
/* -------------------------------------------------------------------------- */

const MAP: Record<string, Record<string, string>> = {
  q1: { solo: "solo", banca: "banca", mix: "mix", fermo: "fermo" },
  q2: { si: "si_punto_di_partenza", prod: "no_prodotti", mai: "mai_chiesto", no: "no" },
  q3: {
    figli: "figli",
    azienda: "azienda",
    pensione: "pensione_anticipata",
    protez: "protezione",
    eredita: "eredita",
    idee: "idee_non_chiare",
  },
  q4: { u100: "fino_100k", "100_300": "100k_300k", "300_1m": "300k_1m", "1_3m": "1m_3m", o3m: "oltre_3m" },
  q5: { si: "al_centesimo", circa: "approssimativa", no: "mai_calcolato" },
  q6: { si: "pianificazione_attiva", forse: "pensato_nulla", no: "mai_affrontato" },
  q7: { sereno: "sereno", manca: "manca_strategia", solo: "solo_spero", sfiducia: "perso_fiducia" },
  q8: { si: "si", parte: "in_parte", no: "no" },
};

/** Converte le risposte interne del quiz nei codici canonici attesi da n8n. */
export function toCanonicalAnswers(answers: Answers): CanonicalAnswers {
  const map1 = (q: string, v: unknown) => MAP[q]?.[v as string] ?? "";
  const q3raw = Array.isArray(answers.q3) ? (answers.q3 as string[]) : [];
  return {
    q1: map1("q1", answers.q1) as CanonicalAnswers["q1"],
    q2: map1("q2", answers.q2) as CanonicalAnswers["q2"],
    q3: q3raw.map((v) => MAP.q3[v]).filter(Boolean) as CanonicalAnswers["q3"],
    q4: map1("q4", answers.q4) as CanonicalAnswers["q4"],
    q5: map1("q5", answers.q5) as CanonicalAnswers["q5"],
    q6: map1("q6", answers.q6) as CanonicalAnswers["q6"],
    q7: map1("q7", answers.q7) as CanonicalAnswers["q7"],
    q8: map1("q8", answers.q8) as CanonicalAnswers["q8"],
  };
}

/* -------------------------------------------------------------------------- */
/* Macro-aree (4) — operano sui codici CANONICI                               */
/* -------------------------------------------------------------------------- */

export type MacroAreaKey = "metodo" | "costi" | "protezione" | "liquidita";

export interface MacroArea {
  key: MacroAreaKey;
  txt: string;
}

const AREE_DEFS: Array<{
  key: MacroAreaKey;
  txt: string;
  hit: (a: CanonicalAnswers) => boolean;
}> = [
  {
    key: "metodo",
    txt: "Strategia e obiettivi di vita",
    hit: (a) =>
      ["solo", "fermo"].includes(a.q1) ||
      a.q2 !== "si_punto_di_partenza" ||
      a.q7 !== "sereno",
  },
  {
    key: "costi",
    txt: "Costi e fiscalità sotto controllo",
    hit: (a) => ["approssimativa", "mai_calcolato"].includes(a.q5),
  },
  {
    key: "protezione",
    txt: "Protezione del patrimonio e della famiglia",
    hit: (a) => ["pensato_nulla", "mai_affrontato"].includes(a.q6),
  },
  {
    key: "liquidita",
    txt: "Liquidità ferma che non lavora",
    hit: (a) => ["si", "in_parte"].includes(a.q8),
  },
];

/**
 * Restituisce le macro-aree attivate (max 4) a partire dalle risposte interne.
 * N può essere 0: la gate gestisce quel caso con messaggio positivo.
 */
export function computeAree(answers: Answers): MacroArea[] {
  const canonical = toCanonicalAnswers(answers);
  return AREE_DEFS.filter((a) => a.hit(canonical)).map((a) => ({
    key: a.key,
    txt: a.txt,
  }));
}

/* -------------------------------------------------------------------------- */
/* Qualificazione                                                             */
/* -------------------------------------------------------------------------- */

/** Lead qualificato: patrimonio da 300.000 € in su (q4). */
export function isQualificato(answers: Answers): boolean {
  const q4 = toCanonicalAnswers(answers).q4;
  return ["300k_1m", "1m_3m", "oltre_3m"].includes(q4);
}

/** Lead a massima priorità: investe da solo, non si è mai chiesto il perché, liquidità ferma. */
export function isPriorityLead(answers: Answers): boolean {
  const a = toCanonicalAnswers(answers);
  return (
    a.q1 === "solo" &&
    ["no_prodotti", "mai_chiesto", "no"].includes(a.q2) &&
    a.q8 === "si"
  );
}
