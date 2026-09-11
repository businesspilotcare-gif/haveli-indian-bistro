"use client";

import { useVideoAutoplay } from "./collage";

export default function HeroVideo() {
  const ref = useVideoAutoplay();
  return (
    <video
      ref={ref}
      className="bg-media"
      autoPlay
      muted
      loop
      playsInline
      aria-label="Restaurant interior / hero background"
    >
      <source src="/assets/uploads/hero-bc4aa6.mp4" type="video/mp4" />
    </video>
  );
}
