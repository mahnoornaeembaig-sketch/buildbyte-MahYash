import { useEffect, useRef, useState } from 'react'

// Watches the returned ref element and flips `visible` to true once it
// scrolls into view (20% visible by default), then stops watching.
// Reusable across any section that wants a scroll-triggered reveal.
export function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
