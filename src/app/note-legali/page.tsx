import { Container } from "@/components/ui/Container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Note Legali | CV Wealth Partners",
  description:
    "Note legali, informazioni sui titolari e disclaimer di CV Wealth Partners.",
};

export default function NoteLegaliPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-[var(--navy-950)] py-16 md:py-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-cormorant)]">
            Note Legali
          </h1>
          <p className="text-gray-400 mt-4">
            Ultimo aggiornamento: 30 marzo 2026
          </p>
        </Container>
      </div>

      <div className="py-12 md:py-16">
        <Container size="md">
          <div className="prose prose-lg max-w-none text-[var(--gray-700)]">
            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              1. Informazioni sui Titolari
            </h2>
            <p>
              Il presente sito web è di proprietà e gestito da:
            </p>

            <div className="bg-[var(--gray-50)] rounded-2xl p-6 my-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[var(--navy-950)] mb-2">
                  Antonio Chirieleison
                </h3>
                <ul className="list-none pl-0 space-y-1 text-sm">
                  <li>
                    <strong>Partita IVA:</strong> 13197700969
                  </li>
                  <li>
                    <strong>Iscrizione OCF:</strong> Delibera n. 2311 del
                    10/10/2023
                  </li>
                  <li>
                    <strong>Albo:</strong> Albo dei Consulenti Finanziari
                    abilitati all&apos;offerta fuori sede
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--navy-950)] mb-2">
                  Erik Vitali
                </h3>
                <ul className="list-none pl-0 space-y-1 text-sm">
                  <li>
                    <strong>Partita IVA:</strong> 14198920960
                  </li>
                  <li>
                    <strong>Iscrizione OCF:</strong> Iscrizione n. 2705 del
                    14/04/2025
                  </li>
                  <li>
                    <strong>Albo:</strong> Albo dei Consulenti Finanziari
                    abilitati all&apos;offerta fuori sede
                  </li>
                </ul>
              </div>
            </div>

            <p>
              Email:{" "}
              <a
                href="mailto:info@cvwealthpartners.it"
                className="text-[var(--navy-700)] font-semibold hover:underline"
              >
                info@cvwealthpartners.it
              </a>
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              2. Attività svolta e rapporto con la banca mandante
            </h2>
            <p>
              Antonio Chirieleison e Erik Vitali operano in qualità di{" "}
              <strong>
                Consulenti Finanziari abilitati all&apos;offerta fuori sede
              </strong>
              , ai sensi del D.Lgs. 58/1998 (Testo Unico della Finanza) e
              successive modificazioni.
            </p>
            <p>
              In tale veste, i Consulenti operano{" "}
              <strong>per conto di un intermediario autorizzato (banca mandante)</strong>{" "}
              e sono abilitati a promuovere e collocare servizi e strumenti
              finanziari al di fuori della sede dell&apos;intermediario stesso.
            </p>
            <p>
              L&apos;attività è svolta sotto la vigilanza dell&apos;
              <strong>
                OCF — Organismo di vigilanza e tenuta dell&apos;Albo unico dei
                Consulenti Finanziari
              </strong>{" "}
              e nel rispetto della normativa{" "}
              <strong>MiFID II</strong> (Direttiva 2014/65/UE).
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              3. Verifica iscrizione all&apos;Albo OCF
            </h2>
            <p>
              L&apos;iscrizione all&apos;Albo dei Consulenti Finanziari è
              verificabile sul sito ufficiale dell&apos;Organismo di vigilanza:
            </p>
            <p>
              <a
                href="https://www.organismocf.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--navy-700)] font-semibold hover:underline"
              >
                www.organismocf.it
              </a>
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              4. Disclaimer finanziario
            </h2>
            <p>
              Le informazioni contenute nel presente sito web hanno carattere
              puramente informativo e non costituiscono in alcun modo una
              sollecitazione all&apos;investimento, un&apos;offerta di vendita o
              un invito ad acquistare strumenti finanziari.
            </p>
            <p>
              Gli investimenti finanziari comportano rischi, inclusa la
              possibilità di perdita del capitale investito. I rendimenti passati
              non sono indicativi di quelli futuri. Ogni decisione di
              investimento è assunta dall&apos;utente in piena autonomia e sotto
              la propria responsabilità.
            </p>
            <p>
              Le strategie di investimento proposte da CV Wealth Partners sono
              sempre personalizzate e tengono conto del profilo di rischio, degli
              obiettivi e dell&apos;orizzonte temporale di ciascun cliente, in
              conformità alla normativa MiFID II.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              5. Proprietà intellettuale
            </h2>
            <p>
              Tutti i contenuti del presente sito web (testi, immagini,
              grafica, loghi, marchi) sono di proprietà dei Titolari o
              utilizzati su licenza e sono protetti dalle leggi italiane e
              internazionali in materia di proprietà intellettuale. È vietata la
              riproduzione, anche parziale, senza autorizzazione scritta.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              6. Limitazione di responsabilità
            </h2>
            <p>
              I Titolari si impegnano a mantenere le informazioni presenti sul
              sito il più possibile accurate e aggiornate, ma non garantiscono
              la completezza o l&apos;esattezza delle stesse. I Titolari non
              saranno responsabili per eventuali danni diretti o indiretti
              derivanti dall&apos;uso del sito o dall&apos;affidamento sulle
              informazioni in esso contenute.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              7. Legge applicabile e foro competente
            </h2>
            <p>
              Le presenti note legali sono regolate dalla legge italiana. Per
              qualsiasi controversia derivante dall&apos;utilizzo del presente
              sito sarà competente il Foro di Milano.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              8. Link utili
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--navy-700)] font-semibold hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="text-[var(--navy-700)] font-semibold hover:underline"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://www.organismocf.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--navy-700)] font-semibold hover:underline"
                >
                  OCF — Organismo dei Consulenti Finanziari
                </a>
              </li>
              <li>
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--navy-700)] font-semibold hover:underline"
                >
                  Garante per la protezione dei dati personali
                </a>
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t border-[var(--gray-200)]">
              <Link
                href="/"
                className="text-[var(--navy-700)] font-semibold hover:underline"
              >
                &larr; Torna alla Home
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
