'use client'

import { useLanguage } from './LanguageProvider'

const CERT_IMAGES = [
  '/media/certifications/company-registration.jpg',
  '/media/certifications/patents-trademarks.jpg',
]

export default function Certifications() {
  const { t } = useLanguage()

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 md:px-8">
      <div className="mb-8 text-center">
        <h2 className="font-display text-2xl text-paper sm:text-3xl">
          {t.certifications.heading}
        </h2>
        <p className="mt-2 text-sm text-sage">{t.certifications.sub}</p>
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {t.certifications.items.map((item, i) => (
          <div
            key={item.title}
            className="glow-card group rounded-2xl border border-line bg-surface/40 p-4 transition-colors hover:border-volt/60 hover:bg-surface/70"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-line/60 bg-paper/5">
              <img
                src={CERT_IMAGES[i]}
                alt={item.title}
                className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <h3 className="mt-4 font-display text-base text-paper">{item.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-sage">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
