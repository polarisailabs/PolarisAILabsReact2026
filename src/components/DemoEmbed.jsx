import { PageHeader } from './ui.jsx'

export function DemoEmbed({ title, note, src, height = 700 }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-4">
        <span className="inline-block bg-brand-teal text-[#111] font-semibold text-sm px-5 py-2 rounded-full">
          {title}
        </span>
      </div>
      {note && <div className="text-center text-sm text-ink-soft mb-4 space-y-1">{note}</div>}
      <div className="rounded-lg overflow-hidden border border-gray-200">
        <iframe title={title} src={src} className="w-full" style={{ height }} loading="lazy" />
      </div>
    </div>
  )
}

export function DemoPage({ pageTitle, children }) {
  return (
    <div>
      <PageHeader title={pageTitle} />
      {children}
    </div>
  )
}
