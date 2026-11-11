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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flow-root">
        <div className="w-full md:w-[42%] md:float-right md:ml-10 mb-6 aspect-[4/3] rounded-xl overflow-hidden shadow-lg shadow-black/5 border border-gray-100">
          <img loading="lazy" src="/img/PMGrow.jpg" alt="Mentorship growth" className="w-full h-full object-cover" />
        </div>
          <h2 className="text-2xl font-bold text-ink mb-4">Mentorship, Coaching and Corporate Training</h2>
          <p className="text-[14px] leading-8 text-ink-soft text-justify">
            We firmly believe that the most effective way to learn about product management is by working with
            experienced product managers who have successfully driven and launched products in the past. Our
            product managers bring valuable insights, practical knowledge, and expertise that are essential for
            achieving success.
            <br />
            <br />
            Our approach is grounded in extensive research, and we are committed to leading the conversation in
            product management. We value curiosity and counter-intuitive thinking, as we believe these skills
            are critical for any great product manager to master. While tactical and practical skills are
            essential, we understand that the ability to focus on the "why" and "what" behind a product is what
            truly sets a great product manager apart.
            <br />
            <br />
            Our goal is to fully understand your company's vision and mission, and then help your in-house
            product teams align with them. We believe that by giving your product teams the skills they need to
            tackle bigger challenges, we can help your company achieve its goals. Let us help you take your
            product management to the next level.
          </p>
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
