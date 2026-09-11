import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalContactNote } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Haveli Indian Bistro website, online ordering, reservations, party hall bookings and promotional offers.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="By using this website, ordering online, or booking a table or event with Haveli Indian Bistro, you agree to the following terms. Please read them carefully."
    >
      <LegalSection heading="General">
        <p>
          This website is operated by Haveli Indian Bistro in Surrey, British Columbia. Content on
          this site — including menus, prices, photographs, text and branding — is provided for
          your information and personal, non-commercial use. You may not reproduce, republish or
          commercially exploit any part of this site without our written permission. Menu items and
          prices are subject to change without notice, and availability may vary by time of day or
          season.
        </p>
      </LegalSection>

      <LegalSection heading="Online orders">
        <p>
          When you place an order through this website you are making an offer to purchase the
          selected items. An order is accepted once we confirm it electronically or begin preparing
          your food. Prices are listed in Canadian dollars and applicable taxes (GST/PST) are added
          at checkout. Delivery zones, fees and estimated times are shown during checkout and may
          vary with demand, weather and traffic. If we cannot fulfil an order — for example, when
          an item sells out — we will contact you and issue a full refund for affected items.
        </p>
      </LegalSection>

      <LegalSection heading="Promotional offers">
        <p>
          Offers such as BOGO deals and discount codes are valid for the dates and channels
          stated, cannot be combined with other promotions, and may exclude alcohol where local
          regulations apply. We reserve the right to modify or discontinue any offer at any time.
          Discount codes have no cash value, are limited to one use per customer unless otherwise
          stated, and may be declined if we detect misuse or fraud.
        </p>
      </LegalSection>

      <LegalSection heading="Reservations & events">
        <p>
          Tables held under a reservation are kept for 15 minutes past the booked time, after
          which they may be released. Party hall and private event bookings are confirmed on
          receipt of the agreed deposit; deposits are refundable up to 7 days before the event
          unless otherwise agreed in writing. For the avoidance of doubt, alcohol service always
          requires valid government-issued ID, and we reserve the right to refuse service in
          accordance with BC liquor laws.
        </p>
      </LegalSection>

      <LegalSection heading="Allergens & food safety">
        <p>
          Our kitchen prepares dishes containing nuts, dairy, gluten, shellfish and other common
          allergens. While we take care with preparation, we cannot guarantee any dish is
          completely free of trace allergens. If you have a severe allergy, please tell us before
          ordering so we can advise you honestly about what we can — and cannot — safely prepare.
        </p>
      </LegalSection>

      <LegalSection heading="Liability">
        <p>
          To the maximum extent permitted by law, Haveli Indian Bistro is not liable for indirect
          or consequential losses arising from use of this website, including delays or errors in
          third-party delivery, payment or mapping services. Nothing in these terms limits our
          responsibility for food prepared to standard, statutory consumer guarantees, or any other
          liability that cannot lawfully be excluded.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the laws of the Province of British Columbia and the federal
          laws of Canada applicable therein. Any disputes will be resolved in the courts of British
          Columbia.
        </p>
      </LegalSection>

      <LegalContactNote email="hello@haveliindianbistro.com" />
    </LegalPage>
  );
}
