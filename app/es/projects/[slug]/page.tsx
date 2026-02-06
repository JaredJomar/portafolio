import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { projects } from "@/data/projects"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const project = projects.find((item) => item.slug === params.slug)

  if (!project) {
    notFound()
  }

  const content = project.content.es

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/es/projects"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Volver a proyectos
          </Link>
          {project.featured ? (
            <span className="text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              Destacado
            </span>
          ) : null}
        </div>

        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {content.title}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            {content.summary}
          </p>
        </header>

        <div className="grid gap-6">
          <section className="rounded-xl border border-border/60 bg-card/60 p-6">
            <h2 className="text-lg font-semibold">Problema</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              {content.problem}
            </p>
          </section>

          <section className="rounded-xl border border-border/60 bg-card/60 p-6">
            <h2 className="text-lg font-semibold">Solución</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              {content.solution}
            </p>
          </section>

          <section className="rounded-xl border border-border/60 bg-card/60 p-6">
            <h2 className="text-lg font-semibold">Características clave</h2>
            <ul className="mt-4 grid gap-2">
              {content.features.map((feature) => (
                <li key={feature} className="text-muted-foreground leading-relaxed">
                  <span className="text-primary mr-2">-</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border/60 bg-card/60 p-6">
            <h2 className="text-lg font-semibold">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-1 rounded-lg bg-background/70 border border-border/60 text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-border/60 bg-card/60 p-6">
            <h2 className="text-lg font-semibold">Enlaces</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.links.repo ? (
                <a
                  href={content.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors"
                >
                  Repositorio
                </a>
              ) : null}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
