import HeroTitle from './HeroTitle.jsx'

export function HeroModuleRow({ modules }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
      {modules.map((m) => (
        <div
          key={m.title}
          title={m.body}
          className="bg-white/12 backdrop-blur border border-white/20 rounded-[10px] px-2.5 py-2.5 text-white hover:bg-white/20 transition-colors"
        >
          <i className={`fa ${m.icon} block text-lg mb-1 text-white/90`} aria-hidden="true" />
          <div className="text-[11.5px] font-bold leading-tight">{m.title}</div>
        </div>
      ))}
    </div>
  )
}

export default function ProductHero({
  logoImg,
  logoIcon,
  title,
  badges,
  sub,
  tagline,
  modules,
  ctaLabel,
  ctaHref,
  ctaIcon = 'fa-play-circle',
  gradient,
}) {
  return (
    <div className={gradient || 'bg-gradient-to-br from-[#123a63] via-[#0d7de8] to-[#14b8a6]'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <div className="flex items-center justify-center gap-3 flex-wrap mb-1.5">
          {(logoImg || logoIcon) && (
            <span className="w-11 h-11 rounded-xl bg-white/15 ring-2 ring-white/30 shadow-lg shadow-black/20 flex items-center justify-center overflow-hidden text-white text-2xl shrink-0">
              {logoImg ? (
                <img src={logoImg} alt={`${title} logo`} className="w-full h-full object-cover" />
              ) : (
                <i className={`fa ${logoIcon}`} aria-hidden="true" />
              )}
            </span>
          )}
          <HeroTitle>{title}</HeroTitle>
          {badges?.map((b) => (
            <span
              key={b}
              className="bg-white/20 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-[3px] rounded-[14px]"
            >
              {b}
            </span>
          ))}
        </div>
        <h3 className="text-white/85 text-sm max-w-2xl mx-auto leading-relaxed">{sub}</h3>
        {tagline && <p className="text-white/85 text-sm mb-3">{tagline}</p>}
        <div className={tagline ? '' : 'mt-3'}>
          <HeroModuleRow modules={modules} />
        </div>
        {ctaHref && (
          <div className="mt-4">
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#123a63] font-bold text-[13px] px-5 py-2 rounded-md shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-transform"
            >
              <i className={`fa ${ctaIcon}`} aria-hidden="true" /> {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
