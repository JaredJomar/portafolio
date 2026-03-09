"use client"

import { useEffect } from "react"

export default function HtmlLanguage({ lang }: { lang: "en" | "es" }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return null
}
