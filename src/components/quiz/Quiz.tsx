"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import {
  Check,
  ArrowLeft,
  Lock,
  X,
  AlertCircle,
  Mail,
  Phone,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { QUESTIONS, type Answers, type Question } from "@/lib/quiz";
import {
  computeAree,
  isQualificato,
  isPriorityLead,
  toCanonicalAnswers,
} from "@/lib/qualificazione";

type Step = "question" | "contacts" | "thanks";

// Recapiti reali (allineati al Footer)
const WHATSAPP = "393336791235";
const PHONE = "+393336791235";
const EMAIL = "info@cvwealthpartners.it";

const contactSchema = z.object({
  name: z.string().min(2, "Inserisci nome e cognome"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  phone: z.string().min(6, "Inserisci un numero di telefono valido"),
  website: z.string().optional(), // honeypot
  privacy: z.boolean().refine((v) => v === true, {
    message: "Devi accettare la privacy policy",
  }),
});

type ContactData = z.infer<typeof contactSchema>;

export function Quiz({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState<Step>("question");
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const total = QUESTIONS.length;

  const setSingle = (q: Question, value: string) => {
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    window.setTimeout(advance, 280);
  };

  const toggleMulti = (q: Question, value: string) => {
    setAnswers((prev) => {
      const cur = Array.isArray(prev[q.id]) ? [...(prev[q.id] as string[])] : [];
      const i = cur.indexOf(value);
      if (i >= 0) cur.splice(i, 1);
      else cur.push(value);
      return { ...prev, [q.id]: cur };
    });
  };

  const advance = () => {
    if (qi < total - 1) setQi((n) => n + 1);
    else {
      // fine domanda 8 → evento custom QuizComplete
      if (typeof window !== "undefined" && (window as { fbq?: (...a: unknown[]) => void }).fbq) {
        (window as { fbq?: (...a: unknown[]) => void }).fbq!("trackCustom", "QuizComplete");
      }
      setStep("contacts");
    }
  };

  const back = () => {
    if (qi > 0) setQi((n) => n - 1);
  };

  const showProgress = step === "question";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header: progress + chiudi */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1">
          {showProgress && (
            <>
              <span className="block text-xs uppercase tracking-[0.18em] text-[var(--gold-400)]/80 font-medium mb-2">
                Domanda {qi + 1} di {total}
              </span>
              <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-600)]"
                  initial={false}
                  animate={{ width: `${((qi + 1) / total) * 100}%` }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            </>
          )}
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi"
            className="flex-none w-9 h-9 grid place-items-center rounded-full bg-white/[0.06] border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step === "question" ? `q-${qi}` : step}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.2, 0.6, 0.2, 1] }}
          className="w-full"
        >
          {step === "question" && (
            <Question
              q={QUESTIONS[qi]}
              index={qi}
              answers={answers}
              canGoBack={qi > 0}
              onBack={back}
              onSingle={setSingle}
              onToggleMulti={toggleMulti}
              onContinueMulti={advance}
            />
          )}

          {step === "contacts" && (
            <Contacts answers={answers} onDone={() => setStep("thanks")} />
          )}

          {step === "thanks" && <Thanks answers={answers} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------- Card wrapper ---------- */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-b from-[var(--navy-900)] to-[var(--navy-950)] border border-[var(--gold-400)]/20 rounded-3xl p-7 sm:p-10 shadow-2xl">
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11.5px] uppercase tracking-[0.22em] text-[var(--gold-400)] font-semibold mb-4">
      {children}
    </p>
  );
}

/* ---------- Question ---------- */

