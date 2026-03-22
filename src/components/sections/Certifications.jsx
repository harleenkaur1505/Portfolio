import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: "Front End Development Libraries V8",
    issuer: "freeCodeCamp",
    date: "March 2026",
    icon: Award,
    accent: "accent-lavender",
    link: "/certificates/freecodecamp.jpg"
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "October 2025",
    icon: Award,
    accent: "accent-teal",
    link: "/certificates/nptel.jpg"
  },
  {
    title: "Build Generative AI Applications",
    issuer: "Infosys",
    date: "August 2025",
    icon: Award,
    accent: "accent-pink",
    link: "/certificates/infosys.jpg"
  }
]

// Helper function to map logical accents to specific hover glows and borders
const getAccentClasses = (accent) => {
  switch (accent) {
    case 'accent-lavender':
      return 'hover:shadow-[0_0_30px_rgba(167,139,250,0.25)] hover:border-accent-lavender/40'
    case 'accent-teal':
      return 'hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] hover:border-accent-teal/40'
    case 'accent-pink':
      return 'hover:shadow-[0_0_30px_rgba(249,168,212,0.25)] hover:border-accent-pink/40'
    default:
      return 'hover:shadow-lg hover:border-white/30'
  }
}

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="certifications" className="relative z-10 flex min-h-screen w-full flex-col justify-center bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold inline-block border-b-2 border-accent-pink pb-2 glow-text-pink text-white">
            Certifications
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, idx) => {
            const CertIcon = cert.icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full ${getAccentClasses(cert.accent)}`}
              >
                {/* Icon & Date Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-full bg-${cert.accent}/10 flex items-center justify-center border border-${cert.accent}/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                    <CertIcon className={`w-7 h-7 text-${cert.accent} group-hover:glow-text-${cert.accent.replace('accent-', '')}`} />
                  </div>
                  <span className="text-sm font-medium text-[#9CA3AF] bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {cert.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className={`text-xl font-syne font-bold text-white mb-2 leading-tight group-hover:text-${cert.accent.replace('accent-', '')} transition-colors duration-300`}>
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    Issued by <span className="text-gray-300 font-medium">{cert.issuer}</span>
                  </p>

                  <div className="pt-6 border-t border-white/10 mt-auto">
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className={`inline-flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-${cert.accent.replace('accent-', '')} transition-colors group/link`}
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={16} className={`transform group-hover/link:translate-x-1 transition-transform group-hover/link:text-${cert.accent.replace('accent-', '')}`} />
                    </a>
                  </div>
                </div>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
