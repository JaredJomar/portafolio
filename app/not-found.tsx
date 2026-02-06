import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-border/50 bg-card/80 backdrop-blur p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-muted-foreground">
          The page you requested does not exist (or it was moved).
        </p>

        <div className="mt-6 grid gap-3">
          <Link href="/" className="btn-primary text-center">
            Go to language selector
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/en/projects" className="btn-secondary text-center">
              English projects
            </Link>
            <Link href="/es/projects" className="btn-secondary text-center">
              Proyectos en Espanol
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
