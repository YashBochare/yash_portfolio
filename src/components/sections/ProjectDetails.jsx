import { Github, ExternalLink } from 'lucide-react'
import { Button } from '../common/Button'

export const ProjectDetails = ({ project }) => {
  return (
    <div className="space-y-8">
      {/* Header Image */}
      <div className="rounded-xl overflow-hidden aspect-video bg-slate-200 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Links */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {project.title}
          </h2>
          <div className="flex gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
            {/* Mock Links for now */}
            <Button size="sm" variant="outline" href="https://github.com" target="_blank">
                <Github size={16} className="mr-2"/> Code
            </Button>
            <Button size="sm" href="https://example.com" target="_blank">
                <ExternalLink size={16} className="mr-2"/> Live Demo
            </Button>
        </div>
      </div>

      {/* Description */}
      <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-slate-600 dark:text-slate-300">
              {project.description}
          </p>
      </div>

      {/* Case Study */}
      {project.caseStudy && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      🚧 The Problem
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.caseStudy.problem}
                  </p>
              </div>
              <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      💡 The Solution
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.caseStudy.solution}
                  </p>
              </div>
              <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      🚀 The Result
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.caseStudy.result}
                  </p>
              </div>
          </div>
      )}
    </div>
  )
}
