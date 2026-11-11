import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DidYouKnow from '../components/DidYouKnow.jsx'

const SLIDES = [
  {
    image: '/img/slides/1.jpg',
    title: 'Recompose, Optimize and Deploy Small Language Models',
    body: 'Pre-trained · Quantized · Distilled · Pruned — SLMs that run on desktops, laptops & mobile devices.',
    cta: 'Explore Platform',
    to: '/platform',
  },
  {
    image: '/img/slides/2.jpg',
    title: "Product Management Advisory for CXO's",
    body: 'Leverage our product management expertise to transform your ideas into revenue generating products.',
    cta: 'Read More',
    to: '/product-management',
  },
  {
    image: '/img/slides/3.jpg',
    title: "Technology Advisory for CXO's",
    body: 'Leverage our technology expertise to build, launch and scale up your systems.',
    cta: 'Read More',
    to: '/technology',
  },
  {
    image: '/img/slides/4.jpg',
    title: 'Mentorship and Coaching',
    body: 'Unlock your potential with our expert mentorship and comprehensive training programs.',
    cta: 'Read More',
    to: '/mentorship',
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

      {/* Company narrative — original gradient hero banner */}
      <section className="brand-gradient relative overflow-hidden mt-5 mb-6">
        <span className="absolute -top-[60px] -right-[60px] w-60 h-60 rounded-full bg-white/5" />
        <span className="absolute -bottom-[70px] right-[120px] w-[180px] h-[180px] rounded-full bg-white/[0.03]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-5">
            Turn AI Research Ideas into Commercially Viable AI Powered Products
          </h3>
          <p className="text-[14.5px] leading-[1.8] text-white/90 text-justify mb-2">
            At PolarisAI Labs, we believe in the power of great ideas. We are passionate about creating innovative
            AI Products and Platforms that exceed expectations and drive success. With decades of combined
            expertise in engineering and technical product management, we have the knowledge and skills to make
            your vision a reality.
          </p>
          <p className="text-[14.5px] leading-[1.8] text-white/90 text-justify">
            The PolarisAI Platform is purpose-built to recompose, optimize and deploy PolarisAI Small Language
            Models that run on desktops, laptops &amp; mobile devices. Every module serves one mission: take a
            model from raw data all the way to a lean, production-ready SLM that fits in your existing
            infrastructure, not just in a data center.
          </p>
          <div className="flex justify-center mt-2">
            <Link
              to="/platform"
              className="inline-flex items-center bg-brand-teal text-[#111] font-bold text-xs sm:text-sm px-4 py-2 rounded hover:bg-white transition-colors"
            >
              Explore PolarisAI Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Drucker quote */}
      <div className="bg-gray-50 border-l-4 border-brand-teal max-w-5xl mx-auto px-6 py-4 text-sm text-ink-soft italic mb-4">
        Peter Drucker once said:{' '}
        <span className="text-ink font-semibold not-italic">
          "Customers don't buy products. They buy the benefits that these products and their suppliers offer to
          them."
        </span>
      </div>

      {/* Four pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
