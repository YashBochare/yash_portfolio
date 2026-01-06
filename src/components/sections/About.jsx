import { Reveal } from '../common/Reveal'

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="order-2 md:order-1 relative group">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/5] bg-slate-200 dark:bg-slate-800">
                <img
                  src="https://ui-avatars.com/api/?name=Yash&size=800&background=0284c7&color=fff&bold=true"
                  alt="Profile of Yash"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Decorative shadow/border */}
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            </div>

            {/* Text Column */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                About Me
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Hello! I'm Yash, a passionate developer based in India. I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Fast-forward to today, and I've had the privilege of building software for various clients. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Education
                </h3>
                <ul className="space-y-4">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-900 dark:text-slate-200">Bachelor of Technology</span> in Computer Science
                    <br />
                    <span className="text-sm">2021 - 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
