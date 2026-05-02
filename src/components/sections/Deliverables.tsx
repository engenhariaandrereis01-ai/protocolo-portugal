import { FileText } from "lucide-react";

const modulos = [
  { num: "01", titulo: "Introdução", desc: "O que mudou em 2024–2026 e por que importa" },
  { num: "02", titulo: "NIF", desc: "Como tirar antes de embarcar (e quando vale a pena)" },
  { num: "03", titulo: "NISS", desc: "Sequência correta e prazo real (4 a 6 semanas)" },
  { num: "04", titulo: "Número de Utente e SNS", desc: "Cadastro no centro de saúde + uso do PB4" },
  { num: "05", titulo: "Autorização de Residência CPLP", desc: "Via consular pós-MI + Lei 61/2025" },
  { num: "06", titulo: "Conta Bancária", desc: "Bancos que aceitam recém-chegados sem AR" },
  { num: "07", titulo: "Moradia e Arrendamento", desc: "Limites legais (caução máxima 4 rendas)" },
  { num: "08", titulo: "IRS", desc: "Escalões 2025, prazos e deduções (saúde, renda, educação)" },
  { num: "09", titulo: "Saída Fiscal do Brasil", desc: "Como evitar bitributação (CDT Brasil-Portugal)" },
  {
    num: "10",
    titulo: "Checklist Mestre dos 30 Dias",
    desc: "Antes de embarcar + Semana 1, 2, 3, 4",
    destaque: true,
  },
  { num: "11", titulo: "Erros Comuns e Como Evitar", desc: "8 erros documentados com solução" },
  { num: "12", titulo: "Glossário PT-BR vs PT-PT", desc: "25+ termos burocráticos traduzidos" },
];

export function Deliverables() {
  return (
    <section className="py-20 px-4 bg-[#F2FAF5]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <span className="font-mono text-xs text-[#1B5E3B] uppercase tracking-widest">
            O que você recebe
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#141A12] mb-4 leading-snug">
          12 módulos. Uma sequência.{" "}
          <span className="text-[#1B5E3B]">Zero decisão arbitrária.</span>
        </h2>
        <p className="text-[#4B5047] text-[17px] mb-10 leading-relaxed">
          Cada módulo segue a ordem real em que você vai precisar das
          informações — não a ordem teórica de um livro.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {modulos.map((mod) => (
            <div
              key={mod.num}
              className={`rounded-xl p-4 border flex gap-3.5 items-start transition-all duration-200 ${
                mod.destaque
                  ? "border-[#1B5E3B] bg-[#1B5E3B] text-white shadow-lg shadow-[#1B5E3B]/20"
                  : "border-[#e4e9e5] bg-white hover:border-[#1B5E3B]/40 hover:shadow-sm cursor-default"
              }`}
            >
              <span
                className={`font-mono text-sm font-medium flex-shrink-0 mt-0.5 ${
                  mod.destaque ? "text-white/60" : "text-[#1B5E3B]"
                }`}
              >
                {mod.num}
              </span>
              <div>
                <div
                  className={`font-medium text-sm mb-0.5 ${
                    mod.destaque ? "text-white" : "text-[#141A12]"
                  }`}
                >
                  {mod.titulo}
                </div>
                <div
                  className={`text-sm leading-snug ${
                    mod.destaque ? "text-white/75" : "text-[#4B5047]"
                  }`}
                >
                  {mod.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-[#1B5E3B]/20 bg-white px-6 py-4 flex items-center gap-3">
          <FileText className="w-5 h-5 text-[#1B5E3B] flex-shrink-0" />
          <div>
            <span className="text-[#141A12] font-medium">Formato A4 · leitura ou impressão</span>
            <span className="text-[#4B5047] text-sm ml-2">
              Funciona no celular, laptop ou impresso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
