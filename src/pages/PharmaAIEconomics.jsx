import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductHero from '../components/ProductHero.jsx'
import DidYouKnow from '../components/DidYouKnow.jsx'
import { PageHeader, CapCard, PipelineStep, StatCard, CTA } from '../components/ui.jsx'

/* ---------- Data ---------- */

const HERO_MODULES = [
  { icon: 'fa-line-chart', title: 'Risk-Adjusted NPV', body: 'Value every asset by phase, odds, cost and time' },
  { icon: 'fa-flask', title: 'Experiment Triage', body: 'Flag low-odds experiments before resources are committed' },
  { icon: 'fa-shield', title: 'On-Premises SLM', body: 'A small language model trained inside your infrastructure' },
  { icon: 'fa-database', title: 'Your Own Failure Data', body: 'Formulation failures, batch data and root-cause notes' },
  { icon: 'fa-sliders', title: 'Optimized Stack', body: 'Built on PolarisAI quantization, pruning and distillation' },
  { icon: 'fa-bar-chart', title: 'Scenario Modeling', body: 'Test changes to odds, cost and timelines' },
  { icon: 'fa-lock', title: 'Data Stays Put', body: 'Sensitive R&D never leaves your environment' },
  { icon: 'fa-check-circle', title: 'Defensible ROI', body: 'Numbers a finance team can audit' },
]

// All figures below are from Nolan & Theuer (2026), J Pharm Innov 21:459.
const PAPER_STATS = [
  { number: '41%', label: 'average Phase 2 probability of success in oncology', source: 'Nolan & Theuer, 2026' },
  { number: '$12M → $190M', label: 'average cost per trial, Phase 1 to Phase 3', source: 'Nolan & Theuer, 2026' },
  { number: '>60%', label: 'average NPV jump from Phase 1 to Phase 2, the largest of any transition', source: 'Nolan & Theuer, 2026' },
  { number: '$530M → $1.5B', label: 'average asset NPV from Phase 1 to approval', source: 'Nolan & Theuer, 2026' },
]

// Mean values by therapeutic area, from Table 1 of the paper. POS in %, costs and NPV in $M.
const TA_TABLE = [
  { area: 'Oncology', p1: 73, p2: 41, p3: 65, c3: 280, npv1: 270, npvA: 1700 },
  { area: 'Cardiovascular', p1: 80, p2: 68, p3: 76, c3: 280, npv1: 600, npvA: 1400 },
  { area: 'Diabetes', p1: 65, p2: 59, p3: 69, c3: 200, npv1: 1300, npvA: 3700 },
  { area: 'HIV', p1: 60, p2: 73, p3: 90, c3: 550, npv1: 1000, npvA: 2800 },
  { area: 'Immunology', p1: 69, p2: 64, p3: 63, c3: 91, npv1: 390, npvA: 1500 },
  { area: 'Infections', p1: 77, p2: 73, p3: 80, c3: 180, npv1: 940, npvA: 2200 },
  { area: 'Neurology', p1: 65, p2: 56, p3: 62, c3: 130, npv1: 270, npvA: 1100 },
  { area: 'Psychiatry', p1: 63, p2: 51, p3: 69, c3: 160, npv1: 350, npvA: 1300 },
  { area: 'Respiratory', p1: 77, p2: 56, p3: 61, c3: 310, npv1: 390, npvA: 1700 },
]

const APPROACH = [
  {
    icon: 'fa-database',
    title: 'Learns From Your History',
    body: 'The model is trained on your own past experiments and failures: formulation outcomes, batch data, and the root-cause notes your scientists already wrote. That is the context a generic model has never seen.',
  },
  {
    icon: 'fa-flask',
    title: 'Flags Risk Early',
    body: 'Before a team commits materials, instrument time and people, the model scores a proposed experiment against what has failed before and surfaces the patterns that match.',
  },
  {
    icon: 'fa-lock',
    title: 'Stays On-Premises',
    body: 'Training and inference both run inside your infrastructure. The most sensitive R&D records are used to improve the model without leaving your environment.',
  },
  {
    icon: 'fa-sliders',
    title: 'Small and Efficient',
    body: 'A small language model, shaped with the PolarisAI optimization stack, is practical to host on hardware you control and fast enough to use during experiment planning.',
  },
  {
    icon: 'fa-users',
    title: 'Keeps Scientists in Charge',
    body: 'The model advises; people decide. Every flag comes with the historical cases behind it, so a scientist can accept it, challenge it, or run the experiment anyway.',
  },
  {
    icon: 'fa-line-chart',
    title: 'Ties Back to Money',
    body: 'Avoided experiment cycles and better odds are expressed in the same risk-adjusted NPV terms that finance teams already use, so the benefit can be argued with numbers.',
  },
]

