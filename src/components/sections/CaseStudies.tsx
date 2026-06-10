"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrendingUp, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    quote:
      "Le imposte diventano patrimonio per mia figlia",
    client: "Professionista, reddito €120.000",
    situation:
      "Reddito elevato con aliquota marginale al 43%, nessuna strategia di ottimizzazione fiscale attiva",
    actions: [
      "Analisi della posizione fiscale e previdenziale",
      "Attivazione deduzione fiscale tramite fondo pensione (€5.160/anno)",
      "Beneficio fiscale annuo di €2.220 reinvestito interamente",
      "Piano di accumulo (PAC) intestato alla figlia alimentato dal risparmio fiscale",
    ],
    result:
      "€22.000 versati in 10 anni → capitale figlia ~€44.000. Il genitore riduce le tasse ogni anno, la figlia costruisce patrimonio nel tempo.",
    years: 3,
  },
  {
    quote: "Finalmente una visione chiara di tutto il nostro patrimonio",
    client: "Famiglia B., Patrimonio €2,1M (immobiliare + finanziario)",
    situation:
      "Portafoglio frammentato su 3 banche, immobili e partecipazioni aziendali mai analizzati insieme",
    actions: [
      "Mappatura completa del patrimonio: finanziario, immobiliare e aziendale",
      "Analisi delle inefficienze e delle opportunità di ottimizzazione",
      "Strategia integrata con focus protezione e passaggio generazionale",
      "Piano accumulo dedicato per istruzione nipoti",
    ],
    result:
      "Visione unitaria del patrimonio, strategia chiara condivisa con tutta la famiglia, €150k già accantonati per i nipoti",
    years: 6,
  },
  {
    quote: "L'unica consulenza dove non mi sento un numero",
    client: "Laura M., Professionista (Medico Chirurgo)",
    situation:
      "Gestione passiva in banca, consulente irraggiungibile, zero pianificazione previdenziale",
    actions: [
      "Definizione obiettivi chiari: anticipo pensione a 58 anni",
      "Strategia accumulo integrativa con risk management",
      "Ottimizzazione fiscale redditi professionali",
      "Incontri trimestrali puntuali + disponibilità WhatsApp",
    ],
    result:
      "Piano previdenziale in linea con obiettivi, -€4.200/anno in imposte, serenità di avere sempre risposte veloci",
    years: 3,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
  }),
};

export function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + caseStudies.length) % caseStudies.length);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const study = caseStudies[current];

  return (
    <section className="py-20 md:py-28 bg-[var(--gray-50)]">
      <Container>
        <SectionHeading
          title="Risultati reali per clienti reali"
          subtitle="Non promettiamo miracoli. Promettiamo metodo, chiarezza e visione di lungo periodo. Ecco cosa abbiamo costruito insieme ad alcuni nostri clienti."
        />

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden">
          <div className="relative flex items-center gap-3">
            {/* Prev button */}
            <button
              onClick={() => paginate(-1)}
              className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--gray-200)] bg-white hover:border-[var(--gold-300)] hover:shadow-md transition-all duration-200 flex items-center justify-center text-[var(--navy-800)]"
              aria-label="Precedente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Card area */}
            <div className="flex-1 overflow-hidden">
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
                  className="bg-white rounded-3xl shadow-sm border border-[var(--gray-200)] overflow-hidden flex flex-col select-none cursor-grab active:cursor-grabbing"
                >
                  <div className="p-6 flex-grow">
                    {/* Quote */}
                    <div className="mb-5">
                      <div className="text-4xl text-[var(--navy-700)] mb-2">&ldquo;</div>
                      <p className="text-lg font-semibold text-[var(--navy-950)] italic leading-tight">
                        {study.quote}
                      </p>
                    </div>

                    {/* Client */}
                    <p className="text-sm font-semibold text-[var(--navy-700)] mb-4">
                      {study.client}
                    </p>

                    {/* Situation */}
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wider text-[var(--gray-500)] mb-2">
                        Situazione iniziale
                      </p>
                      <p className="text-[var(--gray-600)] text-sm">
                        {study.situation}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="mb-2">
                      <p className="text-xs uppercase tracking-wider text-[var(--gray-500)] mb-2">
                        Cosa abbiamo fatto
                      </p>
                      <ul className="space-y-1">
                        {study.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2 text-[var(--gray-600)] text-sm">
                            <span className="w-1 h-1 rounded-full bg-[var(--gold-500)] mt-2 flex-shrink-0" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Result Box */}
                  <div className="bg-gradient-to-r from-[var(--gold-50)] to-[var(--gold-100)] p-6 border-t border-[var(--gold-200)]">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-[var(--navy-800)]" />
                      <span className="text-xs uppercase tracking-wider text-[var(--navy-800)] font-semibold">
                        Risultato
                      </span>
                    </div>
                    <p className="text-[var(--navy-900)] font-medium text-sm">
                      {study.result}
                    </p>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[var(--gold-200)]">
                      <Clock className="w-4 h-4 text-[var(--navy-800)]" />
                      <span className="text-sm text-[var(--navy-700)]">
                        Cliente da {study.years} anni
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next button */}
            <button
              onClick={() => paginate(1)}
              className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--gray-200)] bg-white hover:border-[var(--gold-300)] hover:shadow-md transition-all duration-200 flex items-center justify-center text-[var(--navy-800)]"
              aria-label="Successivo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Vai alla card ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? "w-6 h-2 bg-[var(--gold-400)]"
                    : "w-2 h-2 bg-[var(--gray-300)] hover:bg-[var(--gray-400)]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid a 3 colonne (invariato) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {caseStudies.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl shadow-sm border border-[var(--gray-200)] overflow-hidden hover:shadow-lg hover:border-[var(--gold-300)] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="p-6 md:p-8 flex-grow">
                {/* Quote */}
                <div className="mb-6">
                  <div className="text-4xl text-[var(--navy-700)] mb-2">&ldquo;</div>
                  <p className="text-xl md:text-2xl font-semibold text-[var(--navy-950)] italic leading-tight">
                    {s.quote}
                  </p>
                </div>

                {/* Client */}
                <p className="text-sm font-semibold text-[var(--navy-700)] mb-4">
                  {s.client}
                </p>

                {/* Situation */}
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-[var(--gray-500)] mb-2">
                    Situazione iniziale
                  </p>
                  <p className="text-[var(--gray-600)] text-sm">
                    {s.situation}
                  </p>
                </div>

                {/* Actions */}
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-[var(--gray-500)] mb-2">
                    Cosa abbiamo fatto
                  </p>
                  <ul className="space-y-1">
                    {s.actions.map((action, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[var(--gray-600)] text-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--gold-500)] mt-2 flex-shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-gradient-to-r from-[var(--gold-50)] to-[var(--gold-100)] p-6 border-t border-[var(--gold-200)]">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[var(--navy-800)]" />
                  <span className="text-xs uppercase tracking-wider text-[var(--navy-800)] font-semibold">
                    Risultato
                  </span>
                </div>
                <p className="text-[var(--navy-900)] font-medium text-sm">
                  {s.result}
                </p>

                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[var(--gold-200)]">
                  <Clock className="w-4 h-4 text-[var(--navy-800)]" />
                  <span className="text-sm text-[var(--navy-700)]">
                    Cliente da {s.years} anni
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
