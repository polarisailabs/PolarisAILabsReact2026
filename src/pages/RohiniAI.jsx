import { Link } from 'react-router-dom'
import { PageHeader, CapCard, PipelineStep, InfoBlock, StatCard, CTA } from '../components/ui.jsx'
import HeroTitle from '../components/HeroTitle.jsx'
import { HeroModuleRow } from '../components/ProductHero.jsx'
import { HERO_MODULES } from '../data/heroModules.js'
import DidYouKnow from '../components/DidYouKnow.jsx'

/* ---------- Pillar 1: Collect, Curate & Annotate ---------- */

const DATA_PIPELINE = [
  { icon: 'fa-cloud-download', title: 'Collect', body: 'Documents, transcripts and other data from enterprise sources, plus expert-written prompts and responses.' },
  { icon: 'fa-filter', title: 'Curate', body: 'Deduplicate, filter and rank data to find gaps and failure clusters before spending labeling budget.' },
  { icon: 'fa-book', title: 'Guidelines & Calibration', body: 'Clear instructions, golden examples and small calibration batches before scaling up.' },
  { icon: 'fa-pencil', title: 'Annotate', body: 'Human-in-the-loop labeling, assisted by rule-based tagging and model pre-labels.' },
  { icon: 'fa-check-square-o', title: 'Quality Review', body: 'Benchmark tasks, consensus voting, layered review and random audits.' },
  { icon: 'fa-bar-chart', title: 'Train & Evaluate', body: 'Export to training; score on held-out data with precision, recall and F1.' },
  { icon: 'fa-refresh', title: 'Repeat', body: 'Model failures flow back into the next round of collection and labeling.' },
]

const QC_LAYERS = [
  'Clear written instructions, updated as edge cases appear',
  'Calibration batches on a small sample before scaling',
  'Benchmark (golden) tasks mixed in to score each annotator',
  'Consensus voting for subjective labels',
  'Layered review for complex or high-stakes tasks',
  'Random sampling and manual audits of finished work',
  'Native speakers matched to the language and domain',
  'Rule-based pre-tagging checked by humans in the loop',
  'Deduplication to cut labeling overhead',
  'Retrain or remove annotators who do not improve',
]

/* ---------- Pillar 2: Guardrails ---------- */

const GUARD_FLOW = [
  { icon: 'fa-file-text-o', title: 'Prompt, Files & Retrieved Content', body: 'User queries, uploads, web pages, emails and RAG documents.' },
  { icon: 'fa-shield', title: 'Input Guardrails', body: 'Screen for injected instructions, sensitive data and out-of-scope requests.' },
  { icon: 'fa-cogs', title: 'Model or Agent', body: 'Generates a response or proposes an action, within set permissions.' },
  { icon: 'fa-lock', title: 'Output Guardrails', body: 'Review the response for harmful content, leakage and unsupported claims.' },
  { icon: 'fa-check-circle', title: 'Safe Response', body: 'Delivered, redacted or blocked, with every decision logged.' },
]

const LAYERS = [
  {
    layer: 'System instructions',
    does: 'Tell the model what the product is for, which topics are in scope and what to decline.',
    how: 'Passed to the model as part of its prompt.',
    limit: 'A crafted request or a retrieved page can still talk the model out of them.',
  },
  {
    layer: 'Rule-based filters',
    does: 'Match text against fixed patterns, blocked terms or length limits, such as card-number formats.',
    how: 'Deterministic code on the server.',
    limit: 'Misses text that is reworded or encoded.',
  },
  {
    layer: 'Classifier models',
    does: 'Score text for one specific risk, such as prompt injection, and block or flag above a threshold.',
    how: 'A separate model trained on labeled examples.',
    limit: 'Too low a threshold blocks real users; too high lets attacks through.',
  },
  {
    layer: 'Permissions & access control',
    does: 'Limit which data, tools and accounts a model or agent can reach at all.',
    how: 'Identity and policy layer, enforced outside the model.',
    limit: 'Only as good as the scopes defined; over-broad access defeats it.',
  },
  {
    layer: 'Confirmation steps',
    does: 'Pause an agent until a person approves a specific consequential action.',
    how: 'Enforced by application software, not a model instruction.',
    limit: 'People can approve without reading; model-only approval is easier to bypass.',
  },
]