const PIPELINE = [
  { icon: 'fa-folder-open-o', title: 'Gather', body: 'Collect historical experiment, batch and failure records.' },
  { icon: 'fa-filter', title: 'Curate', body: 'Clean, de-duplicate and label outcomes with your experts.' },
  { icon: 'fa-cogs', title: 'Train', body: 'Fine-tune a small model on-premises with the optimization stack.' },
  { icon: 'fa-flask', title: 'Score', body: 'Rate proposed experiments by similarity to past failures.' },
  { icon: 'fa-check-circle', title: 'Review', body: 'Scientists confirm, challenge or override each flag.' },
  { icon: 'fa-line-chart', title: 'Measure', body: 'Convert avoided cycles into a risk-adjusted NPV case.' },
]

const LIMITATIONS = [
  'The paper models inputs with normal, independent distributions for tractability.',
  'It leaves out pricing and payer-access effects.',
  'Therapeutic-area averages can hide indication-level differences.',
  'Revenue inputs combine historical figures with forecasts for some products.',
]

const FACTS = [
  'Phase 3 trials cost about $190M on average, versus about $12M for Phase 1, according to Nolan & Theuer (2026).',
  'Probability of success is U-shaped across phases, and Phase 2 is the lowest at about 62% on average.',
  'The step from Phase 1 to Phase 2 is the largest value jump in a drug program, with NPV rising by more than 60% on average.',
]

// Optional "Watch" section. It stays hidden while this list is empty.
// To use the two Instagram reels, add entries like:
//   { title: 'Short description of the reel', href: 'https://www.instagram.com/reel/De9ZyO4IO5J/?hl=en' },
//   { title: 'Short description of the reel', href: 'https://www.instagram.com/reel/DejhcqGovFq/?hl=en' },
const REELS = []

/* ---------- Phase-gate calculator ---------- */

// Mean oncology inputs from the paper (Table 1 and Fig. 1A). The approval-phase cost is
// back-solved from Fig. 1A, where it is a very small number.
const BASE = {
  pos: [0.73, 0.41, 0.65, 0.92],
  cost: [28, 58, 280, 2.5],
  dur: [36, 37, 38, 9.6],
  npvApp: 1000,
}

// Same equations as the paper: 15% discount rate, 6-month interim between phases.
function runTree({ pos, cost, dur, npvApp }, dr = 0.15, interim = 0.5) {
  const yrs = (m) => m / 12
  const dc1 = cost[0] / (1 + dr) ** (yrs(dur[0]) + interim)
  const dc2 = cost[1] / (1 + dr) ** (yrs(dur[1]) + interim) + dc1
  const dc3 = cost[2] / (1 + dr) ** (yrs(dur[2]) + interim) + dc2
  const dcA = cost[3] / (1 + dr) ** yrs(dur[3]) + dc3
  const ph3 = npvApp * pos[3] - dcA * (1 - pos[3])
  const ph2 = ph3 * pos[2] - dc3 * (1 - pos[2])
  const ph1 = ph2 * pos[1] - dc2 * (1 - pos[1])
  const pc = ph1 * pos[0] - dc1 * (1 - pos[0])
  return { pc, ph1, ph2, ph3 }
}

const clampPos = (x) => Math.min(0.99, Math.max(0.01, x))
const money = (n) => `$${Math.round(n).toLocaleString('en-US')}M`
const signed = (n) => `${n >= 0 ? '+' : '−'}$${Math.abs(Math.round(n)).toLocaleString('en-US')}M`

