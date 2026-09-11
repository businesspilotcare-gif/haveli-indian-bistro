"use client";

import { useState } from "react";

export default function PartyHallForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pkg">
      <h3>Book Your Event</h3>
      <p style={{ color: "var(--ink-soft)", fontSize: 14.5, marginBottom: 8 }}>
        Tell us about your celebration and our events team will reply within one business day.
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
          <b>Thank you!</b> Your event enquiry has been received — our events team will get back
          to you within one business day. For urgent bookings call (604) 503-1266.
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
              <label htmlFor="ph-name">Full name *</label>
              <input id="ph-name" required placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="ph-phone">Phone number *</label>
              <input id="ph-phone" required type="tel" placeholder="(604) 000-0000" />
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="ph-email">Email address *</label>
              <input id="ph-email" required type="email" placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="ph-date">Event date *</label>
              <input id="ph-date" required type="date" />
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="ph-guests">Number of guests *</label>
              <input id="ph-guests" required type="number" min={1} placeholder="e.g. 60" />
            </div>
            <div>
              <label htmlFor="ph-type">Type of event *</label>
              <select id="ph-type" required defaultValue="">
                <option value="" disabled>
                  Select occasion…
                </option>
                <option>Birthday Party</option>
                <option>Anniversary Dinner</option>
                <option>Wedding Reception</option>
                <option>Corporate Event</option>
                <option>Baby Shower</option>
                <option>Puja / Religious Ceremony</option>
                <option>Graduation Party</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <label htmlFor="ph-notes">Special requests / dietary notes</label>
          <textarea id="ph-notes" rows={4} placeholder="Anything we should know?" />
          <button className="btn-pill" type="submit">
            Send event enquiry
          </button>
        </form>
      )}
    </div>
  );
}
