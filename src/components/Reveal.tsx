import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  // Elements already on screen when the page loads are shown immediately —
  // animating them in would just look like broken/overlapping content mid-load.
  const [visible, setVisible] = useState(false)
  const [animate, setAnimate] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    // Measured synchronously right after commit (before paint), so it reflects
    // real layout — image boxes are already reserved via width/height attributes.
    const rect = el.getBoundingClientRect()
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0
    if (alreadyInView) {
      setVisible(true)
      return
    }

    setAnimate(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const transitionClasses = animate
    ? `transition-opacity duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`
    : 'opacity-100'

  return (
    <div
      ref={ref}
      className={`${transitionClasses} ${className}`}
      style={animate ? { transitionDelay: visible ? `${delay}ms` : '0ms' } : undefined}
    >
      {children}
    </div>
  )
}
