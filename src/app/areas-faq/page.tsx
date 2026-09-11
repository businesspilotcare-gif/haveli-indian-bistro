export const metadata = {
  title: "Service Areas & FAQ | Haveli Indian Bistro — Indian Food Delivery in Surrey BC",
  description:
    "Serving Newton, Fleetwood, Guildford, Whalley, Cloverdale, Sullivan, Panorama Ridge, Fraser Heights, Delta, Langley & White Rock. Late-night delivery till 4 AM.",
};

const areas = [
  { name: "Newton", desc: "Indian food delivery Newton Surrey" },
  { name: "Fleetwood", desc: "Best Indian restaurant near Fleetwood" },
  { name: "Guildford", desc: "Indian takeout Guildford Surrey" },
  { name: "Whalley / City Centre", desc: "Late night Indian food Whalley" },
  { name: "Cloverdale", desc: "Indian curry house Cloverdale" },
  { name: "Sullivan & Panorama Ridge", desc: "Punjabi food delivery Sullivan" },
  { name: "Fraser Heights", desc: "Indian dinner Fraser Heights" },
  { name: "Delta · Langley · White Rock", desc: "Worth the drive — minutes away" },
];

const faqs = [
  {
    q: "What is the best Indian restaurant in Surrey, BC?",
    a: "Haveli Indian Bistro on King George Blvd is one of Surrey's highest-rated Indian restaurants — 4.2 stars from over 2,600 Google reviews. Guests consistently praise our butter chicken, dum biryani, tandoori specialties, cocktails and live music evenings.",
  },
  {
    q: "Do you deliver Indian food in Newton, Fleetwood and Guildford?",
    a: "Yes! We deliver across all Surrey neighbourhoods — Newton, Fleetwood, Guildford, Whalley, Cloverdale, Sullivan, Panorama Ridge and Fraser Heights — through our online ordering site, DoorDash and Uber Eats.",
  },
  {
    q: "Are you open late at night in Surrey?",
    a: "Yes — Haveli is one of Surrey's best late-night restaurants. We're open until 4:00 AM every day. Craving butter chicken at midnight? We've got you.",
  },
  {
    q: "Do you have a party hall for events and birthdays in Surrey?",
    a: "Yes. Our private party hall hosts birthdays, anniversaries, corporate events, baby showers, puja ceremonies and wedding receptions. Event packages start at CA$45 per person with 3 appetizers, 3 mains, breads, rice, raita, salad and dessert. Use the enquiry form on our Party Hall page or call (604) 503-1266.",
  },
  {
    q: "Do you take reservations?",
    a: "Yes — reserve instantly through OpenTable or call us at (604) 503-1266. Walk-ins are always welcome, and our cocktail bar and live music evenings make waiting for a table part of the fun.",
  },
  {
    q: "Do you have vegetarian and vegan Indian food options?",
    a: "Absolutely. Our vegetarian menu is extensive — shahi paneer, dal makhni, chana masala, palak paneer, malai kofta, veg biryani and more. Vegan options are available too; just ask your server and we'll guide you through the menu.",
  },
  {
    q: "Is there parking near the restaurant?",
    a: "Yes, free parking is available near the restaurant at 7488 King George Blvd, and we're wheelchair accessible. We're steps away from King George SkyTrain Station for transit riders.",
  },
];

export default function AreasFaq() {
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
              backgroundImage: "url('/assets/uploads/home_img3-6a6cf4.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="ph-inner">
          <span className="eyebrow" style={{ color: "#f0c87e" }}>
            Service areas &amp; FAQ
          </span>
          <h1 style={{ color: "#fdfcfc" }}>Serving All of Surrey</h1>
          <p style={{ color: "#f8f7f7" }}>
            Delivery, dine-in &amp; answers to your most-asked questions.
          </p>
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────────────── */}
      <section>
        <div className="wrap">
          <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", marginBottom: 14 }}>
            Indian food delivery &amp; dine-in across Surrey
          </h2>
          <p style={{ color: "var(--ink-soft)", marginBottom: 30, maxWidth: 760 }}>
            Located in the heart of Surrey on King George Blvd, Haveli Indian Bistro proudly
            serves authentic Punjabi and North Indian food to every corner of the city — and
            beyond. Order late-night delivery, grab takeout on your commute, or dine in with us
            near King George SkyTrain.
          </p>
          <div className="area-grid">
            {areas.map((a) => (
              <div className="area-card" key={a.name}>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO COPY ─────────────────────────────────────── */}
      <section className="seo-copy" style={{ padding: "56px 0" }}>
        <div className="wrap inner">
          <h2>Minutes from King George SkyTrain</h2>
          <p>
            Just steps from King George SkyTrain Station, Haveli Indian Bistro is the go-to
            destination for authentic Punjabi and North Indian cuisine in Surrey, BC. From creamy
            butter chicken and slow-cooked dal makhni to smoky tandoori platters and our famous
            BOGO dum biryani, our kitchen serves the dishes Surrey craves — for lunch, dinner, and
            late into the night.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <span className="eyebrow">Everything about Haveli</span>
          <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", marginBottom: 26 }}>
            Frequently asked questions
          </h2>
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <div className="faq-a">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
