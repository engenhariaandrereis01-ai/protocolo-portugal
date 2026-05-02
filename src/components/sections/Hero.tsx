import { CtaButton } from "@/components/ui/cta-button";
import { CheckCircle } from "lucide-react";

const CTA_URL = "https://pay.hotmart.com/placeholder";

export function Hero() {
  return (
    <section className="relative bg-[#FAFAF8] pt-16 pb-20 px-4 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F2FAF5] via-[#FAFAF8] to-[#FAFAF8] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#1B5E3B]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#1B5E3B]/20 bg-[#F2FAF5] text-[#1B5E3B] animate-fade-up">
          <span className="font-mono text-xs font-medium tracking-widest uppercase">
            Protocolo Portugal · Atualizado Maio/2026
          </span>
        </div>

        {/* H1 — editorial, impactful */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#141A12] leading-[1.05] tracking-tight mb-6 animate-fade-up animate-fade-up-delay-1">
          NIF, NISS, SNS,
          <br className="hidden sm:block" />
          {" "}banco e moradia.
          <br />
          <span className="text-[#1B5E3B]">Na ordem certa.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-[#4B5047] leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-up animate-fade-up-delay-2">
          O Protocolo Portugal cobre cada etapa na sequência exata em que você vai
          precisar dela — verificado em gov.pt, AIMA, Autoridade Tributária e
          Segurança Social. Sem depender de grupo de WhatsApp.
        </p>

        {/* Proof bullets */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-10 text-sm text-[#141A12] animate-fade-up animate-fade-up-delay-2">
          {[
            "12 módulos + checklist mestre dos 30 dias",
            "Atualizado 2024–2026 (AIMA, Lei 61/2025)",
            "Fontes oficiais — sem informação de grupo",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#1B5E3B] flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 animate-fade-up animate-fade-up-delay-3">
          <CtaButton href={CTA_URL} pulse>
            Quero meu Protocolo — R$ 47
          </CtaButton>
          <p className="text-sm text-[#4B5047]">
            Acesso imediato · Pix, cartão ou boleto · Garantia de 7 dias
          </p>
        </div>

        {/* PDF Mockup */}
        <div className="mt-14 animate-fade-up animate-fade-up-delay-3">
          <div className="mx-auto max-w-md rounded-2xl border border-[#1B5E3B]/15 bg-white shadow-2xl shadow-[#1B5E3B]/8 overflow-hidden">
            {/* Top bar */}
            <div className="bg-[#1B5E3B] px-5 py-3.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
              </div>
              <span className="font-mono text-xs text-white/60">protocolo-portugal.pdf</span>
            </div>
            {/* Content */}
            <div className="p-7 text-left">
              <div className="font-mono text-[10px] text-[#4B5047] mb-3 uppercase tracking-widest">
                BR Fora do Brasil
              </div>
              <div className="font-display text-2xl text-[#141A12] leading-snug mb-0.5">
                Protocolo Portugal:
              </div>
              <div className="font-display text-2xl text-[#1B5E3B] leading-snug mb-4">
                Os 30 Primeiros Dias
              </div>
              <div className="h-px bg-[#e4e9e5] mb-4" />
              <div className="space-y-2.5">
                {[
                  ["01", "O que mudou em 2024–2026"],
                  ["02", "NIF: como tirar antes de embarcar"],
                  ["03", "NISS: sequência correta e prazos"],
                  ["04", "SNS: número de utente e PB4"],
                  ["10", "Checklist mestre dos 30 dias ✓"],
                ].map(([num, titulo]) => (
                  <div key={num} className="flex items-center gap-3 text-sm">
                    <span className="font-mono text-[10px] text-[#1B5E3B] w-6 flex-shrink-0">{num}</span>
                    <span className="text-[#4B5047]">{titulo}</span>
                  </div>
                ))}
                <div className="text-xs text-[#4B5047]/50 pl-9">+ 7 módulos...</div>
              </div>
              <div className="mt-5 pt-4 border-t border-[#e4e9e5] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#1B5E3B]">
                  Maio/2026 · gov.pt · AIMA · AT · SS
                </span>
                <span className="font-mono text-[10px] text-[#4B5047]/50">v2026.05</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
