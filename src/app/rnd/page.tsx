'use client'

import { useEffect, useState } from 'react'
import PageShell from '@/components/PageShell'
import { useLanguage } from '@/components/LanguageProvider'

const DOC_IMAGE = '/media/rnd/um-letter.jpg'

export default function RndPage() {
  const { t } = useLanguage()
  const r = t.rnd
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-8 pb-16 text-center md:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-volt">{r.eyebrow}</p>
        <h1 className="font-display text-4xl text-paper sm:text-6xl" style={{ letterSpacing: '-1px' }}>
          {r.title[0].text} <em className="italic text-volt">{r.title[1].text}</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage sm:text-lg">{r.intro}</p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-8 rounded-full bg-volt px-6 py-3 text-sm font-medium text-ink transition-transform duration-200 hover:scale-[1.03]"
        >
          {r.viewDoc}
        </button>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={r.docTitle}
          onClick={() => setOpen(false)}
        >
          <div
            className="glow-card relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-line bg-ink p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={r.close}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/80 text-paper hover:border-volt hover:text-volt"
            >
              ✕
            </button>
            <h2 className="mb-4 pr-10 font-display text-lg text-paper sm:text-xl">{r.docTitle}</h2>
            <div className="overflow-hidden rounded-xl border border-line/60 bg-white">
              <img src={DOC_IMAGE} alt={r.docAlt} className="h-auto w-full object-contain" />
            </div>
            <p className="mt-5 text-center text-sm font-medium text-volt sm:text-base">{r.confidential}</p>
          </div>
        </div>
      )}
    </PageShell>
  )
}
