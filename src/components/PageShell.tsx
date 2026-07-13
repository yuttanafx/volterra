import Navbar from './Navbar'
import Footer from './Footer'
import SpaceBackground from './SpaceBackground'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/40 via-ink to-ink" />
      <SpaceBackground />
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  )
}
