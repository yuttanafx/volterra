export default function SpaceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 space-stars" />
      <div className="space-orb-a absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-volt/10 blur-[120px]" />
      <div className="space-orb-b absolute top-1/3 -right-24 h-[360px] w-[360px] rounded-full bg-[#6ea8ff]/10 blur-[120px]" />
      <div className="space-orb-c absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#b98cff]/10 blur-[110px]" />
      <div className="space-shooting-star" />
      <div className="space-shooting-star" style={{ top: '38%', animationDelay: '5.5s' }} />
    </div>
  )
}
