import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import { Github } from 'lucide-react'

const projects = [
  {
    title: "TaskFlow – Real-Time Task Management System",
    description: "A collaborative task management platform with boards, lists, and drag-and-drop functionality. Supports real-time updates for multi-user collaboration and includes role-based access control, deadlines, and activity tracking.",
    renderImage: () => (
      <div className="w-full h-full bg-[#0A0F1C] relative flex items-start justify-center gap-4 p-6 pt-10 group-hover:scale-105 transition-transform duration-700 before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent-teal/10 before:to-accent-lavender/10">
        
        {/* Column 1: To Do */}
        <div className="w-1/3 h-48 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex flex-col gap-3 p-3 shadow-[0_0_15px_rgba(45,212,191,0.05)] translate-y-2">
           <div className="flex items-center justify-between mb-1">
             <div className="w-16 h-2 bg-white/40 rounded-full" />
             <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[8px] text-white/50">3</div>
           </div>
           {/* Card 1 */}
           <div className="w-full bg-white/10 rounded-lg p-2.5 flex flex-col gap-2">
             <div className="w-full h-1.5 bg-accent-teal/60 rounded-full" />
             <div className="w-2/3 h-1.5 bg-white/30 rounded-full" />
             <div className="flex justify-between mt-1">
               <div className="w-4 h-4 rounded-full bg-accent-teal/30" />
               <div className="w-8 h-1.5 bg-white/20 rounded-full" />
             </div>
           </div>
           {/* Card 2 */}
           <div className="w-full bg-white/10 rounded-lg p-2.5 flex flex-col gap-2">
             <div className="w-5/6 h-1.5 bg-accent-pink/60 rounded-full" />
             <div className="flex justify-between mt-1">
               <div className="flex -space-x-1">
                 <div className="w-4 h-4 rounded-full bg-accent-lavender/40 border border-[#0A0F1C]" />
                 <div className="w-4 h-4 rounded-full bg-accent-pink/40 border border-[#0A0F1C]" />
               </div>
             </div>
           </div>
        </div>

        {/* Column 2: In Progress */}
        <div className="w-1/3 h-56 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex flex-col gap-3 p-3 shadow-[0_0_15px_rgba(167,139,250,0.15)] -translate-y-2 relative overflow-hidden">
           <div className="absolute right-0 top-0 w-24 h-24 bg-accent-lavender/20 blur-2xl rounded-full" />
           <div className="flex items-center justify-between mb-1 relative z-10">
             <div className="w-20 h-2 bg-accent-lavender/60 rounded-full" />
             <div className="w-4 h-4 rounded-full bg-accent-lavender/20 flex items-center justify-center text-[8px] text-accent-lavender">1</div>
           </div>
           {/* Card 1 (Active) */}
           <div className="w-full bg-white/10 rounded-lg p-2.5 flex flex-col gap-2 relative z-10 border border-accent-lavender/30 shadow-[0_0_10px_rgba(167,139,250,0.2)]">
             <div className="flex gap-1 mb-1">
                <div className="w-8 h-1 bg-accent-teal/60 rounded-full" />
                <div className="w-6 h-1 bg-accent-lavender/60 rounded-full" />
             </div>
             <div className="w-full h-1.5 bg-white/50 rounded-full" />
             <div className="w-3/4 h-1.5 bg-white/30 rounded-full" />
             <div className="flex justify-between items-center mt-2">
               <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent-lavender to-accent-pink" />
               <div className="w-10 h-1 bg-accent-lavender/50 rounded-full" />
             </div>
           </div>
        </div>

        {/* Column 3: Done */}
        <div className="w-1/3 h-40 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex flex-col gap-3 p-3 shadow-[0_0_15px_rgba(249,168,212,0.05)] translate-y-4">
           <div className="flex items-center justify-between mb-1">
             <div className="w-12 h-2 bg-white/30 rounded-full" />
             <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[8px] text-white/50">2</div>
           </div>
           {/* Card 1 */}
           <div className="w-full bg-white/5 rounded-lg p-2.5 flex flex-col gap-2 opacity-60">
             <div className="w-full h-1.5 bg-white/20 rounded-full line-through" />
             <div className="w-1/2 h-1.5 bg-white/10 rounded-full" />
           </div>
        </div>
      </div>
    ),
    tags: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
    accent: "accent-lavender",
    githubUrl: "https://github.com/harleenkaur1505/TaskFlow"
  },
  {
    title: "ClubHub – Club Membership Management System",
    description: "A full-stack web application for managing club memberships. Features user authentication, role-based access (admin and members), membership approvals, and a dashboard for managing users and activities.",
    renderImage: () => (
      <div className="w-full h-full bg-[#0A0F1C] relative p-5 flex flex-col gap-3 group-hover:scale-105 transition-transform duration-700 before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent-teal/10 before:to-transparent">
        {/* Top Header */}
        <div className="flex justify-between items-center w-full relative z-10 bg-white/5 rounded-lg p-2 border border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accent-teal/40 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white/70 rounded-full" />
            </div>
            <div className="w-16 h-2 bg-white/40 rounded-full" />
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-white/10" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-accent-teal to-accent-lavender shadow-[0_0_10px_rgba(45,212,191,0.4)]" />
          </div>
        </div>
        {/* Main Grid */}
        <div className="flex gap-3 h-full relative z-10 pb-4">
          {/* Sidebar Nav */}
          <div className="w-1/4 h-full bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-2 flex flex-col gap-2">
            <div className="w-full h-6 bg-accent-teal/20 rounded flex items-center px-1.5 gap-1.5 border border-accent-teal/30">
              <div className="w-2.5 h-2.5 bg-accent-teal/60 rounded-sm" />
              <div className="w-10 h-1 bg-accent-teal/60 rounded-full" />
            </div>
            <div className="w-full h-6 hover:bg-white/5 rounded flex items-center px-1.5 gap-1.5 transition-colors">
              <div className="w-2.5 h-2.5 bg-white/20 rounded-sm" />
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>
            <div className="w-full h-6 hover:bg-white/5 rounded flex items-center px-1.5 gap-1.5 transition-colors">
              <div className="w-2.5 h-2.5 bg-white/20 rounded-sm" />
              <div className="w-8 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
          {/* Dashboard Area */}
          <div className="w-3/4 h-full flex flex-col gap-3">
             {/* Stat Cards */}
             <div className="flex gap-2">
                <div className="flex-1 h-14 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-2 flex flex-col justify-center">
                   <div className="w-8 h-1.5 bg-white/30 rounded-full mb-1.5" />
                   <div className="w-12 h-3 bg-white/70 rounded-full" />
                </div>
                <div className="flex-1 h-14 bg-accent-teal/10 backdrop-blur-md rounded-lg border border-accent-teal/30 p-2 flex flex-col justify-center relative overflow-hidden">
                   <div className="absolute right-[-10px] bottom-[-10px] w-12 h-12 bg-accent-teal/20 rounded-full blur-md" />
                   <div className="w-10 h-1.5 bg-accent-teal/40 rounded-full mb-1.5" />
                   <div className="w-16 h-3 bg-accent-teal/80 rounded-full" />
                </div>
                <div className="flex-1 h-14 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-2 flex flex-col justify-center">
                   <div className="w-6 h-1.5 bg-white/30 rounded-full mb-1.5" />
                   <div className="w-10 h-3 bg-white/70 rounded-full" />
                </div>
             </div>
             {/* Main Chart / List */}
             <div className="w-full flex-1 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-3 relative overflow-hidden flex flex-col">
                <div className="absolute left-[-20%] bottom-[-20%] w-32 h-32 bg-accent-lavender/10 blur-3xl rounded-full pointer-events-none" />
                <div className="flex justify-between items-center mb-3">
                  <div className="w-20 h-2 bg-white/40 rounded-full" />
                  <div className="w-10 h-4 bg-white/10 rounded border border-white/5" />
                </div>
                {/* List Items */}
                <div className="flex-1 flex flex-col gap-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-full h-8 bg-white/5 rounded border border-white/5 p-1.5 flex items-center justify-between">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-white/10" />
                         <div className="w-16 h-1 bg-white/30 rounded-full" />
                       </div>
                       <div className="w-10 h-1 bg-white/20 rounded-full" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    ),
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    accent: "accent-teal",
    githubUrl: "https://github.com/harleenkaur1505/Club-Hub"
  },
  {
    title: "CareerConnect – Job Searching Platform",
    description: "A web platform designed to help students find jobs and internships. Includes personalized search, AI-powered recommendations, and access to multiple opportunities.",
    renderImage: () => (
      <div className="w-full h-full bg-[#0A0F1C] relative flex flex-col items-center p-6 pt-8 group-hover:scale-105 transition-transform duration-700 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-accent-pink/10 before:to-accent-teal/5">
         
         {/* Detailed Search Interface */}
         <div className="w-full max-w-[85%] mb-6 relative z-10 flex flex-col items-center">
            <div className="w-24 h-2 bg-white/40 rounded-full mb-4" />
            <div className="w-full h-10 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-[0_0_15px_rgba(249,168,212,0.1)] flex items-center px-3 gap-3 hover:border-accent-pink/50 transition-colors">
              <div className="w-3 h-3 rounded-full border-2 border-accent-pink/70 drop-shadow-[0_0_3px_rgba(249,168,212,0.5)]" />
              <div className="w-1/3 h-1.5 bg-white/30 rounded-full" />
              <div className="mx-2 w-[1px] h-4 bg-white/20" />
              <div className="w-1/4 h-1.5 bg-white/20 rounded-full" />
              <div className="ml-auto px-3 py-1 bg-gradient-to-r from-accent-pink/50 to-accent-lavender/50 rounded-md shadow-[0_0_10px_rgba(249,168,212,0.2)]">
                <div className="w-6 h-1 bg-white/80 rounded-full" />
              </div>
            </div>
         </div>

         {/* Job Cards Layout */}
         <div className="w-full px-2 flex gap-4 relative z-10 pt-2">
            
            {/* Card 1 */}
            <div className="flex-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-3 shadow-[0_0_20px_rgba(45,212,191,0.05)] relative overflow-hidden group/card hover:bg-white/10 transition-colors hover:border-accent-teal/30 hover:-translate-y-1 duration-300">
               <div className="absolute right-0 top-0 w-16 h-16 bg-accent-teal/20 blur-xl rounded-full opacity-50" />
               <div className="flex justify-between items-start mb-3">
                 <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/5 flex items-center justify-center shadow-sm">
                    <div className="w-3 h-3 bg-accent-teal/50 rounded-sm" />
                 </div>
                 <div className="px-2 py-0.5 rounded-full bg-accent-teal/10 border border-accent-teal/20">
                   <div className="w-6 h-1 bg-accent-teal/60 rounded-full" />
                 </div>
               </div>
               <div className="w-24 h-2 bg-white/60 rounded-full mb-1.5" />
               <div className="w-16 h-1.5 bg-white/30 rounded-full mb-4" />
               <div className="flex gap-1.5 mb-3">
                 <div className="w-10 h-1.5 bg-white/10 rounded-full" />
                 <div className="w-12 h-1.5 bg-white/10 rounded-full" />
               </div>
               <div className="w-full py-1.5 bg-white/5 rounded text-center border border-white/10 mt-auto">
                 <div className="w-8 h-1 bg-white/40 rounded-full mx-auto" />
               </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-3 shadow-[0_0_20px_rgba(249,168,212,0.05)] relative overflow-hidden translate-y-4 group/card hover:bg-white/10 transition-colors hover:border-accent-pink/30 hover:-translate-y-1 duration-300">
               <div className="absolute left-0 bottom-0 w-16 h-16 bg-accent-pink/20 blur-xl rounded-full opacity-50" />
               <div className="flex justify-between items-start mb-3">
                 <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/5 flex items-center justify-center shadow-sm">
                    <div className="w-3 h-3 bg-accent-pink/50 rounded-full" />
                 </div>
                 <div className="px-2 py-0.5 rounded-full bg-accent-pink/10 border border-accent-pink/20">
                   <div className="w-6 h-1 bg-accent-pink/60 rounded-full" />
                 </div>
               </div>
               <div className="w-20 h-2 bg-white/60 rounded-full mb-1.5" />
               <div className="w-24 h-1.5 bg-white/30 rounded-full mb-4" />
               <div className="flex gap-1.5 mb-3">
                 <div className="w-14 h-1.5 bg-white/10 rounded-full" />
               </div>
               <div className="w-full py-1.5 bg-accent-pink/10 rounded text-center border border-accent-pink/20 mt-auto shadow-[0_0_10px_rgba(249,168,212,0.1)]">
                 <div className="w-8 h-1 bg-accent-pink/60 rounded-full mx-auto" />
               </div>
            </div>

         </div>
      </div>
    ),
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    accent: "accent-pink",
    githubUrl: "https://github.com/harleenkaur1505/careerConnect"
  }
]

