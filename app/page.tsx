import Header from "../components/Header"
import Hero from "../components/Hero"
import ProjectGrid from "../components/ProjectGrid"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <ProjectGrid />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

