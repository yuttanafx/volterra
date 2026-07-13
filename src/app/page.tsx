import VideoBackground from '@/components/VideoBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-ink">
      <VideoBackground />
      <Navbar />
      <Hero />
    </main>
  )
}
