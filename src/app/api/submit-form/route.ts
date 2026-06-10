import { NextRequest, NextResponse } from "next/server";

// URL del tuo Google Apps Script (lo inserirai dopo aver creato lo script)
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validazione base
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    // Se non hai ancora configurato lo script, salta l'invio a Google Sheets
    if (!GOOGLE_SCRIPT_URL) {
      console.log("Form data (Google Script URL not configured):", body);
      return NextResponse.json({ success: true, message: "Dati ricevuti" });
    }

    // Invia i dati a Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone,
        patrimony: body.patrimony,
        message: body.message || "",
      }),
    });

    if (!response.ok) {
      throw new Error("Errore nell'invio a Google Sheets");
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: "Dati inviati con successo",
      data: result,
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Errore nell'invio del form" },
      { status: 500 }
    );
  }
}
