/**
 * Google Apps Script per salvare i dati del form su Google Sheets
 * 
 * ISTRUZIONI:
 * 1. Apri il tuo Google Sheet: https://docs.google.com/spreadsheets/d/1hyDZvDdqlorbYhmnJauQxjI4Q-eZjKQWvXiV2EwbDSY/edit
 * 2. Vai su "Estensioni" > "Apps Script"
 * 3. Cancella tutto il codice esistente e incolla questo codice
 * 4. Salva il progetto (Ctrl+S o Cmd+S)
 * 5. Clicca su "Distribuisci" > "Distribuisci come app web"
 * 6. Imposta:
 *    - Esegui come: "Me"
 *    - Chi può accedere: "Chiunque"
 * 7. Clicca "Distribuisci" e copia l'URL generato
 * 8. Aggiungi l'URL come variabile d'ambiente GOOGLE_SCRIPT_URL nel tuo progetto Next.js
 *    (su Vercel: Settings > Environment Variables)
 */

// Funzione per gestire richieste GET (utile per test)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ 
      success: true, 
      message: "Google Apps Script è attivo e funzionante",
      method: "GET"
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Funzione principale per gestire richieste POST dal form
function doPost(e) {
  try {
    // Ottieni il foglio di lavoro "Landing"
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Landing");
    
    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Foglio 'Landing' non trovato" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Parse dei dati ricevuti
    const data = JSON.parse(e.postData.contents);
    
    // Prepara i dati per la riga
    const timestamp = new Date();
    const rowData = [
      data.name || "",                    // Colonna A: Nome e cognome
      data.email || "",                   // Colonna B: Mail
      data.phone || "",                   // Colonna C: Telefono
      data.patrimony || "",               // Colonna D: Patrimonio Investibile
      data.message || "",                 // Colonna E: Situazione
      timestamp,                          // Colonna F: Data di creazione
      ""                                  // Colonna G: NOTE
    ];

    // Aggiungi la riga al foglio (dopo l'header, quindi dalla riga 2)
    sheet.appendRow(rowData);

    // Restituisci una risposta di successo
    return ContentService.createTextOutput(
      JSON.stringify({ 
        success: true, 
        message: "Dati salvati con successo",
        timestamp: timestamp.toISOString()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Gestione errori
    return ContentService.createTextOutput(
      JSON.stringify({ 
        success: false, 
        error: error.toString() 
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Funzione di test (opzionale, per verificare che lo script funzioni)
function testScript() {
  const testData = {
    name: "Test Nome",
    email: "test@example.com",
    phone: "+39 123 456 7890",
    patrimony: "€250k - €500k",
    message: "Messaggio di test"
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