const ZERO = { p2: 0, p3: 0, c2: 0, d2: 0, up: 0 }
const PRESETS = [
  { label: 'Baseline', note: 'Paper Fig. 1A', values: ZERO },
  { label: 'Differentiating technology', note: 'Paper Fig. 1B', values: { ...ZERO, c2: 10, d2: 6, up: 5 } },
  { label: 'Better Phase 2 odds', note: 'Illustrative assumption', values: { ...ZERO, p2: 5 } },
]

const SLIDERS = [
  { key: 'p2', label: 'Phase 2 probability of success', unit: ' pts', min: -10, max: 20, step: 1 },
  { key: 'p3', label: 'Phase 3 probability of success', unit: ' pts', min: -10, max: 20, step: 1 },
  { key: 'c2', label: 'Phase 2 cost change', unit: ' $M', min: -30, max: 30, step: 1 },
  { key: 'd2', label: 'Phase 2 duration change', unit: ' mo', min: -12, max: 12, step: 1 },
  { key: 'up', label: 'Revenue at approval', unit: '%', min: 0, max: 40, step: 1 },
]

const STAGES = [
  { key: 'pc', label: 'Preclinical' },
  { key: 'ph1', label: 'Phase 1' },
  { key: 'ph2', label: 'Phase 2' },
  { key: 'ph3', label: 'Phase 3' },
]

