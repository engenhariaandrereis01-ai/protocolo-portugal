import { Check, X } from "lucide-react";

const para = [
  "Está planejando mudar para Portugal nos próximos 6 meses",
  "Já chegou em Portugal há até 90 dias e ainda está se organizando",
  "Quer um documento de referência para consultar conforme as etapas avançam",
  "Está cansado de informação contraditória e quer fontes verificadas",
  "Vai resolver os documentos por conta própria (sem despachante caro)",
];

const nao = [
  "Você precisa de orientação jurídica personalizada (procure um advogado)",
  "Espera um curso em vídeo (o Protocolo Portugal é um documento de leitura)",
  "Procura garantia de visto ou nacionalidade (não existe — fuja de quem promete)",
  "Já mora em Portugal há mais de 1 ano com tudo regularizado",
];

export function ForWhom() {
  return (
    <section className="py-20 px-4 bg-white border-t border-[#e4e9e5]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <span className="font-mono text-xs text-[#1B5E3B] uppercase tracking-widest">
            Para quem é
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#141A12] mb-10 leading-snug">
          O Protocolo Portugal é pra você se…
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* É para você */}
          <div className="rounded-xl border border-[#1B5E3B]/25 bg-[#F2FAF5] p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#1B5E3B] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-medium text-[#1B5E3B] text-sm uppercase tracking-wide">
                É para você se:
              </span>
            </div>
            <ul className="space-y-3">
              {para.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#141A12] leading-snug">
                  <Check className="w-4 h-4 text-[#1B5E3B] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Não é para você */}
          <div className="rounded-xl border border-[#e4e9e5] bg-white p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#e4e9e5] flex items-center justify-center flex-shrink-0">
                <X className="w-3.5 h-3.5 text-[#4B5047]" />
              </div>
              <span className="font-medium text-[#4B5047] text-sm uppercase tracking-wide">
                Não é para você se:
              </span>
            </div>
            <ul className="space-y-3">
              {nao.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#4B5047] leading-snug">
                  <X className="w-4 h-4 text-[#4B5047]/50 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
