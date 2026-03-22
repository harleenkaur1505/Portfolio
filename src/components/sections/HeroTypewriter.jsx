import React, { useEffect, useState } from 'react'

const ROLE_LINES = [
  'Full Stack Developer (MERN)',
  'Building Scalable Apps',
  'Clean UI & Performance',
]

const TYPING_MS = 44
const DELETING_MS = 30
const PAUSE_FULL_MS = 2600
const PAUSE_BETWEEN_MS = 480

/**
 * Smooth typewriter that cycles roles; caret is decorative only (aria-hidden).
 */
export function HeroRoleTypewriter({ className = '' }) {
  const [text, setText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const full = ROLE_LINES[lineIndex]
    let timeoutId

    if (!isDeleting && text === full) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), PAUSE_FULL_MS)
    } else if (isDeleting && text === '') {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false)
        setLineIndex((i) => (i + 1) % ROLE_LINES.length)
      }, PAUSE_BETWEEN_MS)
    } else if (isDeleting) {
      timeoutId = window.setTimeout(() => setText((t) => t.slice(0, -1)), DELETING_MS)
    } else {
      timeoutId = window.setTimeout(
        () => setText(full.slice(0, text.length + 1)),
        TYPING_MS
      )
    }

    return () => window.clearTimeout(timeoutId)
  }, [text, lineIndex, isDeleting])

  return (
    <>
      <span className="sr-only">Roles include: {ROLE_LINES.join('. ')}</span>
      <span aria-hidden className={className}>
        {text}
        <span
          className="ml-0.5 inline-block h-[0.85em] w-[2px] translate-y-[0.05em] bg-accent-lavender/75 align-middle animate-pulse"
        />
      </span>
    </>
  )
}
