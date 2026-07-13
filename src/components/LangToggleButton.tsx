'use client'

import { useLanguage } from './LanguageProvider'

export default function LangToggleButton() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language"
      className="flex h-10 shrink-0 items-center gap-1 rounded-full border border-line px-3 font-mono text-xs uppercase tracking-widest text-sage transition-colors hover:border-volt"
    >
      <span className={lang === 'th' ? 'text-volt' : ''}>TH</span>
      <span className="text-sage/60">/</span>
      <span className={lang === 'en' ? 'text-volt' : ''}>EN</span>
    </button>
  )
}
