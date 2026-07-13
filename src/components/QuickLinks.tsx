'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export default function QuickLinks() {
  const { t } = useLanguage()

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 md:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.quickLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-line bg-surface/40 p-6 transition-colors hover:border-volt/60 hover:bg-surface/70 glow-card"
          >
            <span className="font-mono text-xs text-volt">{l.tag}</span>
            <div className="mt-6">
              <h3 className="font-display text-xl text-paper">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sage">{l.desc}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm text-paper opacity-0 transition-opacity group-hover:opacity-100">
              {t.quickLinksMore}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
