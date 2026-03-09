import type { Metadata } from "next"

import HtmlLanguage from "@/components/HtmlLanguage"

export const metadata: Metadata = {
  title: "Portafolio en Español",
  description:
    "Portafolio en español de Jared Cruz con casos de estudio full-stack, desktop y automatización.",
  alternates: {
    canonical: "/es/",
    languages: {
      en: "/en/",
      es: "/es/",
    },
  },
  openGraph: {
    locale: "es_ES",
  },
}

export default function EsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HtmlLanguage lang="es" />
      {children}
    </>
  )
}
