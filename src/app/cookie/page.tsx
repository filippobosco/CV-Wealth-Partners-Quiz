import { Container } from "@/components/ui/Container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | CV Wealth Partners",
  description:
    "Informativa sull'utilizzo dei cookie sul sito di CV Wealth Partners.",
};

export default function CookiePage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-[var(--navy-950)] py-16 md:py-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-cormorant)]">
            Cookie Policy
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
              1. Cosa sono i cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati
              inviano al terminale dell&apos;utente (computer, tablet,
              smartphone) dove vengono memorizzati per poi essere ritrasmessi
              agli stessi siti alla visita successiva. I cookie permettono di
              migliorare la navigazione e fornire servizi personalizzati.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              2. Tipologie di cookie utilizzati
            </h2>

            <h3 className="text-xl font-semibold text-[var(--navy-900)] mt-6 mb-3">
              2.1 Cookie tecnici (necessari)
            </h3>
            <p>
              Sono cookie indispensabili per il corretto funzionamento del sito.
              Non richiedono il consenso dell&apos;utente.
            </p>
            <table className="w-full border-collapse border border-[var(--gray-200)] text-sm mt-4">
              <thead>
                <tr className="bg-[var(--gray-50)]">
                  <th className="border border-[var(--gray-200)] p-3 text-left font-semibold text-[var(--navy-950)]">
                    Cookie
                  </th>
                  <th className="border border-[var(--gray-200)] p-3 text-left font-semibold text-[var(--navy-950)]">
                    Finalità
                  </th>
                  <th className="border border-[var(--gray-200)] p-3 text-left font-semibold text-[var(--navy-950)]">
                    Durata
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[var(--gray-200)] p-3">
                    Cookie di sessione
                  </td>
                  <td className="border border-[var(--gray-200)] p-3">
                    Navigazione e funzionamento del sito
                  </td>
                  <td className="border border-[var(--gray-200)] p-3">
                    Sessione
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold text-[var(--navy-900)] mt-6 mb-3">
              2.2 Cookie di terze parti (profilazione/marketing)
            </h3>
            <p>
              Questi cookie sono installati da terze parti e richiedono il
              consenso dell&apos;utente.
            </p>
            <table className="w-full border-collapse border border-[var(--gray-200)] text-sm mt-4">
              <thead>
                <tr className="bg-[var(--gray-50)]">
                  <th className="border border-[var(--gray-200)] p-3 text-left font-semibold text-[var(--navy-950)]">
                    Servizio
                  </th>
                  <th className="border border-[var(--gray-200)] p-3 text-left font-semibold text-[var(--navy-950)]">
                    Fornitore
                  </th>
                  <th className="border border-[var(--gray-200)] p-3 text-left font-semibold text-[var(--navy-950)]">
                    Finalità
                  </th>
                  <th className="border border-[var(--gray-200)] p-3 text-left font-semibold text-[var(--navy-950)]">
                    Privacy Policy
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[var(--gray-200)] p-3">
                    Meta Pixel (Facebook)
                  </td>
                  <td className="border border-[var(--gray-200)] p-3">
                    Meta Platforms, Inc.
                  </td>
                  <td className="border border-[var(--gray-200)] p-3">
                    Tracciamento conversioni, remarketing e analisi del
                    comportamento degli utenti ai fini pubblicitari
                  </td>
                  <td className="border border-[var(--gray-200)] p-3">
                    <a
                      href="https://www.facebook.com/privacy/policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--navy-700)] font-semibold hover:underline"
                    >
                      Informativa Meta
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              3. Come gestire i cookie
            </h2>
            <p>
              L&apos;utente può gestire le preferenze sui cookie direttamente
              tramite le impostazioni del proprio browser. Di seguito i link alle
              guide dei principali browser:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--navy-700)] font-semibold hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--navy-700)] font-semibold hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--navy-700)] font-semibold hover:underline"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--navy-700)] font-semibold hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p className="mt-4">
              La disattivazione dei cookie di terze parti non pregiudica la
              navigazione sul sito, ma potrebbe limitare alcune funzionalità.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              4. Titolari del trattamento
            </h2>
            <p>
              I Titolari del trattamento sono Antonio Chirieleison (P.IVA
              13197700969) e Erik Vitali (P.IVA 14198920960). Per informazioni
              complete si rimanda alla{" "}
              <Link
                href="/privacy"
                className="text-[var(--navy-700)] font-semibold hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              5. Aggiornamenti
            </h2>
            <p>
              La presente Cookie Policy può essere aggiornata periodicamente. Si
              invita l&apos;utente a consultare questa pagina per eventuali
              modifiche.
            </p>

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