const THREATS = [
  { icon: 'fa-bug', title: 'Prompt Injection', body: 'Hidden instructions planted in a page, email or document. Caught by classifiers that scan retrieved content before the model acts on it.' },
  { icon: 'fa-unlock-alt', title: 'Jailbreaking', body: 'Role-play or "no rules" framing to bypass safety limits. Met with safety training plus a separate jailbreak classifier outside the model.' },
  { icon: 'fa-user-secret', title: 'Personal Data Exposure', body: 'Card, ID or health data sent to a model or echoed back. Pattern filters redact it before it reaches the model or the logs.' },
  { icon: 'fa-ban', title: 'Off-Topic Requests', body: 'A support bot asked for financial or legal advice. Scope checks compare each query against what the product is meant to handle.' },
  { icon: 'fa-exclamation-triangle', title: 'Harmful Content', body: 'Scam copy, malware or dangerous instructions. Refusal training plus output classifiers add a second, independent check.' },
  { icon: 'fa-search', title: 'Unsupported Claims', body: 'Confident but false figures or citations. Source-comparison checks test whether an answer is actually backed by retrieved sources.' },
]

const FRAMEWORKS = [
  'NIST AI RMF',
  'ISO/IEC 42001',
  'EU AI Act',
  'GDPR',
  'India DPDP Act',
  'OWASP Top 10 for LLM Apps',
  'MITRE ATLAS',
]

const FACTS = [
  'Reaching 99%+ label quality on a large dataset typically calls for a labeling workforce of 1,000+ people — hard to sustain in-house or with crowdsourcing (Scale data labeling guide).',
  'Machine pre-labels audited by humans nearly always beat either humans or automation working alone — which is why human-in-the-loop sits at the center of the data engine.',
  'Enterprise telemetry suggests AI agents move roughly 16× more data than human users, while about 90% hold more privileges than they need (Obsidian Security).',
  'As a rule of thumb, you need about 1,000 labeled rows or images to build a meaningful model; with far fewer, overfitting becomes likely (Scale model training guide).',
  'No single guardrail catches every problem — products layer filters, classifiers, permissions and confirmations, and keep updating them as new attacks appear (Perplexity).',
]

