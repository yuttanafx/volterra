import type { Metadata } from 'next'
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google'
import Providers from '@/components/Providers'
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
  title: 'Terravolteco — พลังงานที่เป็นมิตรกับสิ่งแวดล้อม เพื่ออนาคตที่ดีกว่า',
  description:
    'เทอร์ร่าโวลท์อิโค่ ผู้นำด้านเทคโนโลยีพลังงานสะอาดและเป็นมิตรกับสิ่งแวดล้อม — โซลาร์ ไมโครกริดอัจฉริยะ และระบบกักเก็บพลังงานขั้นสูง',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="th"
      data-theme="dark"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="font-body" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
