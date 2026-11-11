import { PageHeader, CapCard, PipelineStep, MaturityBar, TrendItem, CTA } from '../components/ui.jsx'
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
  { icon: 'fa-compress', title: 'Quantization & Pruning', body: 'INT8/INT4 compression — up to 4× cost reduction, <2% accuracy loss.' },
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
          <div className="flex items-center justify-center gap-3 mb-1.5 flex-wrap">
            <HeroTitle>PolarisAI Platform</HeroTitle>
            <span className="bg-white/20 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-[3px] rounded-[14px]">
              v2.0
            </span>
            <span className="bg-white/20 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-[3px] rounded-[14px]">
              Enterprise
            </span>
          </div>
          <h3 className="text-white/85 text-sm max-w-2xl mx-auto leading-relaxed mb-1">
            Build, optimize &amp; deploy Small Language Models that run on desktops, laptops &amp; mobile devices.
          </h3>
          <p className="text-white/85 text-sm mb-3">
            Post-trained · Quantized · Distilled · Pruned · Memory &amp; Compute Optimized
          </p>
          <HeroModuleRow modules={HERO_MODULES.pap} />
        </div>
      </section>

      {/* Intro / market stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4 text-[14.5px] leading-8 text-ink-soft text-justify">
        <p>
          The AI platform market is undergoing its most significant transformation in a decade. According to
          Gartner, global AI software revenues are projected to exceed <strong>$297 billion by 2027</strong>,
          while IDC estimates that more than <strong>75% of enterprise applications</strong> will leverage AI
          capabilities by 2026. A McKinsey Global Survey found that <strong>65% of organizations</strong> now
          regularly use generative AI in at least one business function — nearly double the figure reported in
          2023. Yet despite soaring adoption, a staggering{' '}
          <strong>85% of AI projects never reach production</strong> (VentureBeat), largely due to fragmented
          tooling, poor data pipelines, and the absence of a unified end-to-end development infrastructure.
        </p>
        <p>
          The <strong>PolarisAI Platform</strong> is purpose-built to do exactly that —{' '}
          <strong>Recompose, Optimize &amp; Deploy Small Language Models that run on desktops, laptops &amp; mobile
          devices.</strong> Every module in the platform serves one mission: take a model from raw data all the
          way to a lean, production-ready SLM that fits in your existing infrastructure, not just in a data
          centre. Our models are <strong>Post-trained</strong> on curated domain corpora,{' '}
          <strong>Precise-Quantized&trade;</strong> to low precision for minimal memory footprint,{' '}
          <strong>Intelligence-Recovered&trade;</strong> from larger teachers for maximum accuracy-per-parameter,{' '}
          <strong>Precise-Trimmed&trade;</strong> to strip redundant weights, and fully{' '}
          <strong>Memory &amp; Compute Optimized</strong> for real-world edge and on-premise deployment — without
          sacrificing the quality and intelligence your product demands.
        </p>
      </section>

      {/* Pipeline */}
      <PageHeader title="End-to-End Small Language Models Enablement Pipeline" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] text-ink-soft mb-6 max-w-3xl">
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
        <p className="text-[13.5px] text-ink-soft mb-8 max-w-3xl">
          Every module in the PolarisAI Platform is purpose-built for a specific stage of the AI/ML lifecycle.
          Together they form a cohesive, end-to-end environment where data scientists, ML engineers, and product
          teams work from a single, integrated infrastructure — eliminating context-switching, reducing
          error-prone hand-offs, and accelerating time-to-production by an average of{' '}
          <strong className="text-ink">2.4×</strong> (McKinsey, 2024).
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <CapCard icon="fa-filter" title="Small Language Models Fine-Tuning">
            Fine-tuning is where a general-purpose model becomes a precise, domain-expert tool. PolarisAI
            Platform's fine-tuning module supports both full-parameter fine-tuning and parameter-efficient
            methods — LoRA, QLoRA, Prefix Tuning, and Adapter Layers — enabling organizations to achieve
            GPT-4-class domain accuracy at less than 1% of the compute cost. A 2024 Stanford HELM study showed
            fine-tuned 7B models outperform GPT-3.5 on industry-specific benchmarks by up to 22%. The
            classification workbench includes automated class-imbalance handling, label smoothing, temperature
            scaling for confidence calibration, and per-class F1 reporting — ensuring models are not just
            accurate in aggregate but reliable across every label, which is critical in healthcare, legal,
            financial, and e-commerce classification tasks.
          </CapCard>
          <CapCard icon="fa-bolt" title="Small Language Models Quantization and Inference">
            The era of Small Language Models (SLMs) has arrived. Microsoft Phi-3, Google Gemma 2, Qwen 3.5 and
            Meta LLaMA-3 8B have demonstrated that sub-10B models — when correctly quantized and
            instruction-tuned — match much larger models on targeted tasks while delivering 4–8× lower inference
            cost and 60–80% lower latency. PolarisAI's quantization workbench supports INT8, INT4, and GPTQ
            quantization with a live accuracy-vs-speed tradeoff dashboard so teams can make informed compression
            decisions. The SLM inference engine is optimized for on-premise CPU servers, edge hardware (NVIDIA
            Jetson, Apple Silicon), and mobile deployment — enabling use cases where data sovereignty, sub-100ms
            latency, or air-gapped environments make cloud-only LLMs impractical. IDC forecasts 40% of enterprise
            LLM inference will run on-premise by 2026.
          </CapCard>
          <CapCard icon="fa-eye" title="Attention Algorithms">
            Every modern transformer model — BERT, GPT, LLaMA, T5 — is driven by attention mechanisms that
            assign relevance weights across tokens. Without visibility into these weights, debugging
            misclassifications or hallucinations is guesswork. PolarisAI Platform provides dedicated visualizers
            for Multi-Head Attention (encoder cross-token relationships at each layer and head) and Masked
            Self-Attention (decoder causal patterns in autoregressive generation). Gartner identifies
            explainability as a top-3 enterprise AI requirement, and the EU AI Act mandates transparency for
            high-risk AI systems. Our attention visualizer gives engineering teams the interpretability depth
            required to meet both regulatory standards and product quality bar — turning a black box into an
            understandable, debuggable system.
          </CapCard>
          <CapCard icon="fa-server" title="Small Language Models Post-Training Infrastructure">
            Post-training on a foundation model is the most compute-intensive step in AI development —
            GPT-3-scale runs cost upward of $4 million. PolarisAI Platform democratizes post-training with a
            distributed pipeline supporting data parallelism, gradient checkpointing, and mixed-precision
            training (FP16/BF16). Supported objectives include Masked Language Modeling (MLM), Causal Language
            Modeling (CLM), and span-corruption (T5-style). Native integrations with Weights &amp; Biases provide
            full experiment lineage. For organizations that cannot justify ground-up post-training, the platform
            also supports continued post-training on top of open-source checkpoints (LLaMA, Qwen, Gemma) —
            achieving domain adaptation at a fraction of the cost with a proven, reproducible workflow.
          </CapCard>
          <CapCard icon="fa-font" title="Tokenization Engine">
            Tokenization determines how a model perceives language — a poor tokenizer propagates errors through
            every downstream stage. The PolarisAI Tokenization Engine supports BPE (Byte Pair Encoding),
            WordPiece and SentencePiece in a single interactive workbench. Practitioners can visualize merge
            rules, compare vocabulary coverage across corpora, and benchmark subword segmentation side-by-side
            before committing to a pre &amp; post training run. A well-tuned tokenizer reduces vocabulary size by
            30–40% and directly improves model perplexity and downstream task accuracy. The workbench exports
            production-ready tokenizer configs compatible with HuggingFace Tokenizers, SentencePiece, and
            tiktoken.
          </CapCard>
          <CapCard icon="fa-sitemap" title="Embeddings Workbench">
            Vector embeddings are now the connective tissue of modern AI — powering semantic search, RAG
            pipelines, recommendation engines, and anomaly detection. A 2024 a16z report found that over 70% of
            enterprise AI applications rely on embeddings as a core component. The PolarisAI Embeddings
            Workbench enables teams to generate embeddings from multiple model families, project them into
            2D/3D space, and evaluate cosine similarity distributions and retrieval precision@k — all
            interactively. Teams that use the workbench to select embedding models cut experimentation cycles
            from weeks to hours and consistently achieve higher retrieval quality in production RAG deployments.
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

      {/* Trends */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#333] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-brand-teal text-lg font-bold mb-6">2026 AI Platform Trends Shaping Our Roadmap</h3>
          <div className="grid md:grid-cols-2 gap-x-10">
            <div>
              <TrendItem badge="HOT">
                <strong className="text-white">Agentic AI &amp; Autonomous Pipelines:</strong> Gartner projects
                that 33% of enterprise software will embed agentic AI by 2025 — models that plan, reason, and
                act across multi-step tasks without human intervention. PolarisAI Platform is building native
                agent orchestration into the inference layer.
              </TrendItem>
              <TrendItem badge="NEW">
                <strong className="text-white">Multimodal Foundation Models:</strong> Text, image, audio, and
                code understanding converging into single models is redefining platform requirements. GPT-4o,
                Gemini 1.5, and Claude 4.6 set the standard — our platform now supports multimodal fine-tuning
                adapters for vision-language tasks.
              </TrendItem>
              <TrendItem badge="RISING">
                <strong className="text-white">RAG at Scale:</strong> A 2024 Databricks survey found 68% of
                production GenAI apps use RAG. Our embeddings workbench is purpose-built to optimize retrieval
                quality — chunk sizing, re-ranking, hybrid search — for enterprise RAG architectures.
              </TrendItem>
            </div>
            <div>
              <TrendItem badge="HOT">
                <strong className="text-white">On-Premise &amp; Sovereign AI:</strong> The EU AI Act, India's
                DPDP Act, and APAC regulations are driving demand for private deployments. IDC forecasts the
                on-premise AI market at $38B by 2027. Our SLM inference engine is purpose-designed for
                air-gapped and private cloud environments.
              </TrendItem>
              <TrendItem badge="NEW">
                <strong className="text-white">Parameter-Efficient Fine-Tuning (PEFT):</strong> LoRA and QLoRA
                allow adaptation of 70B+ models by updating only 0.1% of parameters — reducing fine-tuning cost
                by 95%. PolarisAI's fine-tuning module supports all major PEFT strategies natively, with
                automated hyperparameter search.
              </TrendItem>
              <TrendItem badge="RISING">
                <strong className="text-white">AI Observability &amp; MLOps:</strong> The 2024 State of MLOps
                report found mature observability cuts model drift detection time by 3.8× and reduces incidents
                by 55%. PolarisAI embeds drift monitoring, lineage tracking, and A/B gating as first-class
                platform features.
              </TrendItem>
            </div>
          </div>
        </div>
      </div>

      <CTA title="Ready to Build on PolarisAI Platform?">
        The gap between an AI idea and a production AI product is not a technology gap — it is an
        infrastructure gap. PolarisAI Platform eliminates it. Whether you need to post-train a domain model,
        fine-tune an open-source LLM, quantize for edge deployment, or add production observability — we have
        the tooling, the expertise, and the track record to get you there faster and with greater confidence.
      </CTA>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
