'use client'

import PageShell from '@/components/PageShell'
import { useLanguage } from '@/components/LanguageProvider'

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()
  const p = t.privacyPolicy

  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-8 pb-16 text-center md:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-volt">{p.eyebrow}</p>
        <h1 className="font-display text-4xl text-paper sm:text-6xl" style={{ letterSpacing: '-1px' }}>
          {p.title[0].text} <em className="italic text-volt">{p.title[1].text}</em>
        </h1>
        <p className="mt-6 font-mono text-xs text-sage">{p.updated}</p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage sm:text-lg">
          {p.intro}
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-16 md:px-8">
        <div className="flex flex-col gap-4">
          {p.sections.map((s) => (
            <div
              key={s.heading}
              className="glow-card rounded-2xl border border-line bg-surface/40 p-6"
            >
              <h2 className="font-display text-lg text-paper">{s.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-sage">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 md:px-8">
        <div className="glow-card rounded-2xl border border-line bg-surface/40 p-6 text-center">
          <h2 className="font-display text-lg text-paper">{p.contactHeading}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-sage">{p.contactBody}</p>
        </div>
      </section>
    </PageShell>
  )
}
