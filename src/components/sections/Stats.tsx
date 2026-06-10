"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Sparkles, Users, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Nato per scelta",
    description:
      "Selezioniamo gli strumenti in base agli obiettivi, confrontiamo alternative e costruiamo soluzioni con metodo e responsabilità.",
  },
  {
    icon: Users,
    title: "Due professionisti, una visione",
    description:
      "La sinergia di competenze complementari: rigore fiscale e strategia finanziaria, unite dalla volontà di lavorare senza compromessi.",
  },
  {
    icon: Heart,
    title: "Relazioni, non numeri",
    description:
      "Chi entra oggi non è \"uno dei tanti\". È seguito, ascoltato e accompagnato nel tempo. È così che costruiamo le relazioni.",
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

export function Stats() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + values.length) % values.length);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const value = values[current];

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy-950)] mb-6">
            Due professionisti. Un approccio diverso dalla consulenza tradizionale.
          </h2>
          <p className="text-lg md:text-xl text-[var(--gray-600)] max-w-3xl mx-auto leading-relaxed">
            CV Wealth Partners nasce da una scelta precisa: portare nella consulenza
            finanziaria e patrimoniale privata lo stesso rigore che Erik ha maturato
            in 19 anni di private banking e Antonio nella Guardia di Finanza.
            Una consulenza più vicina, più trasparente e realmente orientata
            al tuo interesse.
          </p>
        </motion.div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
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
                  className="text-center p-8 rounded-3xl bg-[var(--gray-50)] border border-[var(--gray-200)] select-none cursor-grab active:cursor-grabbing"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--gold-100)] to-[var(--gold-200)] mb-6">
                    <value.icon className="w-8 h-8 text-[var(--navy-800)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--navy-950)] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[var(--gray-600)] leading-relaxed">
                    {value.description}
                  </p>
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
            {values.map((_, index) => (
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
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-8 md:p-10 rounded-3xl bg-[var(--gray-50)] border border-[var(--gray-200)] hover:border-[var(--gold-300)] hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--gold-100)] to-[var(--gold-200)] mb-6">
                <val.icon className="w-8 h-8 text-[var(--navy-800)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--navy-950)] mb-4">
                {val.title}
              </h3>
              <p className="text-[var(--gray-600)] leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
