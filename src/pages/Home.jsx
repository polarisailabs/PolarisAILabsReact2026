import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DidYouKnow from '../components/DidYouKnow.jsx'

const SLIDES = [
  {
    image: '/img/slides/1.jpg',
    title: 'Our AI Platforms',
    body: 'From raw data to a lean, secure, production-ready AI: PolarisAI Platform recomposes and deploys Small Language Models, and RohiniAI Platform curates your data and guards every prompt and response.',
    cta: 'Explore Platforms',
    to: '/platform',
  },
  {
    image: '/img/slides/4.jpg',
    title: 'AI Products Powered by the PolarisAI Platform',
    body: "We don't just build platforms, we ship products on them: SumatiAI, VegaAI, SpicaAI and MarisAI, solving real problems in law, travel, compliance and enterprise knowledge.",
    cta: 'Explore Products',
    to: '/products/sumatiai',
  },
  {
    image: '/img/slides/3.jpg',
    title: 'AI Research and Technology',
    body: 'We do the research behind the technology, from the AI DNA Database to Pharma AI Economics, and turn it into systems you can build, launch and scale.',
    cta: 'Read More',
    to: '/technology',
  },
  {
    image: '/img/slides/2.jpg',
    title: "Product Management Advisory for CXO's",
    body: 'Leverage our product management expertise to transform your ideas into revenue generating products.',
    cta: 'Read More',
    to: '/product-management',
  },
]

const PLATFORMS = [
  {
    title: 'PolarisAI Platform',
    body: 'Recompose, optimize and deploy Small Language Models that run on desktops, laptops and mobile devices \u2014 from raw data to a lean, production-ready SLM.',
    to: '/platform',
  },
  {
    title: 'RohiniAI Platform',
    body: 'Collect, curate and annotate text data for AI, then secure every prompt and response with input and output guardrails.',
    to: '/platform/rohiniai',
  },
]

const PRODUCTS = [
  {
    title: 'SumatiAI',
    body: 'Accessible, reliable AI-powered legal information with human-like answers, starting with the Indian Penal Code.',
    to: '/products/sumatiai',
  },
  {
    title: 'VegaAI',
    body: 'An AI travel co-pilot that answers hyper-specific destination questions in under 2 seconds, using real-time influencer content.',
    to: '/products/vegaai',
  },
  {
    title: 'MarisAI',
    body: 'Conversational AI that unlocks your enterprise knowledge base with human-like answers for support, sales and employees, 24/7.',
    to: '/products/marisai',
  },
  {
    title: 'SpicaAI',
    body: 'A Policy AI platform that tracks AI regulation, detects conflicts and flags compliance gaps against the EU AI Act, GDPR and ISO/IEC 42001.',
    to: '/products/spicaai',
  },
]

const PILLARS = [
  {
    icon: '\u{1F3C6}',
    title: 'Vision',
    body: 'We help CXOs and product teams define a clear, actionable vision for deploying Small Language Models in their organization — articulating where on-device AI fits in the product strategy, what intelligence it unlocks, and how it differentiates the business from cloud-enabled and AI Roadmap Driven competitors.',
  },
  {
    icon: '\u{1F680}',
    title: 'Mission',
    body: 'We turn the vision into a concrete delivery roadmap — from selecting the right base model and training corpus, through quantization and distillation, to edge deployment and monitoring. Short-term milestones and long-term production targets are defined for every model in your product portfolio and roadmap.',
  },
  {
    icon: '\u{1F5A5}\uFE0F',
    title: 'Strategy',
    body: 'We help define measurable goals and high-level initiatives around model efficiency — INT8/INT4 quantization targets, memory budgets, latency SLAs, and accuracy thresholds. We answer the hard questions: which model, for whom, on which device, and how it generates business value without a cloud dependency.',
  },
  {
    icon: '\u{1F529}',
    title: 'Technology',
    body: 'We guide teams on the exact technology stack required to build production SLMs — LoRA/QLoRA fine-tuning, GPTQ/GGUF quantization, knowledge distillation pipelines, pruning frameworks, and on-device inference runtimes (llama.cpp, ONNX). The right stack for your hardware, budget, and accuracy bar.',
  },
]

const FACTS = [
  '85% of AI projects never reach production — a unified SLM platform cuts that failure rate by more than half.',
  '72% of launched products fail — HBR',
  'A fine-tuned 7B model with LoRA matches GPT-3.5 on domain tasks at less than 1% of the compute cost.',
  "INT4 quantization reduces a model's memory footprint by 8× with less than 2% accuracy loss on most NLP benchmarks.",
  '70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine.',
  '92% of users click on an item in the first page of Google search results.',
  "Microsoft's Phi-3 Mini (3.8B parameters) outperforms models 10× its size on reasoning benchmarks — smarter training beats bigger models.",
]

function CardTitle({ children }) {
  return (
    <div className="flex flex-col items-center mb-3">
      <div className="flex items-center gap-2.5">
        <span className="text-brand-teal text-[10px]">&#9670;</span>
        <h3 className="text-lg font-semibold text-ink">{children}</h3>
        <span className="text-brand-teal text-[10px]">&#9670;</span>
      </div>
      <span className="mt-1.5 h-[3px] w-12 rounded-full bg-gradient-to-r from-brand-teal/30 via-brand-teal to-brand-teal/30" />
    </div>
  )
}

