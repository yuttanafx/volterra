import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'ติดต่อเรา | Terravolteco',
  description: 'ช่องทางการติดต่อ Terravolteco — อีเมล เบอร์โทรศัพท์ LINE Official และที่อยู่บริษัท',
}

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.558141068117!2d100.544423!3d13.7451805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29edb2d4fe647%3A0x8e3f5e2586334016!2sAlma%20Link%20Building!5e0!3m2!1sen!2sth!4v1767026591398!5m2!1sen!2sth'

const INFO = [
  { label: 'อีเมล', value: 'varunya@terravolteco.com', href: 'mailto:varunya@terravolteco.com' },
  { label: 'เบอร์โทรศัพท์', value: '092-273-2376', href: 'tel:0922732376' },
  { label: 'Line Official', value: 'สอบถามข้อมูลเพิ่มเติมผ่านไลน์', href: 'https://lin.ee/nzYBrcA' },
  {
    label: 'ที่อยู่บริษัท',
    value: '25 อาคารอัลม่าลิงค์ ชั้น 17 ห้องเลขที่ 575 ซอยชิดลม ถนนเพลินจิตร แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330',
  },
]

export default function ContactPage() {
  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-8 pb-16 text-center md:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-volt">Get in Touch</p>
        <h1 className="font-display text-4xl text-paper sm:text-6xl" style={{ letterSpacing: '-1px' }}>
          ติดต่อ<em className="italic text-volt">เรา</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage sm:text-lg">
          พูดคุยกับทีมงาน Terravolteco เพื่อออกแบบโซลูชันพลังงานที่เป็นมิตรกับสิ่งแวดล้อมสำหรับคุณ
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {INFO.map((i) => (
              <div key={i.label} className="rounded-2xl border border-line bg-surface/40 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-volt">{i.label}</p>
                {i.href ? (
                  <a
                    href={i.href}
                    target={i.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm leading-relaxed text-paper transition-colors hover:text-volt sm:text-base"
                  >
                    {i.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-paper sm:text-base">{i.value}</p>
                )}
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                src={MAP_SRC}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Terravolteco Location"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageShell>
  )
}
