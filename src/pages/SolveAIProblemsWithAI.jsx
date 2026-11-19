import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductHero from '../components/ProductHero.jsx'
import DidYouKnow from '../components/DidYouKnow.jsx'
import { PageHeader, CapCard, PipelineStep, CTA } from '../components/ui.jsx'

/* ---------- Data ---------- */

const HERO_MODULES = [
  { icon: 'fa-eye', title: 'Opening the Black Box', body: 'Seeing what happens inside a neural network' },
  { icon: 'fa-search-plus', title: 'Activation Auditing', body: 'Secondary models that read a primary model\u2019s internals' },
  { icon: 'fa-puzzle-piece', title: 'Monosemantic Features', body: 'Units that stand for one clear concept' },
  { icon: 'fa-sitemap', title: 'Circuit Mapping', body: 'Tracing how concepts flow through the network' },
  { icon: 'fa-language', title: 'Human-Readable Labels', body: 'LLMs that describe features in plain language' },
  { icon: 'fa-cogs', title: 'Automated Interpretability', body: 'Tooling that scales beyond manual inspection' },
  { icon: 'fa-check-circle', title: 'Verification', body: 'Testing whether a described concept is the real one' },
  { icon: 'fa-shield', title: 'Safer Systems', body: 'Understanding a model is a step toward trusting it' },
]

const FOCUS_AREAS = [
  {
    icon: 'fa-search-plus',
    title: 'Auditing Internal Activations',
    body: 'A secondary model is trained to read the activations inside a primary model as it processes text, so that its internal state can be inspected instead of guessed at from outputs alone.',
  },
  {
    icon: 'fa-puzzle-piece',
    title: 'Finding Monosemantic Units',
    body: 'Single neurons often respond to many unrelated things. Sparse autoencoders re-express activations as a larger set of features, many of which each respond to one recognizable concept.',
  },
  {
    icon: 'fa-sitemap',
    title: 'Mapping Neural Circuits',
    body: 'Concepts are not stored in one place. Circuit analysis traces how features in one layer feed features in the next, to explain how an input becomes a specific decision.',
  },
  {
    icon: 'fa-language',
    title: 'Translating Weights into Concepts',
    body: 'LLMs read the examples that make a feature fire and write a short description of it, turning millions of abstract numbers into statements a person can read and challenge.',
  },
  {
    icon: 'fa-check-circle',
    title: 'Verifying Explanations',
    body: 'A fluent description is not automatically a correct one. We study ways to test a label by predicting activations on fresh text and by intervening on the feature to see what changes.',
  },
  {
    icon: 'fa-tachometer',
    title: 'Scaling the Audit',
    body: 'Models have billions of parameters and millions of features. Automation is the only way to cover that space, so the tooling has to be fast, repeatable and easy to browse.',
  },
]

const PIPELINE = [
  { icon: 'fa-microchip', title: 'Record', body: 'Capture activations from a chosen layer of the primary model on a large body of text.' },
  { icon: 'fa-compress', title: 'Decompose', body: 'Train a sparse autoencoder to break each activation into a few active features.' },
  { icon: 'fa-list-ol', title: 'Collect', body: 'For each feature, gather the examples where it fires most strongly.' },
  { icon: 'fa-language', title: 'Label', body: 'An LLM proposes a plain-language description of what the feature represents.' },
  { icon: 'fa-flask', title: 'Test', body: 'Check the label on new text and by steering or ablating the feature.' },
  { icon: 'fa-sitemap', title: 'Connect', body: 'Link features across layers to follow a circuit from input to decision.' },
]

const FIELD_MILESTONES = [
  {
    icon: 'fa-puzzle-piece',
    title: 'Features beat single neurons',
    body: 'Published work on dictionary learning with sparse autoencoders reports that the learned features are often more interpretable than the individual neurons they were extracted from.',
  },
  {
    icon: 'fa-language',
    title: 'LLMs can describe neurons',
    body: 'Researchers have shown that a language model can write and score natural-language explanations of what other models\u2019 neurons respond to, which is the idea behind automated interpretability.',
  },
  {
    icon: 'fa-expand',
    title: 'It reaches larger models',
    body: 'The same approach has since been applied to much larger production-scale language models, with features for recognizable concepts such as places, code constructs and abstract ideas.',
  },
  {
    icon: 'fa-users',
    title: 'Open tools and shared browsers',
    body: 'Open libraries for training and visualizing sparse autoencoders, and public feature browsers, let more groups reproduce results and inspect features themselves.',
  },
]

const REFERENCES = [
  {
    label: 'Transformer Circuits Thread',
    href: 'https://transformer-circuits.pub/',
    note: 'A publication venue for interpretability research on how transformer language models compute, including work on features and circuits.',
  },
  {
    label: 'Neel Nanda: Mechanistic Interpretability Quickstart',
    href: 'https://www.neelnanda.io/mechanistic-interpretability/quickstart-old',
    note: 'A practical starting guide for people who want to begin doing mechanistic interpretability work.',
  },
  {
    label: 'SAEDashboard (GitHub)',
    href: 'https://github.com/jbloomAus/SAEDashboard',
    note: 'Tooling for building dashboards that visualize what the features of a sparse autoencoder respond to.',
  },
  {
    label: 'SAELens (GitHub)',
    href: 'https://github.com/decoderesearch/SAELens',
    note: 'A library for training and analyzing sparse autoencoders on language models.',
  },
  {
    label: 'Neuronpedia',
    href: 'https://www.neuronpedia.org/',
    note: 'An open platform for exploring and sharing interpretability data, including model features.',
  },
]

