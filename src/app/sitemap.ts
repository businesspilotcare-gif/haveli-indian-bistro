import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://haveliindianbistro.com";
  const routes: [string, number][] = [
    ["", 1.0],
    ["/menu", 0.9],
    ["/order", 0.9],
    ["/reservations", 0.8],
    ["/party-hall", 0.8],
    ["/about", 0.7],
    ["/contact", 0.7],
    ["/areas-faq", 0.7],
    ["/blog", 0.6],
    ["/privacy-policy", 0.3],
    ["/terms-and-conditions", 0.3],
    ["/accessibility-statement", 0.3],
  ];
  return routes.map(([path, priority]) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/menu" ? "daily" : "weekly",
    priority,
  }));
}
