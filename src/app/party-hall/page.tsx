import PartyHallForm from "./party-hall-form";

export const metadata = {
  title: "Party Hall Surrey BC | Private Events & Celebrations | Haveli Indian Bistro",
  description:
    "Private party hall in Surrey BC for birthdays, weddings, corporate events, baby showers and puja ceremonies. Event packages from CA$45 per person. Book your event today.",
};

const packageItems = [
  ["3 Appetizers", "— choose 2 vegetarian + 1 non-vegetarian"],
  ["3 Main Courses", "— choose 2 vegetarian + 1 non-vegetarian"],
  ["Variety of breads, raita, rice & fresh salad", ""],
  ["Dessert served at the end of the meal", ""],
  ["18% gratuity applied for parties of 6 or more", ""],
];

export default function PartyHall() {
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
              backgroundImage: "url('/assets/uploads/home_img11-ab851b.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="ph-inner">
          <span className="eyebrow" style={{ color: "#f0c87e" }}>
            Private party hall · Surrey BC
          </span>
          <h1 style={{ color: "#fdfcfc" }}>Celebrate Every Occasion</h1>
          <p style={{ color: "#f8f7f7" }}>
            Birthdays · Weddings · Corporate · Baby Showers · Puja — packages from CA$45 per
            person.
          </p>
        </div>
      </section>

      {/* ── SPLIT: DETAILS + FORM ────────────────────────── */}
      <section>
        <div className="wrap split">
          <div>
            <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", marginBottom: 20 }}>
              Your event, hosted the Haveli way
            </h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>
              From intimate birthday dinners to grand wedding receptions, our private party hall
              transforms your celebration into an unforgettable experience — authentic catering,
              live music, decorated space and warm Punjabi hospitality.
            </p>
            <div className="pkg">
              <h3>Standard Event Package</h3>
              <ul>
                {packageItems.map(([main, sub]) => (
                  <li key={main}>
                    <b>{main}</b>
                    {sub ? <span style={{ color: "var(--grey)" }}> {sub}</span> : null}
                  </li>
                ))}
              </ul>
              <div className="price">
                CA$45 <small style={{ fontSize: 14, fontWeight: 400, color: "var(--grey)" }}>per person</small>
              </div>
              <p className="fine">
                Some items may contain nuts and/or other common allergens. Please advise your
                server of any allergies before ordering.
              </p>
            </div>
            <div style={{ marginTop: 28 }}>
              <div className="ph golden" role="img" aria-label="Event package spread — appetizers, mains and breads at Haveli party hall">
                <img
                  src="/assets/uploads/home_img9.jpg"
                  alt="Event package spread — appetizers, mains and breads at Haveli party hall"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div>
            <PartyHallForm />
            <div
              style={{
                marginTop: 32,
                border: "1px solid var(--panel-line)",
                borderRadius: 8,
                padding: 28,
                background: "var(--panel-bg)",
              }}
            >
              <h3 style={{ marginBottom: 10 }}>Prefer to talk it through?</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 14.5 }}>
                Call our events team and we&apos;ll plan the menu, music and timing with you.
              </p>
              <a className="btn-pill goldfill" href="tel:+16045031266" style={{ marginTop: 16 }}>
                Call (604) 503-1266
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
