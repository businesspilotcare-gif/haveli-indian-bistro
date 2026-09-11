"use client";

import { useEffect, useRef } from "react";

/**
 * Scrolling photo collage used behind the hero / banners.
 * Photos scroll horizontally in a continuous loop (translateX -50%).
 * Cell URLs starting with "video:" render a looping muted video instead.
 */
export default function Collage({
  cells,
  className = "",
  style,
}: {
  /** groups of 4 cells: [c1, c2, c3, c4] — prefix "video:" for videos */
  cells: string[][];
  className?: string;
  style?: React.CSSProperties;
}) {
  // duplicate the groups once: track animates to -50% => seamless loop
  const groups = [...cells, ...cells];
  return (
    <div className={`bg-collage ${className}`} style={style} data-collage="1">
      <div className="col-track">
        {groups.map((g, gi) => (
          <div className="col-block" key={gi}>
            {[0, 1, 2, 3].map((ci) => {
              const src = g[ci];
              const isVideo = src.startsWith("video:");
              return (
                <div className={`col-cell col-c${ci + 1}`} key={ci}>
                  {isVideo ? (
                    <video src={src.slice(6)} muted autoPlay loop playsInline />
                  ) : (
                    <div className="col-photo" style={{ backgroundImage: `url('${src}')` }} />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Kick videos into playing on mobile / iOS (autoplay reliability helper) */
export function useVideoAutoplay() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    try {
      v.muted = true;
      v.defaultMuted = true;
    } catch {}
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    const tryPlay = () => {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    tryPlay();
    const kick = () => tryPlay();
    ["touchstart", "pointerdown", "click", "scroll", "keydown"].forEach((ev) =>
      document.addEventListener(ev, kick, { once: true, passive: true })
    );
    const vis = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", vis);
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => {
      ["touchstart", "pointerdown", "click", "scroll", "keydown"].forEach((ev) =>
        document.removeEventListener(ev, kick)
      );
      document.removeEventListener("visibilitychange", vis);
    };
  }, []);
  return ref;
}
