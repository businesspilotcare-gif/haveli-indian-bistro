import type { Metadata } from "next";
import { Inter, Archivo, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./haveli.css";
import PromoBar from "@/components/site/promo-bar";
import SiteHeader from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import StickyBar from "@/components/site/sticky-bar";

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
  title: "Best Indian Restaurant in Surrey BC | Haveli Indian Bistro — Butter Chicken, Biryani, Tandoori | Order Online",
  description:
    "Authentic Indian and Punjabi restaurant in Surrey BC serving butter chicken, dum biryani, tandoori specialties, Indo-Chinese and chaat. Dine-in, takeout, delivery, private party hall and catering. Open late till 4 AM near King George SkyTrain.",
  keywords: [
    "Indian restaurant Surrey BC",
    "butter chicken Surrey",
    "dum biryani Surrey",
    "tandoori King George Blvd",
    "late night food Surrey",
    "party hall Surrey",
    "Indian catering Surrey BC",
  ],
  icons: { icon: "/assets/uploads/haveli-logo-maroon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="mode-dark frames-off badges-off">
        <PromoBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyBar />
      </body>
    </html>
  );
}
