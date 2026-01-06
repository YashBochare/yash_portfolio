import skillsData from '../../data/skills.json'
import { Reveal } from '../common/Reveal'

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.2}>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 h-full">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
