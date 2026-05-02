const paginas = [
  {
    titulo: "Capa",
    conteudo: (
      <div className="h-full flex flex-col justify-between p-4">
        <div>
          <div className="font-mono text-[9px] text-[#4B5047] uppercase tracking-widest mb-2.5">
            BR Fora do Brasil
          </div>
          <div className="font-display text-base text-[#141A12] leading-tight">
            Protocolo
          </div>
          <div className="font-display text-base text-[#141A12] leading-tight">
            Portugal:
          </div>
          <div className="font-display text-sm text-[#1B5E3B] leading-tight mb-3">
            Os 30 Primeiros Dias
          </div>
          <div className="h-px bg-[#1B5E3B]/20 my-2.5" />
          <div className="text-[9px] text-[#4B5047] space-y-0.5">
            <div>NIF · NISS · SNS</div>
            <div>Banco · Moradia</div>
          </div>
        </div>
        <div className="font-mono text-[8px] text-[#4B5047]/60">
          Maio/2026
        </div>
      </div>
    ),
  },
  {
    titulo: "Índice",
    conteudo: (
      <div className="p-4">
        <div className="font-display text-xs text-[#141A12] mb-2.5">Índice</div>
        <div className="space-y-1">
          {[
            ["01", "Introdução"],
            ["02", "NIF"],
            ["03", "NISS"],
            ["04", "SNS"],
            ["05", "CPLP"],
            ["06", "Banco"],
            ["07", "Moradia"],
            ["08", "IRS"],
            ["09", "Saída Fiscal"],
            ["10", "Checklist ✓"],
          ].map(([n, t]) => (
            <div key={n} className="flex items-center justify-between text-[9px]">
              <div className="flex gap-1.5">
                <span className="font-mono text-[#1B5E3B] w-4">{n}</span>
                <span className="text-[#141A12]">{t}</span>
              </div>
              <span className="font-mono text-[#4B5047]/50">
                {(parseInt(n) * 7 + 4).toString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    titulo: "Cap. 7 — Moradia",
    conteudo: (
      <div className="p-4">
        <div className="font-mono text-[9px] text-[#1B5E3B] uppercase tracking-widest mb-1.5">
          Módulo 07
        </div>
        <div className="font-display text-xs text-[#141A12] mb-2.5">
          Moradia e Arrendamento
        </div>
        <div className="rounded border border-[#1B5E3B]/20 bg-[#F2FAF5] p-2 mb-2.5">
          <div className="text-[8px] font-mono text-[#1B5E3B] mb-1.5 uppercase">
            Limites legais
          </div>
          {[
            ["Caução máxima", "2 rendas"],
            ["Adiantamento máx.", "2 rendas"],
            ["Total inicial máx.", "4 rendas"],
            ["Duração mín.", "1 ano"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between text-[9px] mb-0.5">
              <span className="text-[#4B5047]">{k}</span>
              <span className="font-medium text-[#141A12]">{v}</span>
            </div>
          ))}
        </div>
        <div className="border-l-2 border-red-400 pl-2 text-[9px] text-[#4B5047]">
          ⚠ Mais de 4 rendas = ilegal. Denúncia via IHRU.
        </div>
      </div>
    ),
  },
  {
    titulo: "Checklist 30 dias",
    conteudo: (
      <div className="p-4">
        <div className="font-mono text-[9px] text-[#1B5E3B] uppercase tracking-widest mb-1.5">
          Módulo 10
        </div>
        <div className="font-display text-xs text-[#141A12] mb-2.5">
          Checklist Mestre
        </div>
        <div className="space-y-2">
          {[
            { fase: "Antes de embarcar", itens: ["NIF remoto ☐", "PB4 no INSS ☐", "Docs apostilados ☐"] },
            { fase: "Semana 1", itens: ["Registro consular ☐", "Conta bancária ☐", "Centro de saúde ☐"] },
            { fase: "Semana 2–4", itens: ["NISS ☐", "Arrendamento ☐", "AR CPLP ☐"] },
          ].map((g) => (
            <div key={g.fase}>
              <div className="text-[8px] font-mono text-[#1B5E3B]/70 uppercase mb-0.5">
                {g.fase}
              </div>
              {g.itens.map((item) => (
                <div key={item} className="text-[9px] text-[#4B5047] pl-2 leading-tight">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function Preview() {
  return (
    <section className="py-20 px-4 bg-[#F2FAF5] border-t border-[#1B5E3B]/10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <span className="font-mono text-xs text-[#1B5E3B] uppercase tracking-widest">
            Preview
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#141A12] mb-4 leading-snug">
          Veja por dentro
        </h2>
        <p className="text-[#4B5047] text-[17px] mb-10 leading-relaxed">
          Diagramado como uma publicação editorial — capítulos numerados, tabelas
          legíveis, caixas de alerta para pontos críticos, checklist para acompanhar
          o progresso.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {paginas.map((p) => (
            <div key={p.titulo} className="flex flex-col gap-2">
              <div className="rounded-xl border border-[#e4e9e5] bg-white shadow-sm overflow-hidden aspect-[3/4]">
                {p.conteudo}
              </div>
              <div className="text-center text-xs text-[#4B5047] font-mono">
                {p.titulo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
