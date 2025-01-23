<<<<<<< HEAD
import { Code, Database, Terminal } from "lucide-react"
=======
<<<<<<< HEAD
import { Code, Database, Terminal } from "lucide-react"
=======
import { Code, Database, Terminal } from 'lucide-react'
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9

const skills = [
  {
    category: "Programming Languages and Web Development",
    items: ["C++", "Java", "Python", "JavaScript", "HTML5", "CSS3"],
<<<<<<< HEAD
    icon: <Code className="w-8 h-8" />,
=======
<<<<<<< HEAD
    icon: <Code className="w-8 h-8" />,
=======
    icon: <Code className="w-8 h-8" />
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
  },
  {
    category: "Databases & DevOps",
    items: ["MySQL", "PostgreSQL", "Docker", "Git", "Linux", "Heroku"],
<<<<<<< HEAD
    icon: <Database className="w-8 h-8" />,
=======
<<<<<<< HEAD
    icon: <Database className="w-8 h-8" />,
=======
    icon: <Database className="w-8 h-8" />
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
  },
  {
    category: "Scripting & Hardware",
    items: ["Bat", "PowerShell", "Arduino"],
<<<<<<< HEAD
    icon: <Terminal className="w-8 h-8" />,
  },
=======
<<<<<<< HEAD
    icon: <Terminal className="w-8 h-8" />,
  },
=======
    icon: <Terminal className="w-8 h-8" />
  }
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-text">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
<<<<<<< HEAD
          <div key={index} className="glass-effect p-6">
=======
<<<<<<< HEAD
          <div key={index} className="glass-effect p-6">
=======
          <div
            key={index}
            className="glass-effect p-6"
          >
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold ml-2">{category.category}</h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((skill, skillIndex) => (
<<<<<<< HEAD
                <li key={skillIndex} className="text-muted-foreground flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
=======
<<<<<<< HEAD
                <li key={skillIndex} className="text-muted-foreground flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
=======
                <li key={skillIndex} className="text-text-secondary flex items-center">
                  <span className="w-2 h-2 bg-primary-color rounded-full mr-2"></span>
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
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

