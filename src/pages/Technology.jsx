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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flow-root">
        <div className="w-full md:w-[42%] md:float-right md:ml-10 mb-6 aspect-[4/3] rounded-xl overflow-hidden shadow-lg shadow-black/5 border border-gray-100">
          <img loading="lazy" src="/img/TechGrow.jpg" alt="Technology growth" className="w-full h-full object-cover" />
        </div>
          <h2 className="text-2xl font-bold text-ink mb-4">Build and Scale Consumer and Enterprise Systems</h2>
          <p className="text-[14px] leading-8 text-ink-soft text-justify">
            Before Facebook, there were social networking platforms like Myspace, Friendster, and Orkut. Before
            Amazon, there were e-commerce companies like Ebay, Walmart, Best Buy, Sears, and OverStock. However,
            Facebook and Amazon were successful. Why?
            <br />
            <br />
            Because they heavily focused on Non-functional requirements. These requirements, which focus on
            aspects such as performance, security, scalability, and usability, determine how well a product
            operates and meets the needs of its users. A product that is user-friendly, secure, and efficient
            will generally be more successful than one that is not. By prioritizing non-functional requirements,
            companies can ensure that their products meet the high standards of quality and functionality that
            customers have come to expect, leading to greater customer satisfaction and loyalty.
            <br />
            <br />
            Alongside the functional requirements, we put equal emphasis on the non-functional requirements that
            make all the difference. With a focus on performance, security, scalability, availability,
            observability, and usability, we're able to craft products that not only meet your needs, but exceed
            your expectations in every way.
          </p>
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
