import { useEffect, useState } from 'react'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-logo" aria-label="Back to top">
          KM
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav id="nav-links" className={`nav-links${open ? ' is-open' : ''}`}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
