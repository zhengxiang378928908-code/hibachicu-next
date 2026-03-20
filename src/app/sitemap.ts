import type { MetadataRoute } from "next";

import { menuStates } from "@/lib/menu-states";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/menu",
  ];

  return [
    ...staticPages.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...menuStates.map((state) => ({
      url: absoluteUrl(`/menu/${state.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