const FACTS = [
  'Individual neurons are often polysemantic: one neuron can respond to several unrelated concepts at once.',
  'Sparse autoencoders use more features than there are neurons, but only a few are active for any given input.',
  'Interpretability researchers use AI to study AI because manual inspection cannot cover millions of features.',
]

/* ---------- Feature explorer (illustrative) ---------- */

// Illustrative data only: hand-written examples that show how a feature
// dashboard reads. Activations are on a 0 to 1 scale and are not measurements.
const FEATURES = [
  {
    id: 'legal',
    name: 'Legal obligation language',
    label: 'Fires on words that create or enforce a contractual duty.',
    tokens: [
      ['The ', 0], ['lessee ', 0.45], ['shall ', 0.9], ['indemnify ', 1], ['the ', 0.05], ['lessor ', 0.5],
      ['against ', 0.3], ['all ', 0.1], ['claims ', 0.55], ['arising ', 0.25], ['hereunder.', 0.6],
    ],
  },
  {
    id: 'python',
    name: 'Function definitions in code',
    label: 'Fires where a new function is declared and named.',
    tokens: [
      ['def ', 0.95], ['add', 0.8], ['(a, ', 0.35], ['b):', 0.3], ['\n    return ', 0.15], ['a + b', 0.05],
    ],
  },
  {
    id: 'france',
    name: 'French cities',
    label: 'Fires on the names of cities located in France.',
    tokens: [
      ['We ', 0], ['took ', 0], ['the ', 0], ['train ', 0.1], ['from ', 0.05], ['Paris ', 1], ['to ', 0],
      ['Lyon ', 0.92], ['and ', 0], ['then ', 0], ['Marseille ', 0.88], ['last ', 0], ['spring.', 0],
    ],
  },
  {
    id: 'doubt',
    name: 'Expressions of uncertainty',
    label: 'Fires on hedges and negations that signal doubt.',
    tokens: [
      ['Honestly, ', 0.15], ['I\u2019m ', 0.1], ['not ', 0.7], ['sure ', 0.85], ['this ', 0.05], ['will ', 0.1],
      ['work, ', 0.1], ['but ', 0.2], ['maybe ', 0.8], ['it ', 0], ['could.', 0.15],
    ],
  },
]

function FeatureExplorerDemo() {
  const [activeId, setActiveId] = useState(FEATURES[0].id)
  const [threshold, setThreshold] = useState(0.2)
  const feature = FEATURES.find((f) => f.id === activeId)
  const peak = Math.max(...feature.tokens.map(([, a]) => a))

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm shadow-black/5">
      <div className="text-xs font-semibold text-ink-soft mb-2">Pick a feature to inspect</div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Features">
        {FEATURES.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActiveId(f.id)}
            aria-pressed={f.id === activeId}
            className={`text-[12.5px] px-3 py-1.5 rounded-full border transition-colors ${
              f.id === activeId
                ? 'bg-brand-teal text-white border-brand-teal font-bold'
                : 'bg-white text-ink-soft border-gray-300 hover:border-brand-teal'
            }`}
          >
            {f.name}
          </button>
        ))}
      </div>

      <div className="mt-5 bg-teal-50/60 border border-teal-100 rounded p-4">
        <div className="text-[10.5px] uppercase tracking-wide font-bold text-ink-soft mb-1">
          Description written by the labeling model
        </div>
        <p className="text-[13.5px] leading-6 text-ink">{feature.label}</p>
      </div>

      <div
        className="mt-5 font-mono text-[14px] leading-9 whitespace-pre-wrap break-words"
        aria-label={`Example text with activations for ${feature.name}`}
      >
        {feature.tokens.map(([text, act], i) => {
          const on = act >= threshold
          return (
            <span
              key={i}
              title={`activation ${act.toFixed(2)}`}
              className="rounded px-0.5 text-ink"
              style={on ? { backgroundColor: `rgba(20, 184, 166, ${0.15 + act * 0.7})` } : undefined}
            >
              {text}
            </span>
          )
        })}
      </div>

      <div className="mt-5 grid sm:grid-cols-2 gap-4 items-center">
        <div>
          <label htmlFor="act-threshold" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Show activations above {threshold.toFixed(2)}
          </label>
          <input
            id="act-threshold"
            type="range"
            min="0"
            max="0.95"
            step="0.05"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 text-center">
          <Readout label="Tokens shown" value={feature.tokens.filter(([, a]) => a >= threshold).length} />
          <Readout label="Peak activation" value={peak.toFixed(2)} />
        </div>
      </div>

      <p className="text-[11.5px] leading-6 text-gray-500 mt-4">
        The examples and activation values above are hand-written for illustration, to show how a feature
        dashboard is read. They are not measurements from a real model. Real tools such as SAEDashboard and
        Neuronpedia show the same view for features found in actual models.
      </p>
    </div>
  )
}

