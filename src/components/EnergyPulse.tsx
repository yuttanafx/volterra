'use client'

import { useEffect, useState } from 'react'

// Signature element: a live-ticking counter standing in for a decentralized
// network of generation sites reporting in real time. Encodes the brief's
// "decentralized clean energy" idea as a moving number, not a static stat.
export default function EnergyPulse() {
  const [kwh, setKwh] = useState(142_863)

  useEffect(() => {
    const id = window.setInterval(() => {
      setKwh((prev) => prev + Math.floor(Math.random() * 4) + 1)
    }, 1200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col items-center gap-2 animate-fade-rise-delay-2">
      <div className="h-px w-24 origin-center bg-volt animate-pulse-line" />
      <p className="font-mono text-xs tracking-widest text-sage">
        พลังงานสะสมทั่วเครือข่าย · วันนี้
      </p>
      <p className="font-mono text-lg tabular-nums text-volt">
        {kwh.toLocaleString('th-TH')} <span className="text-sage">kWh</span>
      </p>
    </div>
  )
}
