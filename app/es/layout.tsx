import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jared Cruz - Portafolio",
  description: "Portafolio personal de Jared Cruz, estudiante de Ingenieria en Computadoras",
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
  return <div lang="es">{children}</div>
}
