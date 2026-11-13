import { useState } from 'react'
import { sendContact } from '../lib/sendContact.js'
import SentNotice from '../components/SentNotice.jsx'
import { PageHeader } from '../components/ui.jsx'
import Accordion from '../components/Accordion.jsx'

const INDUSTRIES = [
  {
    title: 'Ecommerce',
    body: "Discover how our product management expertise can elevate your e-commerce business! With years of experience, we have honed our skills in creating innovative and user-friendly products that drive sales and boost customer satisfaction. Don't let a lack of expertise hold you back from achieving success — let us help take your e-commerce business to the next level.",
  },
  {
    title: 'IoT',
    body: 'Unlock the full potential of your IoT business with our product management expertise! Our team has extensive experience in creating cutting-edge products that are specifically tailored to the unique challenges and opportunities of the IoT industry. Let us help you stay ahead of the curve and drive growth for your IoT business with our proven expertise in product development.',
  },
  {
    title: 'Healthcare',
    body: 'Transform your healthcare business with our unrivaled product management expertise! With years of experience, we have a deep understanding of the unique needs and challenges of the healthcare industry. Our team is dedicated to creating innovative and user-friendly products that improve patient outcomes, reduce costs, and increase operational efficiency.',
  },
  {
    title: 'Finance',
    body: 'Experience the future of finance with our expert product-building skills! Our team has a wealth of experience creating innovative, secure, and user-friendly products specifically tailored to the unique challenges and opportunities of the finance industry. Let us help you stay ahead of the curve and unlock the full potential of your finance business.',
  },
]

const EXPERTISE = [
  { label: 'Product Management', value: 95 },
  { label: 'AI and ML Products', value: 85 },
  { label: 'Technology', value: 90 },
  { label: 'Product Design and Development', value: 80 },
]

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', comment: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await sendContact({ ...form, website: e.target.website?.value || '' }, 'About Us')
      setSent(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <PageHeader title="About Us" />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-xl font-bold text-ink mb-3">
          We are awesome <span className="text-brand-teal-dark">TEAM</span>
        </h3>
        <p className="text-[14.5px] leading-8 text-ink-soft text-justify">
          Our team is a tight-knit group of product managers who bring together decades of engineering and
          product management expertise, we have a wealth of experience in various industries, we use a
          data-driven decision making approach, we work closely with our customers and partners to co-create
          solutions that meet their needs, and we strive to deliver products that make a real difference in the
          lives of our customers.
        </p>
      </section>

      <hr className="max-w-5xl mx-auto border-gray-200" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-bold text-ink mb-3">Why Choose Us?</h3>
          <p className="text-[13.5px] leading-7 text-ink-soft text-justify">
            From idea to launch to IPO and beyond, PolarisAI Labs helps product teams and CXO's in organizations
            to conceptualize and build user-centric, innovative and revenue generating products.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-ink mb-3">Industries</h3>
          <Accordion items={INDUSTRIES} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-ink mb-3">Our Expertise</h3>
          {EXPERTISE.map((e) => (
            <div key={e.label} className="mb-3">
              <h6 className="text-xs font-semibold text-ink-soft mb-1">{e.label}</h6>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-teal-dark"
                  style={{ width: `${e.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h3 className="text-lg font-bold text-ink mb-6">Leadership</h3>
        <div className="grid sm:grid-cols-[220px_1fr] gap-8 items-start">
          <div>
            <img
              loading="lazy"
              className="w-full rounded-lg object-cover"
              src="/img/Gopala_Avatar.jpg"
              alt="Gopala, Founder of PolarisAI Labs"
            />
            <p className="text-xs font-semibold text-brand-teal-dark mt-3">Founder</p>
          </div>
          <div className="text-[13.5px] leading-7 text-ink-soft text-justify space-y-4">
            <p>
              Gopala is a workafrolic technical product leader who has driven and launched three B2B and two B2C
              products Fabindia (
              <a href="https://www.fabindia.com" className="text-brand-teal-dark hover:underline">
                Fabindia
              </a>
              ) and Biba (
              <a href="https://www.biba.in" className="text-brand-teal-dark hover:underline">
                Biba
              </a>
              ), a Small Language Models (SLMs) Platform (
              <a href="https://www.polarisailabs.com/pap.html" className="text-brand-teal-dark hover:underline">
                PolarisAI Platform
              </a>
              ), an e-commerce platform, and a travel platform (
              <a href="https://bit.ly/35pSI4w" className="text-brand-teal-dark hover:underline">
                Chase Ultimate Rewards
              </a>
              — a platform handling $5.5B in GTV annually).
            </p>
            <p>
              Recently, Gopala has driven and launched a Small Language Models (SLMs) Platform (PolarisAI
              Platform) born out of his passion and obsession with digging into the internals of what really
              happens between LLM input and output. This Platform enables AI Admins, Infrastructure Engineers,
              and Data Admins at SMEs to recompose, optimize, fine-tune, and deploy Polaris AI open-weight
              optimized SLMs on their own local infrastructure — replacing costly API-based LLMs and delivering
              up to 90% cost savings and 80% lower latency, fully offline and privacy-compliant. These SLM's can
              be Post-trained · PreciseQuantized · Distilled · PreciseTrimmed · Memory &amp; Compute Optimized using PolarisAI
              Platform.
            </p>
            <p>
              With 16 years of professional experience, including a stint at{' '}
              <a href="https://www.microsoft.com" className="text-brand-teal-dark hover:underline">
                Microsoft
              </a>{' '}
              and his recent stint at JPMorgan Chase as Director – Technical Product Management, Gopala's key
              strengths include a deep understanding of AI products, developing counter-intuitive strategies,
              scaling systems, and evaluating technical possibilities.
            </p>
            <p>
              Gopala holds a B.Tech in Mechanical Engineering from{' '}
              <a href="https://www.iitb.ac.in/" className="text-brand-teal-dark hover:underline">
                IIT Bombay
              </a>
              , and he currently serves as an official mentor for students at{' '}
              <a href="https://www.iitb.ac.in/" className="text-brand-teal-dark hover:underline">
                IIT Bombay
              </a>
              .
            </p>
            <p>
              Check out Gopala's impressive{' '}
              <a
                href="https://gopala-krishna.tech/UIProductManagement/MyProductPage.aspx"
                className="text-brand-teal-dark hover:underline"
              >
                product portfolio
              </a>{' '}
              and{' '}
              <a href="https://gopala-krishna.tech" className="text-brand-teal-dark hover:underline">
                personal website
              </a>{' '}
              to learn more about his achievements.
            </p>
          </div>
        </div>
      </section>

      <PageHeader title="Contact Us" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-10">
        <div>
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
        </div>
        <div>
          <div className="rounded-lg overflow-hidden border border-gray-200 h-[420px]">
            <iframe
              title="PolarisAI Labs location"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Bandlaguda+Jagir,+Hyderabad,+Telangana,+India&z=14&output=embed"
            />
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bandlaguda+Jagir+Hyderabad"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 text-xs text-brand-teal-dark hover:underline"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  )
}
