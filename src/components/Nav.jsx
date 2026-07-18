import { useEffect, useState } from 'react'

export default function Nav() {
  const links = [
    { href: '#timeline', label: 'Timeline' },
    { href: '#departments', label: 'Departments' },
    { href: '#official-links', label: 'Official Links' },
    { href: '#calculator', label: 'Merit Calculator' },
    { href: '#recommend', label: 'Branch Finder' },
    { href: '#merit-lists', label: 'Merit Lists' },
  ]

  const [scrolled, setScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState('#top')
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuClosing(true)
    setTimeout(() => {
      setMenuOpen(false)
      setMenuClosing(false)
    }, 150)
  }

  function toggleMenu() {
    if (menuOpen) {
      closeMenu()
    } else {
      setMenuOpen(true)
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ease-out ${
        scrolled
          ? 'border-white/10 bg-navy/95 shadow-lg shadow-black/20 backdrop-blur'
          : 'border-white/0 bg-navy/90 backdrop-blur'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ease-out ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <a href="#top" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-9 w-9 items-center justify-center border border-amber/60 text-amber transition-transform duration-500 ease-out group-hover:rotate-90">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v18M3 12h18" strokeDasharray="2 3" />
            </svg>
          </span>
          <span className="font-mono text-sm tracking-[0.18em] text-paper">
            NED ADMISSION<span className="text-amber">.</span>ASSISTANT
          </span>
        </a>

        <nav className="hidden gap-7 md:flex">
          {links.map((l) => {
            const isActive = activeHash === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                className={`group relative font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? 'text-amber' : 'text-slate-muted hover:text-amber'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-amber transition-all duration-300 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.neduet.edu.pk/admission"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-sm border border-amber/70 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-amber transition-all duration-200 hover:bg-amber hover:text-navy hover:shadow-md hover:shadow-amber/20 active:scale-95 sm:inline-block"
          >
            Official Portal ↗
          </a>

          {/* Hamburger  mobile only */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-[1.5px] w-5 bg-paper transition-all duration-300 ease-out ${
                menuOpen ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-paper transition-all duration-300 ease-out ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-paper transition-all duration-300 ease-out ${
                menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div
          className={`border-t border-white/10 bg-navy-deep/98 backdrop-blur md:hidden ${
            menuClosing ? 'animate-panel-out' : 'animate-panel-in'
          }`}
        >
          <nav className="flex flex-col px-6 py-5">
            {links.map((l, i) => {
              const isActive = activeHash === l.href
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className={`border-b border-white/5 py-3 font-mono text-sm uppercase tracking-wider transition-colors duration-200 last:border-b-0 ${
                    isActive ? 'text-amber' : 'text-slate-muted hover:text-amber'
                  }`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {l.label}
                </a>
              )
            })}
            <a
              href="https://www.neduet.edu.pk/admission"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-4 rounded-sm border border-amber/70 px-3 py-2.5 text-center font-mono text-xs uppercase tracking-wider text-amber transition hover:bg-amber hover:text-navy active:scale-95"
            >
              Official Portal ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}