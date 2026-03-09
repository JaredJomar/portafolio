import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageSrc(src: string) {
  if (src.startsWith("http")) {
    return src
  }
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`
}