// Determine exact shadow hex mappings
const getGlowColor = (accent) => {
  switch (accent) {
    case 'accent-lavender': return '167, 139, 250'
    case 'accent-teal': return '45, 212, 191'
    case 'accent-pink': return '249, 168, 212'
    default: return '255, 255, 255'
  }
}

// Custom 3D Project Card
function ProjectCard({ project, variants }) {
  const cardRef = useRef(null)

  // Motion Values for pointer tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Values for 3D tilting
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 200 }
  const smoothTiltX = useSpring(tiltX, springConfig)
  const smoothTiltY = useSpring(tiltY, springConfig)

  // Convert raw tilt coordinates to slight degrees (max ~3deg for extreme subtlety)
  const rotateX = useTransform(smoothTiltY, [-200, 200], [3, -3])
  const rotateY = useTransform(smoothTiltX, [-200, 200], [-3, 3])

  const glowBase = getGlowColor(project.accent)

  // Dynamic template generating a radial gradient that strictly locks to mouse axes
  const backgroundSpotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(${glowBase}, 0.12), transparent 80%)`
  // Animate the actual CSS border as a linear glowing aura tracking the mouse
  const hoverBorder = useMotionTemplate`radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(${glowBase}, 0.5), transparent 100%)`

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    // Exact standard mouse point mapped inside component constraints
    const localX = e.clientX - rect.left
    const localY = e.clientY - rect.top

    mouseX.set(localX)
    mouseY.set(localY)

    // Compute coordinates centered at (0,0) for structural tilt mathematical mappings
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    tiltX.set(localX - centerX)
    tiltY.set(localY - centerY)
  }

  const handleMouseLeave = () => {
    // Reset tilt back perfectly to neutral center
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <motion.div variants={variants} className="group relative perspective-1000">
      {/* Structural translation on wrapper avoids crashing framer matrix rotations */}
      <div className="h-full w-full hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
        
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          className="relative flex flex-col h-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-shadow duration-500"
        >
          {/* Animated Gradient Border (Injected seamlessly over the frame via masking) */}
          <motion.div
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ padding: '1px', background: hoverBorder, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}
          />

          {/* Mouse tracking internal spotlight aura */}
          <motion.div
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: backgroundSpotlight }}
          />
          
          {/* Top Image Structure */}
          <div className="relative h-64 w-full overflow-hidden shrink-0 z-10 bg-black/50">
            {project.renderImage()}
            
            {/* The upward-fading dark mask blending the image smoothly down into the card body */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0F1C] to-transparent z-10 pointer-events-none" />
            
            {/* Hidden Interactive Overlay Buttons */}
            <div className="absolute inset-0 bg-[#0A0F1C]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/20 text-white font-medium hover:bg-white/20 transition-all"
              >
                <Github size={18} />
                <span>View GitHub</span>
              </a>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-8 pb-10 flex-grow flex flex-col relative z-20 bg-[#0A0F1C]/40">
            <h3 className={`text-2xl font-syne font-bold text-white mb-3 group-hover:text-${project.accent.replace('accent-', '')} transition-colors duration-300`}>
              {project.title}
            </h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            {/* Elevated Tech Stack Mapping */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className={`text-xs px-3.5 py-1.5 font-medium bg-white/5 text-${project.accent} rounded-full border border-${project.accent}/30 hover:shadow-[0_0_12px_rgba(${glowBase},0.3)] hover:scale-105 hover:bg-${project.accent}/10 transition-all duration-300 cursor-default backdrop-blur-sm`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="projects" className="py-24 min-h-screen relative z-10 w-full bg-futuristic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold inline-block border-b-2 border-accent-teal pb-2 glow-text-teal text-white">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} variants={cardVariants} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

