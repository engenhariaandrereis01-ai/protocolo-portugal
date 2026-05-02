import { CtaButton } from "@/components/ui/cta-button";
import { Lock } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-4 bg-[#1B5E3B]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-[1.1] tracking-tight">
          R$ 47 agora.
          <br />
          <span className="text-white/50">
            Ou meses descobrindo no improviso.
          </span>
        </h2>
        <p className="text-white/65 text-xl mb-10">
          Acesso imediato. Garantia de 7 dias. Sem risco.
        </p>

        <CtaButton white>
          ACESSAR O PROTOCOLO AGORA
        </CtaButton>

        <div className="flex items-center justify-center gap-2 mt-5 text-white/35 text-sm">
          <Lock className="w-3.5 h-3.5 flex-shrink-0" />
          <span>
            Pagamento seguro · Pix, cartão ou boleto · Reembolso em até 7 dias sem perguntas
          </span>
        </div>
      </div>
    </section>
  );
}
