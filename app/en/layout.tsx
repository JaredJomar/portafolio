import type { Metadata } from "next"

import HtmlLanguage from "@/components/HtmlLanguage"

export const metadata: Metadata = {
  title: "English Portfolio",
  description:
    "English portfolio of Jared Cruz with selected full-stack, desktop, and automation case studies.",
  alternates: {
    canonical: "/en/",
    languages: {
      en: "/en/",
      es: "/es/",
    },
  },
  openGraph: {
    locale: "en_US",
  },
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HtmlLanguage lang="en" />
      {children}
    </>
  )
}
