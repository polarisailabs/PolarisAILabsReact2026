import { Link } from 'react-router-dom'
import ProductHero from '../components/ProductHero.jsx'
import { VideoPlayer } from '../components/ui.jsx'
import { HERO_MODULES } from '../data/heroModules.js'
import DidYouKnow from '../components/DidYouKnow.jsx'

/* Set this to show the "SumatiAI in Action" walkthrough, e.g. { src: '/video/sumatiai-demo.mp4', poster: '/img/sumatiai-demo.jpg' } */
const ACTION_VIDEO = null

/* Animated walkthrough shown in "SumatiAI in Action" until ACTION_VIDEO is set (file lives in /public/img). */
const ACTION_GIF = {
  src: '/img/sumatiai-demo.gif',
  alt: 'SumatiAI in action: a legal query is searched, sections and case results appear, and AI Research Intelligence writes an answer with verified citations',
}

/* ---------- Data ---------- */

const PUNCHLINES = [
  {
    icon: 'fa-microchip',
    title: 'Proprietary AI. Proprietary legal data.',
    body: 'Built on proprietary AI models powered by the PolarisAI Platform, and on proprietary legal data processed and crafted by the RohiniAI Platform.',
  },
  {
    flag: '\u{1F1EE}\u{1F1F3}',
    title: 'Built for India',
    body: 'Trained on Indian law: Supreme Court and High Court judgments, and the IPC, CPC and CrPC statutes. SumatiAI supports all Indian languages.',
  },
  {
    icon: 'fa-handshake-o',
    title: 'A team that is genuinely committed',
    body: 'Our team is from IIT Bombay and Microsoft, and is genuinely committed to building legal AI that lawyers can depend on.',
  },
]

const HERO_POINTS = [
  'Semantic AI that understands context, not just keywords',
  'Every answer backed by hyperlinked, traceable citations',
  'Zero learning curve for seasoned advocates and new users alike',
]

const CAPABILITIES = [
  { title: 'Search that thinks like a lawyer', body: 'Semantic AI interprets meaning and context, so results follow real legal reasoning instead of keyword matches.', note: 'Precise, contextually relevant results' },
  { title: 'AI-powered insights', body: 'Summaries, timelines and analytics turn raw information into intelligence you can build arguments on.', note: 'Summaries, timelines, analytics' },
  { title: 'Reasoned AI analysis', body: 'Get potential remedies and strategic approaches, not just a list of cases. Every recommendation comes with its legal reasoning.', note: 'Reasoning shown with each point' },
  { title: 'Court-ready drafting', body: 'Draft petitions, notices, contracts and agreements in minutes, from your instructions and context.', note: 'Up to 90% less drafting time' },
  { title: 'Instant redlining', body: 'Upload any document and get intelligent redline suggestions straight away. No manual review, no missed clauses.', note: 'Every clause checked' },
  { title: 'Effortless and intuitive', body: 'Guided tours, inline assistance and tooltips make research seamless for experienced professionals and first-time users.', note: 'Zero learning curve' },
]

const OLD_WAY = [
  'Hours leafing through reporters and databases',
  'Keyword hits that miss the controlling ruling',
  'Generic chatbots that send your queries off your servers',
  'Notes, drafts, expenses and deadlines scattered across tools',
]

const NEW_WAY = [
  'Describe the issue; get reasoned AI analysis with remedies and strategy',
  'Every point carries a hyperlinked citation to the source',
  'Queries and data stay on premise, confidential and secure',
  'Research, drafting and legal operations in one workspace',
]

const TRUST = [
  { icon: 'fa-link', title: 'Hyperlinked citations', body: 'Every response links directly to the source judgment, statute or article, so you can verify each point.' },
  { icon: 'fa-book', title: 'Government sources only', body: 'Every research answer is drawn exclusively from government-published sources. No unverified third-party content, ever.' },
  { icon: 'fa-server', title: 'Data never leaves your servers', body: 'Every document, case and research query stays on premise, unlike generic LLMs.' },
  { icon: 'fa-lock', title: 'Your data is yours alone', body: 'No other user, firm or organisation can access your documents, cases or research. Your training pipelines stay separate too: no cross-contamination, ever.' },
  { icon: 'fa-shield', title: 'Encrypted end to end', body: 'All data is encrypted in transit and at rest. Every connection, document and interaction is protected at all times.' },
  { icon: 'fa-check-circle', title: 'EU AI Act and DPDP Act compliant', body: 'Built to meet the highest regulatory standards.', extra: ['Operates strictly within established legal frameworks.', 'Your legal work stays confidential and secure.'] },
]

