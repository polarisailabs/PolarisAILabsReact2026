import { PageHeader, InfoBlock } from '../components/ui.jsx'
import DidYouKnow from '../components/DidYouKnow.jsx'

const INFO_BLOCKS = [
  {
    icon: '\u{1F514}',
    title: 'Scalability',
    body: "Product scaling is all about taking a successful product and making it even better, by increasing its reach, capabilities, and efficiency. We enable businesses to take their operations to the next level by providing the necessary tools and resources for seamless scaling. Our innovative approach helps companies scale their systems with ease and confidence.",
  },
  {
    icon: '\u{1F5A5}\uFE0F',
    title: 'Availability',
    body: 'Availability is the state of being accessible and functioning as intended, and it is a critical aspect of any system. Our solution is designed to detect and resolve issues in real-time, ensuring systems remain up and running — featuring automatic failover, real-time monitoring, and proactive maintenance.',
  },
  {
    icon: '\u{1F4A1}',
    title: 'Observability',
    body: "Observability is the ability to monitor and understand the behavior of complex systems in real-time — crucial for stability, reliability, and performance. Our solution integrates seamlessly into your existing infrastructure and provides real-time insights into your systems' behavior.",
  },
  {
    icon: '\u{1F4BB}',
    title: 'Reliability',
    body: 'Reliability ensures that systems and products perform their intended functions seamlessly and consistently, building customer trust and satisfaction. Our team designs and implements systems that are robust, resilient, and always available.',
  },
  {
    icon: '\u{1F5DC}\uFE0F',
    title: 'Performance',
    body: "Performance measures the efficiency and effectiveness of systems and products, allowing organizations to achieve their goals and drive growth. Our team leverages the latest technologies and industry best practices to optimize the performance of our clients' systems.",
  },
  {
    icon: '\u{1F310}',
    title: 'Latency',
    body: 'Latency refers to the time it takes for data to be transmitted from one point to another and is a key determinant of system responsiveness and overall performance. Our team works to minimize latency and optimize performance.',
  },
  {
    icon: '\u{1F514}',
    title: 'Security',
    body: 'System security protects systems against threats such as hacking, data theft, and unauthorized access to sensitive information. We develop tailored solutions that meet your unique security requirements.',
  },
  {
    icon: '\u{1F5A5}\uFE0F',
    title: 'Consistency',
    body: 'Consistency ensures that data and processes are executed in a uniform and predictable manner, building trust and reliability with customers and stakeholders.',
  },
]

const FACTS = [
  '72% of launched products fail — HBR',
  '70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine',
  '92% of users click on an item in the first page of Google search results',
]

export default function Technology() {
  return (
    <div>
      <PageHeader title="Technology" />

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
            <h2 className="font-[var(--font-display)] text-lg sm:text-xl font-bold text-ink leading-8 text-balance">
              Build and Scale Consumer and Enterprise Systems
            </h2>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <p className="text-[14px] leading-7 text-ink-soft">
              Before Facebook, there were social networking platforms like Myspace, Friendster, and Orkut. Before Amazon, there were e-commerce companies like Ebay, Walmart, Best Buy, Sears, and OverStock. However, Facebook and Amazon were successful. Why?
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <p className="text-[14px] leading-7 text-ink-soft">
              Because they heavily focused on Non-functional requirements. These requirements, which focus on aspects such as performance, security, scalability, and usability, determine how well a product operates and meets the needs of its users. A product that is user-friendly, secure, and efficient will generally be more successful than one that is not. By prioritizing non-functional requirements, companies can ensure that their products meet the high standards of quality and functionality that customers have come to expect, leading to greater customer satisfaction and loyalty.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <p className="text-[14px] leading-7 text-ink-soft">
              Alongside the functional requirements, we put equal emphasis on the non-functional requirements that make all the difference. With a focus on performance, security, scalability, availability, observability, and usability, we're able to craft products that not only meet your needs, but exceed your expectations in every way.
            </p>
          </div>
          </div>
        </div>
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
