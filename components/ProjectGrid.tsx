"use client"

import { useState, useMemo } from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { RefreshCw } from "lucide-react"

const filterCategories = [
    { id: "languages", label: "Languages", techs: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML5", "CSS3", "Batch Scripting"] },
    { id: "frameworks", label: "Frameworks & Libraries", techs: ["React", "Next.js", "PyQt5", "PyQt6", "Tkinter", "Tampermonkey"] },
    { id: "tools", label: "Tools & APIs", techs: ["Archive.org API", "Twitch API", "YouTube API", "FFmpeg", "Docker", "Git"] },
    { id: "databases", label: "Databases", techs: ["PostgreSQL", "MySQL"] }
]

export default function ProjectGrid() {
    const [visibleProjects, setVisibleProjects] = useState(6)
    const [activeFilter, setActiveFilter] = useState<string | null>(null)
    const [activeCategory, setActiveCategory] = useState<string>("languages")
    const totalProjects = projects.length

    const allTechnologies = useMemo(() => {
        return Array.from(
            new Set(
                projects.flatMap(project => project.technologies)
            )
        ).sort()
    }, [])

    const technologiesByCategory = useMemo(() => {
        const result: Record<string, string[]> = {};

        filterCategories.forEach(category => {
            const availableTechs = category.techs.filter(tech =>
                allTechnologies.includes(tech)
            );

            if (availableTechs.length > 0) {
                result[category.id] = availableTechs;
            }
        });

        return result;
    }, [allTechnologies]);

    const filteredProjects = useMemo(() => {
        if (!activeFilter) return projects;
        return projects.filter(project => project.technologies.includes(activeFilter));
    }, [activeFilter]);

    const toggleFilter = (filter: string) => {
        setActiveFilter(activeFilter === filter ? null : filter);
    }

    const switchCategory = (categoryId: string) => {
        setActiveCategory(categoryId);
    }

    const resetFilters = () => {
        setActiveFilter(null);
    }

    const loadMore = () => {
        setVisibleProjects(activeFilter ? filteredProjects.length : totalProjects);
    }

    const getCategoryStyles = (id: string, active: boolean) => {
        if (!active) return "bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary/30 border-border shadow-sm";

        switch (id) {
            case "languages":
                return "bg-blue-600 text-white dark:bg-blue-900/40 dark:text-blue-300 border-blue-600 dark:border-blue-600 shadow-md hover:shadow-lg";
            case "frameworks":
                return "bg-purple-600 text-white dark:bg-purple-900/40 dark:text-purple-300 border-purple-600 dark:border-purple-600 shadow-md hover:shadow-lg";
            case "tools":
                return "bg-green-600 text-white dark:bg-green-900/40 dark:text-green-300 border-green-600 dark:border-green-600 shadow-md hover:shadow-lg";
            default:
                return "bg-indigo-600 text-white dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-600 dark:border-indigo-600 shadow-md hover:shadow-lg";
        }
    }

    return (
        <section id="projects" className="py-24 bg-gradient-to-b from-background/60 to-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-text-light dark:bg-gradient-text-dark">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
                        A collection of projects showcasing my skills and interests in software development
                    </p>
                </div>

                <div className="mb-16">
                    <p className="text-center mb-8 text-sm font-medium text-muted-foreground uppercase tracking-wider">Filter by technology</p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {filterCategories.map((category) => {
                            if (!technologiesByCategory[category.id]) return null;

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => switchCategory(category.id)}
                                    className={cn(
                                        "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border",
                                        getCategoryStyles(category.id, activeCategory === category.id)
                                    )}
                                >
                                    {category.label}
                                </button>
                            );
                        })}

                        {activeFilter && (
                            <button
                                onClick={resetFilters}
                                className="px-6 py-3 rounded-lg text-sm bg-background text-foreground hover:bg-accent hover:text-accent-foreground border border-border transition-all duration-200 flex items-center gap-2"
                            >
                                <RefreshCw size={14} /> Reset
                            </button>
                        )}
                    </div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mt-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {technologiesByCategory[activeCategory]?.map((tech) => (
                            <button
                                key={tech}
                                onClick={() => toggleFilter(tech)}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 border border-border/50",
                                    activeFilter === tech
                                        ? "bg-primary text-primary-foreground border-primary/50 shadow-sm"
                                        : "bg-background text-foreground hover:bg-accent/50 hover:text-accent-foreground"
                                )}
                            >
                                {tech}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {activeFilter && (
                    <div className="text-center mb-10">
                        <p className="text-muted-foreground text-base">
                            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                            using <span className="font-bold text-primary">{activeFilter}</span>
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(activeFilter ? filteredProjects : projects)
                        .slice(0, visibleProjects)
                        .map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="h-full"
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                </div>

                {activeFilter && filteredProjects.length === 0 && (
                    <div className="text-center py-16 bg-muted/30 rounded-xl border border-dashed border-border mt-8">
                        <p className="text-xl text-muted-foreground mb-4">No projects match the selected filter.</p>
                        <button
                            onClick={resetFilters}
                            className="px-6 py-3 rounded-lg text-sm bg-background border border-border text-foreground hover:bg-accent transition-colors flex items-center gap-2 mx-auto"
                        >
                            <RefreshCw size={14} /> Clear filter
                        </button>
                    </div>
                )}

                {visibleProjects < (activeFilter ? filteredProjects.length : totalProjects) && (
                    <div className="text-center mt-16">
                        <button
                            onClick={loadMore}
                            className="btn-primary"
                        >
                            Load More Projects ({(activeFilter ? filteredProjects.length : totalProjects) - visibleProjects} more)
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
