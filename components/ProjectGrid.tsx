<<<<<<< HEAD
"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
=======
'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061

export default function ProjectGrid() {
  const [visibleProjects, setVisibleProjects] = useState(6)

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length))
  }

  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-text">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleProjects).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="bg-primary-color hover:bg-secondary-color text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Load More Projects
          </button>
        </div>
      )}
    </section>
  )
}

