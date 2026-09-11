"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/party-hall", label: "Party Hall" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    const raf = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu when the route changes (links also close it on click;
  // this covers browser back/forward navigation)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-wrap">
          <div className="nav-row-top">
            <a className="brand" href="/" aria-label="Haveli Indian Bistro — home">
              <span
                className="brand-logo"
                style={
                  {
                    "--logo-src": "url('/assets/uploads/haveli-logo-maroon.png')",
                  } as React.CSSProperties
                }
              >
                <img src="/assets/uploads/haveli-logo-maroon.png" alt="" />
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
              aria-expanded={open}
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
      <nav
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
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
        <div className="mobile-menu-meta">
          <span>{SITE.address.street}, {SITE.address.city} {SITE.address.province}</span>
          <a href="tel:+16045031266">{SITE.phoneDisplay}</a>
        </div>
      </nav>
    </>
  );
}
