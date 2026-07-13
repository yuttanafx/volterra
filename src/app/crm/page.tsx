import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'CRM ลูกค้า | Terravolteco',
  description: 'ตรวจสอบสถานะเครื่องกำเนิดไฟฟ้าและติดตามประสิทธิภาพการทำงานได้แบบเรียลไทม์',
}

const CRM_LINKS = [
  {
    title: 'สถานะเครื่อง CRM',
    desc: 'ตรวจสอบสถานะเครื่องกำเนิดไฟฟ้าและติดตามประสิทธิภาพการทำงานแบบเรียลไทม์',
    href: 'https://www.terravolteco.site/',
    cta: 'เข้าสู่ระบบตรวจสอบสถานะ',
  },
  {
    title: 'บัญชีของฉัน',
    desc: 'จัดการข้อมูลบัญชี คำสั่งซื้อ และประวัติการใช้งานของคุณ',
    href: 'https://dealer-customer.vercel.app/',
    cta: 'เข้าสู่บัญชีของฉัน',
  },
  {
    title: 'พื้นที่สมาชิก',
    desc: 'เข้าสู่ระบบสมาชิกเพื่อดูสิทธิประโยชน์และสั่งซื้อผลิตภัณฑ์',
    href: 'https://terravolt-eco.click/membership-login/',
    cta: 'เข้าสู่ระบบสมาชิก',
  },
  {
    title: 'ประเมินคาร์บอนเครดิต',
    desc: 'ซอฟต์แวร์คำนวณและประเมินคาร์บอนเครดิตด้วยเทคโนโลยีบล็อกเชน',
    href: 'https://tvet-mining.vercel.app/',
    cta: 'เปิดเครื่องมือประเมิน',
  },
  {
    title: 'ระบบสะสมแต้มเพื่อแลกรางวัล',
    desc: 'สมนาคุณพิเศษสำหรับลูกค้าทุกท่านที่ใช้ผลิตภัณฑ์ Terravolteco',
    href: 'https://tve-ecosystem-tech.vercel.app/',
    cta: 'ดูระบบสะสมแต้ม',
  },
  {
    title: 'ฝ่ายซ่อมบำรุง',
    desc: 'แจ้งซ่อมและติดตามงานบำรุงรักษาเครื่องกำเนิดไฟฟ้า',
    href: 'https://astoenergy.site/',
    cta: 'ติดต่อฝ่ายซ่อมบำรุง',
  },
]

export default function CrmPage() {
  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-8 pb-16 text-center md:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-volt">
          Customer CRM
        </p>
        <h1 className="font-display text-4xl text-paper sm:text-6xl" style={{ letterSpacing: '-1px' }}>
          เพราะไฟฟ้าคือ<em className="italic text-volt">หัวใจของธุรกิจ</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage sm:text-lg">
          ตรวจเช็กเครื่องกำเนิดไฟฟ้าของคุณวันนี้ ก่อนที่ความเสียหายจะมาเยือน
          ระบบ CRM ของ Terravolteco ช่วยให้คุณตรวจสอบสถานะเครื่องและติดตามประสิทธิภาพ
          การทำงานได้ตลอด 24 ชั่วโมง
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CRM_LINKS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col justify-between rounded-2xl border border-line bg-surface/40 p-6"
            >
              <div>
                <h3 className="font-display text-lg text-paper">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sage">{c.desc}</p>
              </div>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-medium text-paper transition-colors hover:border-volt hover:text-volt"
              >
                {c.cta} ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24 md:px-8">
        <div className="rounded-2xl border border-line bg-surface/40 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
            ส่วนร่วมในการรักษ์โลก
          </p>
          <h2 className="mt-4 font-display text-2xl text-paper sm:text-3xl">
            บล็อกเชนและการประเมินคาร์บอนเครดิต
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-sage sm:text-base">
            การผสานรวมระหว่างเทคโนโลยีบล็อกเชนและการประเมินคาร์บอนเครดิต คือโครงสร้างพื้นฐานใหม่
            ที่จำเป็นสำหรับตลาดคาร์บอนยุคถัดไป ความโปร่งใสที่ตรวจสอบได้ด้วยโค้ดคอมพิวเตอร์และข้อมูลดาวเทียม
            ช่วยเปลี่ยนผ่านจากความเคลือบแคลงสงสัยไปสู่การลงมือทำเพื่อสิ่งแวดล้อมที่จับต้องได้จริง
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-sage">
            <li>
              <span className="text-volt">• เปิดโอกาสให้รายย่อย —</span> เกษตรกรที่ปลูกป่าชุมชนขนาดเล็ก
              สามารถรวมกลุ่มออกคาร์บอนเครดิตขายได้ง่ายขึ้น
            </li>
            <li>
              <span className="text-volt">• ตลาดซื้อขายตลอด 24 ชั่วโมง —</span> การซื้อขายผ่าน
              Decentralized Exchange ช่วยให้เกิดสภาพคล่องสูง ไม่มีตัวกลางค่าธรรมเนียมแพง
            </li>
            <li>
              <span className="text-volt">• ความเชื่อมั่นจากนักลงทุน —</span> ตรวจสอบเนื้อแท้ของคาร์บอนเครดิต
              ได้อย่างสบายใจ ตอบโจทย์เกณฑ์ ESG อย่างแท้จริง
            </li>
          </ul>
        </div>
      </section>
    </PageShell>
  )
}
