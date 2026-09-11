"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pkg">
      <h3>Request a Table</h3>
      <p style={{ color: "var(--ink-soft)", fontSize: 14.5, marginBottom: 8 }}>
        Send us your details and we&apos;ll confirm your reservation by phone or email.
      </p>
      {sent ? (
        <div
          style={{
            marginTop: 18,
            padding: 16,
            borderRadius: 8,
            background: "rgba(60,110,71,.18)",
            border: "1px solid rgba(90,200,140,.5)",
            color: "#dff3e6",
            fontSize: 14.5,
          }}
        >
          <b>Request received!</b> We&apos;ll confirm your reservation shortly by phone or email.
          For instant booking, use OpenTable or call (604) 503-1266.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="row">
            <div>
              <label htmlFor="rv-name">Full name *</label>
              <input id="rv-name" required placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="rv-phone">Phone *</label>
              <input id="rv-phone" required type="tel" placeholder="(604) 000-0000" />
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="rv-email">Email *</label>
              <input id="rv-email" required type="email" placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="rv-date">Date *</label>
              <input id="rv-date" required type="date" />
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="rv-time">Time *</label>
              <input id="rv-time" required type="time" defaultValue="19:00" />
            </div>
            <div>
              <label htmlFor="rv-guests">Number of guests *</label>
              <input id="rv-guests" required type="number" min={1} max={40} defaultValue={2} />
            </div>
          </div>
          <label htmlFor="rv-notes">Special requests (optional)</label>
          <textarea id="rv-notes" rows={3} placeholder="Birthday, window seat, dietary needs…" />
          <button className="btn-pill" type="submit">
            Request reservation
          </button>
        </form>
      )}
    </div>
  );
}
