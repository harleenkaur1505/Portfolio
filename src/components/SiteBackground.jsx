import React from 'react'
import { motion } from 'framer-motion'

/**
 * Global layered gradient matching the hero — fixed behind all content.
 */
export default function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1326] via-futuristic to-[#070d16]" />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(167,139,250,0.085)_0%,transparent_40%,rgba(45,212,191,0.055)_75%,transparent_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-accent-pink/[0.035]" />
      <div
        className="absolute left-1/2 top-[min(28vh,200px)] h-[min(68vh,580px)] w-[min(108vw,880px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_50%_46%_at_50%_40%,rgba(167,139,250,0.11)_0%,rgba(45,212,191,0.045)_48%,transparent_62%)]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_115%_75%_at_50%_-15%,rgba(0,0,0,0.32)_0%,transparent_46%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.12] via-transparent to-black/32" />
      <div className="absolute -right-[10%] top-[14%] h-[42vh] w-[min(52vw,400px)] bg-[radial-gradient(circle_at_40%_40%,rgba(45,212,191,0.065)_0%,transparent_58%)]" />
      <div className="absolute -left-[8%] bottom-[10%] h-[36vh] w-[min(46vw,360px)] bg-[radial-gradient(circle_at_60%_50%,rgba(167,139,250,0.055)_0%,transparent_55%)]" />
      <motion.div
        className="absolute left-[8%] top-[18%] h-[min(460px,52vw)] w-[min(460px,52vw)] rounded-full bg-accent-lavender/[0.065] blur-[118px]"
        animate={{ x: [0, 16, 0], y: [0, -18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[14%] right-[10%] h-[min(420px,48vw)] w-[min(420px,48vw)] rounded-full bg-accent-teal/[0.065] blur-[108px]"
        animate={{ x: [0, -12, 0], y: [0, 14, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-[38%] h-[min(340px,40vw)] w-[min(340px,40vw)] -translate-x-1/2 rounded-full bg-accent-pink/[0.035] blur-[130px]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.45, 0.68, 0.45] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
