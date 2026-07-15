// Sito temporaneamente offline: risponde 503 su ogni percorso e dominio.
// Per riattivare il sito: eliminare questo file e fare push.
import { NextResponse, type NextRequest } from "next/server";

export function proxy(_request: NextRequest) {
  const html = `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <title>Sito non disponibile</title>
</head>
<body style="font-family:system-ui,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;background:#004240;color:#fff">
  <p>Sito temporaneamente non disponibile.</p>
</body>
</html>`;

  return new NextResponse(html, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
    },
  });
}

export const config = {
  matcher: "/:path*",
};
