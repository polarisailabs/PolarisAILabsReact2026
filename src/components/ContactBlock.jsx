import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { sendContact } from '../lib/sendContact.js'
import SentNotice from './SentNotice.jsx'

export default function ContactBlock() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', comment: '' })
  const { pathname } = useLocation()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await sendContact({ ...form, website: e.target.website?.value || '' }, pathname)
      setSent(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h4 className="text-center text-lg font-bold text-ink mb-8">
        Please contact us with any questions or feedback
      </h4>
      {sent ? (
        <SentNotice
              onReset={() => {
                setSent(false)
                setForm({ name: '', email: '', phone: '', comment: '' })
              }}
            />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-ink-soft mb-1">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-soft mb-1">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-soft mb-1">Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-soft mb-1">Comment</label>
            <textarea
              rows={6}
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />
          </div>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="text-right">
            <button
              type="submit"
                disabled={sending}
              className="bg-brand-teal text-[#111] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-brand-teal-dark hover:text-white transition-colors"
            >
              {sending ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      )}
    </section>
  )
}
