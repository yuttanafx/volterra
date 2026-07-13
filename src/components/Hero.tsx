import Link from 'next/link'
import EnergyPulse from './EnergyPulse'

export default function Hero() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center px-6 pb-24 text-center"
      style={{ paddingTop: 'calc(8rem - 40px)' }}
    >
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-volt animate-fade-rise">
        100% Clean Energy · Zero Carbon Emissions · Since 2025
      </p>

      <h1
        className="font-display max-w-5xl text-5xl font-normal text-paper sm:text-7xl md:text-8xl animate-fade-rise"
        style={{ lineHeight: 0.98, letterSpacing: '-2px' }}
      >
        Terravolteco
        <br />
        พลังงานที่<em className="italic text-volt">เป็นมิตรกับสิ่งแวดล้อม</em>
        <br />
        เพื่ออนาคตที่<em className="italic text-volt">ยั่งยืนกว่า</em>
      </h1>

      <p
        className="mt-8 max-w-2xl text-base leading-relaxed text-sage sm:text-lg animate-fade-rise-delay"
      >
        เทอร์ร่าโวลท์อิโค่ คือผู้นำด้านการพัฒนาและประยุกต์ใช้เทคโนโลยีพลังงานสะอาดแห่งอนาคต
        ผสานโซลาร์เซลล์ประสิทธิภาพสูง ไมโครกริดอัจฉริยะด้วย AI
        และระบบกักเก็บพลังงานขั้นสูง เพื่อขับเคลื่อนการเปลี่ยนแปลงด้านพลังงานทั่วโลก
        ด้วยโซลูชันที่เป็นมิตรต่อสิ่งแวดล้อมและยั่งยืนในระยะยาว
      </p>

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row animate-fade-rise-delay">
        <Link
          href="/environment"
          className="rounded-full bg-volt px-14 py-5 text-base font-medium text-ink transition-transform duration-200 hover:scale-[1.03]"
        >
          เรียนรู้เพิ่มเติม
        </Link>
        <a
          href="https://terravolt-eco.click/membership-login/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-14 py-5 text-base font-medium text-paper transition-colors duration-200 hover:border-volt hover:text-volt"
        >
          พื้นที่สมาชิก
        </a>
      </div>

      <div className="mt-16">
        <EnergyPulse />
      </div>
    </section>
  )
}
