"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, TrendingUp } from "lucide-react";

const antonioPoints = [
  "Analisi degli impianti finanziari e fiscali delle scelte di investimento",
  "Visione normativa e compliance assoluta",
  "Protezione patrimoniale",
  "Certificazione EFPA ESG Advisor (European Financial Planning Association)",
];

const erikPoints = [
  "Conoscenza profonda dei mercati e degli strumenti",
  "Strategia patrimoniale di lungo periodo",
  "Trasformazione degli obiettivi personali in decisioni coerenti",
  "Visione da insider, ma con libertà totale",
];

export function USP() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          title="Due mondi. Una sola missione: proteggere il tuo patrimonio."
          subtitle="La forza di CV Wealth Partners è nella complementarietà perfetta. Siamo una task force con competenze che si integrano."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-stretch">
          {/* Erik */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-full"
          >
            <div className="bg-gradient-to-br from-[var(--navy-950)] to-[var(--navy-800)] rounded-3xl p-8 md:p-10 text-white h-full">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-28 h-36 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src="/Erik.webp" alt="Erik Vitali" width={112} height={144} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Erik Vitali
                  </h3>
                  <p className="text-[var(--gold-400)] font-medium">
                    L&apos;Esperienza e la Strategia
                  </p>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl italic text-gray-300 mb-6 pl-4 border-l-2 border-[var(--gold-500)]">
                &ldquo;Ho passato 19 anni dentro il sistema bancario. So
                esattamente cosa funziona, cosa non funziona, e cosa devi
                evitare.&rdquo;
              </blockquote>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold-500)]/20 mb-6">
                <TrendingUp className="w-4 h-4 text-[var(--gold-400)]" />
                <span className="text-sm font-semibold text-[var(--gold-400)] uppercase tracking-wide">
                  19 Anni in Banca e Private Banking
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                  Quello che porto:
                </p>
                <ul className="space-y-3">
                  {erikPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-400)] mt-2 flex-shrink-0" />
                      <span className="text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-300 italic">
                Il mio obiettivo è dare forza e crescita sostenibile al tuo
                capitale, senza inseguire mode o prodotti del momento.
              </p>
            </div>
          </motion.div>

          {/* Antonio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full"
          >
            <div className="bg-gradient-to-br from-[var(--navy-950)] to-[var(--navy-800)] rounded-3xl p-8 md:p-10 text-white h-full">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-28 h-36 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src="/Antonio.webp" alt="Antonio Chirieleison" width={112} height={144} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Antonio Chirieleison
                  </h3>
                  <p className="text-[var(--gold-400)] font-medium">
                    Il Rigore e la Protezione
                  </p>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl italic text-gray-300 mb-6 pl-4 border-l-2 border-[var(--gold-500)]">
                &ldquo;Per anni ho analizzato patrimoni e bilanci dalla parte del
                controllo. Oggi metto quella stessa precisione chirurgica al
                servizio dei miei clienti.&rdquo;
              </blockquote>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold-500)]/20 mb-6">
                <Shield className="w-4 h-4 text-[var(--gold-400)]" />
                <span className="text-sm font-semibold text-[var(--gold-400)] uppercase tracking-wide">
                  Ex Ispettore Guardia di Finanza
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                  Quello che porto:
                </p>
                <ul className="space-y-3">
                  {antonioPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-400)] mt-2 flex-shrink-0" />
                      <span className="text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-300 italic">
                Il mio obiettivo non è solo farti investire, è costruire uno
                scudo attorno ai tuoi risparmi.
              </p>
            </div>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
