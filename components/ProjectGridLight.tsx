"use client"

import { useState, useMemo } from "react"
import ProjectCardLight from "./ProjectCardLight"
import { projects } from "../data/projects"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { RefreshCw } from "lucide-react"

// Define filter categories
const filterCategories = [
  { id: "languages", label: "Languages", techs: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML5", "CSS3", "Batch Scripting"] },
  { id: "frameworks", label: "Frameworks & Libraries", techs: ["React", "Next.js", "PyQt5", "PyQt6", "Tkinter", "Tampermonkey"] },
  { id: "tools", label: "Tools & APIs", techs: ["Archive.org API", "Twitch API", "YouTube API", "FFmpeg", "Docker", "Git"] },
  { id: "databases", label: "Databases", techs: ["PostgreSQL", "MySQL"] }
]

export default function ProjectGridLight() {
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("languages")
  const totalProjects = projects.length

  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    return Array.from(
      new Set(
        projects.flatMap(project => project.technologies)
      )
    ).sort()
  }, [])

  // Group technologies by category
  const technologiesByCategory = useMemo(() => {
    const result: Record<string, string[]> = {};

    filterCategories.forEach(category => {
      // Find technologies that exist in both the category and in actual projects
      const availableTechs = category.techs.filter(tech =>
        allTechnologies.includes(tech)
      );

      if (availableTechs.length > 0) {
        result[category.id] = availableTechs;
      }
    });

    return result;
  }, [allTechnologies]);

  // Filter projects when a technology is selected
  const filteredProjects = useMemo(() => {
    if (!activeFilter) return projects;
    return projects.filter(project => project.technologies.includes(activeFilter));
  }, [activeFilter]);

  // Toggle filter selection
  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  }

  // Switch category
  const switchCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
  }

  // Reset filters
  const resetFilters = () => {
    setActiveFilter(null);
  }

  // Load more projects
  const loadMore = () => {
    setVisibleProjects(activeFilter ? filteredProjects.length : totalProjects);
  }

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-text-light">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and interests in software development
          </p>
        </div>

        {/* Filter by technology */}
        <div className="mb-10">
          <p className="text-center mb-4 text-sm font-medium text-gray-800">Filter by technology</p>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {filterCategories.map((category) => {
              // Only show categories that have technologies in your projects
              if (!technologiesByCategory[category.id]) return null;

              return (
                <button
                  key={category.id}
                  onClick={() => switchCategory(category.id)}
                  className={cn(
                    "px-4 py-1 rounded-full text-sm transition-all",
                    activeCategory === category.id
                      ? (
                        category.id === "languages" ? "bg-blue-100 text-blue-700" :
                          category.id === "frameworks" ? "bg-indigo-100 text-indigo-700" :
                            category.id === "tools" ? "bg-green-100 text-green-700" :
                              "bg-purple-100 text-purple-700"
                      )
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  {category.label}
                </button>
              );
            })}

            {activeFilter && (
              <button
                onClick={resetFilters}
                className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center gap-1"
              >
                <RefreshCw size={14} /> Reset
              </button>
            )}
          </div>

          {/* Technology filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {technologiesByCategory[activeCategory]?.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleFilter(tech)}
                className={cn(
                  "px-3 py-1 text-xs font-medium rounded-full transition-colors",
                  activeFilter === tech
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                )}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {activeFilter && (
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              using <span className="font-medium text-blue-600">{activeFilter}</span>
            </p>
          </div>
        )}

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeFilter ? filteredProjects : projects)
            .slice(0, visibleProjects)
            .map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <ProjectCardLight project={project} />
              </motion.div>
            ))}
        </div>

        {/* Show no results message */}
        {activeFilter && filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">No projects match the selected filter.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center gap-1 mx-auto"
            >
              <RefreshCw size={14} /> Clear filter
            </button>
          </div>
        )}

        {/* Load more button */}
        {visibleProjects < (activeFilter ? filteredProjects.length : totalProjects) && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-full text-sm transition-all"
            >
              Load More Projects ({(activeFilter ? filteredProjects.length : totalProjects) - visibleProjects} more)
            </button>
          </div>
        )}
      </div>
    </section>
  )
}