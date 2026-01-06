import { useTypingEffect } from '../../hooks/useTypingEffect'
import { Button } from '../common/Button'
import { Reveal } from '../common/Reveal'

export const Hero = () => {
  const text = useTypingEffect(['Frontend Developer', 'UI/UX Enthusiast', 'React Specialist'])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-4 pt-16 -mt-16 bg-gradient-to-br from-white to-blue-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">
        
        <Reveal>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Yash</span>
          </h1>
        </Reveal>

        <Reveal>
          <div className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-8 h-8 md:h-12 flex items-center justify-center gap-1">
            <span>I am a</span>
            <span className="text-slate-900 dark:text-slate-200">{text}</span>
            <span className="w-[3px] h-8 bg-blue-600 animate-pulse"></span>
          </div>
        </Reveal>

        <Reveal>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Building digital experiences with modern technologies. Focused on creating intuitive and performant web applications.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#projects" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </Reveal>

      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
    </section>
  )
}
