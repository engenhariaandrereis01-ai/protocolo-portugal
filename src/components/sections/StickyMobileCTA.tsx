"use client";

const CTA_URL = "https://pay.hotmart.com/placeholder";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/90 backdrop-blur-sm border-t border-[#e8ede9] px-4 py-3 safe-area-inset-bottom">
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full bg-[#1B5E3B] hover:bg-[#2D7D52] text-white rounded-xl px-5 py-3.5 transition-colors duration-200 active:scale-[0.99] cursor-pointer"
        >
          <div>
            <div className="font-medium text-sm">Protocolo Portugal</div>
            <div className="text-white/70 text-xs">Acesso imediato · Garantia 7 dias</div>
          </div>
          <div className="text-right flex-shrink-0 ml-4">
            <div className="font-display text-xl font-medium">R$ 47</div>
          </div>
        </a>
      </div>
    </div>
  );
}
