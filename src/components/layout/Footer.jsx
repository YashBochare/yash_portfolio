import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '../../data/socials'

const IconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => {
              const Icon = IconMap[link.icon]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                  aria-label={`Visit my ${link.label} profile`}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Yash. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
