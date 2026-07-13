'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useLanguage } from './LanguageProvider'
import ThemeToggleButton from './ThemeToggleButton'
import LangToggleButton from './LangToggleButton'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const NAV_ITEMS = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.environment, href: '/environment' },
    { label: t.nav.crm, href: '/crm' },
    { label: t.nav.products, href: '/products' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
      <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1.5 shadow-sm">
          <img src="/logo.jpg" alt="Terravolteco" className="h-full w-full object-contain" />
        </span>
        <span className="font-display text-2xl tracking-tight text-paper sm:text-3xl">
          Terravolteco<sup className="text-sm text-volt">®</sup>
        </span>
      </Link>

      <ul className="hidden items-center gap-8 lg:flex">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm transition-colors hover:text-paper"
                style={{ color: active ? '#F4F7F2' : '#9CB3AA' }}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="hidden items-center gap-3 lg:flex">
        <ThemeToggleButton />
        <LangToggleButton />
        <Link
          href="/contact"
          className="rounded-full bg-volt px-6 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:scale-[1.03]"
        >
          {t.nav.cta}
        </Link>
      </div>

      <div className="flex items-center gap-2 lg:hidden">
        <ThemeToggleButton />
        <LangToggleButton />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-lg text-paper"
          aria-label="เปิดเมนู"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-30 mx-4 mt-2 rounded-2xl border border-line bg-ink/95 p-4 backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm"
                    style={{ color: active ? '#F4F7F2' : '#9CB3AA' }}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-volt px-4 py-3 text-center text-sm font-medium text-ink"
              >
                {t.nav.cta}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
