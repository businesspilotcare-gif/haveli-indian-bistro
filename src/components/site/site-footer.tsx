import { SITE } from "@/lib/site";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.8h2.62l.39-3.04H13.5V8.22c0-.88.24-1.48 1.5-1.48h1.6V4.03c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.9 1.41-3.9 4v2.25H7.73v3.04h2.63V21h3.14Z" />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.6" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.4-4.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </svg>
  ),
};

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              HAVELI<small>INDIAN BISTRO &middot; SURREY BC</small>
            </div>
            <p>
              Reimagining the wonders of Indian fare in a space that evokes a bygone era of a
              boisterous yet elegant India — all within the heart of Surrey, BC.
            </p>
            <div className="foot-social" aria-label="Follow Haveli Indian Bistro">
              <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Haveli Indian Bistro on Facebook (opens in a new tab)">
                {SOCIAL_ICONS.facebook}
              </a>
              <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Haveli Indian Bistro on Instagram (opens in a new tab)">
                {SOCIAL_ICONS.instagram}
              </a>
              <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="Haveli Indian Bistro on YouTube (opens in a new tab)">
                {SOCIAL_ICONS.youtube}
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="/about">Our Story</a>
              </li>
              <li>
                <a href="/menu">Full Menu</a>
              </li>
              <li>
                <a href="/party-hall">Private Events</a>
              </li>
              <li>
                <a href="/areas-faq">Areas &amp; FAQ</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Order &amp; Visit</h4>
            <ul>
              <li>
                <a href="/order">Order Online</a>
              </li>
              <li>
                <a href="https://www.opentable.com/r/haveli-bistro-surrey" target="_blank" rel="noopener noreferrer">
                  Reserve via OpenTable
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a>
              </li>
              <li>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </li>
              <li>
                <a href="/party-hall">Book Party Hall</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Find Us</h4>
            <p className="addr">
              {SITE.address.street}
              <br />
              {SITE.address.city}, {SITE.address.province} {SITE.address.postal}
              <br />
              <br />
              <span className="addr-hours">
                Sun – Thu: 11:00 AM – 1:00 AM
                <br />
                Fri – Sat: 11:00 AM – 2:00 AM
              </span>
            </p>
          </div>
        </div>
        <div className="foot-seo">
          Haveli Indian Bistro — Best Indian Restaurant in Surrey, BC: Authentic Punjabi &amp;
          North Indian cuisine &middot; Butter chicken Surrey &middot; Dum biryani Surrey &middot;
          Tandoori restaurant King George Blvd &middot; Indian food delivery Newton, Fleetwood,
          Guildford, Whalley, Cloverdale, Sullivan, Panorama Ridge, Fraser Heights &middot;{" "}
          <strong>Open late nightly Indian food Surrey</strong> &middot; Indian lunch special
          Surrey &middot; Party hall &amp; event venue Surrey &middot; Indian catering Surrey BC
          &middot; Vegetarian Indian food Surrey &middot; Chaat, Indo-Chinese &amp; cocktail bar
          &middot; Near King George SkyTrain Station &middot; Serving Surrey, Delta, Langley &amp;
          White Rock.
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 Haveli Indian Bistro. All Rights Reserved. Surrey, BC, Canada.</span>
          <span className="foot-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <span aria-hidden="true"> · </span>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
            <span aria-hidden="true"> · </span>
            <a href="/accessibility-statement">Accessibility</a>
          </span>
          <span>Dine In &middot; Takeout &middot; Delivery &middot; Private Events</span>
        </div>
      </div>
    </footer>
  );
}
