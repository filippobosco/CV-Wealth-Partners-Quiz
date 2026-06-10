"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, Target, Lightbulb, MessageSquare, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "CONOSCENZA PROFONDA",
    subtitle: "Primo incontro dedicato all'ascolto",
    description:
      "Non iniziamo mai proponendo soluzioni. Iniziamo facendo le domande giuste:",
    points: [
      "Qual è la tua situazione patrimoniale oggi?",
      "Con chi lavori e cosa vorresti fosse diverso?",
      "Quali sono i tuoi punti di forza attuali da preservare?",
      "Cosa ti tiene sveglio la notte riguardo ai tuoi soldi?",
    ],
    footer: "Obiettivo: costruire un quadro completo e condiviso. Non venderti nulla, ma capirti davvero.",
  },
  {
    icon: Target,
    number: "02",
    title: "DEFINIZIONE OBIETTIVI",
    subtitle: "Diamo una direzione chiara al tuo patrimonio",
    description:
      "Lavoriamo per trasformare desideri vaghi in obiettivi concreti:",
    points: [
      '"Voglio che mio figlio studi nelle migliori università" → Piano accumulo €120k in 10 anni',
      '"Ho liquidità aziendale ferma che non rende" → Strategia tesoreria con strumenti a breve-medio termine',
      '"Voglio proteggere la mia famiglia" → Analisi protezione + pianificazione successoria',
    ],
    footer: "Ogni obiettivo diventa misurabile, raggiungibile, monitorabile.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "STRATEGIA PERSONALIZZATA",
    subtitle: "Soluzioni su misura",
    description: "Sviluppiamo una proposta su misura:",
    points: [
      "Scelta tra 4.000+ strumenti finanziari",
      "Ottimizzazione fiscale integrata (quello che nessuno fa)",
      "Spiegazione trasparente di ogni scelta e alternativa",
      "Simulazioni e scenari concreti",
    ],
    footer:
      "Ogni strategia viene spiegata con chiarezza e approfondita finché ogni dettaglio è davvero compreso",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "CONFRONTO E DECISIONE",
    subtitle: "Tu decidi, noi guidiamo",
    description:
      "La proposta è un punto di partenza, non un contratto blindato:",
    points: [
      "Discutiamo insieme ogni dettaglio",
      "Rispondiamo a tutte le tue domande",
      "Zero pressione: decidi tu i tempi",
    ],
    footer:
      "Alcune persone ci mettono una settimana, altre tre mesi. Va bene così. L'importante è che tu sia convinto.",
  },
  {
    icon: Heart,
    number: "05",
    title: "ACCOMPAGNAMENTO CONTINUO",
    subtitle: "Il rapporto non finisce, inizia",
    description: "Una volta avviata la strategia:",
    points: [
      "Incontro programmato ogni 3 mesi (in sede o remoto)",
      "Monitoraggio costante dell'andamento",
      "Aggiornamenti proattivi se i mercati cambiano",
      "Risposta garantita entro 24h a ogni tua domanda",
      "Adeguamento del piano se cambiano le tue esigenze",
    ],
    footer:
      "Non sei mai solo. Non sei mai un numero. Sei un cliente che seguiamo come se fossimo soci nel tuo progetto.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 240 : -240,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 240 : -240,
    opacity: 0,
  }),
};

export function Method() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    const next = current + newDirection;
    if (next < 0 || next >= steps.length) return;
    setDirection(newDirection);
    setCurrent(next);
  };

  const step = steps[current];
  const isFirst = current === 0;
  const isLast = current === steps.length - 1;

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          title="Come lavoriamo: il metodo CV Wealth Partners"
          subtitle="Non partiamo dai prodotti. Partiamo da te, dai tuoi obiettivi, dalla tua vita e da quello che vuoi costruire."
        />

        {/* Mobile: Carousel con senso di progressione */}
        <div className="md:hidden">

          {/* Step tracker numerato */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-sm font-semibold text-[var(--navy-800)]">
              Step {step.number} di {String(steps.length).padStart(2, "0")}
            </span>
            <span className="text-sm text-[var(--gray-500)]">{step.subtitle}</span>
          </div>

          {/* Barra di progresso */}
          <div className="relative h-1.5 bg-[var(--gray-200)] rounded-full mb-6 overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-600)]"
              animate={{ width: `${((current + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* Card */}
          <div className="overflow-hidden mb-6">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) paginate(1);
                  else if (info.offset.x > 60) paginate(-1);
                }}
                className="bg-[var(--gray-50)] rounded-3xl p-6 border border-[var(--gray-200)] select-none cursor-grab active:cursor-grabbing"
              >
                {/* Header card */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-[var(--navy-800)]" />
                  </div>
                  <div>
                    <span className="text-[var(--navy-800)] font-bold text-xs tracking-wide">
                      STEP {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--navy-950)] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[var(--navy-700)] font-medium text-sm mb-3">
                  {step.subtitle}
                </p>

                <p className="text-[var(--gray-700)] text-sm mb-3">
                  {step.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[var(--gray-600)] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-500)] mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-[var(--navy-800)] font-medium italic text-xs border-t border-[var(--gray-200)] pt-3">
                  {step.footer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigazione */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => paginate(-1)}
              disabled={isFirst}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                isFirst
                  ? "border-[var(--gray-100)] text-[var(--gray-300)] cursor-not-allowed"
                  : "border-[var(--gray-200)] bg-white text-[var(--navy-800)] hover:border-[var(--gold-300)] hover:shadow-sm"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              {!isFirst && (
                <span className="hidden xs:inline">
                  {steps[current - 1].number}
                </span>
              )}
              <span>Indietro</span>
            </button>

            {/* Dots step */}
            <div className="flex items-center gap-1.5">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-5 h-2 bg-[var(--gold-500)]"
                      : index < current
                      ? "w-2 h-2 bg-[var(--gold-300)]"
                      : "w-2 h-2 bg-[var(--gray-300)]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              disabled={isLast}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                isLast
                  ? "border-[var(--gray-100)] text-[var(--gray-300)] cursor-not-allowed"
                  : "border-[var(--gold-300)] bg-gradient-to-r from-[var(--gold-50)] to-[var(--gold-100)] text-[var(--navy-800)] hover:shadow-sm"
              }`}
            >
              <span>Avanti</span>
              {!isLast && (
                <span className="hidden xs:inline">
                  {steps[current + 1].number}
                </span>
              )}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop: Timeline originale */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gold-400)] via-[var(--gold-500)] to-[var(--gold-600)]" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((s, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`lg:flex items-center gap-8 lg:gap-16 ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-[45%]">
                    <div className="bg-[var(--gray-50)] rounded-3xl p-6 md:p-8 border border-[var(--gray-200)] hover:border-[var(--gold-300)] hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] flex items-center justify-center">
                          <s.icon className="w-7 h-7 text-[var(--navy-800)]" />
                        </div>
                        <div>
                          <span className="text-[var(--navy-800)] font-bold text-sm">
                            STEP {s.number}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-[var(--navy-950)]">
                            {s.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-[var(--navy-700)] font-medium mb-4">
                        {s.subtitle}
                      </p>

                      <p className="text-[var(--gray-700)] mb-4">
                        {s.description}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {s.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[var(--gray-600)]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-500)] mt-2 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-[var(--navy-800)] font-medium italic text-sm">
                        {s.footer}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node - Desktop Only */}
                  <div className="hidden lg:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] items-center justify-center shadow-lg shadow-[var(--gold-500)]/30 z-10">
                    <span className="text-2xl font-bold text-[var(--navy-800)]">
                      {s.number}
                    </span>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
