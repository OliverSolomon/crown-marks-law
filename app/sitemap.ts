import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/firm";
import { practices } from "@/content/practices";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/about", "/practices", "/people", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const practiceRoutes = practices.map((p) => ({
    url: `${siteUrl}/practices/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...practiceRoutes];
}
