import type { Metadata } from "next"

import HomePage from "@/components/HomePage"

export const metadata: Metadata = {
  title: "Inicio en Español",
  description:
    "Inicio del portafolio de Jared Cruz con proyectos destacados de web full-stack, desktop, automatización e IA aplicada.",
  alternates: {
    canonical: "/es/",
    languages: {
      en: "/en/",
      es: "/es/",
    },
  },
}

export default function Page() {
  return <HomePage locale="es" />
}
