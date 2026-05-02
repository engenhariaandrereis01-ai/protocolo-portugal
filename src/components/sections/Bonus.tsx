import { Gift } from "lucide-react";

export function Bonus() {
  return (
    <section className="py-20 px-4 bg-white border-t border-[#e4e9e5]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <span className="font-mono text-xs text-[#1B5E3B] uppercase tracking-widest">
            Bônus incluso
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#141A12] mb-10 leading-snug">
          Já vem dentro do Protocolo
        </h2>

        <div className="max-w-lg mx-auto rounded-2xl border-2 border-[#1B5E3B]/20 bg-[#F2FAF5] p-8">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#1B5E3B] flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-[#141A12] text-lg leading-snug">
                Glossário PT-BR vs PT-PT
              </div>
              <div className="font-mono text-xs text-[#1B5E3B] mt-0.5">25+ termos burocráticos</div>
            </div>
          </div>

          <p className="text-[#4B5047] leading-relaxed mb-6 text-[15px]">
            "Senhorio" não é "pai do amigo". "Renda" não é "salário". "Recibo
            verde" não é nota fiscal. Pequenas diferenças de vocabulário podem te
            fazer perder uma negociação ou assinar um contrato sem entender.
          </p>

          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              ["Renda", "Aluguel"],
              ["Senhorio", "Proprietário"],
              ["Arrendamento", "Locação"],
              ["Recibo verde", "Nota fiscal"],
              ["Finanças", "Receita Federal PT"],
              ["Sede social", "Sede da empresa"],
            ].map(([pt, br]) => (
              <div
                key={pt}
                className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 border border-[#e4e9e5]"
              >
                <span className="text-[#1B5E3B] font-medium text-xs w-[88px] flex-shrink-0">{pt}</span>
                <span className="text-[#4B5047] text-xs">→ {br}</span>
              </div>
            ))}
            <div className="col-span-2 text-center text-xs text-[#4B5047]/60 mt-1">
              + 19 outros termos no protocolo completo
            </div>
          </div>

          <div className="mt-5 border-t border-[#e4e9e5] pt-4 text-sm text-[#4B5047]">
            Incluído como módulo final — não é comprado separado.
          </div>
        </div>
      </div>
    </section>
  );
}
