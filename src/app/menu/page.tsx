import { MENU } from "@/data/menu";

export const metadata = {
  title: "Menu | Haveli Indian Bistro — Butter Chicken, Biryani, Tandoori in Surrey BC",
  description:
    "Full Indian food menu — butter chicken, dum biryani, tandoori, chaat, Indo-Chinese & more. BOGO deals, CA$17 lunch special. Dine in, takeout & delivery in Surrey BC.",
};

const badgeClass = (b: string) => {
  if (b === "Veg") return "green";
  if (b === "BOGO") return "gold";
  return "";
};

function DishBadge({ b }: { b: string }) {
  return <span className={`pill-badge ${badgeClass(b)}`}>{b}</span>;
}

export default function MenuPage() {
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
              backgroundImage: "url('/assets/uploads/home_img2-4843e3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="ph-inner">
          <span className="eyebrow" style={{ color: "#f0c87e" }}>
            Full menu · Dine in · Takeout · Delivery
          </span>
          <h1 style={{ color: "#fdfcfc" }}>Indian Food Menu — Surrey, BC</h1>
          <p style={{ color: "#f8f7f7" }}>
            Butter chicken, dum biryani, tandoori, chaat, Indo-Chinese &amp; more — with BOGO
            deals.
          </p>
        </div>
      </section>

      {/* ── STICKY CATEGORY NAV ──────────────────────────── */}
      <nav className="menu-nav" aria-label="Menu categories">
        <div className="inner">
          {MENU.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.name}
            </a>
          ))}
        </div>
      </nav>

      {MENU.map((s) => (
        <div key={s.id}>
          <section className="menu-section" id={s.id}>
            <div className="wrap">
              <h2>{s.name}</h2>
              {s.note ? <p className="cat-note">{s.note}</p> : <p className="cat-note" />}
              <div className="dish-grid">
                {s.dishes.map((d) => (
                  <div className="dish" key={d.name}>
                    <div>
                      <div className="d-name">
                        {d.name}
                        {d.badges.map((b) => (
                          <DishBadge key={b} b={b} />
                        ))}
                      </div>
                      <div className="d-desc">{d.desc}</div>
                    </div>
                    <div className="d-price">{d.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {s.bogo ? (
            <div className="bogo-band">
              <div className="wrap">
                <div>
                  <h3>BOGO — Buy 1 Biryani, Get 1 Free</h3>
                  <p>
                    Slow-cooked basmati in a sealed pot with whole aromatic spices. Served with
                    raita and salad.
                  </p>
                </div>
                <a className="btn-pill goldfill" href="/order">
                  Order BOGO now
                </a>
              </div>
            </div>
          ) : null}
        </div>
      ))}

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ paddingTop: 40 }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <a className="btn-pill goldfill" href="/order">
            Order online now
          </a>
        </div>
      </section>
    </>
  );
}