function SectionLabel({ icon, children, className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-teal/40 to-brand-teal" />
      <h2 className="inline-flex items-center gap-2.5 rounded-full border border-brand-teal/40 bg-teal-50/70 px-5 py-1.5 shadow-sm shadow-brand-teal/10">
        <i className={`fa ${icon} text-brand-teal-dark text-base`} aria-hidden="true" />
        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-teal-dark via-brand-blue to-brand-purple bg-clip-text text-transparent">
          {children}
        </span>
      </h2>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-teal/40 to-brand-teal" />
    </div>
  )
}

export default function Home() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      {/* Image slider — original slides & captions, banner height kept at 260px */}
      <section className="relative w-full h-[260px] overflow-hidden bg-ink">
        {SLIDES.map((sl, i) => (
          <div
            key={sl.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === slide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={sl.image} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl bg-black/35 backdrop-blur-sm rounded-lg p-4 sm:p-5">
                  <h3 className="text-lg sm:text-2xl font-bold text-white text-balance mb-1.5 leading-tight">
                    {sl.title}
                  </h3>
                  <p className="text-white/85 text-xs mb-3 hidden sm:block">{sl.body}</p>
                  <Link
                    to={sl.to}
                    className="inline-flex items-center bg-brand-teal text-[#111] font-bold text-xs sm:text-sm px-4 py-2 rounded hover:bg-white transition-colors"
                  >
                    {sl.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === slide ? 'w-7 bg-white' : 'w-1.5 bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Tagline, quote & intro */}
      <section className="bg-gradient-to-b from-brand-teal/15 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2 text-center">
          <h3 className="font-[var(--font-display)] font-extrabold text-ink leading-tight text-balance">
            <span className="block text-xl sm:text-3xl">Your data. Your AI. Your rules.</span>
            <span className="block mt-1 text-base sm:text-xl font-bold text-brand-teal-dark">
              Your competitive advantage
            </span>
          </h3>
          <p className="mt-3 inline-block rounded-full border border-brand-teal bg-white/70 px-4 py-0.5 text-xs sm:text-sm font-semibold text-ink tracking-wide">
            PolarisAI Labs makes it happen.
          </p>

          <div className="mt-4">
            <p className="font-[var(--font-display)] text-2xl leading-none text-brand-teal">&ldquo;</p>
            <p className="text-[11px] text-ink-soft italic">Peter Drucker once said:</p>
            <p className="mt-0.5 mx-auto max-w-xl text-xs sm:text-[13px] font-medium text-ink leading-snug text-balance">
              Customers don't buy products. They buy the benefits that these products and their suppliers offer to
              them.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
            <h2 className="font-[var(--font-display)] text-lg sm:text-xl font-bold text-ink leading-tight text-balance">
              Turn AI Research Ideas into Commercially Viable AI Powered Products
            </h2>
            <p className="mt-3 text-[15px] leading-8 text-ink max-w-3xl mx-auto">
              We build innovative AI products and platforms that exceed expectations &mdash; backed by decades of
              combined expertise in engineering and technical product management.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms & products */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionLabel icon="fa-cubes" className="mb-5">Platforms</SectionLabel>
        <div className="grid md:grid-cols-2 gap-5">
          {PLATFORMS.map((p) => (
            <div
              key={p.title}
              className="flex flex-col items-stretch rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:shadow-black/5 hover:border-brand-teal transition-all"
            >
              <CardTitle>{p.title}</CardTitle>
              <p className="text-[14.5px] leading-7 text-ink-soft text-justify mb-5">{p.body}</p>
              <Link
                to={p.to}
                className="mt-auto self-center inline-flex items-center bg-brand-teal text-[#111] font-bold text-xs sm:text-sm px-4 py-2 rounded hover:bg-brand-teal-dark hover:text-white transition-colors"
              >
                Explore {p.title}
              </Link>
            </div>
          ))}
        </div>

        <SectionLabel icon="fa-th-large" className="mt-12 mb-5">Products</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-5">
          {PRODUCTS.map((p) => (
            <div
              key={p.title}
              className="flex flex-col items-stretch rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:shadow-black/5 hover:border-brand-teal transition-all"
            >
              <CardTitle>{p.title}</CardTitle>
              <p className="text-[14.5px] leading-7 text-ink-soft text-justify mb-5">{p.body}</p>
              <Link
                to={p.to}
                className="mt-auto self-center inline-flex items-center bg-brand-teal text-[#111] font-bold text-xs sm:text-sm px-4 py-2 rounded hover:bg-brand-teal-dark hover:text-white transition-colors"
              >
                Explore {p.title}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Four pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p) => (
            <div key={p.title} className="text-center">
              <span className="w-14 h-14 rounded-full bg-brand-teal text-2xl flex items-center justify-center mx-auto mb-4">
                {p.icon}
              </span>
              <h3 className="font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-[13px] leading-6 text-ink-soft text-justify">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
