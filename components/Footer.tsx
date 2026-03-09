"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { SOCIAL_LINKS } from "@/lib/site"

export default function Footer() {
  const pathname = usePathname()
  const isSpanish = pathname.startsWith("/es")
  const localeHome = isSpanish ? "/es" : "/en"

  const copy = {
    home: isSpanish ? "Inicio" : "Home",
    projects: isSpanish ? "Proyectos" : "Projects",
    skills: isSpanish ? "Capacidades" : "Capabilities",
    contact: isSpanish ? "Contacto" : "Contact",
    builtWith: isSpanish
      ? "Hecho con Next.js, Tailwind CSS y un enfoque en la claridad."
      : "Built with Next.js, Tailwind CSS, and a bias for clarity.",
    copyright: isSpanish
      ? `© ${new Date().getFullYear()} Jared Cruz. Portafolio bilingüe.`
      : `© ${new Date().getFullYear()} Jared Cruz. Bilingual portfolio.`,
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-card py-12 mt-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold bg-gradient-text mb-4 md:mb-0">Jared Cruz</div>

          <div className="flex space-x-5 mb-6 md:mb-0">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="p-2 rounded-full hover:bg-secondary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-primary group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="border-t border-border/20 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Link href={localeHome} className="transition-colors hover:text-foreground">
              {copy.home}
            </Link>
            <Link
              href={`${localeHome}/projects`}
              className="transition-colors hover:text-foreground"
            >
              {copy.projects}
            </Link>
            <Link
              href={`${localeHome}#skills`}
              className="transition-colors hover:text-foreground"
            >
              {copy.skills}
            </Link>
            <a href={SOCIAL_LINKS.email} className="transition-colors hover:text-foreground">
              {copy.contact}
            </a>
          </div>

          <div className="text-sm text-muted-foreground">{copy.copyright}</div>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground/60">{copy.builtWith}</div>
      </div>
    </footer>
  )
}
