import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Bilingual portfolio of Jared Cruz featuring full-stack, desktop, automation, and applied AI projects.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en/",
      es: "/es/",
    },
  },
  keywords: [
    "Jared Cruz",
    "portfolio",
    "computer engineering",
    "full-stack developer",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Jared Cruz" }],
  creator: "Jared Cruz",
  publisher: "Jared Cruz",
  openGraph: {
    title: SITE_TITLE,
    description:
      "Bilingual portfolio of Jared Cruz featuring full-stack, desktop, automation, and applied AI projects.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Bilingual portfolio of Jared Cruz featuring full-stack, desktop, automation, and applied AI projects.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
