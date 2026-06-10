import { Container } from "@/components/ui/Container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CV Wealth Partners",
  description:
    "Informativa sulla privacy e trattamento dei dati personali di CV Wealth Partners.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-[var(--navy-950)] py-16 md:py-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-cormorant)]">
            Privacy Policy
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
              1. Titolare del trattamento
            </h2>
            <p>
              I Titolari del trattamento dei dati personali sono:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Antonio Chirieleison</strong> — P.IVA 13197700969 —
                Iscritto all&apos;Albo dei Consulenti Finanziari abilitati
                all&apos;offerta fuori sede, Delibera OCF n. 2311 del
                10/10/2023
              </li>
              <li>
                <strong>Erik Vitali</strong> — P.IVA 14198920960 — Iscritto
                all&apos;Albo dei Consulenti Finanziari abilitati
                all&apos;offerta fuori sede, Iscrizione OCF n. 2705 del
                14/04/2025
              </li>
            </ul>
            <p>
              Email di contatto:{" "}
              <a
                href="mailto:info@cvwealthpartners.it"
                className="text-[var(--navy-700)] font-semibold hover:underline"
              >
                info@cvwealthpartners.it
              </a>
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              2. Dati raccolti
            </h2>
            <p>
              Attraverso il presente sito web raccogliamo le seguenti categorie
              di dati personali:
            </p>
            <h3 className="text-xl font-semibold text-[var(--navy-900)] mt-6 mb-3">
              2.1 Dati forniti volontariamente dall&apos;utente
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>
                Fascia patrimoniale indicativa (dato aggregato, non puntuale)
              </li>
              <li>
                Eventuali informazioni aggiuntive inserite nel campo messaggio
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-[var(--navy-900)] mt-6 mb-3">
              2.2 Dati raccolti automaticamente
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Dati di navigazione (indirizzo IP, tipo di browser, sistema
                operativo, pagine visitate, tempi di permanenza)
              </li>
              <li>
                Cookie tecnici e di terze parti (vedi{" "}
                <Link
                  href="/cookie"
                  className="text-[var(--navy-700)] font-semibold hover:underline"
                >
                  Cookie Policy
                </Link>
                )
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              3. Finalità e base giuridica del trattamento
            </h2>
            <table className="w-full border-collapse border border-[var(--gray-200)] text-sm mt-4">
              <thead>
                <tr className="bg-[var(--gray-50)]">
                  <th className="border border-[var(--gray-200)] p-3 text-left font-semibold text-[var(--navy-950)]">
                    Finalità
                  </th>
                  <th className="border border-[var(--gray-200)] p-3 text-left font-semibold text-[var(--navy-950)]">
                    Base giuridica
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[var(--gray-200)] p-3">
                    Rispondere alle richieste di contatto e fissare appuntamenti
                  </td>
                  <td className="border border-[var(--gray-200)] p-3">
                    Consenso dell&apos;interessato (Art. 6, par. 1, lett. a
                    GDPR)
                  </td>
                </tr>
                <tr>
                  <td className="border border-[var(--gray-200)] p-3">
                    Esecuzione di misure precontrattuali
                  </td>
                  <td className="border border-[var(--gray-200)] p-3">
                    Esecuzione di un contratto o misure precontrattuali (Art. 6,
                    par. 1, lett. b GDPR)
                  </td>
                </tr>
                <tr>
                  <td className="border border-[var(--gray-200)] p-3">
                    Adempimento di obblighi di legge (normativa antiriciclaggio,
                    fiscale, OCF)
                  </td>
                  <td className="border border-[var(--gray-200)] p-3">
                    Obbligo legale (Art. 6, par. 1, lett. c GDPR)
                  </td>
                </tr>
                <tr>
                  <td className="border border-[var(--gray-200)] p-3">
                    Analisi statistiche anonime e miglioramento del servizio
                  </td>
                  <td className="border border-[var(--gray-200)] p-3">
                    Legittimo interesse (Art. 6, par. 1, lett. f GDPR)
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              4. Modalità del trattamento
            </h2>
            <p>
              I dati personali sono trattati con strumenti automatizzati e non
              automatizzati, con logiche strettamente correlate alle finalità
              indicate e, comunque, in modo da garantire la sicurezza e la
              riservatezza dei dati stessi, nel rispetto delle misure
              organizzative, fisiche e logiche previste dalle disposizioni
              vigenti.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              5. Comunicazione e diffusione dei dati
            </h2>
            <p>I dati personali potranno essere comunicati a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                La banca mandante presso cui i Titolari operano come Consulenti
                Finanziari abilitati all&apos;offerta fuori sede, per
                l&apos;esecuzione dei servizi di consulenza e investimento
              </li>
              <li>
                Soggetti che forniscono servizi tecnici necessari al
                funzionamento del sito (hosting, email, analytics)
              </li>
              <li>
                Autorità competenti in adempimento di obblighi di legge
              </li>
            </ul>
            <p>I dati non saranno in alcun caso diffusi a terzi non autorizzati.</p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              6. Trasferimento dati extra-UE
            </h2>
            <p>
              Alcuni servizi di terze parti utilizzati (es. Meta/Facebook Pixel,
              Google) potrebbero comportare il trasferimento di dati verso paesi
              extra-UE. In tal caso, il trasferimento avviene nel rispetto delle
              garanzie previste dal GDPR (decisioni di adeguatezza, clausole
              contrattuali standard).
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              7. Conservazione dei dati
            </h2>
            <p>
              I dati personali saranno conservati per il tempo strettamente
              necessario al raggiungimento delle finalità per cui sono stati
              raccolti e, in ogni caso, nel rispetto dei termini di prescrizione
              previsti dalla legge. I dati raccolti tramite il modulo di contatto
              saranno conservati per un periodo massimo di 24 mesi dalla
              raccolta, salvo che il rapporto contrattuale non si concretizzi.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              8. Diritti dell&apos;interessato
            </h2>
            <p>
              Ai sensi degli articoli 15-22 del Regolamento UE 2016/679 (GDPR),
              l&apos;interessato ha il diritto di:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Accesso</strong>: ottenere conferma dell&apos;esistenza
                di un trattamento e accedere ai propri dati
              </li>
              <li>
                <strong>Rettifica</strong>: ottenere la correzione di dati
                inesatti o l&apos;integrazione di dati incompleti
              </li>
              <li>
                <strong>Cancellazione</strong>: ottenere la cancellazione dei
                propri dati nei casi previsti dal GDPR
              </li>
              <li>
                <strong>Limitazione</strong>: ottenere la limitazione del
                trattamento nei casi previsti dal GDPR
              </li>
              <li>
                <strong>Portabilità</strong>: ricevere i propri dati in formato
                strutturato e di uso comune
              </li>
              <li>
                <strong>Opposizione</strong>: opporsi al trattamento basato su
                legittimo interesse
              </li>
              <li>
                <strong>Revoca del consenso</strong>: revocare il consenso
                prestato in qualsiasi momento, senza pregiudicare la liceità del
                trattamento basato sul consenso prestato prima della revoca
              </li>
            </ul>
            <p className="mt-4">
              Per esercitare i propri diritti, l&apos;interessato può inviare
              una richiesta a{" "}
              <a
                href="mailto:info@cvwealthpartners.it"
                className="text-[var(--navy-700)] font-semibold hover:underline"
              >
                info@cvwealthpartners.it
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              9. Reclamo all&apos;Autorità Garante
            </h2>
            <p>
              L&apos;interessato ha il diritto di proporre reclamo
              all&apos;Autorità Garante per la protezione dei dati personali
              (Garante Privacy), Piazza Venezia 11 — 00187 Roma,{" "}
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--navy-700)] font-semibold hover:underline"
              >
                www.garanteprivacy.it
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy-950)] mt-8 mb-4">
              10. Modifiche alla presente informativa
            </h2>
            <p>
              I Titolari si riservano il diritto di modificare o aggiornare la
              presente informativa. Eventuali modifiche saranno pubblicate su
              questa pagina con indicazione della data di ultimo aggiornamento.
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
