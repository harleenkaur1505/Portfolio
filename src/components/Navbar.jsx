import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Menu, X, Github, Linkedin } from 'lucide-react'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/harleenkaur1505', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harleen1505/', Icon: Linkedin },
]

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

function sectionIdFromHref(href) {
  return href.replace(/^#/, '') || 'hero'
}

/** Softer spring so the shared layout (glow pill) glides instead of snapping */
const navPillTransition = {
  type: 'spring',
  stiffness: 190,
  damping: 32,
  mass: 0.65,
  restDelta: 0.01,
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 })
  const navInnerRef = useRef(null)

  useEffect(() => {
    const NAV_OFFSET = 110
    let raf = 0
    let lastSection = 'hero'

    const tick = () => {
      raf = 0
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 24)
      const y = scrollY + NAV_OFFSET
      let current = 'hero'
      for (const link of navLinks) {
        const id = sectionIdFromHref(link.href)
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      if (current !== lastSection) {
        lastSection = current
        setActiveSection(current)
      }
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(tick)
    }

    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const onNavPointerMove = useCallback((e) => {
    const el = navInnerRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setSpotlight({ x: e.clientX - r.left, y: e.clientY - r.top })
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <motion.header
      initial={{ opacity: 0, y: -18, filter: 'blur(12px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-50 w-full"
    >
      <motion.nav
        onPointerMove={onNavPointerMove}
        className={`relative w-full transition-[background,box-shadow,backdrop-filter,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? 'border-b border-white/[0.08] bg-[#0a0f1c]/72 shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_0_1px_rgba(167,139,250,0.12)_inset] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent shadow-none backdrop-blur-none'
        }`}
      >
        {/* Subtle shifting gradient (scrolled only) */}
        {isScrolled && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.45]"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage:
                'linear-gradient(115deg, rgba(167,139,250,0.06) 0%, transparent 38%, rgba(45,212,191,0.05) 62%, transparent 100%)',
              backgroundSize: '220% 100%',
            }}
          />
        )}

        {/* Cursor-follow spotlight */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.11)_0%,rgba(45,212,191,0.05)_28%,transparent_62%)] blur-2xl"
            style={{ left: spotlight.x, top: spotlight.y }}
          />
        </div>

        <div ref={navInnerRef} className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="flex h-[4.75rem] items-center justify-between md:h-20 lg:h-[4.5rem]">
            <motion.a
              href="#hero"
              className="nav-logo-pulse flex-shrink-0 font-syne text-xl font-semibold tracking-tight text-white md:text-2xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Harleen<span className="text-accent-teal">.</span>
            </motion.a>

            <div className="hidden items-center gap-8 md:flex">
              <LayoutGroup id="nav-primary">
                <nav className="flex items-center gap-1 lg:gap-2" aria-label="Primary">
                  {navLinks.map((link) => {
                    const id = sectionIdFromHref(link.href)
                    const isActive = activeSection === id
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        className={`group relative px-3 py-2 text-[0.8125rem] font-normal tracking-[0.065em] lg:px-3.5 ${
                          isActive ? 'text-white' : 'text-white/60'
                        }`}
                      >
                        {/* Lift on hover lives on inner label only — avoids breaking layoutId on the anchor */}
                        <span
                          className={`relative z-10 inline-block transition-all duration-300 ease-out group-hover:-translate-y-0.5 ${
                            isActive
                              ? 'bg-gradient-to-r from-accent-lavender to-accent-teal bg-clip-text text-transparent'
                              : 'group-hover:bg-gradient-to-r group-hover:from-accent-lavender group-hover:to-accent-teal group-hover:bg-clip-text group-hover:text-transparent'
                          }`}
                        >
                          {link.name}
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="nav-active-pill"
                            className="absolute inset-0 -z-0 rounded-full bg-white/[0.08] shadow-[0_0_20px_rgba(167,139,250,0.15)] will-change-transform"
                            transition={navPillTransition}
                          />
                        )}
                        <span
                          className={`pointer-events-none absolute bottom-1 left-1/2 z-20 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-lavender to-accent-teal transition-[width,opacity,box-shadow] duration-300 ease-out ${
                            isActive
                              ? 'w-[70%] opacity-90 shadow-[0_0_10px_rgba(167,139,250,0.5)]'
                              : 'w-0 opacity-0 group-hover:w-[70%] group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(45,212,191,0.35)]'
                          }`}
                        />
                      </a>
                    )
                  })}
                </nav>
              </LayoutGroup>

              <div className="flex items-center gap-0.5 border-l border-white/[0.14] pl-7">
                {socialLinks.map(({ label, href, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-lg p-2.5 text-white/55 transition-colors duration-300 hover:text-accent-teal hover:shadow-[0_0_16px_rgba(45,212,191,0.35)]"
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.65} />
                  </motion.a>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
            >
              {mobileMenuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
            </button>
          </div>
        </div>

        {/* Bottom glow line */}
        <div
          aria-hidden
          className={`pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-accent-lavender/55 to-transparent transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-35'
          }`}
        />
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/[0.08] bg-[#0a0f1c]/92 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
          >
            <div className="max-w-7xl space-y-0.5 px-5 py-4 sm:px-7">
              {navLinks.map((link, index) => {
                const id = sectionIdFromHref(link.href)
                const isActive = activeSection === id
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 + index * 0.045,
                      duration: 0.34,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-[0.9375rem] font-normal tracking-[0.05em] transition-colors ${
                      isActive
                        ? 'bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(167,139,250,0.2)]'
                        : 'text-white/65 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.06 + navLinks.length * 0.045 + 0.05,
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-3 border-t border-white/10 pt-4"
              >
                {socialLinks.map(({ label, href, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    onClick={() => setMobileMenuOpen(false)}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm text-white/75 transition-all hover:scale-[1.02] hover:border-accent-teal/30 hover:text-accent-teal hover:shadow-[0_0_18px_rgba(45,212,191,0.2)]"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.65} />
                    {label}
                  </motion.a>
                ))}
              </motion.div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-lavender/45 to-transparent opacity-80" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
