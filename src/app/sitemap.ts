import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/blog";
import { menuCities } from "@/lib/menu-cities";
import { menuStates } from "@/lib/menu-states";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/menu",
    "/blog",
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
    ...menuCities.map((city) => ({
      url: absoluteUrl(city.path),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...getAllPosts().map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