const COMPARE = [
  ['AI Research Intelligence', 'Yes', 'No', 'No'],
  ['Proprietary AI', 'Yes', 'No', 'No'],
  ['Proprietary Data', 'Yes', 'No', 'Partly'],
  ['Cost Effective', 'Yes', 'No', 'No'],
  ['AI Powered', 'Yes', 'Partly', 'No'],
  ['Voice enabled, multi-modal', 'Yes', 'Yes', 'No'],
  ['Trained on Indian law', 'Yes', 'Partly', 'Yes'],
  ['Hyperlinked judgment on each answer', 'Always', 'Rarely', 'By hand'],
  ['Government-published legal sources', 'Yes', 'Partly', 'Partly'],
  ['Data stays on your servers', 'Yes', 'No', 'Yes'],
  ['Risk of fabricated cases', 'Grounded in verified law', 'High', 'None'],
  ['Time to first answer', 'Seconds', 'Seconds', 'Hours'],
  ['Drafting, redlining and legal operations', 'Included', 'Limited', 'Separate tools'],
]

const FACTS = [
  'Only 42% of people worldwide feel they have access to justice \u2014 World Justice Project.',
  '75% of civil cases in US state courts involve at least one self-represented litigant \u2014 National Center for State Courts.',
  '68% of law firm clients would prefer to handle some legal issues on their own if they had access to reliable legal information \u2014 Clio.',
]

/* ---------- Small building blocks ---------- */

const TAG = {
  g: 'bg-emerald-100 text-emerald-800',
  y: 'bg-amber-100 text-amber-800',
  r: 'bg-red-100 text-red-800',
  n: 'bg-gray-100 text-ink-soft',
}

function Tag({ tone = 'n', children }) {
  return <span className={`text-[11px] font-semibold rounded-full px-2.5 py-0.5 ${TAG[tone]}`}>{children}</span>
}

function Mock({ label, badge, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xl shadow-black/10">
      <div className="flex justify-between items-center text-xs text-ink-soft mb-3">
        <span>{label}</span>
        {badge && <span className="bg-teal-50 text-ink font-semibold rounded-full px-2.5 py-0.5">{badge}</span>}
      </div>
      {children}
    </div>
  )
}

function Shot({ src, alt }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      title="Open full size"
      className="block bg-white border border-gray-200 rounded-2xl p-2 shadow-xl shadow-black/10 hover:shadow-2xl transition-shadow"
    >
      <img src={src} alt={alt} loading="lazy" className="w-full h-auto rounded-xl" />
    </a>
  )
}

const Question = ({ children }) => (
  <div className="bg-gray-50 rounded-lg px-3 py-2.5 text-[13.5px] mb-3">{children}</div>
)
const Answer = ({ children }) => <p className="text-[13.5px] leading-6 text-ink mb-3">{children}</p>
const Source = ({ name, kind }) => (
  <div className="flex justify-between gap-3 border border-gray-200 rounded-lg px-3 py-2 text-[13px] mt-2">
    <b className="font-semibold">{name}</b>
    <span className="text-ink-soft shrink-0">{kind}</span>
  </div>
)
const Row = ({ label, tone, tag }) => (
  <div className="flex justify-between items-center border border-gray-200 rounded-lg px-3 py-2 text-[13px] mt-2">
    <span>{label}</span>
    <Tag tone={tone}>{tag}</Tag>
  </div>
)

function Heading({ children, lead, center = true }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-ink leading-tight text-balance">{children}</h2>
      {lead && (
        <p className={`mt-3 text-[15px] leading-7 text-ink-soft max-w-2xl ${center ? 'mx-auto' : ''}`}>{lead}</p>
      )}
    </div>
  )
}

