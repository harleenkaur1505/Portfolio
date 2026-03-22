import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 min-h-screen flex flex-col justify-center relative bg-futuristic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold inline-block border-b-2 border-accent-pink pb-2 glow-text-pink text-white">
            About Me
          </h2>
        </motion.div>

        {/* Top Section: Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left: Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl p-1 overflow-hidden group">
              {/* Outer Glow container */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/40 via-accent-lavender/40 to-accent-pink/40 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Image Container */}
              <div className="w-full h-full rounded-xl flex overflow-hidden relative bg-white/5 backdrop-blur-sm border border-white/10 z-10 p-2">
                <div className="w-full h-full rounded-lg bg-black/50 overflow-hidden relative">
                  <img 
                    src="/profile.jpg" 
                    alt="Professional portrait" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image not found */}
                  <div className="absolute inset-0 hidden items-center justify-center text-white/50 font-syne text-lg flex-col gap-2">
                    <svg className="w-12 h-12 mb-2 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    [Formal Photo]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-futuristic to-transparent z-10 opacity-60"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed file:font-sans"
          >
            <p>
              Hello! I'm a passionate <span className="text-white font-medium glow-text-lavender">MERN Stack Developer</span> and tech enthusiast bridging the gap between elegant design and complex functionality. I construct scalable web applications that not only solve real-world problems but provide an intuitive user experience.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-lavender mt-2.5 flex-shrink-0 glow-box-lavender"></div>
                <p><strong className="text-white">Student:</strong> Dedicated to continuous learning, currently honing my skills in computer science and modern software engineering practices.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2.5 flex-shrink-0 glow-box-teal"></div>
                <p><strong className="text-white">Developer:</strong> Specializing in the MERN stack (MongoDB, Express, React, Node.js) to build robust and responsive applications.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-pink mt-2.5 flex-shrink-0 glow-box-pink"></div>
                <p><strong className="text-white">Goals:</strong> Aiming to craft immersive, fast, and accessible digital experiences that leave a lasting impact while contributing to meaningful projects.</p>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Section: 3 Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: MERN Stack Developer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:bg-accent-lavender/5 hover:border-accent-lavender/30 hover:shadow-[0_0_25px_rgba(167,139,250,0.2)]"
          >
            <div className="w-14 h-14 rounded-full bg-accent-lavender/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-accent-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-xl font-syne font-bold text-white mb-3 group-hover:text-accent-lavender transition-colors">MERN Stack Developer</h3>
            <p className="text-gray-400 text-sm">Crafting full-stack applications with MongoDB, Express, React, and Node.js for scalable solutions.</p>
          </motion.div>

          {/* Card 2: DSA Enthusiast */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:bg-accent-teal/5 hover:border-accent-teal/30 hover:shadow-[0_0_25px_rgba(45,212,191,0.2)]"
          >
            <div className="w-14 h-14 rounded-full bg-accent-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 className="text-xl font-syne font-bold text-white mb-3 group-hover:text-accent-teal transition-colors">DSA Enthusiast</h3>
            <p className="text-gray-400 text-sm">Passionate about data structures and algorithms, optimizing code performance, and solving complex logic problems.</p>
          </motion.div>

          {/* Card 3: Problem Solver */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:bg-accent-pink/5 hover:border-accent-pink/30 hover:shadow-[0_0_25px_rgba(249,168,212,0.2)]"
          >
            <div className="w-14 h-14 rounded-full bg-accent-pink/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-syne font-bold text-white mb-3 group-hover:text-accent-pink transition-colors">Problem Solver</h3>
            <p className="text-gray-400 text-sm">Approaching architectural challenges with innovative thinking, converting complex requirements into clean, efficient, and scalable code.</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
