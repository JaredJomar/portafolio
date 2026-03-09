import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Choose Language",
  description:
    "Choose between the English and Spanish versions of Jared Cruz's portfolio.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/en/",
      es: "/es/",
    },
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.14),_transparent_48%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_34%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
              Jared Cruz
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Choose your preferred language.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Portfolio focused on practical web systems, desktop tools, automation,
              and applied AI workflows.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Link
              href="/en"
              className="rounded-3xl border border-border/70 bg-card/80 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                English
              </p>
              <h2 className="mt-4 text-2xl font-semibold">View portfolio in English</h2>
              <p className="mt-3 text-muted-foreground">
                Selected case studies, project archive, and technical capabilities.
              </p>
            </Link>

            <Link
              href="/es"
              className="rounded-3xl border border-border/70 bg-card/80 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                Español
              </p>
              <h2 className="mt-4 text-2xl font-semibold">Ver portafolio en español</h2>
              <p className="mt-3 text-muted-foreground">
                Casos de estudio, archivo de proyectos y capacidades técnicas.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
