import type { Metadata } from "next"

import HomePage from "@/components/HomePage"

export const metadata: Metadata = {
  title: "English Home",
  description:
    "English home of Jared Cruz's portfolio with selected full-stack, desktop, automation, and AI projects.",
  alternates: {
    canonical: "/en/",
    languages: {
      en: "/en/",
      es: "/es/",
    },
  },
}

export default function Page() {
  return <HomePage locale="en" />
}