function Feature({ kind, title, lead, points, flip, children }) {
  return (
    <div className={children ? 'grid md:grid-cols-2 gap-10 lg:gap-14 items-center' : 'max-w-3xl'}>
      <div className={flip && children ? 'md:order-2' : ''}>
        <div className="text-sm font-semibold text-brand-teal-dark mb-2">{kind}</div>
        <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-ink leading-tight text-balance">{title}</h2>
        <p className="mt-3 text-[15px] leading-7 text-ink-soft">{lead}</p>
        <ul className="mt-4 space-y-1.5">
          {points.map((p) => (
            <li key={p} className="flex gap-2.5 text-[14px] leading-6 text-ink-soft">
              <i className="fa fa-check text-emerald-600 mt-1 shrink-0" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      {children && <div className={flip ? 'md:order-1' : ''}>{children}</div>}
    </div>
  )
}

/* ---------- Page ---------- */

export default function SumatiAI() {
  return (
    <div>
      <ProductHero
        logoIcon="fa-gavel"
        title="SumatiAI"
        badges={['Legal AI Intelligence', 'Indian Law']}
        modules={HERO_MODULES.sumatiai}
        gradient="bg-[linear-gradient(135deg,#f7aaaa_0%,#f08080_55%,#e66b6e_100%)]"
        ctaLabel="Request a demo"
        ctaTo="/products/sumatiai/request-demo"
        poweredBy={{ label: 'PolarisAI Platform', to: '/platform' }}
        ctaIcon="fa-calendar"
      />

      {/* ============ Punchlines ============ */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-5">
          {PUNCHLINES.map((p) => (
            <div key={p.title} className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6">
              <span className="text-2xl text-brand-teal-dark block mb-3">
                {p.flag ? <span aria-hidden="true">{p.flag}</span> : <i className={`fa ${p.icon}`} aria-hidden="true" />}
              </span>
              <h3 className="text-base font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-[13.5px] leading-6 text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Hero content ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-ink leading-tight text-balance">
            Legal Research Intelligence
            <br />
            Powered by AI
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            SumatiAI understands context, not just keywords. Advanced Semantic AI delivers results aligned with real
            legal reasoning, and every answer links back to the verified legal database it came from.
          </p>
          <ul className="mt-5 space-y-1.5">
            {HERO_POINTS.map((p) => (
              <li key={p} className="flex gap-2.5 text-[14.5px] leading-6 text-ink-soft">
                <i className="fa fa-check text-emerald-600 mt-1 shrink-0" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/products/sumatiai/request-demo"
              className="inline-flex items-center gap-2 bg-brand-teal text-[#111] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-brand-teal-dark hover:text-white transition-colors"
            >
              <i className="fa fa-calendar" aria-hidden="true" /> Request a demo
            </Link>
            <a
              href="#action"
              className="inline-flex items-center border border-gray-300 text-ink font-semibold text-sm px-6 py-2.5 rounded-full hover:border-brand-teal hover:text-brand-teal-dark transition-colors"
            >
              See it in action
            </a>
          </div>
        </div>
        <Shot src="/img/sumati-research-1.png" alt="SumatiAI Research: an AI-written answer to a motor accident question with cited case sources" />
      </section>

      {/* ============ Capabilities ============ */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Heading lead="Most AI tools stop at research. Every SumatiAI module is AI-powered, so you work faster, take on more clients and spend more time practising law than doing everything around it.">
            AI in every task. Not just research.
          </Heading>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow"
              >
                <h3 className="text-base font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-[13.5px] leading-6 text-ink-soft">{c.body}</p>
                <small className="block mt-3 text-xs font-semibold text-emerald-700">{c.note}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ In action ============ */}
      <section id="action" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center scroll-mt-20">
        <Heading lead="Watch a question turn into a cited answer, a court-ready draft and a matter that stays organised.">
          SumatiAI in Action
        </Heading>
        <div className="mt-8">
          {ACTION_VIDEO ? (
            <VideoPlayer src={ACTION_VIDEO.src} poster={ACTION_VIDEO.poster} title="SumatiAI walkthrough" />
          ) : ACTION_GIF ? (
            <Shot src={ACTION_GIF.src} alt={ACTION_GIF.alt} />
          ) : (
            <div
              role="img"
              aria-label="Product walkthrough coming soon"
              className="aspect-video rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-2 text-ink-soft"
            >
              <i className="fa fa-play-circle text-4xl text-brand-teal-dark" aria-hidden="true" />
              <span className="text-sm">Product walkthrough coming soon</span>
            </div>
          )}
        </div>
      </section>

      {/* ============ Research / Drafting / Precedent ============ */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
          <Feature
            kind="Research"
            title="Reasoned AI analysis, not just a list of cases"
            lead="Research case law, statutes, bare acts, judgments, circulars and government sources in one place. Receive reasoned AI analysis, potential remedies and strategic approaches, each explained with clear legal reasoning and verified against SumatiAI's trusted legal database."
            points={[
              'Semantic search that reads meaning and context',
              'Hyperlinked citations straight to the source judgment, statute or article',
              'Research history stored securely, so you pick up exactly where you left off',
            ]}
          >
            <Shot src="/img/sumati-research-2.png" alt="SumatiAI Research: IPC Section 420 query with matching BNS section and ranked case results" />
          </Feature>

          <Feature
            flip
            kind="Drafting"
            title="Court-ready first drafts in minutes"
            lead="Generate first drafts of petitions, notices, contracts, agreements, replies and submissions from your instructions and context, in the same digital-first legal workspace where you research. From notices to decrees, produce a variety of legal formats in 90% less time."
            points={[
              'Drafts built from your instructions and the research already in view',
              'Regenerate or edit any response for consistency, reliability and precision',
              'Upload a document and get intelligent redline suggestions instantly',
            ]}
          >
            <Shot src="/img/sumati-drafting.png" alt="SumatiAI Drafting: extracted details and a generated guardianship petition draft" />
          </Feature>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            <Feature
              kind="AI Legal Operations"
              title="Every legal activity, connected to its matter"
              lead="Keep research, drafts, documents and expenses tied to the matter or client they belong to. Create users, assign roles and control who can see matters, documents, billing and other firm information."
              points={[
                'Role-based permissions across matters, documents and billing',
                'Court fees, filing charges, travel and other expenses logged against the matter',
                'One connected record for each client and matter',
              ]}
            />

            <Feature
              kind="Document tools"
              title="Voice, OCR, comparison and translation built in"
              lead="Give instructions by voice, upload documents with OCR where needed, compare two documents side by side, translate them, and convert references from IPC to BNS without leaving the workspace."
              points={[
                'Voice instructions and OCR for scanned uploads',
                'Side-by-side comparison of two documents',
                'Translation and IPC to BNS conversion',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============ Stop trawling digests ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Heading lead="Cut down your case research work by 90%, and still show every source behind the answer.">
          Spend your time practising law
        </Heading>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="border border-gray-200 rounded-2xl p-7 bg-white">
            <h3 className="text-base font-bold text-ink mb-3">The old routine</h3>
            <ul className="space-y-2">
              {OLD_WAY.map((t) => (
                <li key={t} className="flex gap-3 text-[14px] leading-6 text-ink-soft">
                  <i className="fa fa-times text-red-600 mt-1 shrink-0" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-brand-teal rounded-2xl p-7 bg-teal-50/60">
            <h3 className="text-base font-bold text-ink mb-3">With SumatiAI</h3>
            <ul className="space-y-2">
              {NEW_WAY.map((t) => (
                <li key={t} className="flex gap-3 text-[14px] leading-6 text-ink">
                  <i className="fa fa-check text-emerald-600 mt-1 shrink-0" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Trust ============ */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Heading lead="Your legal work is confidential, and every answer is grounded in a verified legal database. SumatiAI operates strictly within established legal frameworks, so you get a reliable system you can depend on.">
            Verified, private and compliant
          </Heading>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRUST.map((t) => (
              <div key={t.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <span className="text-2xl text-brand-teal-dark block mb-3">
                  <i className={`fa ${t.icon}`} aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-ink">{t.title}</h3>
                <p className="mt-2 text-[13.5px] leading-6 text-ink-soft">{t.body}</p>
                {t.extra && t.extra.map((line) => (
                  <p key={line} className="mt-1.5 text-[13.5px] leading-6 text-ink-soft">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Comparison ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Heading lead="A general chatbot is quick but unanchored. Manual search is dependable but slow. SumatiAI gives you pace, proof and privacy.">
          Why choose SumatiAI over a general chatbot
        </Heading>
        <div className="mt-10 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full min-w-[640px] text-sm border-collapse">
            <thead>
              <tr className="text-left bg-gray-50">
                <th className="p-3.5 font-medium text-ink-soft border-b border-gray-200">Capability</th>
                <th className="p-3.5 font-bold text-brand-teal-dark border-b border-gray-200 bg-teal-50/60">SumatiAI</th>
                <th className="p-3.5 font-medium text-ink-soft border-b border-gray-200">General chatbot</th>
                <th className="p-3.5 font-medium text-ink-soft border-b border-gray-200">Manual search</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(([cap, us, bot, manual]) => (
                <tr key={cap} className="border-b border-gray-100 last:border-0">
                  <td className="p-3.5 text-ink">{cap}</td>
                  <td className="p-3.5 font-semibold text-ink bg-teal-50/60">{us}</td>
                  <td className="p-3.5 text-ink-soft">{bot}</td>
                  <td className="p-3.5 text-ink-soft">{manual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 max-w-3xl mx-auto border border-gray-200 rounded-2xl p-6 bg-white">
          <h3 className="text-base font-bold text-ink">Disclaimer</h3>
          <p className="mt-2 text-[14px] leading-6 text-ink-soft">
            These tools are designed to assist legal professionals, not replace them. The AI provides research
            assistance, drafting help and document processing, but legal judgment, strategy, courtroom advocacy and
            client counselling require a qualified advocate.
          </p>
        </div>
      </section>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
