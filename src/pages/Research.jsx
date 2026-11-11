import { PageHeader } from '../components/ui.jsx'

export default function Research({ title }) {
  return (
    <div>
      <PageHeader title={title} />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-[15px] leading-8 text-ink-soft">
          Content for {title} is coming soon.
        </p>
      </section>
    </div>
  )
}
