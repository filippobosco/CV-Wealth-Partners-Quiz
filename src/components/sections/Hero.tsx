"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Shield, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[var(--navy-950)] via-[var(--navy-900)] to-[var(--navy-800)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent opacity-50" />

      <Container size="xl" className="relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content — no entrance animation on primary content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold-500)]/10 border border-[var(--gold-500)]/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--gold-500)] animate-pulse" />
              <span className="text-[var(--gold-400)] text-sm font-medium">
                Consulenza Finanziaria e Patrimoniale
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Check-up patrimoniale{" "}
              <span className="text-gradient">gratuito in 40–60 minuti</span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Scopri inefficienze fiscali e opportunità nascoste nel tuo patrimonio.
              Senza impegno, senza vendita di prodotti.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              CV Wealth Partners — consulenti abilitati MiFID II con 19 anni di
              esperienza in private banking e background da Guardia di Finanza.
              Il tuo interesse, prima di tutto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#prenota" className="inline-block">
                <Button size="lg" className="btn-glow text-lg">
                  Richiedi il tuo Check-up gratuito
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-[var(--gold-400)]" />
              <p className="text-sm text-gray-400">
                Consulenti abilitati all&apos;offerta fuori sede · MiFID II compliant
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Senza impegno – Massima riservatezza
            </p>
          </div>

          {/* Founders Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group scale-[0.8] origin-center"
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)] rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
            
            {/* Card container */}
            <div className="relative bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-950)] rounded-3xl overflow-hidden border-2 border-[var(--gold-400)]/30">
              {/* Foto */}
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/hero.webp"
                  alt="Antonio Chirieleison & Erik Vitali - Fondatori CV Wealth Partners"
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover"
                  style={{ objectPosition: "center 25%" }}
                  priority
                  fetchPriority="high"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--navy-950)]" />
              </div>
              
              {/* Info section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2 drop-shadow-lg">
                  Antonio Chirieleison & Erik Vitali
                </h3>
                <p className="text-[var(--gold-400)] text-center font-medium mb-6 drop-shadow-md">
                  Fondatori CV Wealth Partners
                </p>
                
                {/* Badges */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--navy-900)]/80 border border-[var(--gold-400)]/30 backdrop-blur-sm">
                    <Shield className="w-4 h-4 text-[var(--gold-400)]" />
                    <span className="text-xs font-semibold text-white">
                      Ex Ispettore GdF
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--navy-900)]/80 border border-[var(--gold-400)]/30 backdrop-blur-sm">
                    <TrendingUp className="w-4 h-4 text-[var(--gold-400)]" />
                    <span className="text-xs font-semibold text-white">
                      19 anni Private Banking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-[var(--gold-500)]/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-[var(--gold-500)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
