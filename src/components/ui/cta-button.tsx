"use client";

import { cn } from "@/lib/utils";

export const HOTMART_URL = "https://pay.hotmart.com/X105653642O?checkoutMode=2";

interface CtaButtonProps {
  href?: string;
  children: React.ReactNode;
  white?: boolean;
  className?: string;
  pulse?: boolean;
}

export function CtaButton({
  href = HOTMART_URL,
  children,
  white = false,
  className,
  pulse = false,
}: CtaButtonProps) {
  return (
    <a
      href={href}
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
      className={cn(
        "hotmart-fb hotmart__button-checkout",
        "inline-flex items-center justify-center cursor-pointer",
        "text-base sm:text-lg font-medium tracking-wide",
        "px-8 sm:px-10 py-4 sm:py-5 rounded-xl",
        "transition-all duration-200 active:scale-[0.98]",
        white
          ? "bg-white text-[#1B5E3B] hover:bg-[#F2FAF5] shadow-2xl"
          : "bg-[#1B5E3B] hover:bg-[#2D7D52] text-white shadow-lg shadow-[#1B5E3B]/25 hover:shadow-xl hover:shadow-[#1B5E3B]/30 hover:-translate-y-0.5",
        pulse && "btn-cta-pulse",
        className
      )}
    >
      {children}
    </a>
  );
}
