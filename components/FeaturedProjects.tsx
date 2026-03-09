import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { projects } from "@/data/projects"
import type { Project } from "@/types/project"

type Locale = "en" | "es"

const copy = {
  en: {
    eyebrow: "Featured work",
    title: "Selected case studies",
    description:
      "A focused set of projects that best represent product thinking, implementation depth, and delivery range.",
    cta: "View all projects",
    cardCta: "Read case study",
    fallbackLabel: "Case study",
  },
  es: {
    eyebrow: "Trabajo destacado",
    title: "Casos de estudio seleccionados",
    description:
      "Una muestra breve de proyectos que representan mejor el enfoque de producto, la profundidad técnica y el rango de entrega.",
    cta: "Ver todos los proyectos",
    cardCta: "Ver estudio de caso",
    fallbackLabel: "Caso de estudio",
  },
} as const

function FeaturedProjectCard({
  locale,
  project,
}: {
  locale: Locale
  project: Project
}) {
  const content = project.content[locale]
  const screenshot = project.screenshots?.[0]

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      data-testid="project-card"
      className="group overflow-hidden rounded-3xl border border-border/60 bg-card/75 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
    >
      {screenshot ? (
        <div className="h-52 overflow-hidden border-b border-border/60 bg-muted/20">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${screenshot.src}`}
            alt={screenshot.alt}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex h-52 items-end border-b border-border/60 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.26),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(30,41,59,0.84))] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100/90">
            {copy[locale].fallbackLabel}
          </p>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-2xl font-semibold leading-tight transition-colors group-hover:text-primary">
          {content.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {content.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {content.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
          {copy[locale].cardCta}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedProjects({ locale }: { locale: Locale }) {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4)

  return (
    <section
      id="projects"
      data-testid="featured-projects"
      className="border-y border-border/40 bg-gradient-to-b from-background/60 to-background py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
              {copy[locale].eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {copy[locale].title}
            </h2>
            <p className="mt-4 text-lg font-medium text-muted-foreground">
              {copy[locale].description}
            </p>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            {copy[locale].cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} locale={locale} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
