"use client";

import { useEffect, useState } from "react";
import { Presentation } from "@/components/quiz/Presentation";
import { Credibility } from "@/components/quiz/Credibility";
import { QuizBox } from "@/components/quiz/QuizBox";
import { QuizOverlay } from "@/components/quiz/QuizOverlay";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { Footer } from "@/components/sections/Footer";

export function HomeClient() {
  const [open, setOpen] = useState(false);
  const start = () => {
    setOpen(true);
    // evento custom: quiz aperto (per misurare l'anello landing → quiz)
    if (typeof window !== "undefined" && (window as { fbq?: (...a: unknown[]) => void }).fbq) {
      (window as { fbq?: (...a: unknown[]) => void }).fbq!("trackCustom", "QuizStart");
    }
  };

  // Cattura UTM dai query param al primo caricamento e li salva in sessione,
  // così sopravvivono fino al submit del quiz.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const utm: Record<string, string> = {};
      ["source", "medium", "campaign", "term", "content"].forEach((k) => {
        const v = params.get(`utm_${k}`);
        if (v) utm[k] = v;
      });
      if (Object.keys(utm).length > 0) {
        sessionStorage.setItem("quiz_utm", JSON.stringify(utm));
      }
    } catch {
      // sessionStorage non disponibile: ignora
    }
  }, []);

  return (
    <main>
      <QuizHeader />
      <Presentation onStart={start} />
      <Credibility />
      <QuizBox onStart={start} />
      <Footer />

      <QuizOverlay open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
