"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#metodo", label: "Il Metodo" },
  { href: "#risultati", label: "Risultati" },
  { href: "#faq", label: "FAQ" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Container size="xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center pt-2">
              <img
                src={isScrolled ? "/logo verde.png" : "/logo bianco.png"}
                alt="CV Wealth Partners"
                className="h-12 md:h-16 w-auto"
                loading="eager"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? "text-[var(--gray-600)] hover:text-[var(--navy-950)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 md:gap-4">
              <a href="#prenota">
                <Button size="sm" className="flex px-2 py-1.5 text-xs whitespace-nowrap">
                  Richiedi Check-up
                </Button>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg ${
                  isScrolled
                    ? "text-[var(--navy-950)] hover:bg-[var(--gray-100)]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 md:top-20 z-40 lg:hidden"
          >
            <div className="bg-white shadow-xl border-t border-[var(--gray-200)]">
              <Container>
                <div className="py-6 space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 font-medium text-[var(--navy-950)] hover:text-[var(--gold-600)] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-[var(--gray-200)]">
                    <a
                      href="#prenota"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button size="sm" className="w-full text-sm">
                        Richiedi il tuo Check-up gratuito
                      </Button>
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
