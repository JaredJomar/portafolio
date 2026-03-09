"use client"

import { Code2, Database, Bot, MonitorSmartphone } from "lucide-react"
import { motion } from "framer-motion"

type Locale = "en" | "es"

const capabilityGroups = [
  {
    icon: MonitorSmartphone,
    color: "from-blue-500 to-cyan-400",
    category: {
      en: "Frontend delivery",
      es: "Entrega frontend",
    },
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Accessible UI patterns"],
  },
  {
    icon: Database,
    color: "from-emerald-500 to-lime-400",
    category: {
      en: "Backend and data",
      es: "Backend y datos",
    },
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    icon: Code2,
    color: "from-amber-500 to-orange-400",
    category: {
      en: "Desktop and tooling",
      es: "Desktop y tooling",
    },
    items: ["Python", "PyQt5", "PyQt6", "FFmpeg", "yt-dlp"],
  },
  {
    icon: Bot,
    color: "from-violet-500 to-fuchsia-400",
    category: {
      en: "Automation and AI workflows",
      es: "Automatización e IA aplicada",
    },
    items: ["OpenAI Whisper", "NLP", "ETL", "Browser automation", "Scripting workflows"],
  },
]

const copy = {
  en: {
    eyebrow: "Capabilities",
    title: "Core areas I ship in",
    subtitle:
      "A concise view of the technologies and delivery patterns that appear repeatedly across the portfolio.",
  },
  es: {
    eyebrow: "Capacidades",
    title: "Áreas principales donde entrego",
    subtitle:
      "Vista breve de las tecnologías y patrones de entrega que aparecen repetidamente en el portafolio.",
  },
} as const

export default function Skills({ locale = "en" }: { locale?: Locale }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  }

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
            {copy[locale].eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {copy[locale].title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{copy[locale].subtitle}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {capabilityGroups.map((group) => {
            const Icon = group.icon

            return (
              <motion.article
                key={group.category.en}
                variants={item}
                className="rounded-3xl border border-border/60 bg-card/75 p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-2xl bg-gradient-to-br ${group.color} p-3 text-white shadow-sm`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{group.category[locale]}</h3>
                </div>

                <ul className="mt-6 grid gap-3">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-2xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
