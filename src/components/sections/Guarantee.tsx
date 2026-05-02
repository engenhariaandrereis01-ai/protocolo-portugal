import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-16 px-4 bg-white border-t border-[#e4e9e5]">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-[#e4e9e5] bg-[#FAFAF8] px-8 py-10 flex flex-col sm:flex-row items-center gap-8">
          {/* Selo */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-full border-4 border-[#1B5E3B] bg-white flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-10 h-10 text-[#1B5E3B]" />
            </div>
            <div className="text-center">
              <div className="font-mono text-xs font-medium text-[#1B5E3B] uppercase tracking-wider">
                7 Dias
              </div>
              <div className="font-mono text-xs text-[#4B5047] uppercase tracking-wider">
                100% Devolução
              </div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <h2 className="font-display text-2xl text-[#141A12] mb-3 leading-snug">
              Lê, testa, usa. Se não valer o que pagou, devolvo sem drama.
            </h2>
            <p className="text-[#4B5047] leading-relaxed text-[15px]">
              Você acessa, lê o quanto quiser, segue o protocolo. Se em 7 dias
              achar que o conteúdo não vale o que pagou, manda um e-mail para{" "}
              <a
                href="mailto:suporte@brforadobrasil.com"
                className="text-[#1B5E3B] underline underline-offset-2 hover:text-[#2D7D52]"
              >
                suporte@brforadobrasil.com
              </a>{" "}
              com a frase "quero meu dinheiro de volta" — e o reembolso é
              processado sem perguntas, sem formulário, sem ligação de retenção.
            </p>
            <p className="text-[#141A12] font-medium mt-3 text-[15px]">
              O risco é todo nosso. O seu único compromisso é tentar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
