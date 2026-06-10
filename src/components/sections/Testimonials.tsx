"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dopo 15 anni con la mia banca ho capito che stavo pagando per un servizio che non ricevevo. Antonio ed Erik mi hanno aperto gli occhi e ricostruito tutto da zero. Ora so sempre dove sono i miei soldi e perché.",
    name: "Roberto C.",
    role: "Imprenditore edile",
    years: 5,
    initials: "RC",
  },
  {
    quote:
      "La differenza è nella continuità. Non sono più io a dover rincorrere il consulente. Sono loro che mi tengono aggiornata, mi spiegano tutto e sono sempre disponibili. È un altro pianeta.",
    name: "Silvia P.",
    role: "Libera professionista",
    years: 3,
    initials: "SP",
  },
  {
    quote:
      "Finalmente ho una visione chiara del mio patrimonio. Antonio ed Erik mi hanno aiutato a capire dove stavano le inefficienze e a costruire una strategia coerente. Ogni trimestre ci incontriamo e so sempre a che punto siamo.",
    name: "Luca F.",
    role: "Imprenditore",
    years: 4,
    initials: "LF",
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

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading title="Cosa dicono di noi" />

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

            {/* Card area — pt-6 per lasciare spazio all'icona Quote in assoluto */}
            <div className="flex-1 overflow-visible pt-6">
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
                  className="relative bg-[var(--gray-50)] rounded-3xl p-6 border border-[var(--gray-200)] flex flex-col select-none cursor-grab active:cursor-grabbing"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-6 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] flex items-center justify-center">
                    <Quote className="w-5 h-5 text-[var(--navy-800)]" />
                  </div>

                  {/* Quote */}
                  <p className="text-[var(--gray-700)] text-base leading-relaxed italic mt-4 mb-6 flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[var(--gray-200)]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-950)] flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-[var(--gold-400)]">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--navy-950)]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[var(--gray-600)]">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-[var(--navy-700)] font-medium">
                        Cliente da {testimonial.years} anni
                      </p>
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
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Vai alla testimonianza ${index + 1}`}
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
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative bg-[var(--gray-50)] rounded-3xl p-6 md:p-8 border border-[var(--gray-200)] hover:border-[var(--gold-300)] hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] flex items-center justify-center">
                <Quote className="w-5 h-5 text-[var(--navy-800)]" />
              </div>

              {/* Quote */}
              <p className="text-[var(--gray-700)] text-lg leading-relaxed italic mt-4 mb-6 flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[var(--gray-200)] mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-950)] flex items-center justify-center">
                  <span className="text-sm font-bold text-[var(--gold-400)]">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--navy-950)]">
                    {t.name}
                  </p>
                  <p className="text-sm text-[var(--gray-600)]">
                    {t.role}
                  </p>
                  <p className="text-xs text-[var(--navy-700)] font-medium">
                    Cliente da {t.years} anni
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
