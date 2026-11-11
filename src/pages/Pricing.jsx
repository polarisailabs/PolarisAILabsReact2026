import { PageHeader } from '../components/ui.jsx'

const PLANS = [
  { name: 'Basic', price: '$15.00 / Year' },
  { name: 'Standard', price: '$20.00 / Year' },
  { name: 'Advanced', price: '$15.00 / Year', featured: true },
  { name: 'Mighty', price: '$15.00 / Year' },
]

const FEATURES = [
  'Responsive Design',
  'Bootstrap Design',
  'Unlimited Support',
  'Free Trial version',
  'HTML5 CSS3 jQuery',
]

export default function Pricing() {
  return (
    <div>
      <PageHeader title="Pricing" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h4 className="text-lg font-bold text-ink mb-8">Our best plans</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`rounded-lg border p-6 flex flex-col items-center text-center ${
                p.featured
                  ? 'border-brand-teal shadow-lg shadow-brand-teal/10 scale-[1.03]'
                  : 'border-gray-200'
              }`}
            >
              <h3 className="text-lg font-bold text-ink mb-2">{p.name}</h3>
              <p className="text-brand-teal-dark font-semibold mb-5">{p.price}</p>
              <ul className="space-y-2 text-sm text-ink-soft mb-6 text-left w-full">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-brand-teal-dark shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8.5L6 12.5L14 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-brand-teal text-[#111] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-brand-teal-dark hover:text-white transition-colors">
                Get Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
