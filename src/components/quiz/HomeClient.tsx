"use client";

import { useState } from "react";
import { Presentation } from "@/components/quiz/Presentation";
import { Credibility } from "@/components/quiz/Credibility";
import { QuizBox } from "@/components/quiz/QuizBox";
import { QuizOverlay } from "@/components/quiz/QuizOverlay";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { Footer } from "@/components/sections/Footer";

export function HomeClient() {
  const [open, setOpen] = useState(false);
  const start = () => setOpen(true);

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
