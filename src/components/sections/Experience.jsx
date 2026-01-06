import { Reveal } from '../common/Reveal'
import experienceData from '../../data/experience.json'

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-0 space-y-12">
            {experienceData.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.1}>
                <div className="relative pl-8 md:pl-12">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 ring-4 ring-blue-100 dark:ring-blue-900/30"></span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      {item.range}
                    </span>
                  </div>
                  
                  <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
                    {item.company}
                  </div>
                  
                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
