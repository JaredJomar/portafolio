"use client"

import { Code, Database, Terminal, BrainCog, Laptop, Layers } from "lucide-react"
import { motion } from "framer-motion"

const skills = [
  {
    category: "Programming Languages",
    items: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    category: "Web Development",
    items: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"],
    icon: <Laptop className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Databases & Backend",
    items: ["MySQL", "PostgreSQL", "Node.js", "RESTful APIs", "GraphQL"],
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-emerald-400",
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "Linux", "Heroku", "CI/CD"],
    icon: <Layers className="w-6 h-6" />,
    color: "from-orange-500 to-amber-400",
  },
  {
    category: "Scripting & Automation",
    items: ["Bash", "PowerShell", "Python Scripts", "Batch Files"],
    icon: <Terminal className="w-6 h-6" />,
    color: "from-red-500 to-rose-400",
  },
  {
    category: "AI & ML",
    items: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    icon: <BrainCog className="w-6 h-6" />,
    color: "from-indigo-500 to-violet-400",
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-text inline-block">My Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've worked with to build projects and solve problems
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((category, index) => (
            <motion.div key={index} variants={item}>
              <div className="glass-effect p-6 h-full border border-border/30 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold ml-3">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground flex items-center">
                      <span className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

