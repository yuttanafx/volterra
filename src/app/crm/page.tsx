'use client'

import PageShell from '@/components/PageShell'
import { useLanguage } from '@/components/LanguageProvider'

const CRM_IMAGES = [
  '/media/crm/unit-status.svg',
  '/media/crm/my-account.svg',
  '/media/crm/member-area.svg',
  '/media/crm/carbon-credit.svg',
  '/media/crm/rewards.svg',
  '/media/crm/maintenance.svg',
]

export default function CrmPage() {
  const { t } = useLanguage()
  const c = t.crm

  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-8 pb-16 text-center md:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-volt">{c.eyebrow}</p>
        <h1 className="font-display text-4xl text-paper sm:text-6xl" style={{ letterSpacing: '-1px' }}>
          {c.title[0].text} <em className="italic text-volt">{c.title[1].text}</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage sm:text-lg">
          {c.intro}
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.links.map((item, i) => (
            <div
              key={item.title}
              className="glow-card flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/40"
            >
              <div className="h-36 w-full overflow-hidden">
                <img src={CRM_IMAGES[i]} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-display text-lg text-paper">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sage">{item.desc}</p>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-medium text-paper transition-colors hover:border-volt hover:text-volt"
                >
                  {item.cta} ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24 md:px-8">
        <div className="glow-card rounded-2xl border border-line bg-surface/40 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">{c.earthEyebrow}</p>
          <h2 className="mt-4 font-display text-2xl text-paper sm:text-3xl">{c.earthTitle}</h2>
          <p className="mt-5 text-sm leading-relaxed text-sage sm:text-base">{c.earthParagraph}</p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-sage">
            {c.earthPoints.map((point) => (
              <li key={point.head}>
                <span className="text-volt">• {point.head}</span> {point.body}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  )
}
