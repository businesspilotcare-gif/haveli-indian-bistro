"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    bg: "#CA9F59",
    href: "/menu#biryani",
    text: "BOGO DUM BIRYANI — BUY 1 GET 1 FREE: VIEW MENU",
  },
  {
    bg: "#C9A03A",
    href: "/areas-faq",
    text: "OPEN LATE TILL 1 AM EVERY NIGHT: SEE HOURS",
  },
];

export default function PromoBar() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="promo-bar" id="promoBar" style={{ background: slides[active].bg }}>
      {slides.map((s, i) => (
        <a key={i} className={`promo-slide ${i === active ? "on" : ""}`} href={s.href}>
          <span>{s.text}</span>
        </a>
      ))}
    </div>
  );
}
