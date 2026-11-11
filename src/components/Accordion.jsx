import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(-1)

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
      {items.map((item, i) => (
        <div key={item.title}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold text-ink hover:bg-gray-50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <svg
                className={`w-3 h-3 text-brand-teal-dark transition-transform ${open === i ? 'rotate-90' : ''}`}
                viewBox="0 0 8 12"
                fill="none"
              >
                <path d="M1 1L7 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {item.title}
            </span>
          </button>
          {open === i && (
            <div className="px-4 pb-4 text-[13.5px] leading-7 text-ink-soft text-justify">{item.body}</div>
          )}
        </div>
      ))}
    </div>
  )
}
