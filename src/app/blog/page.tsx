export const metadata = {
  title: "Blog | Surrey's Indian Food Guide — Haveli Indian Bistro",
  description:
    "Guides, stories & flavour from the Haveli kitchen — top Indian dishes in Surrey, party planning tips and late-night food guides.",
};

const posts = [
  {
    img: "/assets/uploads/home_img12-693fa7.jpeg",
    alt: "Top Indian dishes in Surrey BC",
    tag: "Food guide",
    title: "Top 10 Indian Dishes You Must Try in Surrey, BC",
    excerpt:
      "From legendary butter chicken to dum biryani and crispy fish pakora — the ten dishes to order at Surrey\u2019s favourite Indian bistro.",
  },
  {
    img: "/assets/uploads/home_img13-85beec.jpg",
    alt: "Indian birthday party in Surrey party hall",
    tag: "Events",
    title: "How to Plan the Perfect Indian Birthday Party in Surrey",
    excerpt:
      "Venue checklists, menu packages and why a private party hall beats hosting at home — your complete Surrey event-planning guide.",
  },
  {
    img: "/assets/uploads/home_img14-0a1db0.jpg",
    alt: "Late night biryani near King George SkyTrain",
    tag: "Late night",
    title: "Best Late-Night Food in Surrey: Where to Eat After Midnight",
    excerpt:
      "Open till the early hours, Haveli is Surrey\u2019s answer to midnight biryani cravings near King George SkyTrain — here\u2019s your late-night food guide.",
  },
];

export default function Blog() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section className="page-hero" style={{ padding: 0, ["--ov" as string]: "0.25" }}>
        <div className="hero-media">
          <div
            className="col-photo"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/assets/uploads/home_img1-9226a7.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="ph-inner">
          <span className="eyebrow" style={{ color: "#f0c87e" }}>
            Kitchen journal
          </span>
          <h1 style={{ color: "#fdfcfc" }}>Surrey&apos;s Indian Food Guide</h1>
          <p style={{ color: "#f8f7f7" }}>
            Guides, stories &amp; flavour from the Haveli kitchen.
          </p>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────── */}
      <section>
        <div className="wrap blog-grid">
          {posts.map((p) => (
            <article className="blog-card" key={p.title}>
              <div className="ph crimson" role="img" aria-label={p.alt}>
                <img src={p.img} alt={p.alt} loading="lazy" />
              </div>
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="link-cta">Read article</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
