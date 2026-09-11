import OrderClient from "./order-client";

export const metadata = {
  title: "Order Online | Haveli Indian Bistro — Indian Food Delivery & Takeout Surrey BC",
  description:
    "Order butter chicken, dum biryani, tandoori and more online. Delivery & takeout across Surrey BC — Newton, Fleetwood, Guildford, Whalley, Cloverdale. Open late.",
};

export default function Order() {
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
            Order online · Pickup &amp; delivery
          </span>
          <h1 style={{ color: "#fdfcfc" }}>Order Your Favourites</h1>
          <p style={{ color: "#f8f7f7" }}>
            Hot, fresh and fast — BOGO dum biryani included. Delivery across Surrey till late.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 40, paddingBottom: 80 }}>
        <OrderClient />
      </section>
    </>
  );
}
