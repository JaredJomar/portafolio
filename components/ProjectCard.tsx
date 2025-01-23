<<<<<<< HEAD
import type { Project } from "../types/project"
=======
<<<<<<< HEAD
import type { Project } from "../types/project"
=======
import { Project } from '../types/project'
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-effect overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
          <i className={`fas ${project.icon} text-3xl text-primary mr-3`}></i>
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
<<<<<<< HEAD
            <span key={tech} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
=======
            <span key={tech} className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm">
=======
          <i className={`fas ${project.icon} text-3xl text-primary-color mr-3`}></i>
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>
        <p className="text-text-secondary mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-color bg-opacity-10 text-primary-color rounded-full text-sm"
            >
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
<<<<<<< HEAD
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-full transition-all duration-300"
=======
<<<<<<< HEAD
          className="inline-block bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
=======
          className="inline-block bg-primary-color hover:bg-secondary-color text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
        >
          View Project
        </a>
      </div>
    </article>
  )
}

