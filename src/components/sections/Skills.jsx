import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MonitorSmartphone, 
  Server, 
  Database, 
  Wrench,
  Code,
  Palette,
  FileCode,
  Terminal,
  Cpu,
  Globe,
  HardDrive,
  Network,
  GitMerge,
  Box,
  Cloud,
  Layers
} from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    skills: [
      { name: "React / Next.js", value: 90, icon: Code },
      { name: "Tailwind CSS", value: 95, icon: Palette },
      { name: "TypeScript", value: 85, icon: FileCode }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js / Express", value: 88, icon: Terminal },
      { name: "REST APIs", value: 92, icon: Globe },
      { name: "GraphQL", value: 75, icon: Cpu }
    ]
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", value: 90, icon: Layers },
      { name: "PostgreSQL", value: 85, icon: Network },
      { name: "Redis", value: 70, icon: HardDrive }
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", value: 95, icon: GitMerge },
      { name: "Docker", value: 80, icon: Box },
      { name: "AWS", value: 75, icon: Cloud }
    ]
  }
]

// Child component to isolate localized hover-states
function SkillCard({ category, variants }) {
  const [hasHovered, setHasHovered] = useState(false)
  const CategoryIcon = category.icon

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  }

  return (
    <motion.div
      variants={variants}
      onMouseEnter={() => setHasHovered(true)}
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 ease-out hover:border-accent-lavender/40 hover:shadow-[0_0_20px_rgba(167,139,250,0.15),_0_0_20px_rgba(45,212,191,0.15)]"
    >
      
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-accent-lavender/10 group-hover:border-accent-lavender/30 transition-all duration-500">
          <CategoryIcon className="w-6 h-6 text-gray-400 group-hover:text-accent-lavender transition-colors duration-500" />
        </div>
        <h3 className="text-2xl font-syne font-semibold text-white group-hover:glow-text-lavender transition-all duration-500">
          {category.title}
        </h3>
      </div>

      {/* Skills List */}
      <div className="flex flex-col gap-6">
        {category.skills.map((skill, sIdx) => {
          const SkillIcon = skill.icon
          return (
            <motion.div 
              key={sIdx}
              variants={skillItemVariants}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 group/skill cursor-default">
                  <SkillIcon className="w-4 h-4 text-gray-500 group-hover/skill:text-accent-pink group-hover/skill:scale-110 group-hover/skill:glow-text-pink transition-all duration-300" />
                  <span className="text-gray-300 font-medium text-sm group-hover/skill:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
                {/* Reveal exact progress number when hover initiates via opacity transition mapping */}
                <span className={`text-accent-teal font-syne font-semibold text-sm transition-opacity duration-1000 ${hasHovered ? 'opacity-100' : 'opacity-0'}`}>
                  {skill.value}%
                </span>
              </div>
              
              {/* Progress Bar Track */}
              <div className="w-full bg-white/5 rounded-full h-2 border border-white/5 overflow-hidden flex">
                {/* Animated Progress Bar Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hasHovered ? `${skill.value}%` : 0 }}
                  transition={{ duration: 1.2, delay: sIdx * 0.1, ease: 'easeInOut' }}
                  className="bg-accent-teal h-full rounded-full glow-box-teal relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30"></div>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>

    </motion.div>
  )
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const categoryVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="skills" className="py-24 min-h-screen flex flex-col justify-center relative bg-futuristic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold inline-block border-b-2 border-accent-lavender pb-2 glow-text-lavender text-white">
            Technical Arsenal
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} variants={categoryVariants} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
