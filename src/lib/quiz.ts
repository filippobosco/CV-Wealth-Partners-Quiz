/**
 * Logica e contenuti del quiz finanziario CV Wealth Partners.
 *
 * Domande, aree e regole di qualificazione provengono dal prototipo
 * fornito dal cliente (quiz-cv-wealth-partners.html) e dal documento
 * di logica (quiz-cv-wealth-partners-logica.docx). I testi sono invariati.
 *
 * La qualificazione (aree, soglia patrimoniale, priorità) NON è visibile
 * all'utente: serve internamente e viene inviata a n8n nel payload.
 */

export type QuestionType = "single" | "multi";

export interface Option {
  v: string;
  t: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  q: string;
  hint?: string;
  opts: Option[];
}

/** Risposte: single → string, multi → string[]. */
export type Answers = Record<string, string | string[]>;

export interface Area {
  key: string;
  txt: string;
  hit: (a: Answers) => boolean;
}

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    type: "single",
    q: "Come gestisci oggi il tuo patrimonio?",
    opts: [
      { v: "solo", t: "Investo da solo (ETF, azioni, conto deposito)" },
      { v: "banca", t: "Lo affido alla banca o a un consulente" },
      { v: "mix", t: "Un mix: una parte da solo, una in banca" },
      { v: "fermo", t: "È quasi tutto fermo, liquidità sul conto" },
    ],
  },
  {
    id: "q2",
    type: "single",
    q: "Quando hai iniziato a investire, qualcuno ti ha chiesto perché lo fai e quali obiettivi di vita vuoi raggiungere?",
    opts: [
      { v: "si", t: "Sì, è stato il punto di partenza" },
      { v: "prod", t: "No, mi hanno proposto subito dei prodotti" },
      { v: "mai", t: "Investo da solo, non me lo sono mai chiesto davvero" },
      { v: "no", t: "Sinceramente, no" },
    ],
  },
  {
    id: "q3",
    type: "multi",
    q: "Quali di questi pesano di più nei tuoi prossimi 5–10 anni?",
    hint: "Puoi scegliere più di una risposta.",
    opts: [
      { v: "figli", t: "Il futuro dei figli" },
      { v: "azienda", t: "Vendere o passare la mia azienda" },
      { v: "pensione", t: "Smettere o rallentare col lavoro prima dei 65" },
      { v: "protez", t: "Proteggere la famiglia dagli imprevisti" },
      { v: "eredita", t: "Passaggio generazionale ed eredità" },
      { v: "idee", t: "Non ho ancora le idee chiare, ed è proprio il punto" },
    ],
  },
  {
    id: "q4",
    type: "single",
    q: "La parte di patrimonio che vorresti mettere a strategia, liquidità e investimenti, esclusa la prima casa, in quale fascia rientra?",
    opts: [
      { v: "u100", t: "Fino a 100.000 €" },
      { v: "100_300", t: "100.000 – 300.000 €" },
      { v: "300_1m", t: "300.000 € – 1 milione" },
      { v: "1_3m", t: "1 – 3 milioni €" },
      { v: "o3m", t: "Oltre 3 milioni €" },
    ],
  },
  {
    id: "q5",
    type: "single",
    q: "Sai con precisione quanto ti costano ogni anno commissioni e tasse sui tuoi investimenti?",
    opts: [
      { v: "si", t: "Sì, lo conosco al centesimo" },
      { v: "circa", t: "Ho un'idea molto approssimativa" },
      { v: "no", t: "No, non l'ho mai calcolato davvero" },
    ],
  },
  {
    id: "q6",
    type: "single",
    q: "Hai mai analizzato cosa accadrebbe al tuo patrimonio e alla tua famiglia o azienda in caso di imprevisto serio?",
    opts: [
      { v: "si", t: "Sì, ho una pianificazione attiva" },
      { v: "forse", t: "Ci ho pensato, ma non ho fatto nulla di concreto" },
      { v: "no", t: "No, mai affrontato" },
    ],
  },
  {
    id: "q7",
    type: "single",
    q: "Come ti senti rispetto a come gestisci i tuoi soldi oggi?",
    opts: [
      { v: "sereno", t: "Sereno e ben seguito" },
      { v: "manca", t: "Faccio del mio meglio, ma mi manca una strategia" },
      { v: "solo", t: "Mi sento solo: decido tutto io e spero di non sbagliare" },
      { v: "sfiducia", t: "Ho perso fiducia in chi mi seguiva" },
    ],
  },
  {
    id: "q8",
    type: "single",
    q: "La tua attività genera liquidità che oggi resta ferma o che gestisci senza una strategia dedicata?",
    opts: [
      { v: "si", t: "Sì, ho liquidità (personale o aziendale) ferma" },
      { v: "parte", t: "In parte" },
      { v: "no", t: "No / non sono imprenditore" },
    ],
  },
];

export const AREAS: Area[] = [
  {
    key: "obiettivi",
    txt: "La tua strategia non parte dai tuoi obiettivi di vita",
    hit: (a) => ["prod", "mai", "no"].includes(a.q2 as string),
  },
  {
    key: "guida",
    txt: "Stai investendo senza una guida o un metodo strutturato",
    hit: (a) => ["solo", "fermo"].includes(a.q1 as string),
  },
  {
    key: "costi",
    txt: "Non hai un quadro chiaro di costi e fiscalità dei tuoi investimenti",
    hit: (a) => ["circa", "no"].includes(a.q5 as string),
  },
  {
    key: "protezione",
    txt: "Il tuo patrimonio e la tua famiglia non sono protetti dagli imprevisti",
    hit: (a) => ["forse", "no"].includes(a.q6 as string),
  },
  {
    key: "solitudine",
    txt: "Gestisci tutto da solo, senza nessuno che guardi il quadro d'insieme",
    hit: (a) => ["manca", "solo", "sfiducia"].includes(a.q7 as string),
  },
  {
    key: "liquidita",
    txt: "Hai liquidità ferma che oggi non lavora per i tuoi obiettivi",
    hit: (a) => ["si", "parte"].includes(a.q8 as string),
  },
];

/**
 * Aree critiche emerse dalle risposte (max 4). Fallback di sicurezza a 3
 * aree generiche se ne emergono meno di 2 (come nel prototipo).
 */
export function computeAreas(answers: Answers): Area[] {
  const hit = AREAS.filter((a) => a.hit(answers)).slice(0, 4);
  return hit.length < 2 ? AREAS.slice(0, 3) : hit;
}

/** Lead qualificato: patrimonio da 300.000 € in su (domanda 4). */
export function isQualified(answers: Answers): boolean {
  return ["300_1m", "1_3m", "o3m"].includes(answers.q4 as string);
}

/**
 * Lead a massima priorità (doc §4): imprenditore che investe da solo,
 * non si è mai chiesto il perché, e ha liquidità ferma.
 */
export function isPriority(answers: Answers): boolean {
  return (
    answers.q1 === "solo" &&
    ["mai", "no"].includes(answers.q2 as string) &&
    answers.q8 === "si"
  );
}
