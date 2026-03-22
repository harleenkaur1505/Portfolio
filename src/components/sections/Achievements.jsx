import React, { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { Code, Flame, Trophy } from 'lucide-react'

// Internal Animated Counter Component
function AnimatedNumber({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration: 2.5, ease: "easeOut" })
      return () => controls.stop()
    }
  }, [motionValue, inView, value])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

const achievements = [
  {
    prefix: "Solved ",
    num: 200,
    suffix: "+ DSA Problems",
    description: "Consistently solved data structures and algorithms problems on LeetCode, strengthening problem-solving and analytical skills.",
    icon: Code,
    accent: "accent-lavender"
  },
  {
    prefix: "",
    num: 50,
    suffix: "-Day DSA Streak",
    description: "Maintained a continuous 50-day streak of solving DSA problems, demonstrating discipline and consistency in learning.",
    icon: Flame,
    accent: "accent-teal"
  },
  {
    prefix: "",
    num: 1,
    suffix: "st Place – Hack-a-Hunt Challenge",
    description: "Secured first position in the Hack-a-Hunt coding competition by solving real-world problem statements under time constraints.",
    icon: Trophy,
    accent: "accent-pink"
  }
]

// Helper function map for valid tailwind hover shadows borders
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

export default function Achievements() {
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
    <section id="achievements" className="py-24 min-h-screen relative z-10 w-full bg-futuristic flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold inline-block border-b-2 border-accent-teal pb-2 glow-text-teal text-white">
            Milestones
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {achievements.map((achievement, idx) => {
            const AchievementIcon = achievement.icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full ${getAccentClasses(achievement.accent)}`}
              >
                
                {/* Icon Header */}
                <div className="flex items-start mb-6">
                  <div className={`w-14 h-14 rounded-full bg-${achievement.accent}/10 flex items-center justify-center border border-${achievement.accent}/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                    <AchievementIcon className={`w-7 h-7 text-${achievement.accent} group-hover:glow-text-${achievement.accent.replace('accent-', '')}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  {/* Dynamic Title with Animated Number */}
                  <h3 className="text-2xl font-syne font-bold text-white mb-4 leading-tight">
                    {achievement.prefix}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-lavender to-accent-teal glow-text-lavender">
                      <AnimatedNumber value={achievement.num} />
                    </span>
                    {achievement.suffix}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4 flex-grow">
                    {achievement.description}
                  </p>
                </div>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
