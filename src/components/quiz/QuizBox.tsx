"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function QuizBox({ onStart }: { onStart: () => void }) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[var(--navy-900)] to-[var(--navy-950)]">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)] rounded-3xl blur-lg opacity-20" />

          <div className="relative bg-gradient-to-b from-[var(--navy-800)] to-[var(--navy-950)] border border-[var(--gold-400)]/30 rounded-3xl p-8 sm:p-12 text-center">
            <p className="text-[11.5px] uppercase tracking-[0.22em] text-[var(--gold-400)] font-semibold mb-4">
              Inizia da qui
            </p>
            <h2 className="text-[1.65rem] sm:text-4xl font-bold text-white leading-tight mb-4">
              Il tuo patrimonio ha una strategia,{" "}
              <span className="text-gradient">o è solo fermo lì?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
              Rispondi a 8 domande semplici. Niente termini complicati: ti
              chiediamo solo cosa vuoi dai tuoi soldi. Alla fine ricevi un report
              gratuito con i punti da sistemare.
            </p>
            <Button size="lg" className="btn-glow text-lg" onClick={onStart}>
              Rispondi alle 8 domande
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-400)]" />
                Gratuito
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-400)]" />
                Riservato
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-400)]" />
                Nessuna chiamata commerciale
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
