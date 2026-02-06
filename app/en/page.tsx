import Image from "next/image"
import Link from "next/link"

import Header from "@/components/Header"
import FeaturedProjects from "@/components/FeaturedProjects"
import Footer from "@/components/Footer"
import Skills from "@/components/Skills"

export default function Page() {
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <section className="relative overflow-hidden py-24 bg-gradient-to-b from-background to-background/80 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-wide text-muted-foreground">
                  Computer Engineering Student - Puerto Rico
                </p>
                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-text-light dark:bg-gradient-text-dark">
                  Hi{" "}
                  <Image
                    src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                    width={42}
                    height={42}
                    alt="Waving hand"
                    className="inline align-[-6px]"
                  />{" "}
                  I build practical web systems with clear intent.
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  Full-stack focus across UI, APIs, databases, authentication, and cloud deployment.
                  I care about thoughtful design, secure defaults, and maintainable code.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href="https://flowcv.com/resume/elab410wok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-base"
                  >
                    View Resume
                  </a>
                  <Link href="/en/projects" className="btn-secondary text-base">
                    Browse Projects
                  </Link>
                </div>
              </div>

              <div className="w-full flex justify-center lg:justify-end">
                <Image
                  src="https://c.tenor.com/ccmSmZhIXNwAAAAC/code-lyoko-jeremy.gif"
                  width={500}
                  height={280}
                  alt="Coding gif"
                  className="rounded-xl shadow-xl dark:shadow-blue-900/30 border border-border/60"
                  priority
                />
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="card-interactive p-6">
                <h2 className="text-base font-semibold text-foreground">Engineering mindset</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Structure first: requirements, tradeoffs, and predictable delivery.
                </p>
              </div>
              <div className="card-interactive p-6">
                <h2 className="text-base font-semibold text-foreground">Production habits</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Type-safe code, clear interfaces, and a preference for simple systems.
                </p>
              </div>
              <div className="card-interactive p-6">
                <h2 className="text-base font-semibold text-foreground">Curiosity driven</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Always learning: modern frameworks, cloud tooling, and applied AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeaturedProjects locale="en" />

        <Skills locale="en" />
      </main>
      <Footer />
    </div>
  )
}
