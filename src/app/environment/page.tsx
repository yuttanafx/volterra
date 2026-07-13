'use client'

import PageShell from '@/components/PageShell'
import { useLanguage } from '@/components/LanguageProvider'

const CRISIS_IMAGES = [
  'https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596356453261-0d265ae2520a?q=80&w=1200&auto=format&fit=crop',
]

export default function EnvironmentPage() {
  const { t } = useLanguage()
  const e = t.environment

  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-8 pb-16 text-center md:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-volt">{e.eyebrow}</p>
        <h1 className="font-display text-4xl text-paper sm:text-6xl" style={{ letterSpacing: '-1px' }}>
          {e.title[0].text}{' '}
          <em className="italic text-volt">{e.title[1].text}</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage sm:text-lg">
          {e.intro}
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {e.crisisCards.map((c, i) => (
            <div key={c.title} className="glow-card overflow-hidden rounded-2xl border border-line bg-surface/40">
              <div className="h-44 w-full overflow-hidden">
                <img src={CRISIS_IMAGES[i]} alt={c.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-volt">{c.tag}</span>
                <h3 className="mt-3 font-display text-xl text-paper">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sage">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20 text-center md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">{e.sustainEyebrow}</p>
        <h2 className="mt-4 font-display text-3xl text-paper sm:text-4xl">{e.sustainTitle}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage">
          {e.sustainParagraph}
        </p>
        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-8 font-mono text-xs uppercase tracking-widest text-sage">
          {e.pillars.map((p, i) => (
            <span key={p} className="flex items-center gap-8">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-volt" />}
              {p}
            </span>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-volt">
          {e.innovationEyebrow}
        </p>
        <h2 className="mt-4 text-center font-display text-3xl text-paper sm:text-4xl">
          {e.innovationTitle}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {e.tech.map((tItem) => (
            <div key={tItem.title} className="glow-card rounded-2xl border border-line bg-surface/40 p-6">
              <h3 className="font-display text-lg text-paper">{tItem.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sage">{tItem.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
