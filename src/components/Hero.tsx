'use client'

import Link from 'next/link'
import EnergyPulse from './EnergyPulse'
import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center px-6 pb-24 text-center"
      style={{ paddingTop: 'calc(8rem - 40px)' }}
    >
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-volt animate-fade-rise">
        {t.hero.eyebrow}
      </p>

      <h1
        className="font-display max-w-5xl text-5xl font-normal text-paper sm:text-7xl md:text-8xl animate-fade-rise"
        style={{ lineHeight: 0.98, letterSpacing: '-2px' }}
      >
        {t.hero.lines.map((line, i) => (
          <span key={i}>
            {line.map((seg, j) =>
              'em' in seg && seg.em ? (
                <em key={j} className="italic text-volt">
                  {seg.text}{' '}
                </em>
              ) : (
                <span key={j}>{seg.text} </span>
              )
            )}
            {i < t.hero.lines.length - 1 && <br />}
          </span>
        ))}
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-sage sm:text-lg animate-fade-rise-delay">
        {t.hero.paragraph}
      </p>

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row animate-fade-rise-delay">
        <Link
          href="/environment"
          className="rounded-full bg-volt px-14 py-5 text-base font-medium text-ink transition-transform duration-200 hover:scale-[1.03]"
        >
          {t.hero.ctaLearnMore}
        </Link>
        <a
          href="https://terravolt-eco.click/membership-login/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-14 py-5 text-base font-medium text-paper transition-colors duration-200 hover:border-volt hover:text-volt"
        >
          {t.hero.ctaMember}
        </a>
      </div>

      <div className="mt-16">
        <EnergyPulse />
      </div>
    </section>
  )
}