export default function RohiniAI() {
  return (
    <div>
      {/* Hero with modules (compact) */}
      <section className="bg-[linear-gradient(135deg,#e8738a_0%,#c0394a_50%,#a0002a_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-1.5 flex-wrap">
            <HeroTitle>RohiniAI Platform</HeroTitle>
            <span className="bg-white/20 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-[3px] rounded-[14px]">
              Data Engineering
            </span>
            <span className="bg-white/20 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-[3px] rounded-[14px]">
              AI Guardrails
            </span>
          </div>
          <HeroModuleRow modules={HERO_MODULES.rohini} />
          <div className="mt-4">
            <Link
              to="/platform/rohiniai/request-demo"
              className="inline-flex items-center gap-2 bg-white text-[#a0002a] font-bold text-[13px] px-5 py-2 rounded-md shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-transform"
            >
              <i className="fa fa-calendar-check-o" aria-hidden="true" /> Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Intro (boxed) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[15px] leading-8 text-ink">
            Two things decide whether an AI system can be trusted in production: the{' '}
            <strong>data it learns from</strong> and the <strong>controls around what goes in and out</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-database text-brand-teal-dark mr-2" aria-hidden="true" />
              The data it learns from
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              ML practitioners have increasingly shifted attention from tweaking models to improving data — the
              data-centric AI approach — because poor labels produce poor models, however good the
              architecture.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-shield text-brand-teal-dark mr-2" aria-hidden="true" />
              The controls around it
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              The surface area to protect keeps growing. Obsidian Security&apos;s enterprise research found
              that AI agents move far more data than people do, and most hold more access than they need.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <StatCard number="16×" label="more data moved by AI agents than by human users" source="Obsidian Security" />
          <StatCard number="~90%" label="of AI agents hold excessive privileges" source="Obsidian Security" />
        </div>

        <p className="text-[14.5px] leading-8 text-ink-soft text-center">
          The <strong>RohiniAI Platform</strong> addresses both sides in one place.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-brand-teal-dark">First</span>
            <h3 className="text-base font-bold text-ink mt-1 mb-2">A data engine</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Collect the right data, curate it so labeling effort goes where it matters, and annotate it with
              expert humans and ML-assisted tooling — then train, evaluate and repeat.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-brand-teal-dark">Second</span>
            <h3 className="text-base font-bold text-ink mt-1 mb-2">Data security through guardrails</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Input guardrails check everything before it reaches the model, and output guardrails review
              everything before it reaches the user.
            </p>
          </div>
        </div>

        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[14.5px] leading-8 text-ink">
            Together they take a team from raw data to a model that is both{' '}
            <strong>well-trained and safe to deploy</strong>.
          </p>
        </div>
      </section>

      {/* ============ PILLAR 1 ============ */}
      <PageHeader title="Collect, Curate & Annotate: The Data Engine" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          A data engine is the loop of improving a model with high-quality, diverse data produced by experts:
          collect, curate, annotate, train, evaluate, repeat. RohiniAI Platform runs that loop for your data, so
          every round of model failures becomes the brief for the next round of data.
        </p>
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 flex flex-wrap">
          {DATA_PIPELINE.map((step, i) => (
            <PipelineStep key={step.title} icon={step.icon} title={step.title} isLast={i === DATA_PIPELINE.length - 1}>
              {step.body}
            </PipelineStep>
          ))}
        </div>
      </section>

      <PageHeader title="Data Engine Capabilities" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
          From first collection to final evaluation, each module targets one stage of getting a language model
          the data it needs — and finding out where it still falls short.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <CapCard icon="fa-cloud-download" title="Data Collection & Sourcing">
            Good labels start with good raw material. The platform gathers data from the places your
            organization already keeps it — document stores, support threads, transcripts — and supports
            commissioning new data written by domain experts where no usable source exists. Collection is wired
            into the labeling pipeline rather than bolted on beforehand, which shortens turnaround and helps
            keep the data consistent and free of avoidable bias.
          </CapCard>
          <CapCard icon="fa-filter" title="Data Curation">
            Labeling everything is expensive, and a lot of it adds nothing. Curation finds duplicates, spots
            records with missing or doubtful labels, and groups the examples where your model is confidently
            wrong. Teams can then route exactly those examples back to annotators or collect more of the
            missing cases, so labeling spend goes to high-value data and model failures are found, categorized
            and fixed on purpose rather than by accident.
          </CapCard>
          <CapCard icon="fa-pencil-square-o" title="Generation: Prompt–Response Data">
            After initial pre-training, a model still needs examples of what a good answer looks like. Domain
            experts write complex prompt–response pairs from scratch, covering the tasks, tones and edge cases
            your application will actually face. This is the raw material for instruction tuning and
            fine-tuning, and it is where diversity of data pays off most directly in model behavior.
          </CapCard>
          <CapCard icon="fa-thumbs-up" title="RLHF & Preference Data">
            Reinforcement learning from human feedback applies human preferences to model outputs. Annotators
            compare, rank and critique candidate responses against written criteria, producing the preference
            signal that teaches a model which answers are more helpful, accurate and safe. Because this
            judgement is subjective, preference tasks use consensus pipelines and calibrated reviewers rather
            than a single opinion.
          </CapCard>
          <CapCard icon="fa-bug" title="Red Teaming">
            Safety claims need evidence. Red-team annotators use prompt-injection and jailbreak techniques to
            probe your model for vulnerabilities before real users or attackers do. Successful attacks are
            logged as labeled examples, which feed both further training and the test suites that your
            guardrails are measured against.
          </CapCard>
          <CapCard icon="fa-bar-chart" title="Evaluation Datasets">
            Evaluate against a set of complex, diverse prompts built to find weak points, not to flatter the
            model. The platform keeps held-out test data strictly separate from training data so that a model
            cannot simply memorize the exam, and reports precision, recall and F1 so teams can pick the
            trade-off that suits the application — high recall for safety-critical detection, high precision
            where false alarms are costly.
          </CapCard>
        </div>
      </section>

      {/* Quality */}
      <PageHeader title="Label Quality & Human-in-the-Loop" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-[1.4fr_1fr] gap-12">
        <div className="space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
          <p>
            &ldquo;Garbage in, garbage out&rdquo; applies with full force to machine learning: weak labels cap
            what any model can achieve. The best results come from combining people and machines.
            Fully automated labeling struggles with edge cases, and humans alone are slower, costlier and
            inconsistent unless carefully trained. Human-in-the-loop labeling — automated pre-labels audited by
            people, with tooling that makes reviewers faster — nearly always outperforms either approach
            alone.
          </p>
          <p>
            Quality is measured, not assumed. Annotators are scored on benchmark tasks seeded into their
            queue, disagreement between labelers is treated as a signal that instructions need work, and
            common mistakes are folded back into the guidelines. Downstream, label quality shows up in model
            metrics, so precision, recall and F1 on held-out data close the loop between the people labeling
            and the model being trained. The same discipline scales from lower-volume experiments to
            high-volume production projects.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-ink mb-5">Quality Controls in Every Project</h4>
          <ul className="space-y-2.5">
            {QC_LAYERS.map((item) => (
              <li key={item} className="flex gap-2.5 text-[13px] leading-6 text-ink-soft">
                <i className="fa fa-check-circle text-brand-teal-dark mt-1 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[10px] text-gray-400 italic mt-3">
            Practices drawn from published data-labeling and model-training guidance.
          </p>
        </div>
      </section>

      {/* Value pillars */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-lg font-bold text-ink mb-8">What a Good Data Engine Delivers</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <InfoBlock icon={<i className="fa fa-star" aria-hidden="true" />} title="Quality">
              High-quality labels from domain experts are the core of any dataset. Expert annotators,
              calibrated instructions and layered review keep that quality consistent.
            </InfoBlock>
            <InfoBlock icon={<i className="fa fa-usd" aria-hidden="true" />} title="Cost Effective">
              Find, categorize and fix model failures first, then spend labeling budget only on the curated,
              high-value data that moves the metric.
            </InfoBlock>
            <InfoBlock icon={<i className="fa fa-expand" aria-hidden="true" />} title="Scalability">
              Support anything from a small experiment to a high-volume production project, and scale up or
              down as the work demands.
            </InfoBlock>
            <InfoBlock icon={<i className="fa fa-th" aria-hidden="true" />} title="Diversity">
              A wide variety of data — domains, languages, tones and edge cases — is what turns a good
              training set into a robust model.
            </InfoBlock>
          </div>
        </div>
      </section>

      {/* ============ PILLAR 2 ============ */}
      <PageHeader title="Data Security: Input & Output Guardrails" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          Guardrails are safeguards that limit what an AI system accepts or does. RohiniAI Platform checks
          the system at three points: before the model sees a request or retrieved content, while it carries
          out a task, and before a response or action reaches the user. No single check catches everything,
          so the platform layers several.
        </p>
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 flex flex-wrap">
          {GUARD_FLOW.map((step, i) => (
            <PipelineStep key={step.title} icon={step.icon} title={step.title} isLast={i === GUARD_FLOW.length - 1}>
              {step.body}
            </PipelineStep>
          ))}
        </div>
      </section>

      <PageHeader title="RohiniAI Guardrail Capabilities" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <CapCard icon="fa-shield" title="Input Guardrails">
            Input guardrails inspect everything before the model processes it: the user&apos;s query, uploaded
            files, and any web pages, emails or documents pulled in to answer it. They look for three things —
            hidden text written to override the model&apos;s instructions (prompt injection and jailbreak
            attempts), personal or confidential data that should never reach the model, and requests outside
            what the product is built to handle. Input-length limits and PII redaction apply to retrieved RAG
            content as well as to what users type.
          </CapCard>
          <CapCard icon="fa-lock" title="Output Guardrails">
            Output guardrails review what the model produces before anyone sees it. They screen responses for
            harmful or policy-violating content, detect secrets and personal data that the model should not
            repeat, and run grounding checks that compare claims against the sources used to answer, so
            fabricated figures and citations are more likely to be caught. Topical checks keep an assistant
            on scope, so a support bot answers product questions rather than giving legal, medical or
            financial advice it is not qualified to give.
          </CapCard>
          <CapCard icon="fa-key" title="Action & Access Guardrails">
            When an AI agent does more than write text — browsing, calling connected apps, editing files — the
            risk shifts from what it says to what it can do. Tool allowlists, least-privilege scopes and
            parameter validation define what an agent may touch, and approval steps pause consequential
            actions until a person confirms them. The key design rule: enforce these at the identity and
            access layer, where a model cannot be talked out of them, rather than relying on prompt-level
            instructions alone.
          </CapCard>
          <CapCard icon="fa-bell" title="What Happens When a Guardrail Fires">
            A guardrail that finds a problem does not have to block the whole response. Depending on policy,
            RohiniAI Platform can stop the request, redact or rewrite only the problematic part, log the event
            for review, or pause an action and wait for approval. Every decision is recorded with its
            rationale, so security teams get a complete audit trail and the guardrails themselves can be
            tuned as new attack techniques appear.
          </CapCard>
        </div>
      </section>

      {/* Layer table */}
      <PageHeader title="Defense in Depth: Types of Guardrails" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          Each guardrail type catches different problems and has known blind spots. That is why the platform
          combines them instead of betting on one.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3.5 font-semibold text-brand-teal-dark border-b border-gray-200 w-[18%]">Guardrail</th>
                <th className="p-3.5 font-semibold text-ink border-b border-gray-200 w-[34%]">What it does</th>
                <th className="p-3.5 font-semibold text-ink border-b border-gray-200 w-[20%]">How it is enforced</th>
                <th className="p-3.5 font-semibold text-ink-soft border-b border-gray-200 w-[28%]">Main limitation</th>
              </tr>
            </thead>
            <tbody>
              {LAYERS.map((r) => (
                <tr key={r.layer} className="border-b border-gray-100 last:border-0 align-top">
                  <td className="p-3.5 font-semibold text-ink">{r.layer}</td>
                  <td className="p-3.5 text-ink-soft leading-6">{r.does}</td>
                  <td className="p-3.5 text-ink-soft leading-6">{r.how}</td>
                  <td className="p-3.5 text-gray-500 leading-6">{r.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Threats */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-lg font-bold text-ink mb-2">Threats the Guardrails Are Built For</h3>
          <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
            Traditional application security assumes the same input gives the same output. AI systems break
            that assumption, so these risks need controls designed for them.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {THREATS.map((t) => (
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

      {/* Governance */}
      <PageHeader title="Governance, Audit & Compliance" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-[1.4fr_1fr] gap-12">
        <div className="space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
          <p>
            Governance is the set of decisions an organization makes about AI: which uses are allowed, who
            approves a new tool, and who is accountable when something goes wrong. Guardrails are how those
            decisions are enforced at runtime. A policy that says an HR assistant must never reveal individual
            salaries becomes real when access controls keep payroll records out of reach and an output check
            looks for salary disclosures. Governance without guardrails is a document; guardrails without
            governance are limits nobody agreed to.
          </p>
          <p>
            RohiniAI Platform logs who or what made each request, the prompts and responses, every allow or
            deny decision and the data touched, which supports the documented risk assessments, human
            oversight and activity logging that regulators increasingly expect. Guardrails are tested
            adversarially, not just functionally: indirect injection through documents the system reads,
            chained tool calls that reach a restricted action another way, and requests under a different
            identity. Teams track detection time, response time and false-positive rate to confirm the
            controls work without slowing legitimate use.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-ink mb-4">Frameworks &amp; Regulations We Map To</h4>
          <div className="flex flex-wrap gap-2">
            {FRAMEWORKS.map((f) => (
              <span
                key={f}
                className="text-[12px] font-semibold text-brand-teal-dark bg-teal-50 border border-teal-100 rounded-full px-3.5 py-1"
              >
                {f}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-gray-400 italic mt-3">
            Mapping guardrail controls to these frameworks is ongoing work as regulations and the threat
            landscape evolve.
          </p>
        </div>
      </section>

      <CTA
        title="Ready to Build on RohiniAI Platform?"
        action={
          <Link
            to="/platform/rohiniai/request-demo"
            className="inline-flex items-center gap-2 bg-brand-teal text-[#111] font-semibold text-sm px-7 py-3 rounded-full hover:bg-brand-teal-dark hover:text-white transition-colors"
          >
            <i className="fa fa-calendar-check-o" aria-hidden="true" /> Request a Demo
          </Link>
        }
      >
        Great models need two things that are easy to postpone: data worth learning from, and controls worth
        trusting. RohiniAI Platform brings both together. Whether you need expert-annotated data, preference
        data for alignment, red-team coverage, or input and output guardrails around a model you already run,
        we can help you get there with evidence rather than assumptions.
      </CTA>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
