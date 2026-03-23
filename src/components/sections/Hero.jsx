import React from 'react'
import { motion } from 'framer-motion'
import { HeroRoleTypewriter } from './HeroTypewriter'

const easeOut = [0.22, 1, 0.36, 1]

const fadeUpItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
}

const staggerText = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.14, staggerChildren: 0.06 },
  },
}

const staggerButtons = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.38, staggerChildren: 0.06 },
  },
}

const staggerPills = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.32, staggerChildren: 0.04 },
  },
}

const buttonTap = { scale: 0.98 }

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-transparent pt-20 pb-8 lg:min-h-0 lg:h-[100dvh] lg:max-h-[100dvh] lg:pb-5 lg:pt-20"
    >
      <div className="relative z-10 mx-auto flex w-full min-h-0 max-w-4xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Flow: image → headline → typewriter → tech stack → CTAs */}
        <div className="flex w-full max-w-2xl flex-col items-center gap-5 lg:max-w-3xl lg:gap-4">

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="relative isolate flex h-[200px] w-[200px] shrink-0 items-center justify-center sm:h-[220px] sm:w-[220px] lg:h-[188px] lg:w-[188px]
              before:pointer-events-none before:absolute before:inset-[-12%] before:-z-10 before:rounded-full before:content-['']
              before:bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(167,139,250,0.26)_0%,rgba(167,139,250,0.08)_52%,transparent_76%)]
              before:blur-[44px]"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex h-full w-full items-center justify-center"
            >
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[min(110%,280px)] w-[min(110%,280px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-lavender/16 blur-[36px]"
                aria-hidden
              />
              <motion.div
                animate={{ scale: [1, 1.02, 1], opacity: [0.16, 0.24, 0.16] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-1.5 -z-[1] rounded-full bg-accent-lavender/24 blur-[36px]"
              />
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: easeOut }}
                whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.22, ease: 'easeOut' } }}
                whileTap={{ scale: 0.99 }}
                className="relative z-10 h-40 w-40 cursor-default rounded-full bg-gradient-to-br from-accent-lavender/26 to-accent-pink/22 p-[3px] shadow-[0_10px_36px_rgba(0,0,0,0.38),0_0_0_1px_rgba(167,139,250,0.18),0_0_22px_rgba(167,139,250,0.18)] sm:h-44 sm:w-44 lg:h-[11rem] lg:w-[11rem]"
              >
                <div className="h-full w-full overflow-hidden rounded-full border-[4px] border-futuristic bg-futuristic shadow-[inset_0_0_18px_rgba(167,139,250,0.06)]">
                  <img
                    src="/avatar.jpg"
                    alt="Harleen Kaur"
                    className="h-full w-full object-cover object-[50%_20%]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Headline + role (typewriter unchanged) */}
          <motion.div
            variants={staggerText}
            initial="hidden"
            animate="visible"
            className="flex w-full flex-col items-center gap-3 text-center sm:gap-3.5"
          >
            <motion.h1
              variants={fadeUpItem}
              className="max-w-[20ch] px-1 font-syne text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.025em] text-white sm:max-w-none"
            >
              Hi, I'm Harleen Kaur
            </motion.h1>

            <motion.h2
              variants={fadeUpItem}
              className="min-h-[3rem] w-full max-w-xl px-2 font-syne text-base font-medium leading-snug sm:min-h-[2.75rem] sm:text-lg lg:min-h-[2.5rem] lg:text-[clamp(0.95rem,1.5vw,1.1rem)]"
            >
              <span className="bg-gradient-to-r from-accent-lavender to-accent-teal bg-clip-text text-transparent">
                <HeroRoleTypewriter />
              </span>
            </motion.h2>
          </motion.div>

          {/* Tech stack — now above CTAs */}
          <motion.div
            variants={staggerPills}
            initial="hidden"
            animate="visible"
            className="mt-1 flex w-full max-w-lg flex-wrap justify-center gap-x-2 gap-y-2 lg:mt-2"
          >
            {['React', 'Node', 'MongoDB', 'Express', 'TypeScript'].map((skill, index) => (
              <motion.span
                key={index}
                variants={fadeUpItem}
                className="inline-flex items-center justify-center rounded-full px-3 py-1 text-[0.6875rem] font-medium backdrop-blur-sm sm:px-3.5 sm:py-1.5 sm:text-xs"
                style={{
                  background: 'rgba(167, 139, 250, 0.07)',
                  border: '1px solid rgba(167, 139, 250, 0.38)',
                  color: 'rgba(196, 181, 253, 0.88)',
                  boxShadow:
                    '0 0 8px rgba(167, 139, 250, 0.22), 0 0 18px rgba(167, 139, 250, 0.08), inset 0 0 6px rgba(167, 139, 250, 0.05)',
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs — primary dominance on View Projects, refined secondaries */}
          <motion.div
            variants={staggerButtons}
            initial="hidden"
            animate="visible"
            className="mt-2 flex w-full max-w-xl flex-row flex-wrap items-center justify-center gap-3 sm:max-w-2xl sm:gap-4 lg:mt-3"
          >
            {/* PRIMARY */}
            <motion.a
              href="#projects"
              variants={fadeUpItem}
              whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.22, ease: 'easeOut' } }}
              whileTap={buttonTap}
              className="inline-flex min-h-[52px] w-full max-w-[17rem] flex-1 items-center justify-center rounded-full px-8 py-3 text-center text-[0.9375rem] font-semibold text-white transition-[box-shadow,transform] duration-300 sm:w-auto sm:max-w-none sm:flex-none lg:min-h-[52px]"
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 45%, #2dd4bf 100%)',
                boxShadow:
                  '0 0 22px rgba(139, 92, 246, 0.6), 0 0 50px rgba(45, 212, 191, 0.18), 0 4px_20px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.15)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
              }}
            >
              View Projects
            </motion.a>

            {/* SECONDARY — Contact Me */}
            <motion.a
              href="#contact"
              variants={fadeUpItem}
              whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.22, ease: 'easeOut' } }}
              whileTap={buttonTap}
              className="inline-flex min-h-[52px] w-full max-w-[17rem] flex-1 items-center justify-center rounded-full px-7 py-3 text-center text-[0.9375rem] font-medium text-white/88 transition-all duration-300 sm:w-auto sm:max-w-none sm:flex-none lg:min-h-[52px]"
              style={{
                background: 'rgba(167, 139, 250, 0.09)',
                border: '1px solid rgba(167, 139, 250, 0.42)',
                boxShadow:
                  '0 0 14px rgba(167, 139, 250, 0.15), inset 0 0 8px rgba(167, 139, 250, 0.04)',
              }}
            >
              Contact Me
            </motion.a>

            {/* SECONDARY — Download Resume */}
            <motion.a
              href="/resume/portfolio.pdf"
              download="Harleen_Kaur_Resume.pdf"
              variants={fadeUpItem}
              whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.2, ease: 'easeOut' } }}
              whileTap={buttonTap}
              className="inline-flex min-h-[52px] w-full max-w-[17rem] flex-1 items-center justify-center rounded-full px-7 py-3 text-center text-[0.9375rem] font-medium text-white/65 transition-all duration-300 hover:text-white/88 sm:w-auto sm:max-w-none sm:flex-none lg:min-h-[52px]"
              style={{
                background: 'rgba(45, 212, 191, 0.06)',
                border: '1px solid rgba(45, 212, 191, 0.3)',
                boxShadow:
                  '0 0 12px rgba(45, 212, 191, 0.1), inset 0 0 6px rgba(45, 212, 191, 0.04)',
              }}
            >
              Download Resume
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}