'use client'

import { useTheme } from './ThemeProvider'

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'สลับเป็นโหมดกลางวัน' : 'สลับเป็นโหมดกลางคืน'}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-volt hover:text-volt"
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4.2" />
          <path
            strokeLinecap="round"
            d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5a.6.6 0 0 0-.7-.85A9.5 9.5 0 1 0 21.35 15.4a.6.6 0 0 0-.85-.7Z" />
        </svg>
      )}
    </button>
  )
}
