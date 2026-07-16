import VideoBackground from '@/components/VideoBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import QuickLinks from '@/components/QuickLinks'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'
import PdpaConsent from '@/components/PdpaConsent'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-ink">
      <VideoBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <QuickLinks />
        <Certifications />
        <Footer />
      </div>
      <PdpaConsent />
    </main>
  )
}
