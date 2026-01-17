"use client"

import { useEffect, useState } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ProjectGrid from "../components/ProjectGrid"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="h-screen"></div>
      </div>
    )
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jared Cruz",
    url: siteUrl,
    jobTitle: "Computer Engineering Student",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puerto Rico",
    },
    sameAs: [
      "https://github.com/JaredJomar",
      "https://www.linkedin.com/in/jared-cruz-880359263/",
    ],
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Hero />
        <ProjectGrid />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
