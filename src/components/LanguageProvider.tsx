'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang, type Translations } from '@/lib/translations'

const LanguageContext = createContext<{ lang: Lang; t: Translations; toggleLang: () => void }>({
  lang: 'th',
  t: translations.th,
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('th')

  useEffect(() => {
    const stored = window.localStorage.getItem('terravolteco-lang')
    if (stored === 'th' || stored === 'en') setLang(stored)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    window.localStorage.setItem('terravolteco-lang', lang)
  }, [lang])

  function toggleLang() {
    setLang((l) => (l === 'th' ? 'en' : 'th'))
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
