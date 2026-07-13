export default function SpaceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="space-milkyway absolute inset-[-20%]" />
      <div className="absolute inset-0 space-stars" />
      <div className="absolute inset-0 space-stars-2" />
      <div className="space-orb-a absolute -top-32 -left-32 h-[460px] w-[460px] rounded-full bg-volt/20 blur-[110px]" />
      <div className="space-orb-b absolute top-1/4 -right-28 h-[400px] w-[400px] rounded-full bg-[#6ea8ff]/20 blur-[110px]" />
      <div className="space-orb-c absolute bottom-0 left-1/3 h-[340px] w-[340px] rounded-full bg-[#b98cff]/20 blur-[100px]" />
      <div className="space-orb-d absolute bottom-1/4 right-1/4 h-[260px] w-[260px] rounded-full bg-[#ff8ac2]/15 blur-[100px]" />
      <div className="space-orb-e absolute top-1/2 left-1/2 h-[320px] w-[320px] rounded-full bg-volt/10 blur-[130px]" />
      <div className="space-shooting-star" />
      <div className="space-shooting-star" style={{ top: '32%', animationDelay: '3s', animationDuration: '7s' }} />
      <div className="space-shooting-star" style={{ top: '58%', animationDelay: '6.2s', animationDuration: '11s' }} />
      <div className="space-shooting-star" style={{ top: '78%', animationDelay: '1.5s', animationDuration: '8.5s' }} />
    </div>
  )
}
