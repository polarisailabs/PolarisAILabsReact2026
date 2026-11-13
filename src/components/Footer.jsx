import { Link } from 'react-router-dom'

const social = [
  { label: 'Facebook', icon: 'M13 22v-8h3l1-4h-4V7.5C13 6.36 13.36 6 14.5 6H17V2.14C16.63 2.1 15.36 2 14.02 2 11.17 2 9 3.66 9 6.6V10H6v4h3v8h4z' },
  { label: 'Twitter', icon: 'M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4.2 4.2 0 0 0-7.1 3.8A11.9 11.9 0 0 1 3 4.9a4.2 4.2 0 0 0 1.3 5.6c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.6.1-1.2.2-1.8.1.5 1.7 2 2.9 3.9 2.9A8.4 8.4 0 0 1 2 18.6 11.9 11.9 0 0 0 8.4 20.5c7.7 0 11.9-6.4 11.9-11.9v-.5c.8-.6 1.5-1.3 2.1-2.2z' },
  { label: 'LinkedIn', icon: 'M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z' },
]

const columns = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'PolarisAI Platform', to: '/platform' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Careers', to: '/about' },
      { label: 'Contact us', to: '/about' },
    ],
  },
  {
    heading: 'Latest Posts',
    links: [
      { label: 'GitHub Acquisition', href: 'https://bit.ly/3FldaBd' },
      { label: 'Monetization Strategies', href: 'https://bit.ly/3VLficA' },
    ],
  },
  {
    heading: 'Recent News',
    links: [
      { label: 'Business News', href: 'https://hbr.org/' },
      { label: 'Platforms News', href: 'https://platformthinkinglabs.com/' },
      { label: 'How Stuff Works', href: 'https://www.howstuffworks.com/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#161a20] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h5 className="text-white font-semibold text-[11px] mb-1 tracking-wide">Our Contact</h5>
          <address className="not-italic text-[10px] leading-4 text-gray-400">
            <strong className="text-gray-200">PolarisAI Labs</strong>
            <br />
            Bandlaguda Jagir
            <br />
            Hyderabad, INDIA
          </address>
          <p className="text-[10px] leading-4 text-gray-400 mt-1">
            (+91) 8978556611
            <br />
            gopala@polarisailabs.com
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h5 className="text-white font-semibold text-[11px] mb-1 tracking-wide">{col.heading}</h5>
            <ul className="space-y-0.5 text-[10px] leading-4">
              {col.links.map((l) =>
                l.to ? (
                  <li key={l.label}>
                    <Link to={l.to} className="text-gray-400 hover:text-brand-teal transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ) : (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-brand-teal transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-gray-400">&copy; PolarisAI Labs 2026 All rights reserved.</p>
          <div className="flex items-center gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-brand-teal hover:text-[#111] flex items-center justify-center text-gray-400 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
