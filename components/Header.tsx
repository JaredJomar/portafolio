"use client"

import Link from 'next/link'
import { Github, Linkedin, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card-background shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-text">Jared Cruz</div>
          <div className="hidden md:flex space-x-8 items-center">
            <NavItems />
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 space-y-2">
          <NavItems />
        </div>
      )}
    </header>
  )
}

function NavItems() {
  return (
    <>
      <Link href="#projects" className="text-text-color hover:text-primary-color transition-colors">
        Projects
      </Link>
      <Link href="#skills" className="text-text-color hover:text-primary-color transition-colors">
        Skills
      </Link>
      <a
        href="https://github.com/JaredJomar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-color hover:text-primary-color transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/jared-cruz-880359263/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-color hover:text-primary-color transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </>
  )
}

