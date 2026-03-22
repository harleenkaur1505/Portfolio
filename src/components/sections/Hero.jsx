import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-futuristic">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-lavender/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-teal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pink/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full mt-24 px-4">
        
        {/* Avatar Container with Subtle Float */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative mb-14 w-[260px] h-[260px] flex items-center justify-center"
        >
          {/* Pulsing Gradient Ring behind Avatar (Enhanced but soft) */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent-lavender to-accent-pink blur-[35px]" 
          />

          {/* Core Avatar Image */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
            className="relative w-64 h-64 rounded-full p-[4px] bg-gradient-to-br from-accent-lavender/40 to-accent-pink/40 shadow-[0_8px_40px_rgba(0,0,0,0.4)] z-10"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-futuristic bg-futuristic">
              <img 
                src="/avatar.jpg" 
                alt="Harleen Kaur" 
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-4 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-syne font-bold text-white tracking-tight leading-tight">
            Hi, I'm Harleen Kaur
          </h1>
          <h2 className="text-2xl md:text-3xl font-syne font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent-lavender to-accent-teal">
            Full Stack Developer (MERN)
          </h2>
          
          {/* Skill Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 hover:border-accent-teal/30 hover:text-accent-teal transition-all cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="text-[#9CA3AF] text-lg md:text-xl font-light leading-relaxed pt-3 max-w-2xl mx-auto px-4">
            Building elegant, scalable, and human-centered digital experiences.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 mt-10"
        >
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-lavender to-accent-teal text-white font-medium shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(167,139,250,0.4),_0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300 flex items-center justify-center"
          >
            View Projects
          </motion.a>
          
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-accent-pink/50 hover:bg-accent-pink/5 hover:shadow-[0_0_15px_rgba(249,168,212,0.2)] transition-all duration-300 flex items-center justify-center"
          >
            Contact Me
          </motion.a>
          
          <motion.a 
            href="/resume/portfolio.pdf"
            download="Harleen_Kaur_Resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-accent-teal/50 hover:bg-accent-teal/5 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all duration-300 flex items-center justify-center"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
