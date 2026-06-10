"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Mail, Phone } from "lucide-react";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Track conversion event for Meta Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 py-20 md:py-32 bg-gradient-to-br from-[var(--navy-950)] via-[var(--navy-900)] to-[var(--navy-800)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-[var(--success)]/10 flex items-center justify-center border-4 border-[var(--success)]/30"
            >
              <CheckCircle className="w-12 h-12 text-[var(--success)]" />
            </motion.div>

            {/* Main Message */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Richiesta inviata con successo!
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Grazie per aver prenotato il tuo Check-up Finanziario e Patrimoniale.
              <br />
              Ti contatteremo entro <span className="text-[var(--gold-400)] font-semibold">24 ore</span> per fissare l&apos;incontro.
            </p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-r from-[var(--gold-500)]/10 to-[var(--gold-400)]/10 rounded-2xl p-6 md:p-8 border border-[var(--gold-500)]/30 mb-12"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Hai domande urgenti?
              </h3>
              <div className="flex flex-col gap-4 justify-center items-center">
                <a
                  href="mailto:info@cvwealthpartners.it"
                  className="flex items-center gap-2 text-gray-300 hover:text-[var(--gold-400)] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@cvwealthpartners.it</span>
                </a>
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <a
                    href="tel:+393336791235"
                    className="flex items-center gap-2 text-gray-300 hover:text-[var(--gold-400)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+39 333 679 1235</span>
                  </a>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <a
                    href="tel:+393467385480"
                    className="flex items-center gap-2 text-gray-300 hover:text-[var(--gold-400)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+39 346 738 5480</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                className="btn-glow"
                onClick={() => router.push("/")}
              >
                Torna alla Home
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
