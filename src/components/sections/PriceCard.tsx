import { CtaButton } from "@/components/ui/cta-button";
import { Check, Clock } from "lucide-react";

const CTA_URL = "https://pay.hotmart.com/placeholder";

const itens = [
  "12 módulos na sequência exata dos 30 dias",
  "Checklist mestre imprimível",
  "Glossário PT-BR vs PT-PT",
  "Atualizações gratuitas por 12 meses",
  "Acesso imediato após pagamento",
];

export function PriceCard() {
  return (
    <section className="py-20 px-4 bg-[#F2FAF5]" id="comprar">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <span className="font-mono text-xs text-[#1B5E3B] uppercase tracking-widest">
            Oferta
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#141A12] mb-4 leading-snug">
          Quanto custa não saber?
        </h2>
        <p className="text-[#4B5047] text-[17px] mb-6 max-w-2xl leading-relaxed">
          Uma consultoria de 1 hora com advogado de imigração português custa entre
          €100 e €200. Um despachante para tirar NIF cobra €89 a €150. Pagar 12
          meses de renda adiantada por não conhecer a lei pode custar mais de R$ 30.000.
          <br />
          <span className="font-medium text-[#141A12]">
            O Protocolo Portugal custa menos do que uma pizza dividida com amigos.
          </span>
        </p>

        {/* Urgency badge */}
        <div className="flex items-center gap-2 mb-8 px-4 py-2.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium w-fit">
          <Clock className="w-4 h-4 flex-shrink-0" />
          Preço de lançamento · Sobe para R$ 97 em breve
        </div>

        {/* Card de oferta */}
        <div className="max-w-md mx-auto rounded-2xl border-2 border-[#1B5E3B] bg-white shadow-2xl shadow-[#1B5E3B]/12 overflow-hidden">
          <div className="bg-[#1B5E3B] px-6 py-4 text-center">
            <div className="font-mono text-xs text-white/60 uppercase tracking-widest">
              Protocolo Portugal: Os 30 Primeiros Dias
            </div>
          </div>

          <div className="px-8 py-8">
            <div className="text-center mb-7">
              <div className="font-mono text-sm text-[#4B5047] line-through mb-1">
                De R$ 97
              </div>
              <div className="font-display text-6xl text-[#1B5E3B] leading-none mb-1">
                R$ 47
              </div>
              <div className="font-mono text-xs text-[#4B5047]">à vista</div>
            </div>

            <ul className="space-y-3 mb-8">
              {itens.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#141A12]">
                  <div className="w-5 h-5 rounded-full bg-[#F2FAF5] border border-[#1B5E3B]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#1B5E3B]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <CtaButton href={CTA_URL} className="w-full justify-center text-base sm:text-base py-4 sm:py-4">
              QUERO MEU PROTOCOLO — R$ 47
            </CtaButton>

            <p className="text-center text-xs text-[#4B5047] mt-3">
              Pagamento via Pix, cartão de crédito ou boleto
              <br />
              Acesso liberado em até 5 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
