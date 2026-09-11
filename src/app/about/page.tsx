import Collage from "@/components/site/collage";
import HomeCarousel from "@/components/site/home-carousel";

const up = "/assets/uploads/";

const aboutCells = [
  [`${up}home_img10.jpg`, `${up}home_img11b.jpg`, `${up}home_img11-ab851b.jpg`, `${up}home_img10.jpg`],
  [`${up}home_img11b.jpg`, `${up}home_img11-ab851b.jpg`, `${up}home_img10.jpg`, `${up}home_img11b.jpg`],
  [`${up}home_img11-ab851b.jpg`, `${up}home_img10.jpg`, `${up}home_img11b.jpg`, `${up}home_img11-ab851b.jpg`],
  [`${up}home_img10.jpg`, `${up}home_img11b.jpg`, `${up}home_img11-ab851b.jpg`, `${up}home_img10.jpg`],
];

const features = [
  "Traditional recipes passed through generations",
  "Fresh, locally sourced ingredients daily",
  "Live music evenings & cocktail bar",
  "Open late — until 4am every night",
  "Private party hall for all celebrations",
  "Dietary restrictions always accommodated",
];

const signatureDishes = [
  { img: "", alt: "Butter chicken at Haveli Indian Bistro Surrey BC", tone: "crimson", name: "Haveli Da Butter Chicken", sub: "CA$21", badge: "Most loved" },
  { img: "", alt: "Tandoori mixed grill at Haveli Indian Bistro Surrey BC", tone: "", name: "Tandoori Mixed Grill Platter", sub: "CA$28", badge: "Tandoor special" },
  { img: "", alt: "Dum biryani at Haveli Indian Bistro Surrey BC", tone: "golden", name: "Haveli Ki Dum Biryani", sub: "CA$21", badge: "BOGO deal", badgeGold: true },
  { img: "", alt: "Shahi paneer at Haveli Indian Bistro Surrey BC", tone: "crimson", name: "Haveli Da Shahi Paneer", sub: "CA$20", badge: "Vegetarian star", badgeGold: true },
  { img: "", alt: "Fish pakora at Haveli Indian Bistro Surrey BC", tone: "cool", name: "Fish Pakora — Crispy Battered", sub: "CA$16" },
  { img: "", alt: "Dal makhni at Haveli Indian Bistro Surrey BC", tone: "golden", name: "Dal Makhni — Black Lentil", sub: "CA$18" },
];

export const metadata = {
  title: "Our Story | Haveli Indian Bistro — Authentic Indian Restaurant in Surrey, BC",
  description:
    "The story behind Haveli Indian Bistro — Surrey's home for authentic Punjabi and North Indian cuisine on King George Blvd. Live music, cocktail bar, open late.",
};

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section className="page-hero" style={{ padding: 0, ["--ov" as string]: "0.22" }}>
        <div className="hero-media" style={{ filter: "brightness(1.16) contrast(1) saturate(1)", opacity: 0.97 }}>
          <Collage cells={aboutCells} />
        </div>
        <div className="ph-inner" style={{ transform: "translateY(-164px)" }}>
          <span className="eyebrow" style={{ color: "#f0c87e" }}>Our story</span>
          <h1 style={{ color: "#fdfcfc" }}>Where Heritage Meets Flavour</h1>
          <p style={{ color: "#f8f7f7" }}>The story behind Surrey&apos;s favourite Indian bistro.</p>
        </div>
      </section>

      {/* ── SPLIT: STORY + PHOTOS ────────────────────────── */}
      <section>
        <div className="wrap split">
          <div>
            <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", marginBottom: 20 }}>
              A home for authentic Indian cuisine
            </h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>
              Haveli Indian Bistro began with a simple dream: to share the vibrant tapestry of
              Indian cuisine with the community of Surrey. Inspired by generations of family
              recipes and a passion for fresh, flavorful ingredients, we created a dining
              experience that is both comforting and exciting.
            </p>
            <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>
              &quot;Haveli&quot; — the Urdu and Hindi word for a grand ancestral mansion — embodies
              our vision: a home for authentic Indian cuisine in the heart of Surrey, BC. We
              meticulously craft each dish using traditional techniques and the finest spices, to
              ensure an authentic and unforgettable taste.
            </p>
            <ul style={{ listStyle: "none", marginTop: 26 }}>
              {features.map((f) => (
                <li
                  key={f}
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid var(--line)",
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              className="ph crimson"
              role="img"
              aria-label="Inside Haveli Indian Bistro — warm dining room with live music stage"
            >
              <img src="/assets/uploads/about_img2.jpg" alt="Inside Haveli Indian Bistro — warm dining room with live music stage" loading="lazy" />
            </div>
            <div style={{ height: 18 }} />
            <div
              className="ph golden"
              role="img"
              aria-label="Chef plating tandoori dishes at Haveli Indian Bistro Surrey"
            >
              <img src="/assets/uploads/about_img3.jpg" alt="Chef plating tandoori dishes at Haveli Indian Bistro Surrey" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ───────────────────────────────────── */}
      <div className="info-strip">
        <div className="wrap">
          <div className="info-cell">
            <div className="k">Open late</div>
            <div className="v">Till 1 AM Sun–Thu · 2 AM Fri–Sat</div>
          </div>
          <div className="info-cell">
            <div className="k">Live music</div>
            <div className="v">Evenings &amp; weekends</div>
          </div>
          <div className="info-cell">
            <div className="k">Private hall</div>
            <div className="v">Packages from CA$45/person</div>
          </div>
        </div>
      </div>

      {/* ── SIGNATURE CAROUSEL ───────────────────────────── */}
      <section>
        <div className="wrap sec-head">
          <div>
            <span className="eyebrow">Chef&apos;s pride</span>
            <h2>Signature creations</h2>
          </div>
          <a className="link-cta" href="/menu">
            Full menu
          </a>
        </div>
        <div style={{ paddingLeft: 44 }}>
          <HomeCarousel dishes={signatureDishes} />
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="banner" style={{ padding: 0 }}>
        <div className="hero-media">
          <div className="ph slate" role="img" aria-label="Guests celebrating at Haveli Indian Bistro Surrey" />
        </div>
        <div className="banner-inner">
          <h2 style={{ color: "#fff" }}>Come hungry. Leave planning your next visit.</h2>
          <div className="hero-ctas" style={{ justifyContent: "flex-start" }}>
            <a className="btn-pill goldfill" href="/reservations">
              Reserve a table
            </a>
            <a className="link-cta light" href="/order">
              Order online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
