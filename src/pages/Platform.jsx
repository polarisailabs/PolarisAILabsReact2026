import { Link } from 'react-router-dom'
import { PageHeader, CapCard, PipelineStep, MaturityBar, StatCard, CTA } from '../components/ui.jsx'
import HeroTitle from '../components/HeroTitle.jsx'
import { HeroModuleRow } from '../components/ProductHero.jsx'
import { HERO_MODULES } from '../data/heroModules.js'
import DidYouKnow from '../components/DidYouKnow.jsx'

const PIPELINE = [
  { icon: 'fa-database', title: 'Data Ingestion & Prep', body: 'Structured, unstructured, and streaming sources with automated quality checks.' },
  { icon: 'fa-font', title: 'Tokenization', body: 'BPE, WordPiece & SentencePiece workbench for vocabulary design.' },
  { icon: 'fa-cogs', title: 'Pre & Post-Training', body: 'Distributed transformer training on domain-specific corpora.' },
  { icon: 'fa-sliders', title: 'Fine-Tuning', body: 'PEFT, LoRA, QLoRA & full-parameter adaptation for downstream tasks.' },
  { icon: 'fa-bar-chart', title: 'Evaluation & Scoring', body: 'Multi-metric benchmarking with human-in-the-loop validation.' },
  { icon: 'fa-compress', title: 'PreciseQuant & PreciseTrim', body: 'INT8/INT4 compression — up to 4× cost reduction, <2% accuracy loss.' },
  { icon: 'fa-rocket', title: 'SLM Inference', body: 'Edge-optimized serving for low-latency, on-premise deployments.' },
]

const MATURITY = [
  { label: 'Accuracy & Precision', value: 92 },
  { label: 'Robustness & OOD Detection', value: 85 },
  { label: 'Fairness & Bias Mitigation', value: 80 },
  { label: 'Inference Latency p95 < 200ms', value: 95 },
  { label: 'Cost Efficiency ($/1K tokens)', value: 88 },
  { label: 'Explainability & Interpretability', value: 78 },
]

const JOURNEY = [
  { icon: 'fa-puzzle-piece', title: 'Recompose', body: 'AI Admins and Infra Engineers select and recompose open-weight SLMs.' },
  { icon: 'fa-compress', title: 'Optimize', body: 'Apply PreciseQuant, distillation and PreciseTrim for low memory and compute.' },
  { icon: 'fa-graduation-cap', title: 'Fine-Tune', body: 'Train on your own domain-specific enterprise data.' },
  { icon: 'fa-server', title: 'Deploy', body: 'Deploy on existing infrastructure, including desktops, laptops and mobile.' },
  { icon: 'fa-bolt', title: 'Infer', body: 'Offline, private, near real-time inference on-device.' },
]

const FACTS = [
  '85% of AI projects never reach production — a unified platform cuts that failure rate by more than half.',
  'A fine-tuned 7B model with LoRA matches GPT-3.5 on domain tasks at less than 1% of the compute cost.',
  "INT4 quantization reduces a model's memory footprint by 8× with less than 2% accuracy loss on most NLP benchmarks.",
  '68% of production GenAI applications use Retrieval-Augmented Generation (RAG) to ground responses in enterprise knowledge — Databricks, 2024.',
  "Microsoft's Phi-3 Mini (3.8B parameters) outperforms models 10× its size on reasoning benchmarks — smarter training beats bigger models.",
]

