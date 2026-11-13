import { Link } from 'react-router-dom'
import ProductHero from '../components/ProductHero.jsx'
import { PageHeader, CapCard, PipelineStep, TrendItem, InfoBlock, StatCard, CTA } from '../components/ui.jsx'
import { HERO_MODULES } from '../data/heroModules.js'
import DidYouKnow from '../components/DidYouKnow.jsx'

/* ---------- Data ---------- */

const PRESSURES = [
  {
    icon: 'fa-compress',
    title: 'Market Consolidation',
    body: 'In India alone, over 12,700 startups shut down in 2024. Globally, confirmed shutdowns on the Carta platform rose 58% in the first quarter of 2024 compared with the year before. Regulators worry that this wave of consolidation could stifle competition.',
  },
  {
    icon: 'fa-balance-scale',
    title: 'Antitrust Attention on Big Tech',
    body: 'Antitrust regulators are particularly focused on large technology companies acquiring nascent AI competitors, so deals and partnerships that once went unnoticed now draw close review.',
  },
  {
    icon: 'fa-search',
    title: 'Heightened Oversight',
    body: 'Under former FTC Chair Lina Khan, the FTC opened inquiries into major AI partnerships, including Microsoft and OpenAI, and Amazon and Anthropic. She also warned that models trained on non-consensual data could violate antitrust laws.',
  },
]

const LIFECYCLE = [
  { icon: 'fa-bell', title: 'Track', body: 'Follow new and changing AI policy, regulation and enforcement across jurisdictions.' },
  { icon: 'fa-cloud-upload', title: 'Ingest', body: 'Bring in your policies, procedures and the documents that describe how AI is used.' },
  { icon: 'fa-sitemap', title: 'Map', body: 'Align your policies to the EU AI Act, GDPR, ISO/IEC 42001 and other frameworks.' },
  { icon: 'fa-exclamation-triangle', title: 'Detect', body: 'Find conflicts between policies and flag compliance gaps against each standard.' },
  { icon: 'fa-shield', title: 'Mitigate', body: 'Prioritize risks and act on recommended fixes before they become findings.' },
  { icon: 'fa-line-chart', title: 'Monitor & Report', body: 'Keep dashboards and audit trails current as rules and policies evolve.' },
]

const FRAMEWORK_ROWS = [
  {
    name: 'EU AI Act',
    covers: 'Risk-based rules for AI systems in the EU, with fines of up to €35 million or 7% of global revenue.',
    helps: 'Flags where your policies fall short of its requirements and tracks changes to them.',
  },
  {
    name: 'GDPR',
    covers: 'Rules for how personal data is collected, processed and protected.',
    helps: 'Checks AI-related policies for data protection gaps and conflicts with other policies.',
  },
  {
    name: 'ISO/IEC 42001',
    covers: 'The international standard for AI management systems.',
    helps: 'Measures your policy set against the standard and shows what is missing.',
  },
  {
    name: 'Antitrust & competition law',
    covers: 'Scrutiny of acquisitions, partnerships and market concentration involving AI companies.',
    helps: 'Keeps you informed on enforcement activity and how regulators are acting.',
  },
]

const RISKS = [
  { icon: 'fa-random', title: 'Conflicting Policies', body: 'Two internal policies that contradict each other leave teams guessing. Conflict detection surfaces them before an auditor does.' },
  { icon: 'fa-puzzle-piece', title: 'Compliance Gaps', body: 'Requirements in a standard that no policy addresses. Gap analysis maps each requirement to the policy that covers it, or shows that none does.' },
  { icon: 'fa-clock-o', title: 'Missed Regulatory Changes', body: 'Rules change faster than annual reviews. Real-time alerts tell you when something relevant to you has moved.' },
  { icon: 'fa-globe', title: 'Fragmented Jurisdictions', body: 'Different regions, different rules. One view across 78+ jurisdictions replaces a patchwork of spreadsheets.' },
  { icon: 'fa-gavel', title: 'Antitrust Exposure', body: 'Acquisitions and partnerships involving AI companies are under the microscope. Staying informed lowers the odds of a surprise.' },
  { icon: 'fa-file-text-o', title: 'Audit Readiness', body: 'Evidence scattered across teams is slow to assemble. Audit trails and reporting keep it in one place.' },
]