function Question({
  q,
  index,
  answers,
  canGoBack,
  onBack,
  onSingle,
  onToggleMulti,
  onContinueMulti,
}: {
  q: Question;
  index: number;
  answers: Answers;
  canGoBack: boolean;
  onBack: () => void;
  onSingle: (q: Question, v: string) => void;
  onToggleMulti: (q: Question, v: string) => void;
  onContinueMulti: () => void;
}) {
  const isMulti = q.type === "multi";
  const selectedMulti = Array.isArray(answers[q.id])
    ? (answers[q.id] as string[])
    : [];

  const isSelected = (v: string) =>
    isMulti ? selectedMulti.includes(v) : answers[q.id] === v;

  return (
    <Card>
      <Eyebrow>Domanda {index + 1}</Eyebrow>
      <h2 className="text-2xl sm:text-[26px] font-bold text-white leading-snug mb-2">
        {q.q}
      </h2>
      {q.hint && <p className="text-sm text-gray-400 mb-2">{q.hint}</p>}

      <div className="flex flex-col gap-3 mt-6">
        {q.opts.map((o) => {
          const sel = isSelected(o.v);
          return (
            <button
              key={o.v}
              type="button"
              onClick={() => (isMulti ? onToggleMulti(q, o.v) : onSingle(q, o.v))}
              className={`text-left w-full flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-[15.5px] border transition-all duration-200 active:scale-[0.99] ${
                sel
                  ? "border-[var(--gold-400)] bg-[var(--gold-400)]/10 text-white"
                  : "border-white/10 bg-white/[0.03] text-gray-200 hover:border-[var(--gold-400)]/40 hover:bg-white/[0.06]"
              }`}
            >
              <span
                className={`flex-none w-5 h-5 grid place-items-center border transition-all ${
                  isMulti ? "rounded-md" : "rounded-full"
                } ${
                  sel
                    ? "border-[var(--gold-400)] bg-[var(--gold-400)]"
                    : "border-white/25"
                }`}
              >
                <Check
                  className={`w-3 h-3 text-[var(--navy-950)] transition-opacity ${
                    sel ? "opacity-100" : "opacity-0"
                  }`}
                  strokeWidth={3}
                />
              </span>
              <span>{o.t}</span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-4 mt-7">
        <button
          type="button"
          onClick={onBack}
          disabled={!canGoBack}
          className={`inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-200 transition-colors ${
            canGoBack ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          <ArrowLeft className="w-4 h-4" /> Indietro
        </button>

        {isMulti && (
          <Button
            size="md"
            onClick={onContinueMulti}
            disabled={selectedMulti.length === 0}
          >
            Continua
          </Button>
        )}
      </div>
    </Card>
  );
}

/* ---------- Contacts (lead capture) ---------- */

function Contacts({
  answers,
  onDone,
}: {
  answers: Answers;
  onDone: () => void;
}) {
  const aree = computeAree(answers);
  const n = aree.length;
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactData & { website?: string }) => {
    setSubmitError(false);

    // UTM letti dalla sessione (salvati al primo load — vedi useUtmCapture)
    let utm: Record<string, string> = {};
    try {
      utm = JSON.parse(sessionStorage.getItem("quiz_utm") || "{}");
    } catch {
      utm = {};
    }

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      website: data.website || "", // honeypot (deve restare vuoto)
      answers: toCanonicalAnswers(answers),
      areas: aree,
      qualified: isQualificato(answers),
      priority: isPriorityLead(answers),
      patrimonyBand: toCanonicalAnswers(answers).q4,
      utm,
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/quiz-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Errore nell'invio");

      if (typeof window !== "undefined" && (window as { fbq?: (...a: unknown[]) => void }).fbq) {
        (window as { fbq?: (...a: unknown[]) => void }).fbq!("track", "Lead");
      }

      onDone();
    } catch (err) {
      console.error("Errore invio quiz:", err);
      setSubmitError(true); // mostra messaggio, mantiene le risposte
    }
  };

  return (
    <Card>
      <Eyebrow>Ci siamo</Eyebrow>
      {n > 0 ? (
        <>
          <h2 className="text-2xl sm:text-[26px] font-bold text-white leading-snug mb-3">
            Abbiamo individuato {n} {n === 1 ? "area" : "aree"} da approfondire nel
            tuo profilo.
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Ti prepariamo un report gratuito e personalizzato: per ogni area ti
            spieghiamo, in parole semplici, cosa ti sta costando oggi e da dove
            conviene ripartire. Te lo mandiamo via email.
          </p>

          <div className="flex flex-col gap-2.5 mb-7">
            {aree.map((a) => (
              <div
                key={a.key}
                className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-[var(--gold-400)]/15 px-4 py-3"
              >
                <span className="flex-none w-2 h-2 rounded-full bg-[var(--gold-400)]" />
                <span className="text-[14.5px] text-gray-100">{a.txt}</span>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-gray-400">
                  <Lock className="w-3.5 h-3.5" /> nel report
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl sm:text-[26px] font-bold text-white leading-snug mb-3">
            Il tuo quadro appare solido.
          </h2>
          <p className="text-gray-300 mb-7 leading-relaxed">
            Dalle tue risposte non emergono criticità evidenti — un buon segnale.
            Lascia la tua email: ti inviamo comunque il report con la nostra analisi
            e qualche spunto per mantenere il tuo patrimonio efficiente nel tempo.
          </p>
        </>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Field label="Nome e Cognome *" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            placeholder="Mario Rossi"
            className={inputClass}
          />
        </Field>
        <Field label="Email *" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="nome@email.it"
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="Telefono *" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+39 ..."
            className={inputClass}
          />
        </Field>

        {/* Honeypot anti-spam: nascosto agli utenti, riempito solo dai bot */}
        <input
          {...register("website")}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] w-px h-px opacity-0"
        />

        <label className="flex items-start gap-3 text-sm text-gray-300">
          <input
            {...register("privacy")}
            type="checkbox"
            className="mt-1 w-5 h-5 rounded accent-[var(--gold-500)]"
          />
          <span>
            Accetto la{" "}
            <a href="/privacy" className="text-[var(--gold-400)] hover:underline">
              Privacy Policy
            </a>{" "}
            e acconsento al trattamento dei miei dati. *
          </span>
        </label>
        {errors.privacy && (
          <p className="text-sm text-[#e3937e] flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" />
            {errors.privacy.message}
          </p>
        )}

        <Button type="submit" size="lg" className="btn-glow w-full" disabled={isSubmitting}>
          {isSubmitting ? "Invio in corso..." : "Mostrami i risultati"}
        </Button>

        {submitError && (
          <p className="text-sm text-[#e3937e] flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" />
            Qualcosa è andato storto, riprova.
          </p>
        )}
      </form>

      <p className="flex items-center gap-2 text-xs text-gray-400 mt-4">
        <Mail className="w-3.5 h-3.5 text-[var(--gold-400)]" />
        Niente spam. Solo il tuo report e, se vorrai, una chiacchierata senza impegno.
      </p>
    </Card>
  );
}

const inputClass =
  "w-full bg-white/[0.04] border border-white/15 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 text-[15px] outline-none transition-all focus:border-[var(--gold-400)] focus:ring-2 focus:ring-[var(--gold-400)]/20";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm text-gray-300 mb-2">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-[#e3937e] flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}

/* ---------- Thanks (differenziato per fascia) ---------- */

function Thanks({ answers }: { answers: Answers }) {
  const qualified = isQualificato(answers);
  const waText = encodeURIComponent(
    "Ciao! Ho appena completato il check-up sul vostro sito e vorrei capire come far rendere meglio i miei risparmi."
  );

  return (
    <Card>
      <Eyebrow>Report in arrivo</Eyebrow>
      <div className="w-14 h-14 rounded-full bg-[var(--gold-400)]/15 border border-[var(--gold-400)]/30 grid place-items-center mb-5">
        <Sparkles className="w-7 h-7 text-[var(--gold-400)]" />
      </div>
      <h2 className="text-2xl sm:text-[28px] font-bold text-white leading-snug mb-3">
        Fatto. Il tuo report sta arrivando nella tua email.
      </h2>

      {qualified ? (
        <p className="text-gray-300 leading-relaxed mb-7">
          Dalle tue risposte vediamo che possiamo esserti davvero utili. Se vuoi,
          parliamone subito: in una chiacchierata gratuita ti diciamo dove i tuoi
          soldi stanno perdendo valore e come farli lavorare. Senza vendita di
          prodotti, senza impegno.
        </p>
      ) : (
        <p className="text-gray-300 leading-relaxed mb-7">
          Nel report trovi i punti da sistemare e qualche primo consiglio
          pratico. Quando vuoi un confronto diretto, siamo qui, senza alcuna
          pressione.
        </p>
      )}

      <div className="flex flex-col gap-3">
        <a
          href={`https://wa.me/${WHATSAPP}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button size="lg" className="btn-glow w-full">
            <MessageCircle className="w-5 h-5 mr-2" />
            Scrivici su WhatsApp
          </Button>
        </a>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={`tel:${PHONE}`} className="flex-1">
            <Button variant="outline" size="md" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              Chiamaci
            </Button>
          </a>
          <a href={`mailto:${EMAIL}`} className="flex-1">
            <Button variant="outline" size="md" className="w-full">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
          </a>
        </div>
      </div>

      {qualified && (
        <div className="mt-6 border-l-2 border-[var(--gold-400)] pl-4 py-1 text-sm text-gray-300">
          Seguiamo poche persone alla volta, per dedicare a ognuna il tempo che
          merita.
        </div>
      )}
    </Card>
  );
}
