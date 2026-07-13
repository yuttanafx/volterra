const NAV_ITEMS = ['หน้าแรก', 'โซลูชัน', 'นวัตกรรม', 'เกี่ยวกับเรา', 'ติดต่อ']

export default function Navbar() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
      <a href="#" className="font-display text-3xl tracking-tight text-paper">
        Voltera<sup className="text-sm text-volt">®</sup>
      </a>

      <ul className="hidden items-center gap-8 md:flex">
        {NAV_ITEMS.map((item, i) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm transition-colors hover:text-paper"
              style={{ color: i === 0 ? '#F4F7F2' : '#9CB3AA' }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="rounded-full bg-volt px-6 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:scale-[1.03]"
      >
        เริ่มต้นเปลี่ยนผ่าน
      </button>
    </nav>
  )
}
