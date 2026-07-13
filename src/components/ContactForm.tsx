'use client'

import { useState, type FormEvent } from 'react'
import { useLanguage } from './LanguageProvider'

export default function ContactForm() {
  const { t } = useLanguage()
  const f = t.contact.form
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-volt/40 bg-surface/40 p-8 text-center">
        <p className="font-display text-xl text-paper">{f.thanksTitle}</p>
        <p className="mt-2 text-sm text-sage">{f.thanksBody}</p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm({ name: '', email: '', subject: '', message: '' })
          }}
          className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm text-paper transition-colors hover:border-volt hover:text-volt"
        >
          {f.again}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glow-card rounded-2xl border border-line bg-surface/40 p-6 md:p-8">
      <h3 className="font-display text-xl text-paper">{f.title}</h3>
      <p className="mt-1 text-sm text-sage">{f.subtitle}</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          required
          value={form.name}
          onChange={handleChange('name')}
          placeholder={f.name}
          className="rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-sage/70 outline-none transition-colors focus:border-volt"
        />
        <input
          required
          type="email"
          value={form.email}
          onChange={handleChange('email')}
          placeholder={f.email}
          className="rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-sage/70 outline-none transition-colors focus:border-volt"
        />
      </div>

      <input
        required
        value={form.subject}
        onChange={handleChange('subject')}
        placeholder={f.subject}
        className="mt-4 w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-sage/70 outline-none transition-colors focus:border-volt"
      />

      <textarea
        required
        value={form.message}
        onChange={handleChange('message')}
        placeholder={f.message}
        rows={5}
        className="mt-4 w-full resize-none rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-sage/70 outline-none transition-colors focus:border-volt"
      />

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-volt px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.01] sm:w-auto"
      >
        {f.submit}
      </button>
    </form>
  )
}
