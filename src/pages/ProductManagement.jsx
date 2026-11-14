import { PageHeader, ServiceBlock, InfoBlock } from '../components/ui.jsx'
import DidYouKnow from '../components/DidYouKnow.jsx'

const SERVICES = [
  {
    image: '/img/vision.jpg',
    title: 'Product Vision',
    body: "A clear vision brings the future into everyday work and helps the organizations to understand the larger purpose of the product. We understand the importance of having a well-defined product vision that aligns with the overall goals of your organization. We help the product teams to define and clearly articulate the future state of a product. We'll work closely with you to understand the unique challenges and opportunities faced by your business, and use this information to develop a product vision that drives success.",
  },
  {
    image: '/img/mission.jpg',
    title: 'Product Mission',
    body: "We know that a well-defined product vision is only the first step towards success. To bring your vision to life, you need a concrete plan that sets clear, actionable steps towards your goals. Our team of product management experts will work closely with you to develop a comprehensive plan that takes your vision and turns it into a reality — prioritizing initiatives, allocating resources effectively, and measuring progress towards your goals.",
  },
  {
    image: '/img/strategy.jpg',
    title: 'Product Roadmap',
    body: "We understand the importance of having a clear and well-defined roadmap to guide your journey towards success. We ensure that short-term and long-term product roadmaps are defined for every product in the organization's product portfolio, identifying key milestones and developing a comprehensive plan that sets clear, actionable steps towards your objectives.",
  },
]

const INFO_BLOCKS = [
  {
    icon: '\u{1F514}',
    title: 'Product Backlog',
    body: "A product backlog is essentially a prioritized list of features, enhancements, and bug fixes that need to be addressed in order to ensure that your product meets the needs of your customers and supports your business goals. Our team of product management experts can help you define and execute a product backlog that aligns with your objectives and supports the growth of your business.",
  },
  {
    icon: '\u{1F5C2}\uFE0F',
    title: 'Backlog Prioritization',
    body: 'A product backlog prioritization and grooming process helps you to identify the most important initiatives, allocate resources effectively, and ensure that your product backlog is always up-to-date and aligned with your goals.',
  },
  {
    icon: '\u{1F4A1}',
    title: 'Effective Collaboration',
    body: 'When teams work together seamlessly, they can achieve great things and drive results that far exceed what they could accomplish alone. Our team helps identify key pain points and develops a comprehensive plan for more effective collaboration.',
  },
  {
    icon: '\u{1F4CB}',
    title: 'Market Research',
    body: "Market research is the process of gathering, analyzing and interpreting data about a specific market or industry to inform product development, marketing, and sales strategies, and to identify market trends and growth potential.",
  },
  {
    icon: '\u{1F4E6}',
    title: 'Segmentation',
    body: "Market and user segmentation is the process of dividing your market into smaller groups by characteristics. Our team helps you define and execute a segmentation strategy that targets the right audience with tailored messaging and offerings.",
  },
  {
    icon: '\u{1F5A5}\uFE0F',
    title: 'GTM',
    body: 'A Go-To-Market strategy defines the plan for introducing a new product or service to market, including target audience, marketing channels, and sales tactics — essential for the success of your product launch.',
  },
  {
    icon: '\u{1F4BB}',
    title: 'Value Proposition',
    body: "A value proposition communicates the unique benefits and value that a product or service offers to customers, differentiating your offerings from competitors. Our team works closely with clients to identify and articulate this proposition.",
  },
  {
    icon: '\u{1F5DC}\uFE0F',
    title: 'Persona Mapping',
    body: 'Persona mapping creates detailed profiles of your target audience based on research and data, helping you understand the needs, goals, and behaviors of your customers.',
  },
  {
    icon: '\u{1F310}',
    title: 'Competitive Analysis',
    body: 'Competitive analysis is the process of researching the strengths and weaknesses of your competitors to inform your own business strategy and identify opportunities and threats.',
  },
]

const FACTS = [
  '72% of launched products fail — HBR',
  '70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine',
  '92% of users click on an item in the first page of Google search results',
]

export default function ProductManagement() {
  return (
    <div>
      <PageHeader title="Product Management" />

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
            <h2 className="font-[var(--font-display)] text-lg sm:text-xl font-bold text-ink leading-8 text-balance">
              Drive and Launch 0-1 and 1-N Products
            </h2>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <p className="text-[14px] leading-7 text-ink-soft">
              The success rate of new products can be challenging to determine, as success is often subjective and can be measured in various ways. However, industry studies have suggested that a relatively low percentage of new products achieve significant success, with an HBR report estimating that only 28% of new products in general are successful. The success rate for freemium products is often estimated to be even lower, at 2–5%, and for mobile apps some estimates suggest only 1% are successful.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <p className="text-[14px] leading-7 text-ink-soft">
              For 0-1 products, the focus is on creating a new and innovative product that solves a unique problem or addresses a new opportunity in the market — requiring a deep understanding of user needs, market trends, and technological capabilities. For 1-N products, the focus shifts to scaling and expanding an existing product, leveraging its strengths and existing assets through market analysis, product optimization, and a focus on growth and sustainability.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <p className="text-[14px] leading-7 text-ink-soft">
              Regardless of whether a product is 0-1 or 1-N, successful product design, launch, and marketing require a deep understanding of the market, the customer, and the competition, as well as a strong focus on delivering value to the end-user.
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

      <hr className="max-w-6xl mx-auto border-gray-200" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {INFO_BLOCKS.map((b) => (
          <InfoBlock key={b.title} icon={b.icon} title={b.title}>
            {b.body}
          </InfoBlock>
        ))}
      </section>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
