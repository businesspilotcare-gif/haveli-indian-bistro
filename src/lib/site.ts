/**
 * Central business information for Haveli Indian Bistro.
 * Single source of truth — verified against haveliindianbistro.com
 * (the production site this new site replaces) on 2026-09-11.
 */

export const SITE = {
  name: "Haveli Indian Bistro",
  legalName: "Haveli Indian Bistro Ltd.",
  tagline: "Indian Flavours, Elevated",
  phoneDisplay: "(604) 503-1266",
  phoneHref: "tel:+16045031266",
  address: {
    street: "7488 King George Blvd, Unit 350",
    city: "Surrey",
    province: "BC",
    postal: "V3W 0H9",
    country: "CA",
  },
  geo: { lat: 49.13872, lng: -122.842709 },
  mapsUrl: "https://maps.google.com/?q=7488+King+George+Blvd+Surrey+BC",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=7488+King+George+Blvd+Unit+350+Surrey+BC+V3W+0H9",
  /**
   * Official opening hours (matches production site footer table).
   * Kitchen closes 1:00 AM Sunday–Thursday and 2:00 AM Friday–Saturday.
   */
  hours: {
    sunThu: "11:00 AM – 1:00 AM",
    friSat: "11:00 AM – 2:00 AM",
    short: "11 AM – 1 AM (Sun–Thu) · 11 AM – 2 AM (Fri–Sat)",
  },
  hoursRows: [
    ["Sunday", "11:00 AM – 1:00 AM"],
    ["Monday", "11:00 AM – 1:00 AM"],
    ["Tuesday", "11:00 AM – 1:00 AM"],
    ["Wednesday", "11:00 AM – 1:00 AM"],
    ["Thursday", "11:00 AM – 1:00 AM"],
    ["Friday", "11:00 AM – 2:00 AM"],
    ["Saturday", "11:00 AM – 2:00 AM"],
  ],
  socials: {
    facebook: "https://www.facebook.com/people/Haveli-Bistro/100093571557340/",
    instagram: "https://www.instagram.com/haveliindianbistro",
    youtube: "https://www.youtube.com/@HaveliBistro",
  },
  offers: [
    { code: "FIRST35", text: "35% off your first online order" },
    { code: "REPEAT15", text: "15% off from your 2nd order onwards" },
  ],
} as const;

export const HOURS_LINE_FOOTER = [
  "Sun – Thu: 11:00 AM – 1:00 AM",
  "Fri – Sat: 11:00 AM – 2:00 AM",
].join("\n");

/** Schema.org Restaurant structured data for SEO parity with the replaced site. */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.name,
    description:
      "Experience authentic Indian flavors at Haveli Indian Bistro in Surrey, BC. Enjoy delicious curries, tandoori dishes, and more. Order online or visit us today!",
    servesCuisine: ["Indian", "North Indian", "Punjabi", "Indo-Chinese"],
    priceRange: "$$",
    telephone: "+1-604-503-1266",
    url: "https://haveliindianbistro.com/",
    image: "/assets/uploads/home_img11-ab851b.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7488 King George Blvd, Unit 350",
      addressLocality: "Surrey",
      addressRegion: "BC",
      postalCode: "V3W 0H9",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "11:00",
        closes: "01:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:00",
        closes: "02:00",
      },
    ],
    sameAs: [SITE.socials.facebook, SITE.socials.instagram, SITE.socials.youtube],
    acceptsReservations: "True",
    hasMenu: "/menu",
  };
}
