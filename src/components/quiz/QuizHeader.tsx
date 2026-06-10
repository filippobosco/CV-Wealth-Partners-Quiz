"use client";

import { Container } from "@/components/ui/Container";

export function QuizHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-6 md:pt-8">
      <Container size="xl">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo bianco.png"
            alt="CV Wealth Partners"
            className="h-12 md:h-16 w-auto"
            loading="eager"
          />
        </div>
      </Container>
    </header>
  );
}
