'use client'

import { useEffect, useRef } from 'react'

// Replace with your own wind turbine / solar field footage.
// Drop the file into /public/media/ and update the path below.
const VIDEO_URL = '/media/hero-clean-energy.mp4'

const FADE_DURATION = 0.5 // seconds

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tick = () => {
      const { currentTime, duration } = video

      if (duration && !Number.isNaN(duration)) {
        let opacity = 1

        if (currentTime < FADE_DURATION) {
          opacity = currentTime / FADE_DURATION
        } else if (currentTime > duration - FADE_DURATION) {
          opacity = Math.max(0, (duration - currentTime) / FADE_DURATION)
        }

        video.style.opacity = String(Math.min(1, Math.max(0, opacity)))
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const handleEnded = () => {
      video.style.opacity = '0'
      window.setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
      }, 100)
    }

    rafRef.current = requestAnimationFrame(tick)
    video.addEventListener('ended', handleEnded)
    video.play().catch(() => {})

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        style={{ opacity: 0 }}
        src={VIDEO_URL}
        muted
        playsInline
        autoPlay
        preload="auto"
      />
      {/* dark gradient wash so light UI reads on any footage */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
    </div>
  )
}
