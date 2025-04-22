"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="bg-card py-12 mt-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold bg-gradient-text mb-4 md:mb-0">Jared Cruz</div>

          <div className="flex space-x-5 mb-6 md:mb-0">
            <a
              href="https://github.com/JaredJomar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jared-cruz-880359263/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jared.cruz@upr.edu"
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

        <div className="border-t border-border/20 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-center space-x-4 mb-4 md:mb-0">
            <Image
              src="https://img.shields.io/github/followers/JaredJomar?logo=github&style=for-the-badge&color=3382ed&labelColor=1c1917"
              alt="GitHub followers"
              width={150}
              height={28}
              className="rounded"
            />
            <Image
              src="https://wakatime.com/badge/user/628ab87c-405a-4a29-8c87-079bc17f01c2.svg"
              alt="WakaTime stats"
              width={190}
              height={28}
              className="rounded"
            />
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jared Cruz. All projects under MIT License.
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground/60">
          Built with Next.js, Tailwind CSS, and 💙
        </div>
      </div>
    </footer>
  )
}

