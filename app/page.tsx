"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import HeroLight from "../components/HeroLight"
import HeroDark from "../components/HeroDark"
import ProjectGridLight from "../components/ProjectGridLight"
import ProjectGridDark from "../components/ProjectGridDark"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

export default function Home() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // This effect ensures hydration is complete before rendering theme-dependent components
  useEffect(() => {
    setMounted(true)
  }, [])

  // Avoid hydration mismatch by rendering nothing until client-side
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="h-screen"></div>
      </div>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isDark ? <HeroDark /> : <HeroLight />}
        {isDark ? <ProjectGridDark /> : <ProjectGridLight />}
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

