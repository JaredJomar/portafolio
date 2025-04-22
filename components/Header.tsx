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
    <header className="bg-card shadow-md sticky top-0 z-50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-text">Jared Cruz</div>
          <div className="hidden md:flex space-x-8 items-center">
            <NavItems />
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 space-y-4 flex flex-col">
          <NavItems />
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors self-start"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
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
      <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
        Projects
      </Link>
      <Link href="#skills" className="text-foreground hover:text-primary transition-colors">
        Skills
      </Link>
      <a
        href="https://github.com/JaredJomar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/jared-cruz-880359263/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </>
  )
}

