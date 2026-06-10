"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Inserisci il tuo nome"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  phone: z.string().min(6, "Inserisci un numero di telefono valido"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Devi accettare la privacy policy",
  }),
});

const bullets = [
  "Analisi preliminare gratuita",
  "Zero impegno, zero vendita di prodotti",
  "Risposta entro 24 ore",
];

export function MidCTA() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          patrimony: "",
          message: "",
        }),
      });

      if (!response.ok) throw new Error("Errore nell'invio del form");

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Si è verificato un errore. Riprova più tardi.");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--navy-950)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Testo */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Scopri cosa sta frenando il tuo patrimonio
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              In 40 minuti gratuiti analizziamo la tua situazione e identifichiamo
              le inefficienze che nessuno ti ha mai segnalato.
            </p>
            <ul className="space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--gold-500)]/20 border border-[var(--gold-500)]/40 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[var(--gold-400)]" />
                  </div>
                  <span className="text-gray-200 font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[var(--navy-950)] mb-6">
                Richiedi il Check-up gratuito
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="mid-name" className="block text-sm font-medium text-[var(--navy-800)] mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="mid-name"
                    placeholder="Il tuo nome completo"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all text-[var(--navy-950)] bg-white"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="mid-email" className="block text-sm font-medium text-[var(--navy-800)] mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="mid-email"
                    placeholder="la.tua@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all text-[var(--navy-950)] bg-white"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="mid-phone" className="block text-sm font-medium text-[var(--navy-800)] mb-2">
                    Telefono *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="mid-phone"
                    placeholder="+39 xxx xxx xxxx"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all text-[var(--navy-950)] bg-white"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    {...register("privacy")}
                    type="checkbox"
                    id="mid-privacy"
                    className="mt-1 w-5 h-5 rounded border-[var(--gray-300)] text-[var(--gold-500)] focus:ring-[var(--gold-500)]"
                  />
                  <label htmlFor="mid-privacy" className="text-sm text-[var(--gray-600)]">
                    Accetto la{" "}
                    <a href="/privacy" className="text-[var(--navy-700)] font-semibold hover:underline">
                      Privacy Policy
                    </a>{" "}
                    e acconsento al trattamento dei miei dati. *
                  </label>
                </div>
                {errors.privacy && (
                  <p className="text-sm text-[var(--error)] flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.privacy.message}
                  </p>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Invio in corso..." : "Richiedi il Check-up gratuito"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
