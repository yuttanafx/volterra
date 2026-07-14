'use client'

import PageShell from '@/components/PageShell'
import { useLanguage } from '@/components/LanguageProvider'

export default function ProductsPage() {
  const { t } = useLanguage()
  const p = t.products

  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-8 pb-4 text-center md:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-volt">{p.eyebrow}</p>
        <h1 className="font-display text-4xl text-paper sm:text-6xl" style={{ letterSpacing: '-1px' }}>
          {p.title[0].text} <em className="italic text-volt">{p.title[1].text}</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage sm:text-lg">
          {p.intro}
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="glow-card grid grid-cols-1 items-center gap-10 rounded-3xl border border-line bg-surface/40 p-6 md:grid-cols-2 md:p-10">
          <img
            src="/media/products/ion-hybrid-system.jpg"
            alt="Ion Hybrid System Reverse"
            className="mx-auto max-h-96 w-auto object-contain"
          />
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-volt">
              {p.flagshipTag}
            </span>
            <h2 className="mt-4 font-display text-2xl text-paper sm:text-3xl">{p.flagshipTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-sage sm:text-base">{p.flagshipDesc}</p>
            <a
              href="https://drive.google.com/file/d/1Tru9gQveUskNwOBd86HooTtCe3UYufT6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-volt px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              {p.manualCta} ↗
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {p.productList.map((item) => (
            <div key={item.name} className="glow-card rounded-2xl border border-line bg-surface/40 p-6">
              <h3 className="font-display text-lg text-paper">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sage">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-sage/80">{p.pricingNote}</p>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-volt">
          {p.mechanismEyebrow}
        </p>
        <h2 className="mt-4 text-center font-display text-3xl text-paper sm:text-4xl">
          {p.mechanismTitle}
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <img
            src="/media/products/mechanism-cycle.jpg"
            alt="ระบบกลไกการทำงาน Terravolteco"
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-sage">
          {p.mechanismIntro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.cycle.map((c) => (
            <div key={c.step} className="glow-card rounded-2xl border border-line bg-surface/40 p-6">
              <span className="font-mono text-2xl text-volt">{c.step}</span>
              <h3 className="mt-2 font-display text-base text-paper">{c.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-volt/80">{c.out}</p>
              <p className="mt-3 text-sm leading-relaxed text-sage">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
