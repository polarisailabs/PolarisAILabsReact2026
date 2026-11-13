import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { sendContact } from '../lib/sendContact.js'
import SentNotice from '../components/SentNotice.jsx'
import { PageHeader } from '../components/ui.jsx'
import { DEMO_CONFIGS } from '../data/demoConfigs.js'
import { SUMATIAI_DEMO } from '../data/sumatiaiDemoConfig.js'

const EMPTY = { name: '', email: '', phone: '', company: '', role: '', interests: [], comment: '' }

const inputClass =
  'w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal'

export default function DemoRequest({ product }) {
  const cfg = DEMO_CONFIGS[product] ?? (product === 'sumatiai' ? SUMATIAI_DEMO : undefined)
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  function toggleInterest(item) {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(item) ? f.interests.filter((i) => i !== item) : [...f.interests, item],
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await sendContact(
        {
          ...form,
          interests: form.interests.join(', '),
          subject: `${cfg.name} demo request from ${form.name}${form.company ? ` (${form.company})` : ''}`,
          website: e.target.website?.value || '',
        },
        `${cfg.name} Demo Request`,
      )
      setSent(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  if (!cfg) return <Navigate to="/" replace />

  return (
    <div>
      <PageHeader title={`Request a ${cfg.name} Demo`} />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <p className="text-[14.5px] leading-8 text-ink-soft">{cfg.intro}</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-10">
        <div>
          {sent ? (
            <div className="space-y-4">
              <SentNotice
                title="Demo request received"
                message={`Thanks for your interest in ${cfg.name}. We will contact you shortly to arrange your demo.`}
                resetLabel="Submit another request"
                onReset={() => {
                  setSent(false)
                  setForm(EMPTY)
                }}
              />
              <div className="text-center">
                <Link to={cfg.backTo} className="text-sm font-semibold text-brand-teal-dark hover:underline">
                  &lsaquo; Back to {cfg.name}
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="demo-name" className="block text-xs font-semibold text-ink-soft mb-1">Name</label>
                <input
                  id="demo-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="demo-email" className="block text-xs font-semibold text-ink-soft mb-1">{cfg.companyRequired ? 'Work email' : 'Email'}</label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-company" className="block text-xs font-semibold text-ink-soft mb-1">
                    Organization{!cfg.companyRequired && <span className="font-normal text-gray-400"> (optional)</span>}
                  </label>
                  <input
                    id="demo-company"
                    type="text"
                    required={cfg.companyRequired}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="demo-role" className="block text-xs font-semibold text-ink-soft mb-1">Job title</label>
                  <input
                    id="demo-role"
                    type="text"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="demo-phone" className="block text-xs font-semibold text-ink-soft mb-1">Phone</label>
                <input
                  id="demo-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <fieldset>
                <legend className="block text-xs font-semibold text-ink-soft mb-2">
                  What would you like to see? <span className="font-normal text-gray-400">(optional)</span>
                </legend>
                <div className="flex flex-wrap gap-2">
                  {cfg.interests.map((item) => {
                    const on = form.interests.includes(item)
                    return (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggleInterest(item)}
                        className={`text-[12px] font-semibold rounded-full px-3.5 py-1 border transition-colors ${
                          on
                            ? 'bg-brand-teal border-brand-teal text-[#111]'
                            : 'bg-teal-50 border-teal-100 text-brand-teal-dark hover:border-brand-teal'
                        }`}
                      >
                        {on && <i className="fa fa-check mr-1.5" aria-hidden="true" />}
                        {item}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
              <div>
                <label htmlFor="demo-comment" className="block text-xs font-semibold text-ink-soft mb-1">Comment</label>
                <textarea
                  id="demo-comment"
                  rows={5}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className={inputClass}
                />
              </div>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              {error && <p className="text-sm text-red-600">{error}</p>}
              <div className="text-right">
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-brand-teal text-[#111] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-brand-teal-dark hover:text-white transition-colors disabled:opacity-60"
                >
                  {sending ? 'Sending...' : 'Request Demo'}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6">
            <h3 className="text-base font-bold text-ink mb-5">How it works</h3>
            <ol className="space-y-5">
              {cfg.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-brand-teal text-[#111] flex items-center justify-center text-base">
                    <i className={`fa ${s.icon}`} aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-[14px] font-bold text-ink">
                      {i + 1}. {s.title}
                    </h4>
                    <p className="text-[13px] leading-6 text-ink-soft">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-3">What we can show you</h3>
            <ul className="space-y-2.5">
              {cfg.covered.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] leading-6 text-ink-soft">
                  <i className="fa fa-check-circle text-brand-teal-dark mt-1 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link to={cfg.backTo} className="inline-block text-sm font-semibold text-brand-teal-dark hover:underline">
            &lsaquo; Back to {cfg.name}
          </Link>
        </div>
      </section>
    </div>
  )
}
