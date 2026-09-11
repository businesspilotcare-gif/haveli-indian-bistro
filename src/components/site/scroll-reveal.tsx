"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Global scroll-reveal engine.
 * Watches every [data-reveal] element; adds .in when it enters the viewport.
 * Elements can set data-reveal-delay="120" (ms) for staggered entrances.
 * Re-arms on every route change and honors prefers-reduced-motion.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.classList.add("in");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.revealDelay || "0", 10);
          window.setTimeout(() => el.classList.add("in"), delay);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)");
    els.forEach((el) => io.observe(el));

    // Safety net: anything never revealed within 4s of a hash/anchor jump shows anyway
    const t = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
      });
    }, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
