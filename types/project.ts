export interface ProjectLinks {
  repo?: string
  live?: string
  docs?: string
}

export interface ProjectLocaleContent {
  title: string
  summary: string
  problem: string
  solution: string
  features: string[]
  stack: string[]
  links: ProjectLinks
}

export interface ProjectContent {
  en: ProjectLocaleContent
  es: ProjectLocaleContent
}

export interface Project {
  slug: string
  featured?: boolean

  // Legacy fields kept for incremental rollout.
  title: string
  icon: string
  description: string
  technologies: string[]
  link: string

  // Bilingual case-study content.
  content: ProjectContent
}
