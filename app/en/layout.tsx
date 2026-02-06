import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jared Cruz - Portfolio",
  description: "Personal portfolio of Jared Cruz, Computer Engineering Student",
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
  return <div lang="en">{children}</div>
}
