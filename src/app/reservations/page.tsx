import ReservationForm from "./reservation-form";

export const metadata = {
  title: "Reservations | Haveli Indian Bistro — Book a Table in Surrey BC",
  description:
    "Reserve a table at Haveli Indian Bistro via OpenTable or call (604) 503-1266. Open every day 11 AM – 4 AM near King George SkyTrain, Surrey BC.",
};

export default function Reservations() {
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
              backgroundImage: "url('/assets/uploads/about_img2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="ph-inner">
          <span className="eyebrow" style={{ color: "#f0c87e" }}>
            Reserve a table
          </span>
          <h1 style={{ color: "#fdfcfc" }}>Book Your Table</h1>
          <p style={{ color: "#f8f7f7" }}>
            Live availability via OpenTable — or call (604) 503-1266.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <ReservationForm />
          </div>
          <div>
            <div
              style={{
                border: "1px solid var(--panel-line)",
                borderRadius: 8,
                padding: 28,
                background: "var(--panel-bg)",
              }}
            >
              <h3 style={{ marginBottom: 12 }}>Reserve via OpenTable</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 14.5 }}>
                See live table availability, choose your party size and time, and get instant
                confirmation. Walk-ins are always welcome too.
              </p>
              <a
                className="btn-pill goldfill"
                href="https://www.opentable.com/r/haveli-bistro-surrey"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 18 }}
              >
                Open reservations on OpenTable
              </a>
              <p style={{ color: "var(--grey)", fontSize: 14, marginTop: 18 }}>
                Or call us directly:{" "}
                <a href="tel:+16045031266">
                  <b>(604) 503-1266</b>
                </a>
              </p>
            </div>
            <div style={{ marginTop: 32 }}>
              <h3 style={{ marginBottom: 10 }}>Hours</h3>
              <table className="hours-table">
                <tbody>
                  <tr>
                    <td>Every Day</td>
                    <td>11:00 AM – 4:00 AM</td>
                  </tr>
                </tbody>
              </table>
              <h3 style={{ margin: "32px 0 10px" }}>Good to know</h3>
              <ul style={{ listStyle: "none" }}>
                {[
                  "18% gratuity for parties of 6+",
                  "Free parking near the restaurant",
                  "Wheelchair accessible",
                  "Steps from King George SkyTrain Station",
                ].map((t) => (
                  <li
                    key={t}
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid var(--line)",
                      fontSize: 14.5,
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                marginTop: 32,
                border: "1px solid var(--panel-line)",
                borderRadius: 8,
                padding: 28,
                background: "var(--panel-bg)",
              }}
            >
              <h3 style={{ marginBottom: 10 }}>Hosting a group of 15+?</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 14.5 }}>
                Our private party hall might be the better fit — packages from CA$45/person.
              </p>
              <a className="link-cta" href="/party-hall" style={{ marginTop: 14 }}>
                Explore the party hall
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
