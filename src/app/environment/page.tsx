import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'สิ่งแวดล้อม | Terravolteco',
  description: 'วิกฤตที่รอไม่ได้ ทางออกคือวันนี้ — พันธกิจด้านความยั่งยืนของ Terravolteco',
}

const CRISIS_CARDS = [
  {
    tag: 'CRITICAL',
    title: 'อุณหภูมิโลกสูงขึ้น 1.5°C ต่อปี',
    desc: 'ภาวะโลกร้อนเร่งตัวขึ้นต่อเนื่อง ส่งผลกระทบต่อระบบนิเวศทั่วโลก',
    img: 'https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Unhealthy AQI · 185',
    title: 'มลพิษทางอากาศในเมืองใหญ่',
    desc: 'คุณภาพอากาศในกรุงเทพฯ และเมืองใหญ่หลายแห่งอยู่ในระดับที่ส่งผลเสียต่อสุขภาพ',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Warning',
    title: 'ภัยแล้งที่รุนแรงขึ้นทุกปี',
    desc: 'พลังงานฟอสซิลกำลังจะหมดไป พร้อมสร้างมลพิษมหาศาลระหว่างทาง',
    img: 'https://images.unsplash.com/photo-1596356453261-0d265ae2520a?q=80&w=1200&auto=format&fit=crop',
  },
]

const TECH = [
  {
    title: 'ระบบกักเก็บพลังงานขั้นสูง',
    desc: 'ใช้แบตเตอรี่ชนิด Solid-State และ Flow Battery รุ่นใหม่ ที่มีความหนาแน่นของพลังงานสูงกว่าและปลอดภัยกว่าระบบทั่วไป',
  },
  {
    title: 'ไมโครกริดอัจฉริยะด้วย AI',
    desc: 'ระบบบริหารจัดการพลังงานในพื้นที่ขนาดเล็กแบบกระจายศูนย์ ใช้ปัญญาประดิษฐ์ (AI) พยากรณ์และปรับสมดุลโหลดแบบเรียลไทม์',
  },
  {
    title: 'บริการให้คำปรึกษาด้านพลังงาน',
    desc: 'ให้คำปรึกษาด้านการเปลี่ยนผ่านพลังงาน (Energy Transition) และวางแผนลดการปล่อยคาร์บอน (Decarbonization Roadmap)',
  },
]

export default function EnvironmentPage() {
  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-8 pb-16 text-center md:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-volt">
          Why Clean Energy?
        </p>
        <h1 className="font-display text-4xl text-paper sm:text-6xl" style={{ letterSpacing: '-1px' }}>
          วิกฤตที่รอไม่ได้ <em className="italic text-volt">ทางออกคือวันนี้</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage sm:text-lg">
          อุณหภูมิโลกที่สูงขึ้น มลพิษทางอากาศ และทรัพยากรที่ลดลง คือสัญญาณเตือนให้เราต้องหันมาใช้
          พลังงานที่เป็นมิตรกับสิ่งแวดล้อมและยั่งยืน เพื่อกอบกู้สมดุลของธรรมชาติกลับคืนมา
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CRISIS_CARDS.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-2xl border border-line bg-surface/40"
            >
              <div className="h-44 w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-volt">
                  {c.tag}
                </span>
                <h3 className="mt-3 font-display text-xl text-paper">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sage">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20 text-center md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">Sustainability</p>
        <h2 className="mt-4 font-display text-3xl text-paper sm:text-4xl">
          ความเป็นผู้นำด้านความยั่งยืน
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage">
          เราไม่เพียงแค่ผลิตพลังงานสะอาด แต่ยังดำเนินธุรกิจด้วยความรับผิดชอบต่อสังคมและสิ่งแวดล้อม
          มุ่งมั่นพัฒนาเทคโนโลยีสะอาดและยั่งยืน เพื่อตอบโจทย์ความต้องการพลังงานของทุกภาคส่วน
          ตั้งแต่ครัวเรือนจนถึงอุตสาหกรรม ด้วยโซลูชันที่ปลอดภัย มีประสิทธิภาพ และเป็นมิตรกับสิ่งแวดล้อม
        </p>
        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-8 font-mono text-xs uppercase tracking-widest text-sage">
          <span>Clean</span>
          <span className="h-1 w-1 rounded-full bg-volt" />
          <span>Safe</span>
          <span className="h-1 w-1 rounded-full bg-volt" />
          <span>Efficient</span>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-volt">
          Innovation
        </p>
        <h2 className="mt-4 text-center font-display text-3xl text-paper sm:text-4xl">
          เทคโนโลยีหลักที่เป็นนวัตกรรม
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TECH.map((t) => (
            <div key={t.title} className="rounded-2xl border border-line bg-surface/40 p-6">
              <h3 className="font-display text-lg text-paper">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sage">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
