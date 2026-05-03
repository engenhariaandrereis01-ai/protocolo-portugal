"use client";

import { useEffect } from "react";

type Fbq = (...args: unknown[]) => void;

function fireViewContent() {
  const w = window as Window & { fbq?: Fbq };
  if (!w.fbq) return;
  w.fbq("track", "ViewContent", {
    content_name: "Protocolo Portugal: Os 30 Primeiros Dias",
    content_type: "product",
    value: 47.0,
    currency: "BRL",
  });
}

export function ViewContentTracker() {
  useEffect(() => {
    let fired = false;

    const fire = () => {
      if (fired) return;
      fired = true;
      fireViewContent();
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled >= 0.3) fire();
    };

    const timer = setTimeout(fire, 5000);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
