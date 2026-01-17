import type { Project } from "../types/project"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ProjectCard({ project }: { project: Project }) {
    return (
    <div className="group card-interactive h-full flex flex-col">
        <div className="h-48 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden shrink-0 rounded-t-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 dark:from-blue-600/10 dark:to-indigo-600/10 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background dark:from-background/90 to-transparent"></div>
            
            <div className="absolute top-4 left-4 p-3 bg-background/80 backdrop-blur-sm text-primary rounded-lg shadow-sm border border-border/50 transform transition-transform duration-300 group-hover:scale-105">
                <i className={`fas ${project.icon} text-lg`}></i>
            </div>
        </div>
        
        <div className="p-6 flex flex-col grow">
            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                    <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 transition-colors px-3 py-1 text-xs"
                    >
                        {tech}
                    </Badge>
                ))}
            </div>
            
            <div className="mt-auto pt-2">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                >
                    View Project <ArrowUpRight size={16} />
                </a>
            </div>
        </div>
    </div>
    )
}
