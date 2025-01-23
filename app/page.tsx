<<<<<<< HEAD
import Header from "../components/Header"
import Hero from "../components/Hero"
import ProjectGrid from "../components/ProjectGrid"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
=======
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectGrid from '../components/ProjectGrid'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-color">
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <ProjectGrid />
        <Skills />
<<<<<<< HEAD
=======
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-text">GitHub Stats</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=JaredJomar&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true"
              alt="Jared's GitHub stats"
              width={400}
              height={200}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="https://github-readme-streak-stats.herokuapp.com/?user=JaredJomar&stroke=ffffff&background=1c1917&ring=3382ed&fire=3382ed&currStreakNum=ffffff&currStreakLabel=3382ed&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true"
              alt="Jared's GitHub streak stats"
              width={400}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
      </main>
      <Footer />
    </div>
  )
}

