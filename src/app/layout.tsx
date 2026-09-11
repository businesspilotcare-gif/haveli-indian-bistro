import type { Metadata } from "next";
import { Inter, Archivo, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./haveli.css";
import PromoBar from "@/components/site/promo-bar";
import SiteHeader from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import StickyBar from "@/components/site/sticky-bar";
import ScrollReveal from "@/components/site/scroll-reveal";
import { restaurantJsonLd } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haveliindianbistro.com"),
  title: {
    default: "Haveli Indian Bistro: Authentic Indian Cuisine in Surrey",
    template: "%s | Haveli Indian Bistro",
  },
  description:
    "Experience authentic Indian flavors at Haveli Indian Bistro in Surrey, BC. Enjoy delicious curries, tandoori dishes, and more. Order online or visit us today! Dine-in, takeout, delivery, party hall & catering. Open late daily near King George SkyTrain.",
  keywords: [
    "Indian restaurant Surrey BC",
    "Indian restaurant King George Blvd",
    "butter chicken Surrey",
    "dum biryani Surrey",
    "tandoori restaurant Surrey",
    "late night food Surrey",
    "party hall Surrey",
    "Indian catering Surrey BC",
    "Haveli Indian Bistro",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://haveliindianbistro.com/",
    siteName: "Haveli Indian Bistro",
    title: "Haveli Indian Bistro - Authentic Indian Cuisine in Surrey",
    description:
      "Experience authentic Indian flavors at Haveli Indian Bistro in Surrey, BC. Order online or visit us today!",
    images: [{ url: "/assets/uploads/home_img11-ab851b.jpg", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haveli Indian Bistro - Authentic Indian Cuisine in Surrey",
    description:
      "Experience authentic Indian flavors at Haveli Indian Bistro in Surrey, BC. Order online or visit us today!",
  },
  icons: { icon: "/assets/uploads/haveli-logo-maroon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#4A0912" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
        />
      </head>
      <body className="mode-dark frames-off badges-off">
        <PromoBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyBar />
        <ScrollReveal />
      </body>
    </html>
  );
}
