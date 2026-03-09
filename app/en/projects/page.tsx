import type { Metadata } from "next"
import Link from "next/link"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { projects } from "@/data/projects"
import type { Project, ProjectCollection } from "@/types/project"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated project archive from Jared Cruz's portfolio, split between featured case studies, broader project work, and browser automation experiments.",
  alternates: {
    canonical: "/en/projects/",
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
    title: "Featured case studies",
    description:
      "The strongest portfolio pieces: projects with the clearest product framing, implementation depth, and presentation value.",
    badge: "Featured",
    cta: "Read case study",
  },
  archive: {
    title: "Project archive",
    description:
      "Broader engineering work including academic builds, desktop utilities, and exploratory technical projects.",
    badge: "Archive",
    cta: "Open project details",
  },
  automation: {
    title: "Browser automation and scripts",
    description:
      "Secondary experiments focused on automation, DOM scripting, and quality-of-life browser workflows.",
    badge: "Automation",
    cta: "Open project details",
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
  const content = project.content.en

  return (
    <Link
      key={project.slug}
      href={`/en/projects/${project.slug}`}
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
              <h1 className="text-3xl font-bold md:text-4xl">Projects</h1>
              <p className="mt-3 text-muted-foreground">
                Curated to surface the work that best represents product thinking first, while
                still keeping the broader archive accessible.
              </p>
            </div>
            <Link
              href="/en"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Back to home
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
