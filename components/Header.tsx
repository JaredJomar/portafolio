"use client"

import Link from "next/link"
import { Github, Linkedin, Menu, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show theme toggle after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="bg-card/95 backdrop-blur-xl border-b border-border shadow-sm sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-text-light dark:bg-gradient-text-dark">Jared Cruz</div>
          <div className="hidden md:flex space-x-6 items-center">
            <NavItems />
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-3 rounded-full bg-secondary hover:bg-accent border border-border hover:border-primary/30 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 space-y-4 flex flex-col bg-card/95 backdrop-blur-xl border-b border-border/50">
          <NavItems />
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-full bg-background/80 border border-border/50 hover:bg-accent/50 transition-all duration-200 self-start"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
        </div>
      )}
    </header>
  )
}

function NavItems() {
  return (
    <>
      <Link href="#projects" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg hover:bg-accent/50">
        Projects
      </Link>
      <Link href="#skills" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg hover:bg-accent/50">
        Skills
      </Link>
      <a
        href="https://github.com/JaredJomar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent/50"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/jared-cruz-880359263/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent/50"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </>
  )
}

