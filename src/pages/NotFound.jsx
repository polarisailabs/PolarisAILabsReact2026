import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-extrabold text-brand-teal-dark mb-4">404</h1>
      <p className="text-ink-soft mb-8">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-brand-teal text-[#111] font-semibold text-sm px-6 py-3 rounded-full hover:bg-brand-teal-dark hover:text-white transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
