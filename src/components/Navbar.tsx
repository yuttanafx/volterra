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
    <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-6 md:px-8">
      <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-sm sm:h-10 sm:w-10">
          <img src="/logo.jpg" alt="Terravolteco" className="h-full w-full object-contain" />
        </span>
        <span className="truncate font-display text-lg tracking-tight text-paper sm:text-2xl lg:text-3xl">
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
        <a
          href="https://story-terravolteco.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-volt px-6 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:scale-[1.03]"
        >
          {t.nav.cta}
        </a>
      </div>

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
        <ThemeToggleButton />
        <LangToggleButton />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-lg text-paper sm:h-10 sm:w-10"
          aria-label="เปิดเมนู"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="fixed left-4 right-4 top-20 z-50 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-line bg-ink/95 p-4 shadow-xl backdrop-blur lg:hidden">
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
              <a
                href="https://story-terravolteco.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-volt px-4 py-3 text-center text-sm font-medium text-ink"
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
