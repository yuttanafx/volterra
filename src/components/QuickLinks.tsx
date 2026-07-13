import Link from 'next/link'

const LINKS = [
  {
    href: '/environment',
    tag: '01',
    title: 'สิ่งแวดล้อม',
    desc: 'วิกฤตที่รอไม่ได้ และพันธกิจด้านความยั่งยืนของเรา เพื่อพลังงานที่เป็นมิตรกับสิ่งแวดล้อม',
  },
  {
    href: '/crm',
    tag: '02',
    title: 'CRM ลูกค้า',
    desc: 'ตรวจสอบสถานะเครื่องและติดตามประสิทธิภาพการทำงานของระบบพลังงานแบบเรียลไทม์',
  },
  {
    href: '/products',
    tag: '03',
    title: 'สินค้า',
    desc: 'นวัตกรรมระบบไฮบริดพลังงานของเรา พร้อมคู่มือผลิตภัณฑ์ฉบับเต็ม',
  },
  {
    href: '/contact',
    tag: '04',
    title: 'ติดต่อเรา',
    desc: 'พูดคุยกับทีมงานเพื่อออกแบบโซลูชันพลังงานสะอาดที่ใช่สำหรับคุณ',
  },
]

export default function QuickLinks() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 md:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-line bg-surface/40 p-6 transition-colors hover:border-volt/60 hover:bg-surface/70"
          >
            <span className="font-mono text-xs text-volt">{l.tag}</span>
            <div className="mt-6">
              <h3 className="font-display text-xl text-paper">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sage">{l.desc}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm text-paper opacity-0 transition-opacity group-hover:opacity-100">
              ดูเพิ่มเติม →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
