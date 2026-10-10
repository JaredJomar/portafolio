export const SITE_NAME = "Jared Cruz"
export const SITE_TITLE = `${SITE_NAME} | Portfolio`
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaredjomar.github.io/portafolio"
export const DEFAULT_OG_IMAGE = "/og-card.svg"

export const SOCIAL_LINKS = {
  github: "https://github.com/JaredJomar",
  linkedin: "https://www.linkedin.com/in/jared-cruz-880359263/",
  email: "mailto:jared.cruz@upr.edu",
  resume: "https://flowcv.com/resume/elab410wok",
} as const
