"use client"

import Link from "next/link"
import { Github, Linkedin, Menu, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

import LanguageSwitcher from "@/components/LanguageSwitcher"
import { SOCIAL_LINKS } from "@/lib/site"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const isSpanish = pathname.startsWith("/es")
  const localeHome = isSpanish ? "/es" : "/en"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="bg-card/95 backdrop-blur-xl border-b border-border shadow-sm sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <Link
            href={localeHome}
            className="text-2xl font-bold bg-gradient-text-light dark:bg-gradient-text-dark"
          >
            Jared Cruz
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <NavItems isSpanish={isSpanish} />
            <LanguageSwitcher />
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-3 rounded-full bg-secondary hover:bg-accent border border-border hover:border-primary/30 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label={isSpanish ? "Cambiar tema" : "Toggle theme"}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isSpanish ? "Abrir menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 space-y-4 flex flex-col bg-card/95 backdrop-blur-xl border-b border-border/50">
          <NavItems isSpanish={isSpanish} />
          <LanguageSwitcher className="self-start" />
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-full bg-background/80 border border-border/50 hover:bg-accent/50 transition-all duration-200 self-start"
              aria-label={isSpanish ? "Cambiar tema" : "Toggle theme"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
        </div>
      )}
    </header>
  )
}

function NavItems({ isSpanish }: { isSpanish: boolean }) {
  const localeHome = isSpanish ? "/es" : "/en"
  const homeLabel = isSpanish ? "Inicio" : "Home"
  const projectsLabel = isSpanish ? "Proyectos" : "Projects"
  const skillsLabel = isSpanish ? "Capacidades" : "Capabilities"
  const resumeLabel = isSpanish ? "CV" : "Resume"

  return (
    <>
      <Link
        href={localeHome}
        className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg hover:bg-accent/50"
      >
        {homeLabel}
      </Link>
      <Link
        href={`${localeHome}#projects`}
        className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg hover:bg-accent/50"
      >
        {projectsLabel}
      </Link>
      <Link
        href={`${localeHome}#skills`}
        className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg hover:bg-accent/50"
      >
        {skillsLabel}
      </Link>
      <a
        href={SOCIAL_LINKS.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg hover:bg-accent/50"
      >
        {resumeLabel}
      </a>
      <a
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent/50"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent/50"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </>
  )
}
