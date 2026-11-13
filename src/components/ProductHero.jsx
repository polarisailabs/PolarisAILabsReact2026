import { Link } from 'react-router-dom'
import HeroTitle from './HeroTitle.jsx'

export function HeroModuleRow({ modules }) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {modules.map((m) => (
        <div
          key={m.title}
          title={m.body}
          className="w-[calc((100%-10px)/2)] sm:w-[calc((100%-30px)/4)] lg:w-[calc((100%-70px)/8)] bg-white/12 backdrop-blur border border-white/20 rounded-[10px] px-2.5 py-2.5 text-white text-center flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
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
  ctaTo,
  poweredBy,
  ctaIcon = 'fa-play-circle',
  gradient,
}) {
  return (
    <div className={gradient || 'bg-gradient-to-br from-[#123a63] via-[#0d7de8] to-[#14b8a6]'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <div className="grid sm:grid-cols-[1fr_auto_1fr] items-center gap-3 mb-1.5">
          <div className="flex justify-center sm:justify-end">
            {(logoImg || logoIcon) && (
              <span className="w-11 h-11 rounded-xl bg-white/15 ring-2 ring-white/30 shadow-lg shadow-black/20 flex items-center justify-center overflow-hidden text-white text-2xl shrink-0">
                {logoImg ? (
                  <img src={logoImg} alt={`${title} logo`} className="w-full h-full object-cover" />
                ) : (
                  <i className={`fa ${logoIcon}`} aria-hidden="true" />
                )}
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <HeroTitle
              below={
                poweredBy && (
                  <span className="mt-1.5 text-white/85 text-[12px] tracking-wide whitespace-nowrap">
                    Powered by{' '}
                    <Link to={poweredBy.to} className="font-bold text-white underline-offset-4 hover:underline">
                      {poweredBy.label}
                    </Link>
                  </span>
                )
              }
            >
              {title}
            </HeroTitle>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
            {badges?.map((b) => (
              <span
                key={b}
                className="bg-white/20 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-[3px] rounded-[14px]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
        {sub && <h3 className="text-white/85 text-sm max-w-2xl mx-auto leading-relaxed">{sub}</h3>}
        {tagline && <p className="text-white/85 text-sm mb-3">{tagline}</p>}
        <div className={tagline || sub ? '' : 'mt-3'}>
          <HeroModuleRow modules={modules} />
        </div>
        {(ctaHref || ctaTo) && (
          <div className="mt-4">
            {ctaTo ? (
              <Link
                to={ctaTo}
                className="inline-flex items-center gap-2 bg-white text-[#123a63] font-bold text-[13px] px-5 py-2 rounded-md shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-transform"
              >
                <i className={`fa ${ctaIcon}`} aria-hidden="true" /> {ctaLabel}
              </Link>
            ) : (
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#123a63] font-bold text-[13px] px-5 py-2 rounded-md shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-transform"
              >
                <i className={`fa ${ctaIcon}`} aria-hidden="true" /> {ctaLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