function Readout({ label, value }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2.5">
      <div className="text-base font-extrabold text-brand-teal-dark leading-none">{value}</div>
      <div className="text-[10.5px] text-ink-soft mt-1.5">{label}</div>
    </div>
  )
}

/* ---------- Page ---------- */

export default function SolveAIProblemsWithAI() {
  return (
    <div>
      <ProductHero
        logoIcon="fa-eye"
        title="Solve AI Problems with AI"
        badges={['Research', 'Interpretability']}
        modules={HERO_MODULES}
        gradient="bg-[linear-gradient(135deg,#007aff_0%,#5856d6_50%,#af52de_100%)]"
      />

      {/* ============ Intro ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[15px] leading-8 text-ink">
            Some of the hardest problems in AI are best attacked with AI itself. At PolarisAI Labs,{' '}
            <strong>this is one of the problems we are solving using AI</strong>: making the inner workings
            of neural networks understandable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-question-circle text-brand-teal-dark mr-2" aria-hidden="true" />
              The Problem
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Deep learning models are often criticized as opaque &ldquo;black boxes.&rdquo; Understanding why
              a neural network makes a specific decision, or how concepts are represented across billions of
              parameters, remains an unsolved foundational problem.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-lightbulb-o text-brand-teal-dark mr-2" aria-hidden="true" />
              The Solution
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Researchers are training secondary AI models to audit and parse the internal activations of
              primary models. Automated interpretability tools use LLMs to map out neural circuits, identify
              monosemantic neurons, and translate millions of abstract weight interactions into
              human-understandable concepts.
            </p>
          </div>
        </div>

        <p className="text-[14.5px] leading-8 text-ink-soft text-center">
          The name for this line of work is <strong>reverse-engineering neural networks</strong>.
        </p>
      </section>

      {/* ============ Focus areas ============ */}
      <PageHeader title="How AI Audits AI" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
          The approach is organized around six questions. Each one is a point where a secondary model can
          read, describe or check something that a person could never inspect by hand.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((f) => (
            <CapCard key={f.title} icon={f.icon} title={f.title}>
              {f.body}
            </CapCard>
          ))}
        </div>
      </section>

      {/* ============ Pipeline ============ */}
      <PageHeader title="From Activations to Understanding" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          A typical automated interpretability workflow turns raw internal numbers into labeled, tested
          concepts in six steps.
        </p>
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 flex flex-wrap">
          {PIPELINE.map((step, i) => (
            <PipelineStep key={step.title} icon={step.icon} title={step.title} isLast={i === PIPELINE.length - 1}>
              {step.body}
            </PipelineStep>
          ))}
        </div>
      </section>

      {/* ============ Live demo ============ */}
      <PageHeader title="Try It: Inspect a Feature" />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeatureExplorerDemo />
      </section>

      {/* ============ Field progress ============ */}
      <PageHeader title="What the Field Has Shown" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
          This is an active research area, and the picture below summarizes publicly reported progress from
          the wider interpretability community. See the references for the original work.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {FIELD_MILESTONES.map((f) => (
            <CapCard key={f.title} icon={f.icon} title={f.title}>
              {f.body}
            </CapCard>
          ))}
        </div>
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center mt-8">
          <p className="text-[14.5px] leading-8 text-ink">
            Together, these point toward models that are <strong>easier to audit, easier to debug, and easier
            to trust</strong>.
          </p>
        </div>
      </section>

      {/* ============ Challenges ============ */}
      <PageHeader title="What Still Has to Be Solved" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
        <p>
          Interpretability is not solved. Sparse autoencoders do not capture everything a model computes,
          many features remain hard to describe, and a label that reads well can still be wrong. Explaining
          one feature is also much easier than explaining a full decision that involves thousands of them
          across many layers.
        </p>
        <p>
          That is why verification matters as much as discovery. Descriptions have to be tested against new
          examples and against interventions on the model, and the tools have to keep up with the growing
          size of the models they study. Progress here compounds: each better explanation makes the next
          audit faster.
        </p>
      </section>

      {/* ============ References ============ */}
      <PageHeader title="Further Reading" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ul className="space-y-5">
          {REFERENCES.map((r) => (
            <li key={r.href} className="flex gap-3">
              <i className="fa fa-external-link text-brand-teal-dark mt-1.5" aria-hidden="true" />
              <div>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[14.5px] font-bold text-brand-blue hover:underline underline-offset-4"
                >
                  {r.label}
                </a>
                <p className="text-[13px] leading-6 text-ink-soft">{r.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CTA
        title="Interested in collaborating?"
        action={
          <Link
            to="/about"
            className="inline-flex items-center gap-2 brand-gradient text-white font-bold text-[13px] px-5 py-2 rounded-md shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-transform"
          >
            <i className="fa fa-envelope" aria-hidden="true" /> Get in touch
          </Link>
        }
      >
        We are open to conversations with research groups, safety teams, and companies who want to compare
        notes on understanding and auditing neural networks.
      </CTA>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
