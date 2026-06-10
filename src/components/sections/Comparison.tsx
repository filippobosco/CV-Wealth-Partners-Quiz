"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    bank: "Consulente che cambia ogni 1-2 anni",
    cv: "Stesso team, sempre. Continuità garantita",
  },
  {
    bank: "Ti chiamano solo per venderti qualcosa",
    cv: "Incontri programmati ogni 3 mesi + disponibilità 24h",
  },
  {
    bank: "Portafoglio da 200-300 clienti per consulente",
    cv: "Max 5 nuovi clienti al mese. Massima attenzione",
  },
  {
    bank: "Prodotti limitati della banca",
    cv: "4.000+ strumenti. Scelta totale",
  },
  {
    bank: "Costi e incentivi raramente spiegati",
    cv: "Costi e modalità di remunerazione sempre esplicitati",
  },
  {
    bank: "Gestione spot e occasionale",
    cv: "Strategia di lungo periodo con obiettivi chiari",
  },
  {
    bank: "Zero competenza fiscale",
    cv: "Doppia expertise: finanziaria + fiscale",
  },
  {
    bank: "Risposte in settimane (se va bene)",
    cv: "Risposta garantita in 24 ore, sempre",
  },
];

export function Comparison() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[var(--gray-50)] to-white">
      <Container>
        <SectionHeading title="Banca Tradizionale vs CV Wealth Partners" />

        <div className="overflow-x-auto -mx-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="min-w-[600px]"
          >
            {/* Table Header */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-[var(--gray-200)] rounded-xl p-4 text-center">
                <span className="font-semibold text-[var(--gray-700)] uppercase tracking-wider text-sm">
                  Banca Tradizionale
                </span>
              </div>
              <div className="bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)] rounded-xl p-4 text-center">
                <span className="font-semibold text-[var(--navy-800)] uppercase tracking-wider text-sm">
                  CV Wealth Partners
                </span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-white rounded-xl p-4 md:p-5 border border-[var(--gray-200)] flex items-center gap-3 hover:bg-[var(--gray-50)] transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--error)]/10 flex items-center justify-center">
                      <X className="w-4 h-4 text-[var(--error)]" />
                    </div>
                    <span className="text-[var(--gray-700)] text-sm md:text-base">
                      {item.bank}
                    </span>
                  </div>
                  <div className="bg-[var(--gold-50)] rounded-xl p-4 md:p-5 border border-[var(--gold-200)] flex items-center gap-3 hover:bg-[var(--gold-100)] transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--success)]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[var(--success)]" />
                    </div>
                    <span className="text-[var(--navy-900)] font-medium text-sm md:text-base">
                      {item.cv}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
