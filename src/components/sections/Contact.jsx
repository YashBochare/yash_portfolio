import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { Send, Loader2, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../common/Button'
import { Reveal } from '../common/Reveal'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

export const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  
  const onSubmit = async (data) => {
    setStatus('loading')
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Simulation for demo purposes if no credentials
    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS credentials missing. Simulating success.')
      setTimeout(() => {
        setStatus('success')
        reset()
        setTimeout(() => setStatus('idle'), 3000)
      }, 1500)
      return
    }

    try {
      await emailjs.send(serviceId, templateId, data, publicKey)
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to say hi? I'd love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Reveal>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Whether you have a question, a project proposal, or just want to discuss the latest tech trends, feel free to reach out.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Email</h4>
                    <a href="mailto:hello@example.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Phone</h4>
                    <span className="text-slate-600 dark:text-slate-400">
                      +1 (555) 123-4567
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Location</h4>
                    <span className="text-slate-600 dark:text-slate-400">
                      San Francisco, CA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register("message", { required: "Message is required" })}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                      status === 'success' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : status === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : status === 'error' ? (
                      <>
                        <AlertCircle size={20} />
                        Try Again
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
