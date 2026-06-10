import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Check-up patrimoniale gratuito | CV Wealth Partners",
  icons: {
    icon: "/favicon-cerchio.png",
    shortcut: "/favicon-cerchio.png",
    apple: "/favicon-cerchio.png",
  },
  description:
    "Il tuo patrimonio ha una strategia, o solo dei prodotti? Scoprilo in 8 domande (90 secondi) e ricevi il tuo report personalizzato. Gratuito e riservato.",
  keywords: [
    "check-up patrimoniale",
    "quiz finanziario",
    "consulenza patrimoniale",
    "wealth management",
    "pianificazione finanziaria",
    "ottimizzazione fiscale",
  ],
  authors: [{ name: "CV Wealth Partners" }],
  openGraph: {
    title: "Il tuo patrimonio ha una strategia, o solo dei prodotti?",
    description:
      "8 domande, 90 secondi. Ricevi il tuo report personalizzato. Le domande che la tua banca non ti ha mai fatto.",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Il tuo patrimonio ha una strategia, o solo dei prodotti?",
    description:
      "8 domande, 90 secondi. Ricevi il tuo report personalizzato dal check-up patrimoniale CV Wealth Partners.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/hero.webp" />
      </head>
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '784408947305241');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=784408947305241&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
      </body>
    </html>
  );
}
