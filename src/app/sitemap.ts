import type { MetadataRoute } from "next";
import { ALL_PAGES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ALL_PAGES.map((item) => ({
    url: new URL(item.href, SITE.url).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
