import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'สินค้า | Terravolteco',
  description: 'Ion Hybrid System Reverse — นวัตกรรมระบบไฮบริดพลังงานของ Terravolteco พร้อมคู่มือผลิตภัณฑ์',
}

const PRODUCTS = [
  {
    name: 'Ion Generator R-2384',
    desc: 'ระบบการจัดเก็บแบบไฮบริด (Energy Storage) เป็นองค์ประกอบสำคัญของระบบพลังงานยุคใหม่ ช่วยรักษาเสถียรภาพของโครงข่ายไฟฟ้า รองรับความไม่แน่นอนของพลังงานหมุนเวียน ทำให้จ่ายไฟได้ต่อเนื่อง',
  },
  {
    name: 'Energy Storage-2322',
    desc: 'ระบบจัดเก็บพลังงานแบบไฮบริด (HESS) ผสานเทคโนโลยีมากกว่าหนึ่งชนิดเพื่อลดข้อจำกัดของแต่ละระบบ เช่น การจับคู่ตัวเก็บประจุที่ตอบสนองเร็วเข้ากับแบตเตอรี่ความจุสูง',
  },
  {
    name: 'Hybrid System R-2381X',
    desc: 'การรวมแบตเตอรี่ลิเธียมไอออนที่ตอบสนองเร็ว เข้ากับอัลตร้าแคปาซิเตอร์หรือระบบฟลายวีล เพื่อประสิทธิภาพการชาร์จ-คายประจุที่เหนือกว่าระบบทั่วไป',
  },
  {
    name: 'Ion Hybrid System-2125',
    desc: 'จุดเด่น: ประสิทธิภาพสูงขึ้น รับภาระโหลดฉับพลันได้ดี ยืดอายุการใช้งานแบตเตอรี่ รักษาเสถียรภาพแรงดันและความถี่ไฟฟ้า ลดต้นทุนการบำรุงรักษาในระยะยาว',
  },
]

const CYCLE = [
  { step: '1', title: 'แผ่นเหนี่ยวนำน้ำอากาศ', out: 'น้ำ (H₂O)', desc: 'ดึงความชื้นจากอากาศมากลั่นตัวเป็นน้ำบริสุทธิ์เพื่อใช้ในกระบวนการถัดไป' },
  { step: '2', title: 'วัสดุแยกไฮโดรเจน', out: 'ก๊าซไฮโดรเจน (H₂)', desc: 'แยกโมเลกุลน้ำด้วยกระบวนการทางไฟฟ้าหรือเคมีขั้นสูง' },
  { step: '3', title: 'เซลล์เชื้อเพลิง (Fuel Cell)', out: 'ไฟฟ้ากระแสตรง (DC)', desc: 'ใช้แผ่น Platinum/Nafion ในการแปลงพลังงานเคมีเป็นพลังงานไฟฟ้า' },
  { step: '4', title: 'ตัวเก็บประจุ (Capacitor)', out: 'พลังงานพร้อมใช้', desc: 'สำรองพลังงานและปรับแรงดันไฟฟ้าให้คงที่พร้อมสำหรับการจ่ายไฟ' },
  { step: '5', title: 'มอเตอร์กำลังไฟ', out: 'แรงบิด / แรงหมุน', desc: 'เปลี่ยนพลังงานไฟฟ้าเป็นพลังงานกลที่มีประสิทธิภาพสูง' },
  { step: '6', title: 'เครื่องจักร / เครื่องยนต์', out: 'Output System', desc: 'นำพลังงานกลไปใช้ขับเคลื่อนระบบหรือยานยนต์อย่างเต็มประสิทธิภาพ' },
]

export default function ProductsPage() {
  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-8 pb-4 text-center md:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-volt">
          Our Innovations
        </p>
        <h1 className="font-display text-4xl text-paper sm:text-6xl" style={{ letterSpacing: '-1px' }}>
          ผลิตภัณฑ์ <em className="italic text-volt">ของเรา</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sage sm:text-lg">
          นวัตกรรมพลังงานสะอาดที่ผสานประสิทธิภาพและความยั่งยืน เพื่อขับเคลื่อนอนาคตที่ดีกว่าสำหรับทุกคน
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-line bg-surface/40 p-6 md:grid-cols-2 md:p-10">
          <img
            src="https://terravolteco.com/58009.png"
            alt="Ion Hybrid System Reverse"
            className="mx-auto max-h-96 w-auto object-contain"
          />
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-volt">
              Flagship Model · Hybrid System · Clean Energy
            </span>
            <h2 className="mt-4 font-display text-2xl text-paper sm:text-3xl">
              Ion Hybrid System Reverse
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-sage sm:text-base">
              นวัตกรรมพลังงานแห่งอนาคต ผสานเทคโนโลยีการจัดเก็บและจ่ายพลังงานที่มีประสิทธิภาพสูงสุด
              ควบคุมด้วยดาวเทียม สามารถรีเวิร์สไฟฟ้าในระบบด้วยตัวเอง รวมหลายแหล่งพลังงานเข้าไว้ด้วยกัน
              เช่น ไฟหลัก แบตเตอรี่ แผงโซลาร์ หรือเจนเนอเรเตอร์
            </p>
            <a
              href="https://drive.google.com/file/d/1Tru9gQveUskNwOBd86HooTtCe3UYufT6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-volt px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              คู่มือผลิตภัณฑ์ ↗
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="rounded-2xl border border-line bg-surface/40 p-6">
              <h3 className="font-display text-lg text-paper">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sage">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-sage/80">
          สินค้าจะมีราคาตามขนาดประสิทธิภาพการจัดการไฟฟ้า เฉลี่ยขั้นต่ำ 20,000 บาท/Kw
          (ไม่รวมค่าจัดส่ง)
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-volt">
          Mechanism
        </p>
        <h2 className="mt-4 text-center font-display text-3xl text-paper sm:text-4xl">
          ระบบกลไกการทำงาน
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <img
            src="https://terravolteco.com/terravolt.jpg"
            alt="ระบบกลไกการทำงาน Terravolteco"
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-sage">
          กระบวนการเปลี่ยนผ่านพลังงานจากธรรมชาติสู่พลังงานกลที่มีประสิทธิภาพสูง ด้วยเทคโนโลยีที่เป็นมิตร
          ต่อสิ่งแวดล้อม ผ่านวงจรการทำงาน 6 ขั้นตอน
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CYCLE.map((c) => (
            <div key={c.step} className="rounded-2xl border border-line bg-surface/40 p-6">
              <span className="font-mono text-2xl text-volt">{c.step}</span>
              <h3 className="mt-2 font-display text-base text-paper">{c.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-volt/80">{c.out}</p>
              <p className="mt-3 text-sm leading-relaxed text-sage">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
