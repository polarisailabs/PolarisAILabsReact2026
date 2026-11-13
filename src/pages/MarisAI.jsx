import { Link } from 'react-router-dom'
import ProductHero from '../components/ProductHero.jsx'
import { PageHeader, CapCard, InfoBlock, StatCard, CTA } from '../components/ui.jsx'
import { HERO_MODULES } from '../data/heroModules.js'
import DidYouKnow from '../components/DidYouKnow.jsx'

/* ---------- Data ---------- */

const DATA_SOURCES = [
  { icon: 'fa-folder-open-o', title: 'File Systems', body: 'Non-HTML data held at enterprises and institutions.' },
  { icon: 'fa-sitemap', title: 'Intranets', body: 'Internal HTML sites and pages that search engines do not index.' },
  { icon: 'fa-files-o', title: 'Document Management Systems', body: 'Specialized knowledge domains stored in managed document repositories.' },
  { icon: 'fa-envelope-o', title: 'Emails', body: 'Everyday communication that carries organizational knowledge.' },
  { icon: 'fa-database', title: 'Databases', body: 'Structured enterprise data that sits outside traditional search.' },
]

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
        modules={HERO_MODULES.marisai}
        gradient="bg-[linear-gradient(135deg,#007aff_0%,#5856d6_50%,#af52de_100%)]"
        ctaLabel="Try MarisAI"
        ctaTo="/products/marisai/request-demo"
        poweredBy={{ label: 'PolarisAI Platform', to: '/platform' }}
        ctaIcon="fa-robot"
      />

      {/* Intro (boxed) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[15px] leading-8 text-ink">
            Traditional search engines like Google and Bing can only index a <strong>small portion</strong> of
            the internet, and relying on them alone can limit the information available to individuals and
            organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-search text-brand-teal-dark mr-2" aria-hidden="true" />
              Most data is out of reach
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Search engines index an estimated 0.01% of the total data available. The other 99.99% sits in the
              deep web and dark web, including non-HTML data at enterprises and institutions, and HTML websites
              that are not indexed but can still be reached through a direct URL or IP address.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-building-o text-brand-teal-dark mr-2" aria-hidden="true" />
              Every enterprise is different
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Enterprises are unique and diverse, with their own specialized knowledge domains and sources of
              data. Accessing that data is critical for the efficiency of the organization and for making
              informed decisions.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <StatCard number="0.01%" label="of total data indexed by traditional search engines" />
          <StatCard number="99.99%" label="of data not accessible through traditional search engines" />
        </div>

        <p className="text-[14.5px] leading-8 text-ink-soft text-center">
          <strong>MarisAI</strong>, our Conversational AI platform, brings that hidden knowledge within reach.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-brand-teal-dark">First</span>
            <h3 className="text-base font-bold text-ink mt-1 mb-2">A proprietary enterprise knowledge base</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              MarisAI provides relevant, specific, human-like answers to end-users by utilizing your own
              enterprise knowledge base.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-brand-teal-dark">Second</span>
            <h3 className="text-base font-bold text-ink mt-1 mb-2">Conversational, personalized engagement</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              It engages users with personalized recommendations. It is powered by a Generative Pre-trained
              Transformer model, trained using a technique called transformer neural networks.
            </p>
          </div>
        </div>

        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[14.5px] leading-8 text-ink">
            Together they help enterprise users with{' '}
            <strong>customer support, sales and marketing, and employee assistance</strong>.
          </p>
        </div>
      </section>

      {/* ============ Where enterprise knowledge lives ============ */}
      <PageHeader title="Where Enterprise Knowledge Lives" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
          Enterprise data comes in both HTML and non-HTML forms. Effective management of it helps organizations
          leverage their knowledge, foster collaboration among employees, and ultimately save costs by reducing
          the time and effort required to find information.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {DATA_SOURCES.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-5 hover:shadow-lg hover:shadow-black/5 transition-shadow"
            >
              <span className="text-2xl text-brand-teal-dark block mb-2">
                <i className={`fa ${s.icon}`} aria-hidden="true" />
              </span>
              <h4 className="text-[14.5px] font-bold text-ink mb-1.5">{s.title}</h4>
              <p className="text-[13px] leading-6 text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Capabilities ============ */}
      <PageHeader title="MarisAI Capabilities" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <CapCard icon="fa-headphones" title="24/7 Customer Support">
            MarisAI provides 24/7 customer support by answering FAQs, providing product information and
            troubleshooting issues.
          </CapCard>
          <CapCard icon="fa-line-chart" title="Sales & Marketing">
            It can engage with potential customers in a conversational manner to generate leads and drive
            sales.
          </CapCard>
          <CapCard icon="fa-users" title="Employee Assistance">
            Enterprise users get relevant, specific answers drawn from the proprietary knowledge base, so
            knowledge retrieval is faster and employees are more productive.
          </CapCard>
          <CapCard icon="fa-language" title="Language Translation">
            MarisAI provides language translation services, so answers and conversations work across
            languages in real time.
          </CapCard>
          <CapCard icon="fa-bolt" title="Task Automation">
            It improves efficiency by automating repetitive tasks, improving workflow efficiency across the
            organization.
          </CapCard>
          <CapCard icon="fa-bar-chart" title="Data Analytics">
            MarisAI can analyze data, giving teams insights, reporting and support for better decisions.
          </CapCard>
        </div>
      </section>

      {/* ============ Value pillars ============ */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-lg font-bold text-ink mb-8">What Accessible Enterprise Knowledge Delivers</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <InfoBlock icon={<i className="fa fa-lightbulb-o" aria-hidden="true" />} title="Informed Decisions">
              Access to enterprise data is critical for making informed decisions, and MarisAI puts it in front
              of the people who need it.
            </InfoBlock>
            <InfoBlock icon={<i className="fa fa-handshake-o" aria-hidden="true" />} title="Collaboration">
              Effective management of enterprise data helps organizations leverage their knowledge and foster
              collaboration among employees.
            </InfoBlock>
            <InfoBlock icon={<i className="fa fa-bolt" aria-hidden="true" />} title="Efficiency">
              Automating repetitive tasks and answering questions directly improves the efficiency of the
              organization.
            </InfoBlock>
            <InfoBlock icon={<i className="fa fa-money" aria-hidden="true" />} title="Cost Savings">
              Reducing the time and effort required to find information ultimately saves costs.
            </InfoBlock>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to See MarisAI in Action?"
        action={
          <Link
            to="/products/marisai/request-demo"
            className="inline-flex items-center gap-2 bg-brand-teal text-[#111] font-semibold text-sm px-7 py-3 rounded-full hover:bg-brand-teal-dark hover:text-white transition-colors"
          >
            <i className="fa fa-comments" aria-hidden="true" /> Request a Demo
          </Link>
        }
      >
        MarisAI provides relevant, specific, human-like answers by utilizing a proprietary enterprise knowledge
        base, and engages users with personalized recommendations, from 24/7 customer support to sales,
        marketing and employee assistance.
      </CTA>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
