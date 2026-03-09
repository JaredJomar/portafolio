import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { projects } from "@/data/projects"

const collectionLabels = {
  featured: "Caso destacado",
  archive: "Archivo",
  automation: "Script de automatización",
} as const

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const project = projects.find((item) => item.slug === params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    }
  }

  return {
    title: project.content.es.title,
    description: project.content.es.summary,
    alternates: {
      canonical: `/es/projects/${project.slug}/`,
      languages: {
        en: `/en/projects/${project.slug}/`,
        es: `/es/projects/${project.slug}/`,
      },
    },
  }
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
          <span className="text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            {collectionLabels[project.collection]}
          </span>
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
          {content.context ? (
            <section className="rounded-xl border border-border/60 bg-card/60 p-6">
              <h2 className="text-lg font-semibold">Contexto</h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {content.context}
              </p>
            </section>
          ) : null}

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

          {content.decisions?.length ? (
            <section className="rounded-xl border border-border/60 bg-card/60 p-6">
              <h2 className="text-lg font-semibold">Decisiones clave</h2>
              <ul className="mt-4 grid gap-2">
                {content.decisions.map((decision) => (
                  <li key={decision} className="text-muted-foreground leading-relaxed">
                    <span className="text-primary mr-2">-</span>
                    {decision}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.screenshots?.length ? (
            <section
              data-testid="case-study-screenshots"
              className="rounded-xl border border-border/60 bg-card/60 p-6"
            >
              <h2 className="text-lg font-semibold">Capturas</h2>
              <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2">
                {project.screenshots.map(({ src, alt, caption }) => (
                  <figure key={src} className="space-y-2">
                    <img
                      src={src}
                      alt={alt}
                      className="w-full rounded-lg border border-border/60 bg-muted"
                      loading="lazy"
                      decoding="async"
                    />
                    {caption ? (
                      <figcaption className="text-sm text-muted-foreground">
                        {caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

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

          {content.results?.length ? (
            <section className="rounded-xl border border-border/60 bg-card/60 p-6">
              <h2 className="text-lg font-semibold">Resultados</h2>
              <ul className="mt-4 grid gap-2">
                {content.results.map((result) => (
                  <li key={result} className="text-muted-foreground leading-relaxed">
                    <span className="text-primary mr-2">-</span>
                    {result}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

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
              {content.links.live ? (
                <a
                  href={content.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors"
                >
                  Demo
                </a>
              ) : null}
              {content.links.docs ? (
                <a
                  href={content.links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors"
                >
                  Documentación
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
