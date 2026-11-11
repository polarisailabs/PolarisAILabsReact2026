import ProductHero from '../components/ProductHero.jsx'
import ContactBlock from '../components/ContactBlock.jsx'
import { HERO_MODULES } from '../data/heroModules.js'
import DidYouKnow from '../components/DidYouKnow.jsx'

const FACTS = [
  '72% of launched products fail — HBR',
  '70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine',
  '92% of users click on an item in the first page of Google search results',
]

export default function MarisAI() {
  return (
    <div>
      <ProductHero
        logoIcon="fa-comments"
        title="MarisAI"
        badges={['Conversational AI', 'Enterprise']}
        sub="Unlock the 99.99% of enterprise knowledge hidden from traditional search engines."
        tagline="Proprietary Knowledge Base · Human-like Answers · 24/7 Support · Task Automation · Multilingual"
        modules={HERO_MODULES.marisai}
        ctaLabel="Try MarisAI"
        ctaHref="https://polarisailabs-maris.hf.space"
        ctaIcon="fa-robot"
        gradient="bg-[linear-gradient(135deg,#007aff_0%,#5856d6_50%,#af52de_100%)]"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
        <p>
          Traditional search engines like Google and Bing can only index a small portion of the internet,
          estimated to be around 0.01% of the total data available. The vast majority of data, around 99.99%, is
          not accessible through traditional search engines and is instead located in the deep web and dark web.
          The deep web includes data that is not easily accessible through regular search engines, such as
          non-HTML data at enterprises and institutions, as well as HTML websites that are not indexed but can
          still be accessed through a direct URL or IP address. Therefore, relying solely on traditional search
          engines like Google and Bing can limit the amount of information available to individuals and
          organizations.
        </p>
        <p>
          Enterprises are unique and diverse, with their own specialized knowledge domains and sources of data,
          including both HTML and non-HTML data, such as file systems, intranets, document management systems,
          emails, and databases. Accessing this data is critical for the efficiency of the organization and for
          making informed decisions. Effective management of enterprise data can help organizations leverage
          their knowledge, foster collaboration among employees, and ultimately save costs by reducing the time
          and effort required to find information.
        </p>
        <p>
          MarisAI, our Conversational AI platform, provides relevant, specific, human-like answers to end-users
          by utilizing a proprietary enterprise knowledge base, and engages users with personalized
          recommendations. It is powered by a Generative Pre-trained Transformer model and was trained using a
          technique called transformer neural networks. It can help enterprise users with customer support,
          sales and marketing, and employee assistance. It can provide 24/7 customer support by answering FAQs,
          providing product information and troubleshooting issues. It can also engage with potential customers
          in a conversational manner to generate leads and drive sales. Additionally, it can analyze data,
          provide language translation services and improve efficiency by automating repetitive tasks.
        </p>
      </section>

      <ContactBlock />
      <DidYouKnow facts={FACTS} />
    </div>
  )
}
