"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
  className?: string
}

function getLocaleFromPathname(pathname: string) {
  const match = pathname.match(/^\/(en|es)(?=\/|$)/)
  return match?.[1] ?? null
}

export default function LanguageSwitcher({ className }: Props) {
  const pathname = usePathname()

  const isRootEnglish = pathname === "/"
  const currentLocale = isRootEnglish ? "en" : getLocaleFromPathname(pathname)
  if (!currentLocale) return null

  const nextLocale = currentLocale === "en" ? "es" : "en"
  const nextPathname = isRootEnglish
    ? "/es"
    : pathname.replace(/^\/(en|es)(?=\/|$)/, `/${nextLocale}`)

  const label = nextLocale === "en" ? "EN" : "ES"
  const ariaLabel = nextLocale === "en" ? "Switch language to English" : "Switch language to Spanish"

  return (
    <Link
      href={nextPathname}
      aria-label={ariaLabel}
      className={
        "px-3 py-2 rounded-full bg-secondary hover:bg-accent border border-border hover:border-primary/30 transition-all duration-200 shadow-sm hover:shadow-md text-sm font-medium" +
        (className ? ` ${className}` : "")
      }
    >
      {label}
    </Link>
  )
}
