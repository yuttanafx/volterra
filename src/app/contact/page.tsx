'use client'

import PageShell from '@/components/PageShell'
import ContactForm from '@/components/ContactForm'
import { useLanguage } from '@/components/LanguageProvider'

const MAP_SRC =
  'https://www.google.com/maps?q=38/13+%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B8%97%E0%B8%B5%E0%B9%88+2+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%89+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%A5%E0%B8%B8%E0%B8%A1%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7+%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5+12140&output=embed'

export default function ContactPage() {
  const { t } = useLanguage()
  const c = t.contact

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

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {c.info.map((i) => (
              <div key={i.label} className="glow-card rounded-2xl border border-line bg-surface/40 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-volt">{i.label}</p>
                {'href' in i && i.href ? (
                  <a
                    href={i.href}
                    target={i.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm leading-relaxed text-paper transition-colors hover:text-volt sm:text-base"
                  >
                    {i.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-paper sm:text-base">{i.value}</p>
                )}
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                src={MAP_SRC}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Terravolteco Location"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageShell>
  )
}
