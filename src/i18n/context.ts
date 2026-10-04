import { createContext, useContext } from 'react'
import { en } from './en'
import type { Content, Lang } from './types'

export const I18nContext = createContext<{ lang: Lang; t: Content; setLang: (l: Lang) => void }>({
  lang: 'en',
  t: en,
  setLang: () => {},
})

export const useI18n = () => useContext(I18nContext)
