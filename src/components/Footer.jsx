import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const socialIcons = [
    { icon: Github, link: 'https://github.com/harleenkaur1505', color: 'accent-lavender' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/harleen1505/', color: 'accent-teal' },
    { icon: Twitter, link: 'https://x.com/_harleenkaurr', color: 'accent-pink' },
    { icon: Mail, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=harleenkaurr1505@gmail.com', color: 'accent-lavender' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 bg-futuristic border-t border-accent-lavender/20 shadow-[0_-15px_40px_rgba(167,139,250,0.06)] pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-6 mb-12">
          
          {/* Copyright & Logo Area */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="text-3xl font-syne font-bold cursor-pointer transition-all duration-300">
              <span className="glow-text-lavender text-white">Harleen</span>
              <span className="text-accent-teal">.</span>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              © 2026 Harleen Kaur
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-syne font-semibold mb-4 text-sm tracking-widest uppercase text-accent-lavender">Quick Links</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 max-w-[300px]">
              {quickLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300 hover:glow-text-teal"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-white font-syne font-semibold mb-4 text-sm tracking-widest uppercase text-accent-teal">Connect</h4>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a 
                    key={index}
                    href={social.link} 
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-${social.color.replace('accent-', '')} hover:border-${social.color.replace('accent-', '')}/50 hover:bg-${social.color}/10 hover:shadow-[0_0_15px_var(--tw-shadow-color)] shadow-${social.color}/30 transition-colors duration-300`}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>
          
        </div>

      </div>
    </motion.footer>
  )
}
