import type { Metadata } from "next"
import Link from "next/link"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { projects } from "@/data/projects"
import type { Project, ProjectCollection } from "@/types/project"

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Archivo curado del portafolio de Jared Cruz, separado entre casos destacados, archivo técnico y scripts de automatización secundaria.",
  alternates: {
    canonical: "/es/projects/",
    languages: {
      en: "/en/projects/",
      es: "/es/projects/",
    },
  },
}

const sectionCopy: Record<
  ProjectCollection,
  {
    title: string
    description: string
    badge: string
    cta: string
  }
> = {
  featured: {
    title: "Casos de estudio destacados",
    description:
      "Las piezas más fuertes del portafolio: proyectos con mejor enfoque de producto, profundidad técnica y valor de presentación.",
    badge: "Destacado",
    cta: "Ver estudio de caso",
  },
  archive: {
    title: "Archivo de proyectos",
    description:
      "Trabajo de ingeniería más amplio, incluyendo proyectos académicos, utilidades de escritorio y exploraciones técnicas.",
    badge: "Archivo",
    cta: "Abrir detalles",
  },
  automation: {
    title: "Automatización y scripts de navegador",
    description:
      "Experimentos secundarios enfocados en automatización, scripting del DOM y mejoras de flujo en el navegador.",
    badge: "Automatización",
    cta: "Abrir detalles",
  },
}

const sectionOrder: ProjectCollection[] = ["featured", "archive", "automation"]

function ProjectSectionCard({
  project,
  collection,
}: {
  project: Project
  collection: ProjectCollection
}) {
  const content = project.content.es

  return (
    <Link
      key={project.slug}
      href={`/es/projects/${project.slug}`}
      className="group block h-full rounded-2xl border border-border/60 bg-card/60 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/80 hover:shadow-lg"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight transition-colors group-hover:text-primary">
            {content.title}
          </h3>
          <span className="shrink-0 rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[11px] text-primary">
            {sectionCopy[collection].badge}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {content.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {content.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border/60 bg-background/70 px-2 py-1 text-[11px] text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 text-sm font-medium text-primary">
          {sectionCopy[collection].cta}
        </div>
      </div>
    </Link>
  )
}

export default function Page() {
  const groupedProjects = {
    featured: projects.filter((project) => project.collection === "featured"),
    archive: projects.filter((project) => project.collection === "archive"),
    automation: projects.filter((project) => project.collection === "automation"),
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section id="projects" className="py-4">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold md:text-4xl">Proyectos</h1>
              <p className="mt-3 text-muted-foreground">
                Curado para mostrar primero el trabajo que mejor representa el enfoque de
                producto, sin esconder el archivo técnico completo.
              </p>
            </div>
            <Link
              href="/es"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Volver al inicio
            </Link>
          </div>

          <div className="space-y-16">
            {sectionOrder.map((collection) => (
              <section key={collection} className="space-y-6">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold">{sectionCopy[collection].title}</h2>
                  <p className="mt-2 text-muted-foreground">
                    {sectionCopy[collection].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {groupedProjects[collection].map((project) => (
                    <ProjectSectionCard
                      key={project.slug}
                      project={project}
                      collection={collection}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
