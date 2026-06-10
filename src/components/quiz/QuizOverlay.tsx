"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quiz } from "@/components/quiz/Quiz";

export function QuizOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Blocca lo scroll della pagina mentre il quiz è aperto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC per chiudere
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-br from-[var(--navy-950)] via-[var(--navy-900)] to-[var(--navy-800)]"
        >
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
          {/* Linee accento ciano */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent pointer-events-none" />

          <div className="relative min-h-full flex items-center justify-center px-4 py-10 sm:py-14">
            <Quiz onClose={onClose} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
