import type { ReactNode } from "react";

/** Shared hero + prose wrapper for policy/legal pages. */
export default function LegalPage({
  title,
  intro,
  updated = "September 11, 2026",
  children,
}: {
  title: string;
  intro: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="legal-hero">
        <div className="wrap">
          <span className="eyebrow">Haveli Indian Bistro</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span className="legal-updated">Last updated: {updated}</span>
        </div>
      </section>
      <section className="legal-body">
        <div className="wrap inner">{children}</div>
      </section>
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="legal-sec" data-reveal>
      <h2>{heading}</h2>
      {children}
    </div>
  );
}

export function LegalContactNote({ email }: { email: string }) {
  return (
    <p className="legal-note">
      Questions about this policy? Contact us at{" "}
      <a href={`mailto:${email}`}>{email}</a> or call{" "}
      <a href="tel:+16045031266">(604) 503-1266</a>. You can also visit us in person — all contact
      options are listed on our <a href="/contact">contact page</a>.
    </p>
  );
}

