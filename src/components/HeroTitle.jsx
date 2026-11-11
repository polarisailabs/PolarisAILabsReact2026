export default function HeroTitle({ children }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-3">
        <span className="hidden sm:block h-px w-10 bg-gradient-to-r from-transparent to-white/70" />
        <span className="hidden sm:inline text-white/80 text-[10px]">&#9670;</span>
        <h1
          className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}
        >
          {children}
        </h1>
        <span className="hidden sm:inline text-white/80 text-[10px]">&#9670;</span>
        <span className="hidden sm:block h-px w-10 bg-gradient-to-l from-transparent to-white/70" />
      </div>
      <span className="mt-1 h-[3px] w-16 rounded-full bg-gradient-to-r from-white/20 via-white to-white/20" />
    </div>
  )
}
