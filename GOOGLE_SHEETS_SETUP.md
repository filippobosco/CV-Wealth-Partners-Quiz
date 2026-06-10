# Configurazione Google Sheets Integration

Questa guida ti aiuterà a configurare l'integrazione con Google Sheets per salvare automaticamente i contatti del form.

## Passo 1: Configurare Google Apps Script

1. **Apri il tuo Google Sheet:**
   - Vai su: https://docs.google.com/spreadsheets/d/1hyDZvDdqlorbYhmnJauQxjI4Q-eZjKQWvXiV2EwbDSY/edit
   - Assicurati che il foglio si chiami "Landing" (come indicato nella riga 1)

2. **Apri Google Apps Script:**
   - Nel menu del foglio, clicca su **"Estensioni"** > **"Apps Script"**
   - Si aprirà una nuova scheda con l'editor di script

3. **Incolla lo script:**
   - Cancella tutto il codice esistente nell'editor
   - Apri il file `google-apps-script.js` nella root del progetto
   - Copia tutto il contenuto e incollalo nell'editor di Apps Script

4. **Salva lo script:**
   - Clicca su **"Salva progetto"** (icona floppy disk o Ctrl+S / Cmd+S)
   - Dai un nome al progetto, ad esempio "CV Wealth Partners Form Handler"

5. **Distribuisci come app web:**
   - Clicca su **"Distribuisci"** > **"Distribuisci come app web"**
   - Imposta:
     - **Esegui come:** "Me (il tuo indirizzo email)"
     - **Chi può accedere:** "Chiunque"
   - Clicca su **"Distribuisci"**
   - **IMPORTANTE:** Copia l'URL che viene generato (sarà qualcosa come: `https://script.google.com/macros/s/XXXXX/exec`)

## Passo 2: Configurare l'URL nello script

1. **Crea il file `.env.local`:**
   - Nella root del progetto, crea un file chiamato `.env.local`
   - Aggiungi questa riga:
     ```
     GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/TUO_SCRIPT_ID/exec
     ```
   - Sostituisci `TUO_SCRIPT_ID` con l'URL che hai copiato al passo precedente

2. **Per Vercel (produzione):**
   - Vai su Vercel Dashboard > Il tuo progetto > Settings > Environment Variables
   - Aggiungi una nuova variabile:
     - **Name:** `GOOGLE_SCRIPT_URL`
     - **Value:** L'URL completo del tuo script (quello copiato prima)
   - Clicca "Save"
   - Riavvia il deployment se necessario

## Passo 3: Testare l'integrazione

1. **Test locale:**
   - Riavvia il server di sviluppo (`npm run dev`)
   - Compila e invia il form
   - Controlla il Google Sheet per verificare che i dati siano stati salvati

2. **Verifica la struttura:**
   - I dati vengono salvati nelle colonne:
     - **A:** Nome e cognome
     - **B:** Mail
     - **C:** Telefono
     - **D:** Patrimonio Investibile
     - **E:** Situazione (messaggio)
     - **F:** Data di creazione (automatica)
     - **G:** NOTE (vuota)

## Risoluzione problemi

- **Errore "Foglio 'Landing' non trovato":**
  - Verifica che il foglio si chiami esattamente "Landing" (case-sensitive)

- **I dati non vengono salvati:**
  - Controlla che l'URL dello script sia corretto nel file `.env.local`
  - Verifica che lo script sia distribuito come "Chiunque" può accedere
  - Controlla i log del browser (Console) per eventuali errori

- **Errore CORS:**
  - Assicurati che lo script sia distribuito come app web con accesso "Chiunque"

## Note di sicurezza

- L'URL dello script è pubblico, ma solo chi conosce l'URL può inviare dati
- Considera di aggiungere una validazione aggiuntiva nello script Google Apps Script se necessario
- Non committare il file `.env.local` (è già nel `.gitignore`)