export default function Platform() {
  return (
    <div>
      {/* Hero with modules (compact) */}
      <section className="brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-3 flex-wrap">
            <HeroTitle>PolarisAI Platform</HeroTitle>
            <span className="bg-white/20 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-[3px] rounded-[14px]">
              v2.0
            </span>
            <span className="bg-white/20 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-[3px] rounded-[14px]">
              Enterprise
            </span>
          </div>
          <HeroModuleRow modules={HERO_MODULES.pap} />
          <div className="mt-4">
            <Link
              to="/platform/request-demo"
              className="inline-flex items-center gap-2 bg-white text-[#123a63] font-bold text-[13px] px-5 py-2 rounded-md shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-transform"
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
            Procuring a model is only the starting point. From there, AI and IT teams inherit an{' '}
            <strong>ongoing burden</strong> of adapting, fine-tuning, recomposing and reoptimizing it as
            requirements and hardware change, a cycle that restarts with every new model release.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-line-chart text-brand-teal-dark mr-2" aria-hidden="true" />
              Adoption is soaring
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              According to Gartner, global AI software revenues are projected to exceed $297 billion by 2027,
              and IDC estimates that more than 75% of enterprise applications will leverage AI capabilities by
              2026. A McKinsey Global Survey found that 65% of organizations now regularly use generative AI in
              at least one business function, nearly double the figure reported in 2023.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-exclamation-triangle text-brand-teal-dark mr-2" aria-hidden="true" />
              Production is the bottleneck
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Despite soaring adoption, 85% of AI projects never reach production (VentureBeat), largely due to
              fragmented tooling, poor data pipelines and the absence of a unified end-to-end development
              infrastructure. Token-based APIs and GPU cloud bills add cost on top.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard number="$297B" label="projected global AI software revenue by 2027" source="Gartner" />
          <StatCard number="75%" label="of enterprise applications to leverage AI by 2026" source="IDC" />
          <StatCard number="65%" label="of organizations regularly use generative AI" source="McKinsey" />
          <StatCard number="85%" label="of AI projects never reach production" source="VentureBeat" />
        </div>

        <p className="text-[14.5px] leading-8 text-ink-soft text-center">
          The <strong>PolarisAI Platform</strong> is purpose-built to close that gap:{' '}
          <strong>Recompose, Optimize &amp; Deploy Small Language Models</strong> that run on your own servers,
          desktops, laptops and mobile devices.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-brand-teal-dark">First</span>
            <h3 className="text-base font-bold text-ink mt-1 mb-2">It understands your environment</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              The platform auto-detects the target environment and understands its architecture and every
              internal detail. It then automatically bakes, adapts, recomposes, fine-tunes and optimizes the
              model against that architecture and the business&apos;s own data and infrastructure.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-brand-teal-dark">Second</span>
            <h3 className="text-base font-bold text-ink mt-1 mb-2">It does so every time</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              The time from model procurement to production deployment is compressed for every new model, and
              compressed again whenever architecture, internals, version or data change. The result is a model
              deployed and actively in use across servers, laptops, mobile and edge devices.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard number="90%" label="up to 90% cost savings versus token-based APIs and GPU cloud bills" />
          <StatCard number="70%" label="up to 70% less latency, fully offline on CPU or CPU and GPU" />
          <StatCard number="12" label="working modules, built and running end to end" />
          <StatCard number="8" label="optimization techniques applied to every model" />
        </div>

        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[14.5px] leading-8 text-ink">
            Built for organizations looking to bring the latest generative AI capabilities into their existing
            or new applications, <strong>or to launch a dedicated AI business line of their own</strong>.
          </p>
        </div>
      </section>

      {/* ============ Journey ============ */}
      <PageHeader title="Your Journey on PolarisAI Platform" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          The platform collapses the ongoing cycle of adapting, fine-tuning, recomposing and reoptimizing into
          a single workflow, taking an open-weight SLM from the bench to on-premise deployment in five steps.
        </p>
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 flex flex-wrap">
          {JOURNEY.map((step, i) => (
            <PipelineStep key={step.title} icon={step.icon} title={`${i + 1}. ${step.title}`} isLast={i === JOURNEY.length - 1}>
              {step.body}
            </PipelineStep>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <PageHeader title="End-to-End Small Language Models Enablement Pipeline" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          A unified pipeline is the difference between a prototype and a production AI product. PolarisAI
          Platform orchestrates every stage seamlessly — from raw data to real-time intelligent responses —
          eliminating the integration overhead that kills most AI initiatives before they deliver value.
        </p>
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 flex flex-wrap">
          {PIPELINE.map((step, i) => (
            <PipelineStep key={step.title} icon={step.icon} title={step.title} isLast={i === PIPELINE.length - 1}>
              {step.body}
            </PipelineStep>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <PageHeader title="PolarisAI Platform Capabilities" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4 text-[13.5px] leading-7 text-ink-soft mb-8">
          <p>
            PolarisAI Platform turns general-purpose open-weight small language models into optimized,
            fine-tuned, domain-specific ones: <strong className="text-ink">Post-trained · PreciseQuantized ·
            PreciseIntelligenceRecovered · PreciseTrimmed · PreciseLowRankAdapted · PreciseRewardAligned ·
            Precise Memory Optimized · Precise Compute Optimized</strong>.
          </p>
          <p>
            It can work with proprietary models too, but is intentionally focused on open-weight models, since
            only they can be fully decomposed and optimized to an enterprise&apos;s exact requirements. Models
            run fully offline, optimized for CPU only, or CPU and GPU together where a GPU is available, for
            up to 70% less latency, complete data privacy and full control.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CapCard icon="fa-globe" title="Runs Anywhere">
            Fully offline. No cloud, no APIs. Deploy on servers, desktops, laptops, phones, and edge devices.
          </CapCard>
          <CapCard icon="fa-money" title="Up to 90% Cost Savings">
            Replace token-based APIs and GPU cloud bills with costs limited to infrastructure you already own.
          </CapCard>
          <CapCard icon="fa-lock" title="Privacy by Design">
            Your enterprise data, competitive edge, and model stack stay entirely in your hands — full
            compliance, full control.
          </CapCard>
          <CapCard icon="fa-wrench" title="Recomposed & Optimized">
            Recompose and optimize SLMs using PreciseQuant, PreciseTrim, Precise Intelligence Recovery, and
            PreciseLowRank.
          </CapCard>
          <CapCard icon="fa-crosshairs" title="Auto-Detect Hardware Compatibility">
            Automatically detects compatible SLMs for your existing hardware within its memory and compute
            footprint.
          </CapCard>
          <CapCard icon="fa-building" title="Built for Enterprise IT">
            Purpose-built for AI Admins, AI Infrastructure Engineers, and Data Admins at SMEs.
          </CapCard>
          <CapCard icon="fa-bolt" title="Up to 70% Less Latency">
            Recomposed and optimized SLMs deliver near real-time inference on your own hardware.
          </CapCard>
          <CapCard icon="fa-graduation-cap" title="Domain Data Tuning">
            Post-train and fine-tune SLMs on your own data for domains like Healthcare, Finance, and more.
          </CapCard>
        </div>
      </section>

      {/* Evaluation */}
      <PageHeader title="Model Evaluation & Scoring" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-[1.4fr_1fr] gap-12">
        <div className="space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
          <p>
            Selecting a model for production is a multi-dimensional decision that cannot be reduced to a single
            benchmark score. A 2024 MIT/Stanford joint study found that organizations with systematic evaluation
            frameworks reduce post-deployment failures by 64%. The PolarisAI Model Scoring workbench assesses
            every candidate across five dimensions: accuracy, robustness to distribution shift, fairness across
            demographic cohorts, inference latency (p50/p95/p99), and cost per 1K tokens. Side-by-side comparison
            reports are generated automatically, translating raw metrics into business-impact scores that CXOs
            can act on without deep ML expertise.
          </p>
          <p>
            Supported evaluation frameworks include HELM, MMLU, and domain-specific harnesses for legal
            (LegalBench), medical (MedQA), and financial (FinBench) text. Human-in-the-loop evaluation workflows
            route edge cases to subject-matter experts, with inter-annotator disagreement rates automatically
            flagged to trigger targeted retraining. No model ships to production until it passes all configured
            quality gates.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-ink mb-5">Platform Capability Maturity</h4>
          {MATURITY.map((m) => (
            <MaturityBar key={m.label} label={m.label} value={m.value} />
          ))}
          <p className="text-[10px] text-gray-400 italic mt-2">
            Benchmark ratings across 50+ enterprise AI deployments, 2024.
          </p>
        </div>
      </section>

      {/* ============ Current state ============ */}
      <PageHeader title="Current State of PolarisAI Platform" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-2xl text-brand-teal-dark">
              <i className="fa fa-check-circle" aria-hidden="true" />
            </span>
            <h3 className="text-base font-bold text-ink mt-3 mb-2">Production-Ready, Not a Demo</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              12 working modules, built and functioning end to end. Recomposition, optimization, fine-tuning,
              deployment, and inference are live capabilities today, not a proof of concept.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-2xl text-brand-teal-dark">
              <i className="fa fa-handshake-o" aria-hidden="true" />
            </span>
            <h3 className="text-base font-bold text-ink mt-3 mb-2">Backed by Tier-1 Deep Tech Companies</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Free development and testing support from Tier-1 deep tech companies, including GPU compute, an
              incubation program, product subscriptions and a Business Fellowship, all confirmed with zero
              equity given in exchange.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-2xl text-brand-teal-dark">
              <i className="fa fa-university" aria-hidden="true" />
            </span>
            <h3 className="text-base font-bold text-ink mt-3 mb-2">Bootstrapped &amp; Founder-Owned</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Capital-efficient by design: the platform reached production readiness on the founder&apos;s own
              capital, with full ownership retained. No outside investors, no dilution to date.
            </p>
          </div>
        </div>
      </section>

      {/* ============ Let's talk ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <h3 className="text-lg font-bold text-ink mb-6">Let&apos;s Talk</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4 bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6">
            <span className="shrink-0 w-9 h-9 rounded-full bg-brand-teal text-[#111] font-bold flex items-center justify-center">1</span>
            <div>
              <h4 className="text-[15px] font-bold text-ink">Discovery call: 30 minutes</h4>
              <p className="text-[13.5px] leading-7 text-ink-soft mt-1">
                Walk through your current AI/API spend, the workloads you would like to bring in-house, and the
                hardware you already have available.
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6">
            <span className="shrink-0 w-9 h-9 rounded-full bg-brand-teal text-[#111] font-bold flex items-center justify-center">2</span>
            <div>
              <h4 className="text-[15px] font-bold text-ink">Functional demo and technical deep-dive: under NDA</h4>
              <p className="text-[13.5px] leading-7 text-ink-soft mt-1">
                A live platform walkthrough and a compatibility check against your existing infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Build on PolarisAI Platform?"
        action={
          <Link
            to="/platform/request-demo"
            className="inline-flex items-center gap-2 bg-brand-teal text-[#111] font-semibold text-sm px-7 py-3 rounded-full hover:bg-brand-teal-dark hover:text-white transition-colors"
          >
            <i className="fa fa-calendar-check-o" aria-hidden="true" /> Request a Demo
          </Link>
        }
      >
        The gap between an AI idea and a production AI product is not a technology gap, it is an
        infrastructure gap. PolarisAI Platform eliminates it. Whether you need to post-train a domain model,
        fine-tune an open-source LLM, apply PreciseQuant for edge deployment, or add production observability, we have
        the tooling, the expertise, and the track record to get you there faster and with greater confidence.
      </CTA>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
