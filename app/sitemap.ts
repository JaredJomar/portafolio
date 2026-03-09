import type { MetadataRoute } from "next"

import { projects } from "@/data/projects"
import { SITE_URL } from "@/lib/site"

const buildUrl = (path: string) => `${SITE_URL}${path}`

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projects.flatMap((project) => [
    {
      url: buildUrl(`/en/projects/${project.slug}/`),
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.8 : 0.6,
    },
    {
      url: buildUrl(`/es/projects/${project.slug}/`),
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.8 : 0.6,
    },
  ])

  return [
    {
      url: buildUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: buildUrl("/en/"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: buildUrl("/es/"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: buildUrl("/en/projects/"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: buildUrl("/es/projects/"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...projectEntries,
  ]
}
