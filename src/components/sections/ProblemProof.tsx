export function ProblemProof() {
  const erros = [
    {
      erro: "Pagar 12 meses de renda adiantada (limite legal: 4)",
      custo: "R$ 25.000–60.000 desnecessários",
    },
    {
      erro: "Perder prazo do IRS (30 de junho)",
      custo: "Coima a partir de €375",
    },
    {
      erro: "Contratar representante fiscal não habilitado",
      custo: "Risco de fraude + NIF anulado",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white border-t-4 border-[#1B5E3B]">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl text-[#141A12] mb-6 leading-snug">
          Você não está perdido.{" "}
          <span className="text-[#1B5E3B]">O sistema é confuso de propósito.</span>
        </h2>

        <div className="space-y-5 text-[#4B5047] text-[17px] leading-relaxed mb-12">
          <p className="text-[#141A12] font-medium text-lg">
            Você pesquisou. Assistiu vídeo. Perguntou no grupo. Ainda assim,
            chegou em Portugal sem saber por onde começar.{" "}
            <span className="text-[#4B5047] font-normal">
              Não é falta de esforço. É excesso de informação errada.
            </span>
          </p>
          <p>
            Quem chegou em Portugal nos últimos dois anos sabe: as regras mudaram
            demais. A Manifestação de Interesse foi encerrada. O SEF virou AIMA.
            A Lei 61/2025 mudou as regras do CPLP. O acesso ao SNS para não
            documentados foi restringido.
          </p>
          <p>
            Vídeos do YouTube de 2022 estão obsoletos. Grupos de WhatsApp estão
            cheios de gente repetindo informação que valia há dois anos. E quando
            você tenta confirmar nas Finanças ou na AIMA, o atendente assume que
            você já sabe metade do processo.
          </p>
          <p>
            O resultado? Brasileiros pagando 12 meses de renda adiantada por
            desconhecer que o limite legal é 4. Pessoas perdendo o prazo do IRS
            por não saber que existe. Famílias inteiras sem médico de família por
            não terem feito o cadastro certo no centro de saúde.
          </p>
        </div>

        {/* Tabela de erros */}
        <div className="rounded-xl border border-[#e4e9e5] overflow-hidden mb-8">
          <div className="bg-[#1B5E3B] px-5 py-3">
            <p className="font-mono text-xs text-white/70 uppercase tracking-widest">
              Erros que custam caro — e são evitáveis
            </p>
          </div>
          <div className="divide-y divide-[#e4e9e5]">
            {erros.map(({ erro, custo }) => (
              <div key={erro} className="grid sm:grid-cols-2 gap-2 px-5 py-4 bg-white">
                <div className="flex items-start gap-2.5">
                  <span className="text-red-500 mt-0.5 flex-shrink-0 font-bold">✕</span>
                  <span className="text-[#141A12] text-sm leading-snug">{erro}</span>
                </div>
                <div className="flex items-start gap-2 sm:justify-end">
                  <span className="font-mono text-sm text-red-600 font-medium">{custo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#1B5E3B] font-medium text-lg">
          O Protocolo Portugal existe pra você não ser mais uma estatística desses erros.
        </p>
      </div>
    </section>
  );
}
