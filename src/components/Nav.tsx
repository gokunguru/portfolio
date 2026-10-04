import { useEffect, useState } from 'react'
import { common } from '../i18n/common'
import { useI18n } from '../i18n/context'
import type { Lang, SectionId } from '../i18n/types'

const sections: SectionId[] = ['about', 'experience', 'projects', 'skills', 'contact']
const langs: Lang[] = ['fr', 'en']

export function Nav() {
  const { lang, t, setLang } = useI18n()
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
        <a href="#top" className="nav-logo" aria-label={t.a11y.backToTop}>
          {common.initials}
        </a>
        <div className="nav-right">
          <nav id="nav-links" className={`nav-links${open ? ' is-open' : ''}`}>
            {sections.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {t.nav[id]}
              </a>
            ))}
          </nav>
          <div className="lang-switch" role="group" aria-label={t.a11y.switchLang}>
            {langs.map((l) => (
              <button key={l} type="button" lang={l} aria-pressed={lang === l} onClick={() => setLang(l)}>
                {common.langLabels[l]}
              </button>
            ))}
          </div>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={t.a11y.toggleMenu}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
