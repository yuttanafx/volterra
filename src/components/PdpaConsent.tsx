'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from './LanguageProvider'

const STORAGE_KEY = 'terravolteco-pdpa-consent'

export default function PdpaConsent() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function handleChoice(choice: 'accepted' | 'declined') {
    window.localStorage.setItem(STORAGE_KEY, choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6">
      <div className="glow-card mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-line bg-ink/95 p-5 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="text-left">
          <p className="font-display text-base text-paper sm:text-lg">{t.pdpa.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-sage">{t.pdpa.message}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => handleChoice('declined')}
            className="rounded-full border border-line px-6 py-2.5 text-sm font-medium text-paper transition-colors duration-200 hover:border-volt hover:text-volt"
          >
            {t.pdpa.decline}
          </button>
          <button
            type="button"
            onClick={() => handleChoice('accepted')}
            className="rounded-full bg-volt px-6 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:scale-[1.03]"
          >
            {t.pdpa.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
