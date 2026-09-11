"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/party-hall", label: "Party Hall" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="nav">
        <div className="nav-wrap">
          <div className="nav-row-top">
            <a className="brand" href="/">
              <span
                className="brand-logo"
                style={
                  {
                    "--logo-src": "url('/assets/uploads/haveli-logo-maroon.png')",
                  } as React.CSSProperties
                }
              >
                <img src="/assets/uploads/haveli-logo-maroon.png" alt="Haveli Indian Bistro" />
                <span className="brand-logo-shine" aria-hidden="true" />
              </span>
              <span className="brand-text">
                <span
                  className="brand-name"
                  style={
                    {
                      "--logo-src": "url('/assets/uploads/haveli-wordmark.png')",
                    } as React.CSSProperties
                  }
                >
                  <img src="/assets/uploads/haveli-wordmark.png" alt="Haveli" />
                  <span className="brand-logo-shine" aria-hidden="true" />
                </span>
                <small>INDIAN BISTRO &middot; SURREY BC</small>
              </span>
            </a>
            <div className="nav-btns">
              <a className="btn-gold" href="/reservations">
                Reservations
              </a>
              <a className="btn-gold" href="/order">
                Order Now
              </a>
            </div>
            <button
              className="menu-toggle"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              &#9776;
            </button>
          </div>
          <div className="nav-row-bottom">
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={pathname === l.href ? "active" : ""}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile">
        <button className="mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          &times;
        </button>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="/reservations" onClick={() => setOpen(false)}>
          Reservations
        </a>
        <a href="/order" onClick={() => setOpen(false)}>
          Order Now
        </a>
      </nav>
    </>
  );
}
