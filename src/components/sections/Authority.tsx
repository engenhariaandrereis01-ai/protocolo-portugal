const fontes = [
  { nome: "gov.pt", desc: "Portal oficial do Governo" },
  { nome: "AIMA", desc: "Agência para Migrações e Asilo" },
  { nome: "Autoridade Tributária", desc: "portaldasfinancas.gov.pt" },
  { nome: "Segurança Social", desc: "seg-social.pt" },
  { nome: "ACSS", desc: "Sistema de Saúde PT" },
  { nome: "Idealista PT", desc: "Dados imobiliários 2025" },
  { nome: "Euro Dicas / DECO", desc: "Fontes especializadas" },
  { nome: "PwC Portugal", desc: "Guia Fiscal IRS 2025" },
];

export function Authority() {
  return (
    <section className="py-20 px-4 bg-[#1B5E3B]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <span className="font-mono text-xs text-white/45 uppercase tracking-widest">
            Autoridade
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-4 leading-snug">
          Verificado em fontes oficiais.
          <br />
          <span className="text-white/55">Não em grupo de WhatsApp.</span>
        </h2>
        <p className="text-white/70 text-[17px] mb-10 max-w-xl leading-relaxed">
          Cada informação deste protocolo foi cruzada com pelo menos uma fonte
          oficial do governo português ou serviço especializado reconhecido.
          Nada foi reciclado de outros infoprodutos. Nada foi deduzido por achismo.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {fontes.map((f) => (
            <div
              key={f.nome}
              className="rounded-xl border border-white/10 bg-white/8 px-4 py-3.5 hover:bg-white/12 transition-colors duration-200"
            >
              <div className="font-mono text-sm font-medium text-white mb-1 leading-snug">
                {f.nome}
              </div>
              <div className="text-xs text-white/50 leading-snug">{f.desc}</div>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-white/20 pl-4">
          <p className="text-sm text-white/45 italic leading-relaxed">
            Este protocolo tem finalidade educativa. Não substitui orientação de
            advogado, contador ou outro profissional habilitado.
          </p>
        </div>
      </div>
    </section>
  );
}
