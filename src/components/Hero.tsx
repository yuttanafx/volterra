import EnergyPulse from './EnergyPulse'

export default function Hero() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center px-6 pb-28 text-center"
      style={{ paddingTop: 'calc(8rem - 40px)' }}
    >
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-volt animate-fade-rise">
        100% Clean · Zero Carbon · Since 2025
      </p>

      <h1
        className="font-display max-w-5xl text-5xl font-normal text-paper sm:text-7xl md:text-8xl animate-fade-rise"
        style={{ lineHeight: 0.98, letterSpacing: '-2px' }}
      >
        พลังงานที่<em className="italic text-volt">คุณผลิตเอง</em>
        <br />
        คือพลังงานที่<em className="italic text-volt">ไม่มีวันดับ</em>
      </h1>

      <p
        className="mt-8 max-w-2xl text-base leading-relaxed text-sage sm:text-lg animate-fade-rise-delay"
      >
        โซลูชันพลังงานสะอาดแบบกระจายศูนย์ ผสานโซลาร์เซลล์ประสิทธิภาพสูง
        ไมโครกริดอัจฉริยะด้วย AI และระบบกักเก็บพลังงานขั้นสูง
        เพื่อให้ทุกพื้นที่พึ่งพาตัวเองได้อย่างยั่งยืน
      </p>

      <button
        type="button"
        className="mt-12 rounded-full bg-volt px-14 py-5 text-base font-medium text-ink transition-transform duration-200 hover:scale-[1.03] animate-fade-rise-delay"
      >
        เริ่มต้นเปลี่ยนผ่าน
      </button>

      <div className="mt-16">
        <EnergyPulse />
      </div>
    </section>
  )
}
