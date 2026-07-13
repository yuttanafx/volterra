'use client'

import { useState, type FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }))
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-volt/40 bg-surface/40 p-8 text-center">
        <p className="font-display text-xl text-paper">ขอบคุณที่ติดต่อเรา</p>
        <p className="mt-2 text-sm text-sage">
          ทีมงาน Terravolteco ได้รับข้อความของคุณแล้ว และจะติดต่อกลับโดยเร็วที่สุด
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm({ name: '', email: '', subject: '', message: '' })
          }}
          className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm text-paper transition-colors hover:border-volt hover:text-volt"
        >
          ส่งข้อความอีกครั้ง
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface/40 p-6 md:p-8">
      <h3 className="font-display text-xl text-paper">ส่งข้อความถึงเรา</h3>
      <p className="mt-1 text-sm text-sage">กรอกข้อมูลด้านล่างเพื่อติดต่อสอบถามทีมงาน</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          required
          value={form.name}
          onChange={handleChange('name')}
          placeholder="ชื่อ-นามสกุล"
          className="rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-sage/70 outline-none transition-colors focus:border-volt"
        />
        <input
          required
          type="email"
          value={form.email}
          onChange={handleChange('email')}
          placeholder="อีเมล"
          className="rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-sage/70 outline-none transition-colors focus:border-volt"
        />
      </div>

      <input
        required
        value={form.subject}
        onChange={handleChange('subject')}
        placeholder="หัวข้อ"
        className="mt-4 w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-sage/70 outline-none transition-colors focus:border-volt"
      />

      <textarea
        required
        value={form.message}
        onChange={handleChange('message')}
        placeholder="ข้อความ"
        rows={5}
        className="mt-4 w-full resize-none rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-sage/70 outline-none transition-colors focus:border-volt"
      />

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-volt px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.01] sm:w-auto"
      >
        ส่งข้อความ
      </button>
    </form>
  )
}
