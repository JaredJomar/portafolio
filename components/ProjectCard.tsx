import type { Project } from "../types/project"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-500/30 dark:border-slate-800 dark:hover:border-cyan-500/30 shadow-md hover:shadow-lg dark:shadow-lg dark:hover:shadow-cyan-500/10 transition-all h-full">
      <div className="h-48 bg-blue-50 dark:bg-gradient-to-r dark:from-slate-700/20 dark:to-slate-800/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 dark:from-cyan-500/10 dark:to-purple-600/10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
        <div className="absolute top-4 left-4 p-2 bg-blue-100 text-blue-700 dark:bg-primary/10 dark:text-primary rounded-lg">
          <i className={`fas ${project.icon} text-xl`}></i>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-slate-800 dark:text-cyan-400 dark:border-slate-700 dark:hover:bg-slate-700 border transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:btn-gradient text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:translate-y-[-2px]"
        >
          View Project <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  )
}

