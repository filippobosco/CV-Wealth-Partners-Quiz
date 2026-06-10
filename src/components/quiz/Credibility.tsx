"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, TrendingUp, ScrollText } from "lucide-react";

const points = [
  {
    icon: Shield,
    title: "Veniamo dai controlli, non dalle vendite",
    text: "Anni dentro la Guardia di Finanza ad analizzare i conti degli altri. Oggi guardiamo i tuoi con lo stesso occhio attento.",
  },
  {
    icon: TrendingUp,
    title: "Conosciamo le banche da dentro",
    text: "19 anni nel mondo bancario. Sappiamo come funziona davvero, e perché spesso i tuoi soldi restano fermi.",
  },
  {
    icon: ScrollText,
    title: "Lavoriamo solo per te",
    text: "Non ti vendiamo prodotti di una banca. Partiamo da quello che vuoi tu e costruiamo la strategia attorno a quello.",
  },
];

export function Credibility() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[var(--navy-950)] to-[var(--navy-900)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[1.65rem] sm:text-4xl font-bold text-white mb-4">
            Chi siamo
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Antonio ed Erik. Due strade diverse, i controlli e le banche, per
            un obiettivo solo: far rendere i tuoi soldi, in modo chiaro e onesto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/[0.03] border border-[var(--gold-400)]/15 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--gold-400)]/10 grid place-items-center mb-4">
                <p.icon className="w-6 h-6 text-[var(--gold-400)]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