function PhaseGateCalculator() {
  const [s, setS] = useState(ZERO)

  const { base, scen } = useMemo(() => {
    const base = runTree(BASE)
    const scen = runTree({
      pos: [BASE.pos[0], clampPos(BASE.pos[1] + s.p2 / 100), clampPos(BASE.pos[2] + s.p3 / 100), BASE.pos[3]],
      cost: [BASE.cost[0], Math.max(0, BASE.cost[1] + s.c2), BASE.cost[2], BASE.cost[3]],
      dur: [BASE.dur[0], Math.max(1, BASE.dur[1] + s.d2), BASE.dur[2], BASE.dur[3]],
      npvApp: BASE.npvApp * (1 + s.up / 100),
    })
    return { base, scen }
  }, [s])

  const maxVal = Math.max(...STAGES.map((st) => Math.max(base[st.key], scen[st.key])))

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm shadow-black/5">
      <div className="flex flex-wrap gap-2 mb-5">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setS(p.values)}
            className="text-left border border-gray-300 rounded px-3 py-1.5 hover:border-brand-teal hover:bg-teal-50/60 transition-colors"
          >
            <span className="block text-[12.5px] font-bold text-ink">{p.label}</span>
            <span className="block text-[10.5px] text-ink-soft">{p.note}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {SLIDERS.map((sl) => (
            <div key={sl.key}>
              <div className="flex justify-between text-xs mb-1">
                <label htmlFor={`sl-${sl.key}`} className="font-semibold text-ink-soft">
                  {sl.label}
                </label>
                <span className="font-bold text-brand-teal-dark">
                  {s[sl.key] > 0 && sl.key !== 'up' ? '+' : ''}
                  {s[sl.key]}
                  {sl.unit}
                </span>
              </div>
              <input
                id={`sl-${sl.key}`}
                type="range"
                min={sl.min}
                max={sl.max}
                step={sl.step}
                value={s[sl.key]}
                onChange={(e) => setS({ ...s, [sl.key]: Number(e.target.value) })}
                className="w-full accent-teal-600"
              />
            </div>
          ))}
        </div>

        <div>
          <div className="flex gap-4 text-[11px] text-ink-soft mb-2">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded-sm bg-gray-300" /> Baseline
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded-sm bg-teal-600" /> Scenario
            </span>
          </div>
          <div className="space-y-3">
            {STAGES.map((st) => (
              <div key={st.key}>
                <div className="flex justify-between text-[12px] mb-1">
                  <span className="font-semibold text-ink">{st.label}</span>
                  <span className="text-ink-soft">
                    {money(base[st.key])} → <strong className="text-ink">{money(scen[st.key])}</strong>{' '}
                    <span className={scen[st.key] >= base[st.key] ? 'text-emerald-700' : 'text-rose-700'}>
                      ({signed(scen[st.key] - base[st.key])})
                    </span>
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded overflow-hidden mb-1">
                  <div className="h-full bg-gray-300" style={{ width: `${(base[st.key] / maxVal) * 100}%` }} />
                </div>
                <div className="h-2 bg-gray-100 rounded overflow-hidden">
                  <div className="h-full bg-teal-600" style={{ width: `${(scen[st.key] / maxVal) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-[11.5px] leading-6 text-gray-500 mt-5">
        Starts from the oncology example in the paper (Fig. 1A, with approval-stage NPV set to $1 billion). It
        applies the paper's risk-adjusted NPV equations to average inputs, with a 15% discount rate. The
        paper's published tables come from 1,000-run simulations, so they will differ from this single-path
        calculation. The &ldquo;Better Phase 2 odds&rdquo; preset is an assumption for illustration, not a
        measured result.
      </p>
    </div>
  )
}

/* ---------- Page ---------- */

export default function PharmaAIEconomics() {
  return (
    <div>
      <ProductHero
        logoIcon="fa-line-chart"
        title="Pharma AI Economics"
        badges={['Research', 'Pharma R&D']}
        modules={HERO_MODULES}
        gradient="bg-[linear-gradient(135deg,#1e3a8a_0%,#0d7de8_50%,#0f766e_100%)]"
        poweredBy={{ label: 'PolarisAI Platform', to: '/platform' }}
      />

      {/* ============ Intro ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[15px] leading-8 text-ink">
            Our research starting point: much of R&amp;D capital is lost not on experiments that fail, but on{' '}
            <strong>experiments that never had good odds to begin with</strong>. We are studying how AI
            trained on a company&rsquo;s own history can spot them early.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-bar-chart text-brand-teal-dark mr-2" aria-hidden="true" />
              The economics are measurable
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Probability of success, cost and duration differ sharply by phase and by therapeutic area. A
              2026 peer-reviewed decision-analytics framework turns those differences into risk-adjusted
              net present value, so the cost of a weak bet can be stated in dollars.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-flask text-brand-teal-dark mr-2" aria-hidden="true" />
              The data to act on it is in-house
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              The strongest signal about what is likely to fail sits in a company&rsquo;s own formulation
              failures, batch data and root-cause notes. That data is also among the most sensitive, which
              is why we work on-premises.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAPER_STATS.map((st) => (
            <StatCard key={st.label} number={st.number} label={st.label} source={st.source} />
          ))}
        </div>
      </section>

      {/* ============ TA table ============ */}
      <PageHeader title="Where the Risk and Value Sit" />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          Average values by therapeutic area, from Table 1 of Nolan &amp; Theuer (2026). Phase 2 is the
          lowest-odds gate in almost every area, and Phase 3 is where spending jumps.
        </p>
        <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white">
          <table className="w-full text-[12.5px] text-right">
            <thead className="bg-gray-50 text-ink-soft">
              <tr>
                <th className="text-left font-semibold px-4 py-2.5">Therapeutic area</th>
                <th className="font-semibold px-3 py-2.5">Phase 1 POS</th>
                <th className="font-semibold px-3 py-2.5">Phase 2 POS</th>
                <th className="font-semibold px-3 py-2.5">Phase 3 POS</th>
                <th className="font-semibold px-3 py-2.5">Phase 3 cost</th>
                <th className="font-semibold px-3 py-2.5">NPV at Phase 1</th>
                <th className="font-semibold px-4 py-2.5">NPV at approval</th>
              </tr>
            </thead>
            <tbody>
              {TA_TABLE.map((r) => (
                <tr key={r.area} className="border-t border-gray-100">
                  <td className="text-left font-semibold text-ink px-4 py-2">{r.area}</td>
                  <td className="px-3 py-2">{r.p1}%</td>
                  <td className={`px-3 py-2 ${r.p2 <= 51 ? 'font-bold text-rose-700' : ''}`}>{r.p2}%</td>
                  <td className="px-3 py-2">{r.p3}%</td>
                  <td className="px-3 py-2">${r.c3}M</td>
                  <td className="px-3 py-2">${r.npv1.toLocaleString('en-US')}M</td>
                  <td className="px-4 py-2">${r.npvA.toLocaleString('en-US')}M</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11.5px] leading-6 text-gray-500 mt-3">
          POS is probability of success. Costs and NPV are in millions of US dollars. Nine of sixteen areas
          are shown; Phase 2 POS at or below 51% is highlighted. Source: Nolan &amp; Theuer (2026), based on
          Evaluate Pharma data as of April 1, 2025.
        </p>
      </section>

      {/* ============ Calculator ============ */}
      <PageHeader title="Try It: What Better Odds Are Worth" />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          Move the sliders to change an oncology program&rsquo;s odds, cost, timeline or revenue and see how
          risk-adjusted value shifts at each stage. This is the kind of arithmetic behind a defensible ROI
          case.
        </p>
        <PhaseGateCalculator />
      </section>

      {/* ============ Approach ============ */}
      <PageHeader title="Failure Mitigation Training" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
          Our proposed approach is an on-premises small language model trained on an organization&rsquo;s
          own historical experiment and failure data, used to flag high-risk experiments before resources
          are committed.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPROACH.map((a) => (
            <CapCard key={a.title} icon={a.icon} title={a.title}>
              {a.body}
            </CapCard>
          ))}
        </div>
      </section>

      {/* ============ Pipeline ============ */}
      <PageHeader title="From Records to ROI" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 flex flex-wrap">
          {PIPELINE.map((step, i) => (
            <PipelineStep key={step.title} icon={step.icon} title={step.title} isLast={i === PIPELINE.length - 1}>
              {step.body}
            </PipelineStep>
          ))}
        </div>
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center mt-8">
          <p className="text-[14.5px] leading-8 text-ink">
            The goal: <strong>fewer wasted experiment cycles, a measurable reduction in R&amp;D spend</strong>,
            and an ROI case that can be taken to leadership.
          </p>
        </div>
      </section>

      {/* ============ Honest status ============ */}
      <PageHeader title="What This Page Does and Does Not Show" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
        <p>
          Failure Mitigation Training is a proposed approach. The economics above come from a published
          paper and illustrate how a benefit would be valued; they are not measured outcomes of our model.
          We will share results as we have them.
        </p>
        <p>
          The paper&rsquo;s authors are employees and shareholders of Halozyme Therapeutics, which funded
          the work. The authors note these limitations:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          {LIMITATIONS.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      {/* ============ Optional reels ============ */}
      {REELS.length > 0 && (
        <>
          <PageHeader title="Watch" />
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <ul className="space-y-4">
              {REELS.map((r) => (
                <li key={r.href} className="flex gap-3">
                  <i className="fa fa-instagram text-brand-teal-dark mt-1.5" aria-hidden="true" />
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14.5px] font-bold text-brand-blue hover:underline underline-offset-4"
                  >
                    {r.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {/* ============ References ============ */}
      <PageHeader title="Further Reading" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-3">
          <i className="fa fa-external-link text-brand-teal-dark mt-1.5" aria-hidden="true" />
          <div>
            <a
              href="https://doi.org/10.1007/s12247-026-10652-5"
              target="_blank"
              rel="noreferrer"
              className="text-[14.5px] font-bold text-brand-blue hover:underline underline-offset-4"
            >
              Quantifying Return on Investment of Differentiating Technologies in Drug Development: A Decision
              Analytics Framework
            </a>
            <p className="text-[13px] leading-6 text-ink-soft">
              Nolan &amp; Theuer, Journal of Pharmaceutical Innovation, 2026, 21:459. Open access under CC BY 4.0.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Want to size the opportunity in your pipeline?"
        action={
          <Link
            to="/about"
            className="inline-flex items-center gap-2 brand-gradient text-white font-bold text-[13px] px-5 py-2 rounded-md shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-transform"
          >
            <i className="fa fa-envelope" aria-hidden="true" /> Discuss a pilot
          </Link>
        }
      >
        We are talking with pharma R&amp;D and finance teams about on-premises failure mitigation and the
        economics behind it.
      </CTA>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
