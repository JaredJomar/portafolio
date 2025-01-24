import type { Project } from "../types/project"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-effect overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <i className={`fas ${project.icon} text-3xl text-primary mr-3`}></i>
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-full transition-all duration-300"
        >
          View Project
        </a>
      </div>
    </article>
  )
}

