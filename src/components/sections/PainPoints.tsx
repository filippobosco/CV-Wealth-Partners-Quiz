"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const painPoints = [
  {
    title: "Il tuo consulente bancario è il terzo negli ultimi 3 anni",
    description:
      "Ogni volta devi ricominciare da zero. Ogni volta ti propongono \"il nuovo prodotto del momento\". Mai una strategia di lungo periodo.",
  },
  {
    title: "Ti chiamano solo quando c'è da firmare qualcosa",
    description:
      "Zero monitoraggio. Zero aggiornamenti. Zero interesse reale per i tuoi obiettivi. Sei un numero in un portafoglio da 300 clienti.",
  },
  {
    title: "Nessuno ti ha mai parlato di ottimizzazione fiscale",
    description:
      "Stai perdendo migliaia di euro ogni anno in inefficienze che non conosci. Il tuo consulente non sa nemmeno da dove iniziare.",
  },
  {
    title: "Non hai idea di cosa succede davvero ai tuoi soldi",
    description:
      "Comunicazioni incomprensibili. Estratti conto che sembrano geroglifici. Zero trasparenza su costi, rischi e strategie reali.",
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

export function PainPoints() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + painPoints.length) % painPoints.length);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const pain = painPoints[current];

  return (
    <section className="py-20 md:py-28 bg-[var(--gray-50)]">
      <Container>
        <SectionHeading title="Ti riconosci in una di queste situazioni?" />

        {/* Mobile: Carousel */}
        <div className="md:hidden mb-16">
          <div className="relative flex items-center gap-3">
            {/* Prev button */}
            <button
              onClick={() => paginate(-1)}
              className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--gray-200)] bg-white hover:border-[var(--error)]/30 hover:shadow-md transition-all duration-200 flex items-center justify-center text-[var(--navy-800)]"
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
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-200)] select-none cursor-grab active:cursor-grabbing"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--error)]/10 flex items-center justify-center">
                      <X className="w-6 h-6 text-[var(--error)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--navy-950)] mb-2">
                        {pain.title}
                      </h3>
                      <p className="text-[var(--gray-600)] leading-relaxed">
                        {pain.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next button */}
            <button
              onClick={() => paginate(1)}
              className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--gray-200)] bg-white hover:border-[var(--error)]/30 hover:shadow-md transition-all duration-200 flex items-center justify-center text-[var(--navy-800)]"
              aria-label="Successivo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {painPoints.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Vai alla card ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? "w-6 h-2 bg-[var(--error)]"
                    : "w-2 h-2 bg-[var(--gray-300)] hover:bg-[var(--gray-400)]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid a 2 colonne (invariato) */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {painPoints.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--gray-200)] hover:shadow-md hover:border-[var(--error)]/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--error)]/10 flex items-center justify-center group-hover:bg-[var(--error)]/20 transition-colors">
                  <X className="w-6 h-6 text-[var(--error)]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--navy-950)] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[var(--gray-600)] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-[var(--navy-800)] leading-relaxed">
            C&apos;è un modo diverso di proteggere e far crescere il tuo patrimonio.
            <br />
            <span className="text-[var(--navy-800)] font-semibold">
              E parte da una scelta semplice: affidarti a chi mette il tuo
              interesse prima di tutto.
            </span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
