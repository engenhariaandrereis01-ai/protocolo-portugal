export function Footer() {
  return (
    <footer className="bg-[#141A12] text-white/60 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Brand */}
        <div className="mb-6">
          <div className="font-display text-white text-xl mb-1">BR Fora do Brasil</div>
          <div className="text-sm text-white/40">
            Sua vida no exterior com menos susto, menos erro e mais clareza.
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
          <a href="/termos" className="hover:text-white transition-colors">
            Termos de Uso
          </a>
          <a href="/privacidade" className="hover:text-white transition-colors">
            Política de Privacidade
          </a>
          <a
            href="mailto:suporte@brforadobrasil.com"
            className="hover:text-white transition-colors"
          >
            suporte@brforadobrasil.com
          </a>
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 mb-8 text-xs leading-relaxed text-white/40">
          Este produto tem finalidade exclusivamente educativa. Não substitui
          orientação de advogado, contador, médico ou qualquer profissional
          habilitado. Não garante aprovação de visto, residência, nacionalidade ou
          qualquer benefício migratório. Sempre confirme procedimentos nas fontes
          oficiais (
          <a href="https://gov.pt" className="underline hover:text-white/70" target="_blank" rel="noopener noreferrer">gov.pt</a>,{" "}
          <a href="https://aima.gov.pt" className="underline hover:text-white/70" target="_blank" rel="noopener noreferrer">aima.gov.pt</a>,{" "}
          <a href="https://portaldasfinancas.gov.pt" className="underline hover:text-white/70" target="_blank" rel="noopener noreferrer">portaldasfinancas.gov.pt</a>,{" "}
          <a href="https://seg-social.pt" className="underline hover:text-white/70" target="_blank" rel="noopener noreferrer">seg-social.pt</a>)
          antes de agir.
        </div>

        <div className="text-xs text-white/30">
          © 2026 BR Fora do Brasil — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
