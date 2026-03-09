import Link from "next/link"
import { ArrowRight, Download, Mail } from "lucide-react"

import FeaturedProjects from "@/components/FeaturedProjects"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Skills from "@/components/Skills"
import { projects } from "@/data/projects"
import { SITE_URL, SOCIAL_LINKS } from "@/lib/site"

type Locale = "en" | "es"

const homeCopy = {
  en: {
    eyebrow: "Computer Engineering Student · Puerto Rico",
    title: "I build practical software with clear product intent.",
    description:
      "Portfolio focused on full-stack web apps, desktop tooling, automation, and applied AI workflows. I care about useful scope, strong defaults, and maintainable delivery.",
    primaryCta: "Browse projects",
    secondaryCta: "Email me",
    resumeCta: "View resume",
    availability: "Open to internships, junior roles, and project collaborations.",
    previewLabel: "Selected work",
    previewTitle: "Case study preview",
    proofTitle: "What I optimize for",
    proofCards: [
      {
        title: "Clear user flows",
        body: "Interfaces that reduce friction and keep the core workflow obvious.",
      },
      {
        title: "Reliable implementation",
        body: "APIs, auth, databases, and desktop tooling wired with practical scope.",
      },
      {
        title: "Projects with depth",
        body: "Case studies grounded in tradeoffs, tooling choices, and repeatable setup.",
      },
    ],
    stats: [
      { value: `${projects.length}+`, label: "public projects" },
      { value: `${projects.filter((project) => project.featured).length}`, label: "featured case studies" },
      { value: "2", label: "site languages" },
    ],
  },
  es: {
    eyebrow: "Estudiante de Ingeniería en Computadoras · Puerto Rico",
    title: "Construyo software útil con enfoque de producto y ejecución clara.",
    description:
      "Portafolio centrado en aplicaciones web full-stack, herramientas de escritorio, automatización y flujos de IA aplicada. Me enfoco en resolver problemas reales con buen criterio técnico, alcance útil y código mantenible.",
    primaryCta: "Ver proyectos",
    secondaryCta: "Escríbeme",
    resumeCta: "Ver CV",
    availability: "Disponible para prácticas, posiciones junior y colaboraciones.",
    previewLabel: "Trabajo destacado",
    previewTitle: "Vista previa del caso de estudio",
    proofTitle: "Lo que priorizo al construir",
    proofCards: [
      {
        title: "Flujos claros",
        body: "Interfaces que reducen la fricción y hacen evidente el flujo principal.",
      },
      {
        title: "Implementación confiable",
        body: "APIs, autenticación, bases de datos y tooling conectados con un alcance realista.",
      },
      {
        title: "Proyectos con profundidad",
        body: "Casos de estudio respaldados por decisiones técnicas, tradeoffs claros y un setup reproducible.",
      },
    ],
    stats: [
      { value: `${projects.length}+`, label: "proyectos públicos" },
      { value: `${projects.filter((project) => project.featured).length}`, label: "casos destacados" },
      { value: "2", label: "idiomas del sitio" },
    ],
  },
} as const

export default function HomePage({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale]
  const localePath = locale === "en" ? "/en" : "/es"
  const previewProject =
    projects.find((project) => project.slug === "walletalert") ??
    projects.find((project) => project.featured && project.screenshots?.length)
  const previewContent = previewProject?.content[locale]

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jared Cruz",
    url: `${SITE_URL}${localePath}/`,
    jobTitle:
      locale === "en"
        ? "Computer Engineering Student"
        : "Estudiante de Ingeniería en Computadoras",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puerto Rico",
    },
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <section className="relative overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_32%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {copy.eyebrow}
                </p>
                <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {copy.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  {copy.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href={`${localePath}/projects`} className="btn-primary text-base">
                    {copy.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href={SOCIAL_LINKS.email} className="btn-secondary text-base">
                    <Mail className="h-4 w-4" />
                    {copy.secondaryCta}
                  </a>
                  <a
                    href={SOCIAL_LINKS.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/70 px-5 py-3 text-base font-medium transition-colors hover:bg-accent"
                  >
                    <Download className="h-4 w-4" />
                    {copy.resumeCta}
                  </a>
                </div>

                <p className="mt-6 text-sm font-medium text-muted-foreground">
                  {copy.availability}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {copy.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-border/60 bg-card/70 p-5 shadow-sm backdrop-blur"
                    >
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                      {copy.previewLabel}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">{copy.previewTitle}</h2>
                  </div>
                  {previewProject ? (
                    <Link
                      href={`${localePath}/projects/${previewProject.slug}`}
                      className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      {locale === "en" ? "Open" : "Abrir"}
                    </Link>
                  ) : null}
                </div>

                {previewProject && previewContent ? (
                  <div className="mt-6 space-y-5">
                    {previewProject.screenshots?.[0] ? (
                      <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/30">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${previewProject.screenshots[0].src}`}
                          alt={previewProject.screenshots[0].alt}
                          className="h-60 w-full object-cover object-top"
                          loading="eager"
                        />
                      </div>
                    ) : null}

                    <div>
                      <h3 className="text-xl font-semibold">{previewContent.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {previewContent.summary}
                      </p>
                    </div>

                    <ul className="grid gap-2">
                      {previewContent.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-muted-foreground"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {previewContent.stack.slice(0, 5).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium text-foreground/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                {locale === "en" ? "Working style" : "Forma de trabajo"}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.proofTitle}
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {copy.proofCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FeaturedProjects locale={locale} />
        <Skills locale={locale} />
      </main>
      <Footer />
    </div>
  )
}
