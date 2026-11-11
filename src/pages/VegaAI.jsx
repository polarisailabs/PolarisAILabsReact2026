import ProductHero from '../components/ProductHero.jsx'
import ContactBlock from '../components/ContactBlock.jsx'
import { CompareTable } from '../components/ui.jsx'
import { HERO_MODULES } from '../data/heroModules.js'
import DidYouKnow from '../components/DidYouKnow.jsx'

const COMPARE = {
  usLabel: 'VegaAI by PolarisAI Labs',
  themLabel: 'Generic Travel Platforms / Social Media',
  items: [
    { feature: 'Speed & Specificity', us: 'Delivers answers to hyper-specific queries in under 2 seconds.', them: 'Slow, manual search process with generic, often irrelevant results.' },
    { feature: 'Accuracy', us: 'Guarantees <1% bias and misinformation through a proprietary RAG implementation.', them: 'Riddled with outdated information, sponsored content, and user-generated noise.' },
    { feature: 'Freshness', us: 'Curates real-time influencer content, with 95% of updates posted in the last 24 hours.', them: 'Content is often months or years old, making it unreliable for planning.' },
    { feature: 'Safety-First Approach', us: 'Provides proactive "Things Not To Do" guidance and pre-travel readiness checks.', them: 'Lacks structured safety information, exposing travelers to avoidable risks.' },
    { feature: 'Personalization', us: 'Leverages AI to deliver recommendations based on individual travel style and history.', them: 'Offers one-size-fits-all recommendations that ignore personal preferences.' },
  ],
}

const FACTS = [
  '42% of travelers trust influencer recommendations over traditional ads — Travelboom',
  'The influencer marketing industry reaches $32.55 billion in 2025, headed to $37.8 billion by 2030 — Influencer Marketing Hub',
  'Consumers found influencers most useful when producing travel content — Statista (60%)',
]

export default function VegaAI() {
  return (
    <div>
      <ProductHero
        logoImg="/img/vegalogo.jpg"
        title="VegaAI"
        badges={['AI Travel Co-pilot', 'Real-Time RAG']}
        sub="Our brightest insights for your most memorable travels, powered by real-time influencer content."
        tagline="Real-Time Curation · Voice-Enabled · Safety-First · Personalized Recommendations"
        modules={HERO_MODULES.vegaai}
        ctaLabel="Try VegaAI"
        ctaHref="https://polarisailabs-vega.hf.space"
      />

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
          <p>
            VegaAI addresses the critical problem of travelers wasting hours sifting through outdated, generic
            travel advice that often leads to poor trip decisions, while real-time, location-specific insights
            remain buried across fragmented social media channels. The solution is the world's first AI-powered
            travel assistant that delivers real-time, verified destination updates sourced directly from top
            travel influencers using advanced Retrieval-Augmented Generation and fine-tuned AI models to curate
            Instagram, YouTube, and TikTok content, providing instant answers to location specific queries like
            "What's new in Havelock Island today?" in under 2 seconds.
          </p>
          <p>
            The platform's key features include real-time content curation with 95% of surfaced content posted
            within the past 24 hours, voice-enabled natural language processing for intuitive interaction, a
            safety-first approach providing "Things Not To Do" guidance for destination-specific risks,
            pre-travel prerequisites covering document, health, and safety readiness checks, and advanced AI
            technology leveraging Quantization, LoRA optimization, and Chain-of-Thought reasoning.
          </p>
          <p>
            VegaAI's competitive edge lies in delivering hyper-specific, time-sensitive insights through
            sub-2-second query response times, less than 1% bias and misinformation incidents through
            proprietary RAG implementation, real-time influencer content curation for maximum freshness,
            comprehensive risk mitigation guidance for enhanced safety, and personalized recommendations based
            on individual travel style and history.
          </p>
          <p>
            Unlike generic travel chatbots, VegaAI combines speed, accuracy, freshness, safety, and
            personalization to transform how travelers access and utilize destination information — positioning
            itself as the essential travel companion for next-generation travelers in the rapidly evolving
            travel technology landscape.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-xl font-bold text-ink text-center mb-2">Our Competitive Advantage</h2>
        <p className="text-sm text-ink-soft text-center max-w-2xl mx-auto mb-8">
          VegaAI is fundamentally different from generic travel platforms and traditional search engines — built
          on five key pillars.
        </p>
        <CompareTable rows={COMPARE} />
      </section>

      <ContactBlock />
      <DidYouKnow facts={FACTS} icon="plane" />
    </div>
  )
}
