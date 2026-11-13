export function PageHeader({ title }) {
  return (
    <section className="brand-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-white font-[var(--font-display)]">{title}</h1>
      </div>
    </section>
  )
}

export function SectionIntro({ children }) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="space-y-4 text-[15px] leading-8 text-ink-soft text-justify">{children}</div>
    </section>
  )
}

export function StatCard({ number, label, source }) {
  return (
    <div className="bg-gray-50 border border-gray-200 border-t-4 border-t-brand-teal rounded px-5 py-6 text-center h-full flex flex-col justify-center hover:shadow-lg hover:shadow-black/5 transition-shadow">
      <div className="text-3xl font-extrabold text-brand-teal-dark leading-none">{number}</div>
      <div className="text-xs text-ink-soft mt-2 leading-snug">{label}</div>
      {source && <div className="text-[10px] text-gray-400 italic mt-1">{source}</div>}
    </div>
  )
}

export function CapCard({ icon, title, children }) {
  return (
    <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6 h-full flex flex-col hover:shadow-lg hover:shadow-black/5 hover:border-l-brand-teal-dark transition-all">
      <span className="text-2xl text-brand-teal-dark mb-3"><i className={`fa ${icon}`} aria-hidden="true" /></span>
      <h3 className="text-base font-bold text-ink mb-2">{title}</h3>
      <p className="text-[13.5px] leading-7 text-ink-soft text-justify">{children}</p>
    </div>
  )
}

export function PipelineStep({ icon, title, children, isLast }) {
  return (
    <div className="relative flex-1 min-w-[130px] text-center px-2 pb-4">
      <div className="w-12 h-12 rounded-full bg-brand-teal text-[#111] flex items-center justify-center text-lg mx-auto mb-2">
        <i className={`fa ${icon}`} aria-hidden="true" />
      </div>
      <h5 className="text-xs font-bold text-ink mb-1">{title}</h5>
      <p className="text-[10.5px] text-gray-500 leading-snug">{children}</p>
      {!isLast && (
        <span className="hidden md:block absolute top-4 -right-1 text-brand-teal text-sm">&rsaquo;</span>
      )}
    </div>
  )
}

export function MaturityBar({ label, value }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs text-ink-soft mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-teal-dark"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export function TrendItem({ badge, children }) {
  const badgeColor = { HOT: 'bg-red-500', NEW: 'bg-brand-teal-dark', RISING: 'bg-blue-600' }[badge]
  return (
    <div className="flex gap-3 py-3.5 border-b border-white/10 last:border-0">
      <span
        className={`shrink-0 mt-0.5 text-[10px] font-bold text-white rounded px-1.5 py-0.5 h-fit ${badgeColor}`}
      >
        {badge}
      </span>
      <p className="text-[13px] leading-6 text-gray-300">{children}</p>
    </div>
  )
}

export function InfoBlock({ icon, title, children }) {
  return (
    <div className="flex gap-4">
      <span className="shrink-0 w-11 h-11 rounded-full bg-teal-50 text-brand-teal-dark flex items-center justify-center text-lg">
        {icon}
      </span>
      <div>
        <h3 className="text-[15px] font-bold text-ink mb-1.5">{title}</h3>
        <p className="text-[13.5px] leading-7 text-ink-soft text-justify">{children}</p>
      </div>
    </div>
  )
}

export function ServiceBlock({ image, title, children }) {
  return (
    <div>
      {image && <img loading="lazy" src={image} alt="" className="w-full h-44 object-cover rounded mb-4" />}
      <h2 className="text-lg font-bold text-ink mb-2">{title}</h2>
      <p className="text-[13.5px] leading-7 text-ink-soft text-justify">{children}</p>
    </div>
  )
}

export function HeroModuleCard({ icon, title, children }) {
  return (
    <div className="bg-white/12 backdrop-blur border border-white/20 rounded-xl px-4 py-3.5 text-white hover:bg-white/20 transition-colors">
      <span className="block text-lg mb-1.5 text-white/90">{icon}</span>
      <div className="text-[12.5px] font-bold mb-0.5">{title}</div>
      <div className="text-[10.5px] text-white/70 leading-snug">{children}</div>
    </div>
  )
}

export function CompareTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 text-left">
            <th className="p-3.5 font-semibold text-ink border-b border-gray-200 w-1/5">Feature</th>
            <th className="p-3.5 font-semibold text-brand-teal-dark border-b border-gray-200 w-2/5">
              {rows.usLabel}
            </th>
            <th className="p-3.5 font-semibold text-ink-soft border-b border-gray-200 w-2/5">
              {rows.themLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.items.map((r) => (
            <tr key={r.feature} className="border-b border-gray-100 last:border-0 align-top">
              <td className="p-3.5 font-semibold text-ink">{r.feature}</td>
              <td className="p-3.5 text-ink-soft leading-6">{r.us}</td>
              <td className="p-3.5 text-gray-400 leading-6">{r.them}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CTA({ title, children, action }) {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
      <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4">{title}</h3>
      <p className="text-[14.5px] leading-7 text-ink-soft text-justify">{children}</p>
      {action && <div className="mt-7">{action}</div>}
    </section>
  )
}

export function VideoPlayer({ src, poster, title, caption }) {
  return (
    <figure className="w-full">
      {title && <h4 className="text-[14px] font-bold text-ink mb-2.5">{title}</h4>}
      <video
        controls
        preload="metadata"
        playsInline
        poster={poster}
        className="w-full aspect-video rounded-lg border border-gray-200 bg-black shadow-md shadow-black/5"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
      {caption && <figcaption className="text-xs text-ink-soft mt-2">{caption}</figcaption>}
    </figure>
  )
}
