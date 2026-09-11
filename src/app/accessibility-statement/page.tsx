import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalContactNote } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Haveli Indian Bistro's commitment to digital and in-restaurant accessibility — WCAG-aligned design, assistive technology support and feedback channels.",
  alternates: { canonical: "/accessibility-statement" },
};

export default function AccessibilityStatement() {
  return (
    <LegalPage
      title="Accessibility Statement"
      intro="Everyone should be able to browse our menu, order dinner and plan a celebration with ease. Haveli Indian Bistro is committed to an accessible digital experience and a welcoming restaurant for all guests."
    >
      <LegalSection heading="Our commitment">
        <p>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.
          These guidelines explain how to make web content more usable for people with a wide
          range of abilities, including guests who navigate by keyboard, use screen readers,
          prefer reduced motion, or need strong colour contrast. Accessibility is part of how we
          design new pages, and we review existing pages regularly.
        </p>
      </LegalSection>

      <LegalSection heading="What we have done on this site">
        <p>
          The site uses semantic HTML landmarks and heading structure, descriptive alternative text
          for meaningful images, and visible keyboard focus indicators in our signature gold. All
          interactive elements — navigation, carousels, forms and accordions — are reachable and
          operable by keyboard, carousels expose standard roles and labels to assistive
          technology, decorative animations respect the prefers-reduced-motion system setting, and
          text and interface colours meet contrast requirements against our dark theme. Forms label
          every field clearly and announce validation feedback.
        </p>
      </LegalSection>

      <LegalSection heading="In the restaurant">
        <p>
          Our King George Boulevard location offers step-free entry, accessible washrooms, and
          wheelchair-friendly seating paths between tables. Service animals are always welcome.
          Our team is happy to read the menu aloud, describe dishes, or arrange seating that suits
          you — just ask any server or call ahead and we will prepare for your visit.
        </p>
      </LegalSection>

      <LegalSection heading="Known limitations">
        <p>
          Some third-party services embedded in the ordering and reservation flows — such as
          payment widgets or map views — are outside our direct control and may not yet fully meet
          the same standard. We choose providers who publish their own accessibility commitments
          and we pass feedback to them. If any part of this site blocks you from completing a task,
          our team will happily assist you by phone so you are never left without a way to order
          or book.
        </p>
      </LegalSection>

      <LegalSection heading="Feedback">
        <p>
          If you experience difficulty using this website or our services, please tell us. Email
          the details — including the page address and what went wrong — and we will acknowledge
          your message within 2 business days and work to resolve accessibility issues as a
          priority. Your feedback directly shapes our roadmap.
        </p>
      </LegalSection>

      <LegalContactNote email="accessibility@haveliindianbistro.com" />
    </LegalPage>
  );
}
