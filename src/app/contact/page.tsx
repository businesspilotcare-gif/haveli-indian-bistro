export const metadata = {
  title: "Contact Us | Haveli Indian Bistro — 7488 King George Blvd, Surrey BC",
  description:
    "Visit Haveli Indian Bistro at 7488 King George Blvd, Unit 350, Surrey BC. Open every day 11 AM – 4 AM. Call (604) 503-1266. Free parking, near King George SkyTrain.",
};

const hours = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Contact() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section className="page-hero" style={{ padding: 0, ["--ov" as string]: "0.22" }}>
        <div className="hero-media">
          <div
            className="col-photo"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/assets/uploads/home_img10.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="ph-inner">
          <span className="eyebrow" style={{ color: "#f0c87e" }}>
            Find us
          </span>
          <h1 style={{ color: "#fdfcfc" }}>Visit Haveli</h1>
          <p style={{ color: "#f8f7f7" }}>
            7488 King George Blvd, Unit 350, Surrey BC · (604) 503-1266
          </p>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", marginBottom: 20 }}>Opening hours</h2>
            <table className="hours-table">
              <tbody>
                {hours.map((d) => (
                  <tr key={d}>
                    <td>{d}</td>
                    <td>11:00 AM – 4:00 AM</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ color: "var(--grey)", fontSize: 14, marginTop: 14 }}>
              Open late every night for your after-dinner cravings.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", marginBottom: 20 }}>
              Contact &amp; location
            </h2>
            <p style={{ fontSize: 15, marginBottom: 10 }}>
              <b>Address:</b>
              <br />
              7488 King George Blvd, Unit 350, Surrey, BC V3W 0H9
            </p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>
              <b>Phone:</b>
              <br />
              <a href="tel:+16045031266">(604) 503-1266</a>
            </p>
            <p style={{ fontSize: 15, marginBottom: 22 }}>
              <b>Web:</b>
              <br />
              haveliindianbistro.com
            </p>
            <p style={{ color: "var(--grey)", fontSize: 14, marginBottom: 24 }}>
              Free parking available near the restaurant
              <br />
              Wheelchair accessible · Near King George SkyTrain
            </p>
            <a
              className="btn-pill goldfill"
              href="https://maps.google.com/?q=7488+King+George+Blvd+Surrey+BC"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
            <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", margin: "44px 0 20px" }}>
              Book a table
            </h2>
            <a className="link-cta" href="/reservations">
              Reserve online
            </a>
            <div
              style={{
                marginTop: 32,
                aspectRatio: "16/9",
                borderRadius: 8,
                background:
                  "linear-gradient(135deg,#1d1014,#3a1219 55%,#59212b)",
                border: "1px solid var(--panel-line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--grey)",
                fontSize: 14,
              }}
            >
              Map — 7488 King George Blvd, Surrey BC
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
