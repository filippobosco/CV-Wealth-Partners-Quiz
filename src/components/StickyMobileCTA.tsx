"use client";

import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-[var(--gray-200)] shadow-lg">
      <a
        href="#prenota"
        className="block w-full text-center py-3.5 px-6 rounded-xl bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-400)] text-[var(--navy-950)] font-bold text-base shadow-md active:scale-95 transition-transform"
      >
        Richiedi il Check-up gratuito
      </a>
      <p className="text-center text-xs text-[var(--gray-500)] mt-1.5">
        Senza impegno · 40–60 minuti · MiFID II compliant
      </p>
    </div>
  );
}
