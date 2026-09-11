"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fade-in-on-load image with graceful gradient placeholder behind it.
 * Adds decoding="async" + a smooth opacity/translate entrance once decoded,
 * which removes the harsh image "pop-in" while scrolling.
 */
export default function SmartImg({
  src,
  alt,
  eager = false,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  eager?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) {
      const raf = requestAnimationFrame(() => setLoaded(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [src]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`smart-img ${loaded ? "is-loaded" : ""} ${className}`}
      style={style}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}
