import { useEffect, useState, type ReactNode } from 'react'
import { I18nContext } from './context'
import { en } from './en'
import { fr } from './fr'
import type { Lang } from './types'

const STORAGE_KEY = 'lang'
const dictionaries = { en, fr }

// Saved choice first, then the browser's preferred languages, then English.
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'fr') return saved
  } catch {
    // Storage can be blocked (private mode, strict settings): fall through.
  }
  const prefs = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const p of prefs) {
    const base = p?.toLowerCase().slice(0, 2)
    if (base === 'fr' || base === 'en') return base
  }
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const t = dictionaries[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // Not persisted; the choice still applies for this visit.
    }
  }

  return <I18nContext.Provider value={{ lang, t, setLang }}>{children}</I18nContext.Provider>
}
