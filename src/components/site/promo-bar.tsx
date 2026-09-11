"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    bg: "#CA9F59",
    href: "/menu#biryani",
    text: "BOGO DUM BIRYANI — BUY 1 GET 1 FREE: VIEW MENU",
  },
  {
    bg: "#B8862B",
    href: "/order",
    text: "FIRST ORDER? 35% OFF WITH CODE FIRST35: ORDER NOW",
  },
  {
    bg: "#9E6B1F",
    href: "/order",
    text: "15% OFF FROM YOUR 2ND ORDER — CODE REPEAT15",
  },
  {
    bg: "#C9A03A",
    href: "/contact",
    text: "OPEN LATE NIGHTLY — TILL 1 AM SUN–THU · 2 AM FRI–SAT: SEE HOURS",
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
    <div
      className="promo-bar"
      id="promoBar"
      style={{ background: slides[active].bg, transition: "background .7s ease" }}
    >
      {slides.map((s, i) => (
        <a
          key={i}
          className={`promo-slide ${i === active ? "on" : ""}`}
          href={s.href}
          aria-hidden={i !== active}
        >
          <span>{s.text}</span>
        </a>
      ))}
    </div>
  );
}
