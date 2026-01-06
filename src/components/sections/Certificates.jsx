import { Reveal } from '../common/Reveal'

const CERTIFICATES = [
  {
    id: 1,
    title: "React Specialist",
    issuer: "Meta (Coursera)",
    date: "Aug 2024",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=React+Certification"
  },
  {
    id: 2,
    title: "Frontend Development",
    issuer: "FreeCodeCamp",
    date: "Jan 2024",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Frontend+Cert"
  },
  {
    id: 3,
    title: "UI/UX Fundamentals",
    issuer: "Google",
    date: "Dec 2023",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=UX+Design"
  }
]

export const Certificates = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Certifications and milestones in my journey.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert) => (
            <Reveal key={cert.id}>
              <div className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
