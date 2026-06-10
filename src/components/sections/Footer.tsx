"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, Shield, Scale } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy-950)] text-white">
      {/* Main Footer */}
      <div className="py-16 md:py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/logo bianco.png"
                  alt="CV Wealth Partners"
                  width={500}
                  height={135}
                  className="h-28 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Consulenza finanziaria e patrimoniale con un occhio di riguardo
                alla pianificazione fiscale e successoria.
              </p>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contatti</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@cvwealthpartners.it"
                    className="flex items-center gap-3 text-gray-400 hover:text-[var(--gold-400)] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@cvwealthpartners.it</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+393336791235"
                    className="flex items-center gap-3 text-gray-400 hover:text-[var(--gold-400)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+39 333 679 1235</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+393467385480"
                    className="flex items-center gap-3 text-gray-400 hover:text-[var(--gold-400)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+39 346 738 5480</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Informazioni legali</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--gold-400)]" />
                  <div className="text-sm">
                    <p className="font-medium text-gray-300">Antonio Chirieleison</p>
                    <p>P.IVA: 13197700969</p>
                    <p>Delibera OCF n. 2311 del 10/10/2023</p>
                    <p>Albo dei Consulenti Finanziari abilitati all&apos;offerta fuori sede</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--gold-400)]" />
                  <div className="text-sm">
                    <p className="font-medium text-gray-300">Erik Vitali</p>
                    <p>P.IVA: 14198920960</p>
                    <p>Iscrizione OCF n. 2705 del 14/04/2025</p>
                    <p>Albo dei Consulenti Finanziari abilitati all&apos;offerta fuori sede</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Scale className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--gold-400)]" />
                  <span className="text-sm">Consulenti Finanziari abilitati all&apos;offerta fuori sede - Normativa MiFID II compliant</span>
                </li>
              </ul>
            </div>

            {/* Social & Legal */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Seguici</h4>
              <div className="flex gap-3 mb-6">
                <a
                  href="https://www.instagram.com/cvwealthpartners/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[var(--navy-800)] flex items-center justify-center hover:bg-[var(--gold-500)] transition-colors group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61587241287179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[var(--navy-800)] flex items-center justify-center hover:bg-[var(--gold-500)] transition-colors group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

              <h4 className="font-semibold text-lg mb-4">Legale</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-[var(--gold-400)] transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/cookie"
                    className="text-gray-400 hover:text-[var(--gold-400)] transition-colors text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/note-legali"
                    className="text-gray-400 hover:text-[var(--gold-400)] transition-colors text-sm"
                  >
                    Note Legali
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--navy-800)]">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} CV Wealth Partners. Antonio Chirieleison P.IVA 13197700969, Erik Vitali P.IVA 14198920960. Tutti i
              diritti riservati.
            </p>
          </div>
        </Container>
      </div>

      {/* Disclaimer */}
      <div className="bg-[var(--navy-900)]">
        <Container>
          <div className="py-4">
            <p className="text-gray-500 text-xs text-center leading-relaxed">
              Disclaimer: Gli investimenti finanziari comportano rischi. I
              rendimenti passati non sono indicativi di quelli futuri. Ogni
              strategia viene costruita su misura considerando profilo di
              rischio, obiettivi e orizzonte temporale del cliente.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