const FACTS = [
  'The EU AI Act can impose fines of up to €35 million or 7% of global revenue for non-compliance.',
  '78% of organizations are now using AI in at least one business function.',
  'Over 12,700 startups shut down in India alone in 2024, drawing intense regulatory scrutiny over AI-driven market consolidation.',
]

export default function SpicaAI() {
  return (
    <div>
      <ProductHero
        logoIcon="fa-balance-scale"
        title="SpicaAI"
        badges={['Policy AI', 'Compliance']}
        modules={HERO_MODULES.spicaai}
        gradient="bg-[linear-gradient(135deg,#e8738a_0%,#c0394a_50%,#a0002a_100%)]"
        ctaLabel="Try SpicaAI"
        ctaTo="/products/spicaai/request-demo"
        poweredBy={{ label: 'PolarisAI Platform', to: '/platform' }}
        ctaIcon="fa-balance-scale"
      />

      {/* Intro (boxed) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[15px] leading-8 text-ink">
            New AI policies and regulations are creating a <strong>complex landscape</strong> for companies and
            governments worldwide, and it is changing as fast as the technology itself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-line-chart text-brand-teal-dark mr-2" aria-hidden="true" />
              Adoption is surging
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Globally, 78% of organizations now use AI in at least one business function, and a 2024 report
              indicated that 56% plan to adopt generative AI within the next year.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-gavel text-brand-teal-dark mr-2" aria-hidden="true" />
              Regulation is following
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Governments are establishing comprehensive rules. The EU&apos;s AI Act, for instance, can impose
              fines of up to €35 million or 7% of global revenue for non-compliance.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard number="78%" label="of organizations use AI in at least one business function" />
          <StatCard number="€35M" label="maximum EU AI Act fine, or 7% of global revenue" />
          <StatCard number="56%" label="of organizations plan to adopt generative AI within a year" source="2024 report" />
          <StatCard number="12,700+" label="startups shut down in India in 2024" />
        </div>

        <p className="text-[14.5px] leading-8 text-ink-soft text-center">
          The <strong>SpicaAI</strong> Policy AI platform helps you keep up, and stay ahead.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-brand-teal-dark">First</span>
            <h3 className="text-base font-bold text-ink mt-1 mb-2">Up-to-date regulatory intelligence</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Critical, current information on the latest AI advancements in policy, regulation and
              compliance, so you can maneuver through developments with confidence.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-brand-teal-dark">Second</span>
            <h3 className="text-base font-bold text-ink mt-1 mb-2">Automated policy lifecycle</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              AI detects conflicts, flags potential compliance gaps against standards like the EU AI Act, GDPR
              and ISO/IEC 42001, and actively helps mitigate risks.
            </p>
          </div>
        </div>

        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[14.5px] leading-8 text-ink">
            Together they turn compliance from a reactive burden into a{' '}
            <strong>streamlined, strategic advantage</strong>.
          </p>
        </div>
      </section>

      {/* ============ Why it is getting harder ============ */}
      <PageHeader title="Why the Landscape Is Getting Harder" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
          Regulation is not only about AI models. The wider market is consolidating, and regulators are
          watching who is buying, partnering with and learning from whom.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {PRESSURES.map((p) => (
            <CapCard key={p.title} icon={p.icon} title={p.title}>
              {p.body}
            </CapCard>
          ))}
        </div>
        <p className="text-[13.5px] leading-7 text-ink-soft mt-8">
          Khan&apos;s aggressive approach reportedly caused some companies to abandon acquisition attempts, a
          significant shift in the environment for AI. In a landscape this fluid, staying informed about the
          latest advances in policy, regulation and compliance is crucial to protecting your organization.
        </p>
      </section>

      {/* ============ Lifecycle ============ */}
      <PageHeader title="The Policy Lifecycle, Automated" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          SpicaAI automates the entire policy lifecycle. Instead of reviewing policies once a year, every
          change in the rules or in your own documents feeds straight back into the next round of checks.
        </p>
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 flex flex-wrap">
          {LIFECYCLE.map((step, i) => (
            <PipelineStep key={step.title} icon={step.icon} title={step.title} isLast={i === LIFECYCLE.length - 1}>
              {step.body}
            </PipelineStep>
          ))}
        </div>
      </section>

      {/* ============ Capabilities ============ */}
      <PageHeader title="SpicaAI Capabilities" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <CapCard icon="fa-gavel" title="Regulatory Tracking">
            Stay on top of the EU AI Act, GDPR and other global frameworks across 78+ jurisdictions. SpicaAI
            provides critical, up-to-date information on advancements in AI policy, regulation and compliance,
            including antitrust and data laws, so your team works from the current rules rather than last
            year&apos;s summary.
          </CapCard>
          <CapCard icon="fa-search" title="Conflict & Gap Detection">
            AI reads your policies against each other and against the standards you care about. It detects
            conflicts between documents and flags potential compliance gaps against standards like the EU AI
            Act, GDPR and ISO/IEC 42001, so problems are found by you, early, not by a regulator, later.
          </CapCard>
          <CapCard icon="fa-shield" title="Risk Mitigation">
            Finding a gap is only the start. SpicaAI helps you actively mitigate risks through proactive
            compliance gap analysis, so the highest-impact issues are visible first and teams know where to
            spend their effort.
          </CapCard>
          <CapCard icon="fa-refresh" title="Lifecycle Automation">
            Policy management is a loop of drafting, review, approval, change and re-review. SpicaAI automates
            that loop end to end, replacing manual hand-offs with a process that keeps itself current as
            regulations and internal policies change.
          </CapCard>
          <CapCard icon="fa-bell" title="Real-time Alerts">
            Regulatory change should not be a surprise. Instant notifications flag developments that matter to
            your organization, so you can respond while there is still time to plan, not after the deadline
            has passed.
          </CapCard>
          <CapCard icon="fa-line-chart" title="Compliance Analytics & Audit Trails">
            Dashboards, audit trails and reporting show where you stand against each framework and how that
            has changed over time, giving leadership a clear view and giving auditors the evidence they ask
            for.
          </CapCard>
        </div>
      </section>

      {/* ============ Frameworks table ============ */}
      <PageHeader title="Frameworks & Regulations We Cover" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          Each framework asks different questions. SpicaAI checks your policies against all of them in one
          place.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3.5 font-semibold text-brand-teal-dark border-b border-gray-200 w-[20%]">Framework</th>
                <th className="p-3.5 font-semibold text-ink border-b border-gray-200 w-[40%]">What it covers</th>
                <th className="p-3.5 font-semibold text-ink border-b border-gray-200 w-[40%]">How SpicaAI helps</th>
              </tr>
            </thead>
            <tbody>
              {FRAMEWORK_ROWS.map((r) => (
                <tr key={r.name} className="border-b border-gray-100 last:border-0 align-top">
                  <td className="p-3.5 font-semibold text-ink">{r.name}</td>
                  <td className="p-3.5 text-ink-soft leading-6">{r.covers}</td>
                  <td className="p-3.5 text-ink-soft leading-6">{r.helps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ============ Risks ============ */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-lg font-bold text-ink mb-2">Risks SpicaAI Is Built For</h3>
          <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
            Most compliance failures are not dramatic. They are small gaps and contradictions nobody had time
            to look for.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RISKS.map((t) => (
              <div
                key={t.title}
                className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-5 hover:shadow-lg hover:shadow-black/5 transition-shadow"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-lg text-brand-teal-dark">
                    <i className={`fa ${t.icon}`} aria-hidden="true" />
                  </span>
                  <h4 className="text-[14.5px] font-bold text-ink">{t.title}</h4>
                </div>
                <p className="text-[13px] leading-6 text-ink-soft">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Value pillars ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-lg font-bold text-ink mb-8">What Automated Compliance Delivers</h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <InfoBlock icon={<i className="fa fa-eye" aria-hidden="true" />} title="Clarity">
            One current picture of the rules that apply to you and how your policies measure up, in place of
            scattered documents and out-of-date summaries.
          </InfoBlock>
          <InfoBlock icon={<i className="fa fa-bolt" aria-hidden="true" />} title="Speed">
            Automation handles the reading and cross-checking, so specialists spend their time on decisions,
            not on searching for the problem.
          </InfoBlock>
          <InfoBlock icon={<i className="fa fa-shield" aria-hidden="true" />} title="Lower Risk">
            Conflicts and gaps are found early, while they are cheap to fix and before they turn into
            findings or fines.
          </InfoBlock>
          <InfoBlock icon={<i className="fa fa-check-square-o" aria-hidden="true" />} title="Confidence">
            Compliance becomes a streamlined, strategic advantage, helping your organization remain secure and
            ahead of regulatory changes.
          </InfoBlock>
        </div>
      </section>

      {/* ============ Trends ============ */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#333] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-brand-teal text-lg font-bold mb-6">2026 Trends Shaping the SpicaAI Roadmap</h3>
          <div className="grid md:grid-cols-2 gap-x-10">
            <div>
              <TrendItem badge="HOT">
                <strong className="text-white">Regulation Becomes Operational:</strong> The EU AI Act, GDPR and
                ISO/IEC 42001 are turning governance into evidence, such as audit trails, oversight and
                testing, that has to be demonstrated, not just promised.
              </TrendItem>
              <TrendItem badge="HOT">
                <strong className="text-white">Antitrust Meets AI:</strong> Scrutiny of AI partnerships and
                acquisitions keeps growing, and deal structures are examined as closely as the technology.
              </TrendItem>
              <TrendItem badge="NEW">
                <strong className="text-white">Continuous Monitoring:</strong> Annual policy reviews cannot
                keep pace. Organizations are moving to always-on tracking of rule changes and policy gaps.
              </TrendItem>
            </div>
            <div>
              <TrendItem badge="NEW">
                <strong className="text-white">Policy as a Living System:</strong> Detection, mitigation and
                reporting are connected into one lifecycle, so every change updates the next round of checks.
              </TrendItem>
              <TrendItem badge="RISING">
                <strong className="text-white">Standards as Proof of Trust:</strong> Frameworks such as
                ISO/IEC 42001 are becoming a common way to show customers and regulators that AI is managed
                responsibly.
              </TrendItem>
              <TrendItem badge="RISING">
                <strong className="text-white">Fragmented Global Rules:</strong> More jurisdictions, more
                requirements. Coverage across regions is becoming a baseline need, not a nice-to-have.
              </TrendItem>
            </div>
          </div>
        </div>
      </div>

      <CTA
        title="Ready to See SpicaAI in Action?"
        action={
          <Link
            to="/products/spicaai/request-demo"
            className="inline-flex items-center gap-2 bg-brand-teal text-[#111] font-semibold text-sm px-7 py-3 rounded-full hover:bg-brand-teal-dark hover:text-white transition-colors"
          >
            <i className="fa fa-balance-scale" aria-hidden="true" /> Request a Demo
          </Link>
        }
      >
        Staying informed about the latest advances in AI policy, regulation and compliance is crucial to
        protecting your organization. SpicaAI brings regulatory tracking, conflict detection and risk
        mitigation together in one platform, so you can move through these developments with confidence and
        stay ahead of regulatory change.
      </CTA>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
