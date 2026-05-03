import type { Metadata } from "next";
import { Gloock, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import { ViewContentTracker } from "@/components/tracking/ViewContentTracker";
import "./globals.css";

const gloock = Gloock({
  weight: "400",
  variable: "--font-gloock",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Protocolo Portugal: Os 30 Primeiros Dias — para Brasileiros 2026 | BR Fora do Brasil",
  description:
    "A sequência exata de NIF, NISS, SNS, banco e moradia para brasileiros em Portugal. Verificado em fontes oficiais. Atualizado 2026. R$ 47.",
  keywords: [
    "NIF portugal brasileiros",
    "NISS portugal",
    "SNS portugal",
    "mudança para portugal",
    "burocracia portugal brasileiros",
    "protocolo portugal",
    "primeiros 30 dias portugal",
  ],
  authors: [{ name: "BR Fora do Brasil" }],
  openGraph: {
    title: "Protocolo Portugal: Os 30 Primeiros Dias — para brasileiros em 2026",
    description:
      "NIF, NISS, SNS, banco e moradia. Na ordem certa. Em 30 dias. Sem depender de grupo de WhatsApp.",
    url: "https://protocolo-portugal.netlify.app",
    siteName: "BR Fora do Brasil",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://protocolo-portugal.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Protocolo Portugal: Os 30 Primeiros Dias — guia para brasileiros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protocolo Portugal: Os 30 Primeiros Dias — para brasileiros em 2026",
    description:
      "NIF, NISS, SNS, banco e moradia. Na ordem certa. Em 30 dias. Sem depender de grupo de WhatsApp.",
    images: ["https://protocolo-portugal.netlify.app/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://protocolo-portugal.netlify.app" },
};

const PIXEL_ID = "1332664422130568";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${gloock.variable} ${instrumentSans.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#FAFAF8] text-[#141A12] font-sans">
        {children}
        <ViewContentTracker />

        {/* ── Meta Pixel ── */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Pixel fallback sem JS */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {/* ── Hotmart checkout widget ── */}
        <Script
          id="hotmart-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var s = document.createElement('script');
                s.src = 'https://static.hotmart.com/checkout/widget.min.js';
                document.head.appendChild(s);
                var l = document.createElement('link');
                l.rel = 'stylesheet';
                l.type = 'text/css';
                l.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
                document.head.appendChild(l);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
