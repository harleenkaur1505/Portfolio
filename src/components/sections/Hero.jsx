import React from 'react'
import { motion } from 'framer-motion'
import { HeroRoleTypewriter } from './HeroTypewriter'

const easeOut = [0.22, 1, 0.36, 1]

const fadeUpItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
}

const staggerText = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.18, staggerChildren: 0.07 },
  },
}

const staggerButtons = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.42, staggerChildren: 0.07 },
  },
}

const primaryHover = {
  y: -3,
  scale: 1.02,
  transition: { duration: 0.22, ease: 'easeOut' },
}
const secondaryHover = {
  y: -2,
  scale: 1.01,
  transition: { duration: 0.22, ease: 'easeOut' },
}
const buttonTap = { scale: 0.98 }

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-transparent pt-20 pb-10 lg:min-h-0 lg:h-[100dvh] lg:max-h-[100dvh] lg:pb-6 lg:pt-20"
    >
      {/* Content: 16 / 24 / 32 rhythm — avatar → copy → CTAs */}
      <div className="relative z-10 mx-auto flex w-full min-h-0 max-w-4xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Rhythm: 32px (gap-8) avatar → copy; 16px (gap-4) pills → CTAs */}
        <div className="flex w-full flex-col items-center gap-8 lg:max-w-3xl lg:gap-7">
          {/* Profile — soft glow + slightly larger on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: easeOut }}
            className="relative isolate flex h-[248px] w-[248px] shrink-0 items-center justify-center sm:h-[268px] sm:w-[268px] lg:h-[232px] lg:w-[232px]
              before:pointer-events-none before:absolute before:inset-[-14%] before:-z-10 before:rounded-full before:content-['']
              before:bg-[radial-gradient(ellipse_72%_72%_at_50%_50%,rgba(167,139,250,0.32)_0%,rgba(167,139,250,0.09)_52%,transparent_76%)]
              before:blur-[52px]"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex h-full w-full items-center justify-center"
            >
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[min(112%,320px)] w-[min(112%,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-lavender/20 blur-[40px]"
                aria-hidden
              />
              <motion.div
                animate={{ scale: [1, 1.02, 1], opacity: [0.18, 0.28, 0.18] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-2 -z-[1] rounded-full bg-accent-lavender/28 blur-[42px]"
              />

              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, ease: easeOut }}
                whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.22, ease: 'easeOut' } }}
                whileTap={{ scale: 0.99 }}
                className="relative z-10 h-[13.5rem] w-[13.5rem] cursor-default rounded-full bg-gradient-to-br from-accent-lavender/28 to-accent-pink/24 p-[3px] shadow-[0_12px_40px_rgba(0,0,0,0.42),0_0_0_1px_rgba(167,139,250,0.2),0_0_28px_rgba(167,139,250,0.22),0_0_56px_rgba(167,139,250,0.1)] sm:h-[15rem] sm:w-[15rem] lg:h-[13rem] lg:w-[13rem]"
              >
                <div className="h-full w-full overflow-hidden rounded-full border-[5px] border-futuristic bg-futuristic shadow-[inset_0_0_22px_rgba(167,139,250,0.07)] lg:border-[4px]">
                  <img
                    src="/avatar.jpg"
                    alt="Harleen Kaur"
                    className="h-full w-full object-cover object-[50%_20%]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="flex w-full flex-col items-center gap-4">
            {/* Copy stack: name → role → pills — 16px (gap-4) */}
            <motion.div
              variants={staggerText}
              initial="hidden"
              animate="visible"
              className="flex w-full flex-col items-center gap-4 text-center"
            >
              <motion.h1
                variants={fadeUpItem}
                className="max-w-[22ch] px-1 font-syne text-4xl font-bold leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl lg:text-[clamp(2.35rem,3.6vw,3rem)]"
              >
                Hi, I'm Harleen Kaur
              </motion.h1>

              <motion.h2
                variants={fadeUpItem}
                className="min-h-[3.25rem] w-full max-w-xl px-2 font-syne text-base font-medium leading-[1.35] text-white/95 sm:min-h-[3rem] sm:text-lg md:text-xl lg:min-h-[2.75rem] lg:text-[clamp(1.05rem,1.75vw,1.2rem)]"
              >
                <span className="bg-gradient-to-r from-accent-lavender to-accent-teal bg-clip-text text-transparent">
                  <HeroRoleTypewriter />
                </span>
              </motion.h2>

              <motion.div
                variants={fadeUpItem}
                className="flex max-w-full flex-wrap justify-center gap-x-2 gap-y-2 sm:gap-x-2.5 sm:gap-y-2"
              >
                {['React', 'Node', 'MongoDB', 'Express', 'TypeScript'].map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05] px-3.5 py-1.5 text-[0.8125rem] font-medium text-white/[0.88] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_18px_rgba(0,0,0,0.18)] backdrop-blur-md backdrop-saturate-150 transition-all duration-200 hover:border-accent-lavender/30 hover:bg-white/[0.09] hover:text-white sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* CTAs — 16px above (sibling gap-4); primary vs secondary */}
            <motion.div
              variants={staggerButtons}
              initial="hidden"
              animate="visible"
              className="flex w-full max-w-2xl flex-row flex-wrap items-center justify-center gap-3 px-0 sm:gap-4"
            >
            <motion.a
              href="#projects"
              variants={fadeUpItem}
              whileHover={primaryHover}
              whileTap={buttonTap}
              className="inline-flex min-h-[48px] w-full max-w-[17rem] flex-1 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-accent-lavender to-accent-teal px-8 py-3 text-center text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.12)] transition-[box-shadow,transform] duration-300 hover:shadow-[0_8px_32px_rgba(167,139,250,0.35),0_12px_40px_rgba(45,212,191,0.22)] sm:w-auto sm:max-w-none sm:flex-none sm:px-9 sm:py-3.5 sm:text-[0.9375rem] lg:min-h-[48px] lg:px-10"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              variants={fadeUpItem}
              whileHover={secondaryHover}
              whileTap={buttonTap}
              className="inline-flex min-h-[48px] w-full max-w-[17rem] flex-1 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] px-7 py-3 text-center text-sm font-medium text-white/90 shadow-none backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_8px_28px_rgba(249,168,212,0.12)] sm:w-auto sm:max-w-none sm:flex-none sm:px-8 sm:py-3.5 sm:text-[0.9375rem] lg:min-h-[48px]"
            >
              Contact Me
            </motion.a>

            <motion.a
              href="/resume/portfolio.pdf"
              download="Harleen_Kaur_Resume.pdf"
              variants={fadeUpItem}
              whileHover={secondaryHover}
              whileTap={buttonTap}
              className="inline-flex min-h-[48px] w-full max-w-[17rem] flex-1 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] px-7 py-3 text-center text-sm font-medium text-white/90 shadow-none backdrop-blur-md transition-all duration-300 hover:border-accent-teal/35 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_8px_28px_rgba(45,212,191,0.14)] sm:w-auto sm:max-w-none sm:flex-none sm:px-8 sm:py-3.5 sm:text-[0.9375rem] lg:min-h-[48px]"
            >
              Download Resume
            </motion.a>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
