import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { projects } from "@/data/projects"

export default function Page() {
  const sortedProjects = [...projects].sort((a, b) => {
    return Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="projects" className="py-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Featured case studies first, followed by the full project archive.
              </p>
            </div>
            <Link
              href="/en"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Back to home
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/en/projects/${project.slug}`}
                className="group block h-full rounded-xl border border-border/60 bg-card/60 hover:bg-card/80 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    {project.featured ? (
                      <span className="shrink-0 text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        Featured
                      </span>
                    ) : null}
                  </div>

                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-1 rounded-lg bg-background/70 border border-border/60 text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 text-sm font-medium text-primary">
                    Read case study
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
