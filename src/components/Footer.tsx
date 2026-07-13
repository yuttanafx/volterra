'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative z-10 border-t border-line px-6 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl text-paper">
            Terravolteco<sup className="text-xs text-volt">®</sup>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-sage">{t.footer.blurb}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-volt">
              {t.footer.menu}
            </p>
            <ul className="space-y-2 text-sage">
              <li><Link href="/" className="transition-colors hover:text-paper">{t.nav.home}</Link></li>
              <li><Link href="/environment" className="transition-colors hover:text-paper">{t.nav.environment}</Link></li>
              <li><Link href="/crm" className="transition-colors hover:text-paper">{t.nav.crm}</Link></li>
              <li><Link href="/products" className="transition-colors hover:text-paper">{t.nav.products}</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-paper">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-volt">
              {t.footer.contactHead}
            </p>
            <ul className="space-y-2 text-sage">
              <li>varunya@terravolteco.com</li>
              <li>
                <a href="tel:0922732376" className="transition-colors hover:text-paper">
                  092-273-2376
                </a>
              </li>
              <li>
                <a
                  href="https://lin.ee/nzYBrcA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  LINE Official
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-volt">
              {t.footer.membershipHead}
            </p>
            <ul className="space-y-2 text-sage">
              <li>
                <a
                  href="https://terravolt-eco.click/membership-login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  {t.footer.member}
                </a>
              </li>
              <li>
                <a
                  href="https://dealer-customer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  {t.footer.myAccount}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-line/60 pt-6">
        <p className="text-xs text-sage/70">{t.footer.copyright}</p>
      </div>
    </footer>
  )
}
