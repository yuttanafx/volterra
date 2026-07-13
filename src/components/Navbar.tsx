'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'สิ่งแวดล้อม', href: '/environment' },
  { label: 'CRM ลูกค้า', href: '/crm' },
  { label: 'สินค้า', href: '/products' },
  { label: 'ติดต่อเรา', href: '/contact' },
]

const LOGO_URL =
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a52fdde-fd24-478e-9600-410d29ace8b8_320w.png'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
      <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <img
          src={LOGO_URL}
          alt="Terravolteco"
          className="h-9 w-9 rounded-full border border-line object-cover"
        />
        <span className="font-display text-2xl tracking-tight text-paper sm:text-3xl">
          Terravolteco<sup className="text-sm text-volt">®</sup>
        </span>
      </Link>

      <ul className="hidden items-center gap-8 md:flex">
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

      <Link
        href="/contact"
        className="hidden rounded-full bg-volt px-6 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:scale-[1.03] md:inline-block"
      >
        เริ่มต้นเปลี่ยนผ่าน
      </Link>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-lg text-paper md:hidden"
        aria-label="เปิดเมนู"
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-30 mx-4 mt-2 rounded-2xl border border-line bg-ink/95 p-4 backdrop-blur md:hidden">
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
                เริ่มต้นเปลี่ยนผ่าน
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
