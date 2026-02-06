import Link from "next/link"

import { projects } from "@/data/projects"
import type { Project } from "@/types/project"

type Locale = "en" | "es"

const copy: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Featured Projects",
    description: "Selected case studies with clear problems, solutions, and results.",
  },
  es: {
    title: "Proyectos Destacados",
    description: "Casos de estudio seleccionados con problema, solución y resultados claros.",
  },
}

function ProjectCard({ locale, project }: { locale: Locale; project: Project }) {
  const content = project.content[locale]

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      data-testid="project-card"
      className="group card-interactive h-full flex flex-col p-6"
    >
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {content.title}
      </h3>
      <p className="text-muted-foreground text-base leading-relaxed">
        {content.summary}
      </p>
    </Link>
  )
}

export default function FeaturedProjects({
  locale,
}: {
  locale: "en" | "es"
}) {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section
      id="projects"
      data-testid="featured-projects"
      className="py-24 bg-gradient-to-b from-background/60 to-background transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-text-light dark:bg-gradient-text-dark">
            {copy[locale].title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
            {copy[locale].description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} locale={locale} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
