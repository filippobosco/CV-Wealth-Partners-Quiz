// Accesso protetto da password: il sito e visibile solo a chi conosce la
// parola d'ordine. Chi non la sa vede una schermata di cortesia con il campo
// per inserirla. Per rimuovere del tutto la protezione: eliminare questo file
// e fare push.
import { NextResponse, type NextRequest } from "next/server";

const PASSWORD = "Meraviglia2026!";
const COOKIE_NAME = "site_access";
// valore del cookie di sblocco (non e la password in chiaro)
const COOKIE_VALUE = "unlocked-cvwp-2026";

function lockScreen(error = false) {
  const html = `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <title>Sito non disponibile</title>
  <style>
    *{box-sizing:border-box}
    body{font-family:system-ui,-apple-system,sans-serif;margin:0;min-height:100vh;
      display:flex;align-items:center;justify-content:center;
      background:#004240;color:#fff;padding:24px}
    .box{width:100%;max-width:380px;text-align:center}
    h1{font-size:20px;font-weight:600;margin:0 0 8px}
    p{color:#a1fff9;opacity:.8;font-size:15px;margin:0 0 28px;line-height:1.5}
    form{display:flex;flex-direction:column;gap:12px}
    input{width:100%;padding:14px 16px;border-radius:12px;border:1px solid rgba(161,255,249,.25);
      background:rgba(255,255,255,.05);color:#fff;font-size:16px;outline:none}
    input:focus{border-color:#a1fff9}
    button{width:100%;padding:14px 16px;border-radius:12px;border:none;cursor:pointer;
      background:linear-gradient(135deg,#a1fff9,#4dfff0);color:#004240;font-size:16px;font-weight:700}
    .err{color:#ffb4a2;font-size:14px;margin-top:4px;${error ? "" : "display:none"}}
  </style>
</head>
<body>
  <div class="box">
    <h1>Sito temporaneamente non disponibile</h1>
    <p>Accesso riservato. Inserisci la password per continuare.</p>
    <form method="POST">
      <input type="password" name="password" placeholder="Password" autofocus autocomplete="off" />
      <button type="submit">Entra</button>
      <div class="err">Password non corretta.</div>
    </form>
  </div>
</body>
</html>`;
  return new NextResponse(html, {
    status: error ? 401 : 503,
    headers: { "Content-Type": "text/html; charset=utf-8", "Retry-After": "3600" },
  });
}

export async function proxy(request: NextRequest) {
  // gia sbloccato? lascia passare
  if (request.cookies.get(COOKIE_NAME)?.value === COOKIE_VALUE) {
    return NextResponse.next();
  }

  // tentativo di sblocco via form (POST)
  if (request.method === "POST") {
    const form = await request.formData();
    const pw = String(form.get("password") ?? "");
    if (pw === PASSWORD) {
      const res = NextResponse.redirect(new URL(request.nextUrl.pathname, request.url), 303);
      res.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 giorni
      });
      return res;
    }
    return lockScreen(true);
  }

  // non sbloccato: mostra la schermata con il form
  return lockScreen(false);
}

export const config = {
  matcher: "/:path*",
};
