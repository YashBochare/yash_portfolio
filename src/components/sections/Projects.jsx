import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '../common/Reveal'
import { ProjectCard } from '../common/ProjectCard'
import { Modal } from '../common/Modal'
import { ProjectDetails } from './ProjectDetails'
import projectsData from '../../data/projects.json'

export const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  
  const categories = ['All', ...new Set(projectsData.map(p => p.category))]
  
  const filteredProjects = projectsData.filter(p => 
    filter === 'All' || p.category === filter
  )

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A selection of my recent work, case studies, and experiments.
            </p>
          </div>
        </Reveal>

        {/* Filter Buttons */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard 
                  project={project} 
                  onClick={setSelectedProject} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <Modal onClose={() => setSelectedProject(null)}>
              <ProjectDetails project={selectedProject} />
            </Modal>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
