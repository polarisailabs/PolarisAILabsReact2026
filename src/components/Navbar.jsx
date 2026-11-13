import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'Products',
    items: [
      { label: 'SumatiAI', to: '/products/sumatiai' },
      { label: 'VegaAI', to: '/products/vegaai' },
      { label: 'MarisAI', to: '/products/marisai' },
      { label: 'SpicaAI', to: '/products/spicaai' },
    ],
  },
  {
    label: 'Platforms',
    items: [
      { label: 'PolarisAI Platform', to: '/platform' },
      { label: 'RohiniAI Platform', to: '/platform/rohiniai' },
    ],
  },
  {
    label: 'Research',
    items: [
      { label: 'AI DNA Database', to: '/research/ai-dna-database' },
      { label: 'Pharma AI Economics', to: '/research/pharma-ai-economics' },
    ],
  },
  {
    label: 'Product Management',
    items: [
      { label: 'Advisory', to: '/product-management' },
      { label: 'Mentorship', to: '/mentorship' },
    ],
  },
  {
    label: 'Technology',
    items: [
      { label: 'Advisory', to: '/technology' },
      { label: 'Mentorship', to: '/mentorship' },
    ],
  },
  { label: 'About Us', to: '/about' },
]

function DesktopItem({ item }) {
  if (!item.items) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            isActive ? 'text-brand-teal-dark' : 'text-ink hover:text-brand-teal-dark'
          }`
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div className="relative group">
      <button className="px-3 py-1.5 text-sm font-medium text-ink hover:text-brand-teal-dark transition-colors flex items-center gap-1">
        {item.label}
        <svg className="w-3 h-3 mt-px" viewBox="0 0 12 8" fill="none">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-2 transition-all duration-150 z-40">
        <div className="min-w-[220px] rounded-lg border border-gray-100 bg-white py-2 shadow-lg shadow-black/5">
          {item.items.map((sub) => (
            <NavLink
              key={sub.to}
              to={sub.to}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm transition-colors ${
                  isActive ? 'text-brand-teal-dark bg-teal-50/60' : 'text-ink-soft hover:bg-gray-50 hover:text-ink'
                }`
              }
            >
              {sub.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false)

  if (!item.items) {
    return (
      <NavLink
        to={item.to}
        onClick={onNavigate}
        className={({ isActive }) =>
          `block px-4 py-3 text-sm font-medium border-b border-gray-100 ${
            isActive ? 'text-brand-teal-dark' : 'text-ink'
          }`
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-ink"
      >
        {item.label}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 8"
          fill="none"
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="bg-gray-50 pb-1">
          {item.items.map((sub) => (
            <NavLink
              key={sub.to}
              to={sub.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                `block px-8 py-2.5 text-sm ${isActive ? 'text-brand-teal-dark' : 'text-ink-soft'}`
              }
            >
              {sub.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b-4 border-brand-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img src="/img/logo.png" alt="PolarisAI Labs" className="h-8 w-auto" />
          </NavLink>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-ink"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 max-h-[calc(100vh-3.75rem)] overflow-y-auto bg-white">
          {NAV.map((item) => (
            <MobileItem key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
          ))}
        </div>
      )}
    </header>
  )
}
