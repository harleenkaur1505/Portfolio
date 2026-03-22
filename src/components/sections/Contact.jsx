import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: null, message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (status.type) setStatus({ type: null, message: '' })
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!form.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required.' })
      return
    }
    if (!validateEmail(form.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }
    if (!form.message.trim()) {
      setStatus({ type: 'error', message: 'Message cannot be empty.' })
      return
    }

    setLoading(true)

    // Ensure the user inputs their own keys here
    const serviceId = 'service_whcmccs'
    const templateId = 'template_5scggm6'
    const publicKey = 'RVs5u9nN6GAIOeBBU'

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setLoading(false)
          setStatus({ type: 'success', message: 'Message sent successfully!' })
          setForm({ name: '', email: '', message: '' })
          setTimeout(() => setStatus({ type: null, message: '' }), 5000)
      }, (error) => {
          console.log(error.text);
          setLoading(false)
          setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' })
      });
  }

  const socialIcons = [
    { icon: Github, link: 'https://github.com/harleenkaur1505', color: 'accent-lavender' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/harleen1505/', color: 'accent-teal' },
    { icon: Twitter, link: 'https://x.com/_harleenkaurr', color: 'accent-pink' },
    { icon: Mail, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=harleenkaurr1505@gmail.com', color: 'accent-lavender' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <section id="contact" className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center bg-transparent py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        
        {/* Background ambient orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-teal/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 w-full max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4 glow-text-teal text-white">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
              Whether you have a question, a project proposal, or just want to explore the future of the web, feel free to drop a message.
            </p>
          </div>

          {/* Glass Form Container */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs tracking-wider font-semibold text-gray-400 uppercase ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal focus:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all placeholder:text-gray-600 font-medium disabled:opacity-50"
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs tracking-wider font-semibold text-gray-400 uppercase ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal focus:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all placeholder:text-gray-600 font-medium disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs tracking-wider font-semibold text-gray-400 uppercase ml-1">Message</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's your project about?"
                  disabled={loading}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal focus:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all placeholder:text-gray-600 resize-none font-medium disabled:opacity-50"
                ></textarea>
              </div>

              {/* Status Message */}
              {status.type && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className={`flex items-center gap-2 p-3 rounded-xl border ${status.type === 'success' ? 'bg-accent-teal/10 border-accent-teal/30 text-accent-teal' : 'bg-accent-pink/10 border-accent-pink/30 text-accent-pink'}`}
                >
                  {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  <span className="text-sm font-medium">{status.message}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                disabled={loading}
                className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-accent-lavender to-accent-pink text-white font-bold font-syne text-lg flex items-center justify-center space-x-2 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(167,139,250,0.5),_0_0_25px_rgba(249,168,212,0.5)] transition-all duration-300 pointer-events-auto disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
              >
                {loading ? (
                   <>
                     <span>Sending...</span>
                     <Loader2 size={20} className="ml-2 animate-spin" />
                   </>
                ) : (
                   <>
                     <span>Send Message</span>
                     <Send size={20} className="ml-1" />
                   </>
                )}
              </motion.button>
            </form>

          </div>

          {/* Social Icons row beneath the form */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            {socialIcons.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  variants={iconVariants}
                  whileHover={{ scale: 1.15, y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-${social.color.replace('accent-', '')} hover:border-${social.color.replace('accent-', '')}/50 hover:bg-${social.color}/10 hover:shadow-[0_0_15px_var(--tw-shadow-color)] shadow-${social.color}/30 transition-all duration-300`}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
