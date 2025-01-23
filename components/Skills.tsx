import { Code, Database, Terminal } from "lucide-react"

const skills = [
  {
    category: "Programming Languages and Web Development",
    items: ["C++", "Java", "Python", "JavaScript", "HTML5", "CSS3"],
    icon: <Code className="w-8 h-8" />,
  },
  {
    category: "Databases & DevOps",
    items: ["MySQL", "PostgreSQL", "Docker", "Git", "Linux", "Heroku"],
    icon: <Database className="w-8 h-8" />,
  },
  {
    category: "Scripting & Hardware",
    items: ["Bat", "PowerShell", "Arduino"],
    icon: <Terminal className="w-8 h-8" />,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-text">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <div key={index} className="glass-effect p-6">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold ml-2">{category.category}</h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-muted-foreground flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

