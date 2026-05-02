import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O Protocolo Portugal serve pra quem ainda nem comprou a passagem?",
    a: "Sim. O Módulo 10 (Checklist) tem uma seção inteira de \"Antes de embarcar — no Brasil\" com tudo o que dá pra resolver enquanto você ainda está aqui: NIF remoto, PB4 no INSS, comunicação de saída, documentos apostilados.",
  },
  {
    q: "E se eu já estiver em Portugal há alguns meses?",
    a: "Funciona também. A maioria dos compradores está nessa janela de 0–90 dias. Os módulos de IRS, NISS e moradia são especialmente úteis para quem já chegou e está ajustando os detalhes.",
  },
  {
    q: "Vocês oferecem suporte personalizado?",
    a: "Não. O Protocolo Portugal é um produto de R$ 47 — não inclui consultoria 1:1. Para questões personalizadas (visto específico, situação tributária complexa, processos jurídicos), recomendamos advogado de imigração ou contabilista certificado.",
  },
  {
    q: "Posso pagar com Pix?",
    a: "Sim. Pix, cartão de crédito (parcelado em até 12x) ou boleto. O acesso é liberado em até 5 minutos após confirmação do pagamento.",
  },
  {
    q: "O conteúdo fica desatualizado?",
    a: "Atualizamos pelo menos 2 vezes por ano (após mudanças de IRS em janeiro e após o ciclo legislativo no segundo semestre). Quem comprou recebe a versão atualizada gratuitamente por 12 meses.",
  },
  {
    q: "É um curso em vídeo?",
    a: "Não. O Protocolo Portugal é um documento editorial de leitura — diagramado com tabelas, checklists e caixas de alerta. Você lê no celular, no computador ou imprime.",
  },
  {
    q: "Funciona pra quem vai pelos Açores ou Madeira?",
    a: "Sim. As regras de NIF, NISS, SNS, IRS e CPLP são nacionais — valem em todo o território português, incluindo regiões autônomas. Diferenças locais de moradia variam, mas a estrutura legal é a mesma.",
  },
  {
    q: "E se eu morar em Portugal mas trabalhar para empresa brasileira remotamente?",
    a: "Esse é exatamente o cenário do Módulo 09 — Saída Fiscal. Tem orientação sobre como funciona a Convenção de Dupla Tributação Brasil-Portugal e o que fazer pra não pagar imposto duas vezes.",
  },
  {
    q: "Tem garantia mesmo? E se eu quiser desistir?",
    a: "Sim. 7 dias incondicional. Manda e-mail, recebe o reembolso. Sem perguntas.",
  },
  {
    q: "Quem fez o Protocolo Portugal?",
    a: "O Protocolo Portugal faz parte da iniciativa BR Fora do Brasil, focada em produtos práticos para a diáspora brasileira. Conteúdo cruzado com fontes oficiais e revisado por pessoas que vivem em Portugal.",
  },
];

export function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="py-20 px-4 bg-[#FAFAF8] border-t border-[#e4e9e5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <span className="font-mono text-xs text-[#1B5E3B] uppercase tracking-widest">
            Dúvidas
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#141A12] mb-10 leading-snug">
          Perguntas frequentes
        </h2>

        <Accordion className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-[#e4e9e5] rounded-xl px-5 bg-white"
            >
              <AccordionTrigger className="text-left text-[#141A12] font-medium py-4 hover:no-underline text-sm sm:text-[15px] leading-snug cursor-pointer">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5047] text-sm leading-relaxed pb-4">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
