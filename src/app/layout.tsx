import type { Metadata } from "next";
import { Gloock, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
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
    url: "https://brforadobrasil.com/portugal",
    siteName: "BR Fora do Brasil",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protocolo Portugal: Os 30 Primeiros Dias — para brasileiros em 2026",
    description:
      "NIF, NISS, SNS, banco e moradia. Na ordem certa. Em 30 dias. Sem depender de grupo de WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://brforadobrasil.com/portugal",
  },
};

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
      </body>
    </html>
  );
}
