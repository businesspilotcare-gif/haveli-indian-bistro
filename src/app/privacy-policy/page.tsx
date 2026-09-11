import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalContactNote } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Haveli Indian Bistro collects, uses and protects your personal information — online orders, reservations, loyalty and marketing communications.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Haveli Indian Bistro respects your privacy. This policy explains what information we collect when you order online, make a reservation, join our mailing list or visit our restaurant — and how that information is used and protected."
    >
      <LegalSection heading="Information we collect">
        <p>
          When you place an online order, we collect the details needed to fulfil it: your name,
          phone number, delivery address, order items and payment confirmation. When you make a
          reservation we collect your name, contact number, party size and requested time. If you
          subscribe to our mailing list or submit feedback, we collect your email address and the
          content of your message. We also collect basic technical data such as browser type and
          pages visited, which helps us understand how guests use this website so we can improve
          it.
        </p>
        <p>
          Payment card details are processed by our payment providers and are never stored on our
          servers. We only receive a confirmation that a payment succeeded, along with the last
          four digits where required for receipts and refunds.
        </p>
      </LegalSection>

      <LegalSection heading="How we use your information">
        <p>
          Your information is used to prepare and deliver your orders, confirm and manage
          reservations, respond to your feedback and enquiries, and — only if you have opted in —
          send you occasional updates about specials, events and new menu items. We use aggregated,
          non-identifying data to analyse menu popularity, improve our service and plan staffing.
          We do not sell or rent your personal information to third parties.
        </p>
        <p>
          Service providers who help us operate — delivery partners, payment processors, reservation
          and messaging platforms — receive only the information necessary to perform their
          function and are bound by confidentiality obligations.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies & analytics">
        <p>
          This website uses a small number of cookies and similar technologies to remember your
          cart between visits, keep you signed in to ordering features, and measure overall site
          performance through privacy-respecting analytics. You can block or delete cookies in your
          browser settings at any time; the site will continue to work, though some convenience
          features such as saved carts may be reset.
        </p>
      </LegalSection>

      <LegalSection heading="Data retention & your rights">
        <p>
          Order and reservation records are kept for as long as required for accounting and tax
          purposes, after which they are securely destroyed. Marketing consent can be withdrawn at
          any time using the unsubscribe link in any email or by contacting us. On request, we will
          provide you with a copy of the personal information we hold about you, correct any
          inaccuracies, or delete your information where we are not legally required to retain it.
          We respond to all such requests within 30 days.
        </p>
      </LegalSection>

      <LegalSection heading="Children's privacy">
        <p>
          Our website is not directed at children under 13, and we do not knowingly collect
          personal information from children. If you believe a child has provided us with personal
          information, please contact us and we will delete it promptly.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this policy from time to time to reflect changes in our practices or legal
          requirements. The revised version will be posted on this page with an updated effective
          date, and significant changes will be highlighted on our website for a reasonable period.
          Continued use of the website after an update constitutes acceptance of the revised
          policy.
        </p>
      </LegalSection>

      <LegalContactNote email="privacy@haveliindianbistro.com" />
    </LegalPage>
  );
}
