import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  title: "Jared Cruz - Portfolio",
  description: "Personal portfolio of Jared Cruz, Computer Engineering Student",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
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
    title: "Jared Cruz - Portfolio",
    description: "Personal portfolio of Jared Cruz, Computer Engineering Student",
    url: siteUrl,
    siteName: "Jared Cruz",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Jared Cruz Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jared Cruz - Portfolio",
    description: "Personal portfolio of Jared Cruz, Computer Engineering Student",
    images: ["/placeholder.jpg"],
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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
