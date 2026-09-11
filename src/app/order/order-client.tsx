"use client";

import { useMemo, useState } from "react";
import { MENU, type MenuDish } from "@/data/menu";

type CartItem = { key: string; name: string; price: number; qty: number };

const priceNum = (p: string) => {
  const m = p.replace(/[^0-9.]/g, "");
  return m ? parseFloat(m) : 0;
};

const badgeClass = (b: string) => (b === "Veg" ? "green" : b === "BOGO" ? "gold" : "");

export default function OrderClient() {
  const [activeCat, setActiveCat] = useState(MENU[0].id);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [tipPct, setTipPct] = useState(0);
  const [added, setAdded] = useState<string | null>(null);

  const addToCart = (dish: MenuDish) => {
    const price = priceNum(dish.price);
    setCart((c) => {
      const found = c.find((i) => i.key === dish.name);
      if (found) {
        return c.map((i) => (i.key === dish.name ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...c, { key: dish.name, name: dish.name, price, qty: 1 }];
    });
    setAdded(dish.name);
    setTimeout(() => setAdded((a) => (a === dish.name ? null : a)), 1600);
  };

  const changeQty = (key: string, delta: number) => {
    setCart((c) =>
      c
        .map((i) => (i.key === key ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const { subtotal, gst, tip, total } = useMemo(() => {
    const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const g = +(sub * 0.05).toFixed(2);
    const t = +((sub * tipPct) / 100).toFixed(2);
    return { subtotal: +sub.toFixed(2), gst: g, tip: t, total: +(sub + g + t).toFixed(2) };
  }, [cart, tipPct]);

  return (
    <div className="wrap order-layout">
      <div className="order-menu">
        {/* category pills */}
        <div className="order-cat-nav" role="tablist" aria-label="Menu categories">
          {MENU.map((s) => (
            <a
              key={s.id}
              href={`#order-${s.id}`}
              className={activeCat === s.id ? "active" : ""}
              onClick={() => setActiveCat(s.id)}
            >
              {s.name}
            </a>
          ))}
        </div>

        {MENU.map((s) => (
          <div className="order-section" id={`order-${s.id}`} key={s.id}>
            <h2>{s.name}</h2>
            {s.dishes.map((d) => (
              <div className="order-item" key={d.name}>
                <div>
                  <div className="oi-name">
                    {d.name}
                    {d.badges.map((b) => (
                      <span key={b} className={`pill-badge ${badgeClass(b)}`}>
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="oi-desc">{d.desc}</div>
                  <div className="oi-price">{d.price}</div>
                </div>
                <div className="oi-action">
                  <button className="btn-pill sm" onClick={() => addToCart(d)}>
                    Add +
                  </button>
                  {added === d.name ? (
                    <span style={{ fontSize: 11, color: "#7fd698", fontWeight: 700 }}>
                      Added ✓
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* cart */}
      <aside className="order-cart" aria-label="Your cart">
        <div className="cart-box">
          <h3>Your Order</h3>
          {cart.length === 0 ? (
            <div className="cart-empty">
              Your cart is empty.
              <br />
              Add something delicious!
            </div>
          ) : (
            cart.map((i) => (
              <div className="cart-line" key={i.key}>
                <div className="qty">
                  <button aria-label={`Remove one ${i.name}`} onClick={() => changeQty(i.key, -1)}>
                    −
                  </button>
                  <span>{i.qty}</span>
                  <button aria-label={`Add one ${i.name}`} onClick={() => changeQty(i.key, 1)}>
                    +
                  </button>
                </div>
                <div style={{ flex: 1, fontSize: 14 }}>
                  {i.name}
                  <div style={{ color: "var(--grey)", fontSize: 12.5 }}>
                    CA${(i.price * i.qty).toFixed(2)}
                  </div>
                </div>
              </div>
            ))
          )}

          <div style={{ marginTop: 16 }}>
            <div className="ct-row">
              <span>Subtotal</span>
              <span>CA${subtotal.toFixed(2)}</span>
            </div>
            <div className="ct-row">
              <span>GST (5%)</span>
              <span>CA${gst.toFixed(2)}</span>
            </div>
            {tipPct > 0 ? (
              <div className="ct-row">
                <span>Tip ({tipPct}%)</span>
                <span>CA${tip.toFixed(2)}</span>
              </div>
            ) : null}
            <div className="ct-row total">
              <span>Total</span>
              <span>CA${total.toFixed(2)}</span>
            </div>
          </div>

          <div style={{ marginTop: 14 }}>
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: 1.8,
                textTransform: "uppercase",
                color: "var(--grey)",
                marginBottom: 8,
              }}
            >
              Add a tip
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {[0, 10, 15, 18].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTipPct(t)}
                  className={`btn-pill sm ${tipPct === t ? "goldfill" : ""}`}
                  style={{
                    flex: 1,
                    background: tipPct === t ? "var(--gold)" : "rgba(233,208,160,.1)",
                    color: tipPct === t ? "#2a1608" : "#f5ece7",
                    borderColor: tipPct === t ? "var(--gold)" : "rgba(202,159,89,.5)",
                    margin: 0,
                    textAlign: "center",
                    padding: "9px 0",
                  }}
                >
                  {t === 0 ? "None" : `${t}%`}
                </button>
              ))}
            </div>
          </div>

          <button
            className="btn-pill goldfill"
            style={{ width: "100%", marginTop: 18, textAlign: "center" }}
            disabled={cart.length === 0}
          >
            {cart.length === 0 ? "Cart is empty" : "Checkout"}
          </button>
          <p style={{ fontSize: 11.5, color: "var(--grey)", marginTop: 12, lineHeight: 1.6 }}>
            Pickup &amp; delivery across Surrey — Newton, Fleetwood, Guildford, Whalley,
            Cloverdale &amp; more. BOGO biryani applied automatically.
          </p>
        </div>
      </aside>
    </div>
  );
}
