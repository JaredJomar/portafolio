import type { Project } from "../types/project"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ProjectCardDark({ project }: { project: Project }) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/30 shadow-lg hover:shadow-cyan-500/10 transition-all h-full">
      <div className="h-48 bg-gradient-to-r from-slate-700/20 to-slate-800/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute top-4 left-4 p-2 bg-primary/10 text-primary rounded-lg">
          <i className={`fas ${project.icon} text-xl`}></i>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              className="bg-slate-800 text-cyan-400 border-slate-700 hover:bg-slate-700 border transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-gradient text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:translate-y-[-2px]"
        >
          View Project <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  )
}