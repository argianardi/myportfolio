import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaFigma, FaDatabase, FaNodeJs
} from 'react-icons/fa'
import {
  SiNextdotjs, SiExpress, SiTailwindcss, SiVercel, SiGit, SiGithub, SiSequelize, SiTypescript, SiMongodb
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: FaBootstrap },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'MySQL', icon: FaDatabase },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Sequelize', icon: SiSequelize },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Figma', icon: FaFigma },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div data-aos="fade-up">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="section-heading whitespace-nowrap">
              <span className="font-mono text-accent text-xl mr-2">02.</span>
              Skills & Technologies
            </h2>
            <div className="accent-line flex-grow max-w-[300px] hidden sm:block"></div>
          </div>
          <p className="section-subheading">// tools I work with daily</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="glass-card"
              data-aos="fade-up"
              data-aos-delay={catIdx * 100}
            >
              <h3 className="font-mono text-accent text-sm mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent-muted transition-colors duration-200 group"
                  >
                    <skill.icon className="text-slate group-hover:text-accent transition-colors text-lg flex-shrink-0" />
                    <span className="text-slate-light text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
