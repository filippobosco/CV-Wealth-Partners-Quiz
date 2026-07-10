"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrendingDown, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export function Presentation({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[var(--navy-950)] via-[var(--navy-900)] to-[var(--navy-800)] pt-28 pb-20 md:pt-32 md:pb-24">
      {/* Pattern dot di sfondo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Nessuna animazione d'ingresso: l'hero è l'LCP e deve essere
            visibile subito (con opacity:0 iniziale l'LCP mobile era ~7s) */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[1.95rem] sm:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] font-bold text-white leading-[1.15] mb-6">
            I tuoi soldi sono fermi.
            <br />
            <span className="text-gradient sm:whitespace-nowrap">
              E ogni anno valgono <br className="sm:hidden" />di meno.
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Sul conto, in banca, in qualche prodotto che ti hanno proposto: se il
            tuo denaro non ha una strategia, l&apos;inflazione se lo mangia un
            po&apos; alla volta. Spesso senza che te ne accorga.
          </p>

          <div className="flex justify-center mb-8">
            <Button size="lg" className="btn-glow text-lg" onClick={onStart}>
              Scopri la tua situazione
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Feature icon={Sparkles} text="8 domande, circa 90 secondi" />
            <Feature icon={ShieldCheck} text="Gratuito e riservato" />
            <Feature icon={TrendingDown} text="Scopri cosa ti sta costando l'attesa" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Feature({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <span className="flex items-center gap-2 text-sm text-gray-300">
      <Icon className="w-4 h-4 text-[var(--gold-400)]" />
      {text}
    </span>
  );
}
