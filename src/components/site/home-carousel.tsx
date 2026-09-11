"use client";

import { useEffect, useRef, useState } from "react";

export type Dish = {
  img: string;
  alt: string;
  tone: string;
  name: string;
  sub: string;
  badge?: string;
  badgeGold?: boolean;
};

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function HomeCarousel({ dishes }: { dishes: Dish[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardStep = () => {
      const card = track.querySelector<HTMLElement>(".car-card");
      const gap = 18;
      return card ? (card.getBoundingClientRect().width + gap) * 2 : 320;
    };

    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      setShowPrev(track.scrollLeft > 2);
      setShowNext(track.scrollLeft < max);
      // active dot = nearest card index
      const card = track.querySelector<HTMLElement>(".car-card");
      if (card) {
        const step = card.getBoundingClientRect().width + 0;
        const idx = Math.round(track.scrollLeft / step);
        setActiveDot(Math.max(0, Math.min(dishes.length - 1, idx)));
      }
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [dishes.length]);

  const scrollBy = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".car-card");
    const gap = 18;
    const step = card ? (card.getBoundingClientRect().width + gap) * 2 : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const goTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".car-card");
    if (!card) return;
    const step = card.getBoundingClientRect().width;
    track.scrollTo({ left: step * idx, behavior: "smooth" });
  };

  return (
    <div className="carousel-wrap">
      <button
        className="car-arrow car-prev"
        type="button"
        aria-label="Scroll to previous dishes"
        hidden={!showPrev}
        onClick={() => scrollBy(-1)}
      >
        <ArrowLeft />
      </button>
      <div className="carousel" ref={trackRef}>
        {dishes.map((d) => (
          <figure className="car-card" key={d.name}>
            <div className={`ph ${d.tone}`} role="img" aria-label={d.alt}>
              {d.img ? <img src={d.img} alt={d.alt} loading="lazy" /> : null}
            </div>
            <figcaption>
              {d.name}
              <div className="cap-sub">{d.sub}</div>
              {d.badge ? (
                <span className={`badge ${d.badgeGold ? "gold" : ""}`}>{d.badge}</span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
      <button
        className="car-arrow car-next"
        type="button"
        aria-label="Scroll to more dishes"
        hidden={!showNext}
        onClick={() => scrollBy(1)}
      >
        <ArrowRight />
      </button>
      <div className="car-dots">
        {dishes.map((d, i) => (
          <button
            key={i}
            type="button"
            className={`car-dot ${i === activeDot ? "is-active" : ""}`}
            aria-label={`Go to dish ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
