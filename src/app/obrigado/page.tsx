"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function firePurchase(value: number, currency: string, attempts = 15) {
  const w = window as Window & { fbq?: (...args: unknown[]) => void };
  if (w.fbq) {
    w.fbq("track", "Purchase", {
      content_name: "Protocolo Portugal: Os 30 Primeiros Dias",
      content_type: "product",
      value,
      currency,
    });
    return;
  }
  if (attempts > 0) setTimeout(() => firePurchase(value, currency, attempts - 1), 200);
}

function PurchaseTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const value = parseFloat(searchParams.get("value") ?? "47");
    const currency = searchParams.get("currency") ?? "BRL";
    firePurchase(value, currency);
  }, [searchParams]);

  return null;
}

export default function Obrigado() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
      <Suspense>
        <PurchaseTracker />
      </Suspense>

      <div className="max-w-lg mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-[#F2FAF5] border border-[#1B5E3B]/20 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-[#1B5E3B]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-display text-4xl text-[#141A12] mb-4">
          Compra confirmada!
        </h1>

        <p className="text-[#4B5047] text-lg mb-2">
          Seu Protocolo Portugal está a caminho.
        </p>

        <p className="text-[#4B5047] text-base">
          Verifique seu e-mail — o acesso será liberado em até 5 minutos.
        </p>
      </div>
    </main>
  );
}
