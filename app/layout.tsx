<<<<<<< HEAD
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jared Cruz - Portfolio",
  description: "Personal portfolio of Jared Cruz, Computer Engineering Student",
=======
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
}

export default function RootLayout({
  children,
<<<<<<< HEAD
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

=======
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
