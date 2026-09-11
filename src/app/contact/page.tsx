export const metadata = {
  title: "Contact Us | Haveli Indian Bistro — 7488 King George Blvd, Surrey BC",
  description:
    "Visit Haveli Indian Bistro at 7488 King George Blvd, Unit 350, Surrey BC. Open late daily: 11 AM – 1 AM Sun–Thu, 11 AM – 2 AM Fri–Sat. Call (604) 503-1266. Free parking, near King George SkyTrain.",
};

const hours: [string, string][] = [
  ["Monday", "11:00 AM – 1:00 AM"],
  ["Tuesday", "11:00 AM – 1:00 AM"],
  ["Wednesday", "11:00 AM – 1:00 AM"],
  ["Thursday", "11:00 AM – 1:00 AM"],
  ["Friday", "11:00 AM – 2:00 AM"],
  ["Saturday", "11:00 AM – 2:00 AM"],
  ["Sunday", "11:00 AM – 1:00 AM"],
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
                {hours.map(([d, h]) => (
                  <tr key={d}>
                    <td>{d}</td>
                    <td>{h}</td>
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
            <p style={{ fontSize: 15, marginBottom: 14 }}>
              <b>Web:</b>
              <br />
              haveliindianbistro.com
            </p>
            <p style={{ fontSize: 15, marginBottom: 22 }}>
              <b>Follow us:</b>
              <br />
              <span className="contact-socials">
                <a href="https://www.facebook.com/people/Haveli-Bistro/100093571557340/" target="_blank" rel="noopener noreferrer">Facebook</a>
                <span aria-hidden="true"> · </span>
                <a href="https://www.instagram.com/haveliindianbistro" target="_blank" rel="noopener noreferrer">Instagram</a>
                <span aria-hidden="true"> · </span>
                <a href="https://www.youtube.com/@HaveliBistro" target="_blank" rel="noopener noreferrer">YouTube</a>
              </span>
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
              className="map-embed"
              style={{
                marginTop: 32,
                aspectRatio: "16/9",
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid var(--panel-line)",
              }}
            >
              <iframe
                title="Map — Haveli Indian Bistro, 7488 King George Blvd Unit 350, Surrey BC"
                src="https://maps.google.com/maps?q=7488%20King%20George%20Blvd%20Unit%20350%2C%20Surrey%2C%20BC%20V3W%200H9&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", filter: "invert(0.92) hue-rotate(180deg) saturate(0.72) brightness(0.92)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
