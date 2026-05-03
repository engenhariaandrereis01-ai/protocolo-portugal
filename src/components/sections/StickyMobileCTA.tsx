"use client";

import { HOTMART_URL } from "@/components/ui/cta-button";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/90 backdrop-blur-sm border-t border-[#e4e9e5] px-4 py-3 safe-area-inset-bottom">
        <a
          href={HOTMART_URL}
          onClick={() => {
            const w = window as Window & { fbq?: (...args: unknown[]) => void };
            if (w.fbq) {
              w.fbq("track", "InitiateCheckout", {
                content_name: "Protocolo Portugal: Os 30 Primeiros Dias",
                value: 47.00,
                currency: "BRL",
              });
            }
          }}
          className="hotmart-fb hotmart__button-checkout flex items-center justify-between w-full bg-[#1B5E3B] hover:bg-[#2D7D52] text-white rounded-xl px-5 py-3.5 transition-colors duration-200 active:scale-[0.99] cursor-pointer"
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
