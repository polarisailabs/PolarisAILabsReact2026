import { PageHeader, ServiceBlock } from '../components/ui.jsx'
import DidYouKnow from '../components/DidYouKnow.jsx'

const SERVICES = [
  {
    image: '/img/strategy.jpg',
    title: 'Corporate Teams',
    body: 'Our standalone workshops and extended courses are the perfect solution for an engaging and effective way to upskill your product management teams. Led by our expert product managers, our live and remote sessions provide a mix of lecture and hands-on activities, keeping your team engaged and motivated throughout.',
  },
  {
    image: '/img/vision.jpg',
    title: "Corporate CXO's",
    body: "Whether you're just starting out or looking to take your team to the next level, our interactive 1-on-1 sessions can help you achieve your goals. We'll work with you to tailor our approach to meet your specific needs, whether that means introducing product management for the first time or upskilling your team in specific areas.",
  },
  {
    image: '/img/mission.jpg',
    title: 'Individuals',
    body: "We have extensive experience in product management and are passionate about helping others succeed. We will provide you with personalized feedback, advice, and support to help you overcome any challenges you may be facing and take your product management career to the next level.",
  },
]

const FACTS = [
  '72% of launched products fail — HBR',
  '70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine',
  '92% of users click on an item in the first page of Google search results',
]

export default function Mentorship() {
  return (
    <div>
      <PageHeader title="Mentorship and Coaching" />

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
            <h2 className="font-[var(--font-display)] text-lg sm:text-xl font-bold text-ink leading-8 text-balance">
              Mentorship, Coaching and Corporate Training
            </h2>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <p className="text-[14px] leading-7 text-ink-soft">
              We firmly believe that the most effective way to learn about product management is by working with experienced product managers who have successfully driven and launched products in the past. Our product managers bring valuable insights, practical knowledge, and expertise that are essential for achieving success.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <p className="text-[14px] leading-7 text-ink-soft">
              Our approach is grounded in extensive research, and we are committed to leading the conversation in product management. We value curiosity and counter-intuitive thinking, as we believe these skills are critical for any great product manager to master. While tactical and practical skills are essential, we understand that the ability to focus on the "why" and "what" behind a product is what truly sets a great product manager apart.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <p className="text-[14px] leading-7 text-ink-soft">
              Our goal is to fully understand your company's vision and mission, and then help your in-house product teams align with them. We believe that by giving your product teams the skills they need to tackle bigger challenges, we can help your company achieve its goals. Let us help you take your product management to the next level.
            </p>
          </div>
          </div>
        </div>
      </section>

      <hr className="max-w-6xl mx-auto border-gray-200" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-10">
        {SERVICES.map((s) => (
          <ServiceBlock key={s.title} image={s.image} title={s.title}>
            {s.body}
          </ServiceBlock>
        ))}
      </section>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
