import type { Metadata } from 'next'
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Voltera — พลังงานสะอาด เพื่ออนาคตที่ดีกว่า',
  description:
    'นวัตกรรมพลังงานสะอาดแบบกระจายศูนย์ (Decentralized Clean Energy) — โซลาร์ ไมโครกริด และระบบกักเก็บพลังงานอัจฉริยะ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
