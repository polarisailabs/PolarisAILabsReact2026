import { Link } from 'react-router-dom'
import ProductHero from '../components/ProductHero.jsx'
import { PageHeader, CapCard, PipelineStep, TrendItem, InfoBlock, StatCard, CompareTable, CTA, VideoPlayer } from '../components/ui.jsx'
import { HERO_MODULES } from '../data/heroModules.js'
import DidYouKnow from '../components/DidYouKnow.jsx'

/* ---------- Data ---------- */

const PIPELINE = [
  { icon: 'fa-cloud-download', title: 'Collect', body: 'Crawlers pull the latest influencer videos and images from YouTube, Instagram and TikTok.' },
  { icon: 'fa-film', title: 'Understand', body: 'Video and image processing turns frames and speech into searchable text and embeddings.' },
  { icon: 'fa-database', title: 'Index', body: 'Processed text and images are stored in text and image vector indexes.' },
  { icon: 'fa-comments-o', title: 'Interpret', body: 'The query optimizer parses intent, with a cache for repeat questions.' },
  { icon: 'fa-search', title: 'Retrieve', body: 'Hybrid search and agents gather context, which the context builder assembles.' },
  { icon: 'fa-cogs', title: 'Generate', body: 'Guardrails, a model gateway and an ensemble of small models write the answer.' },
  { icon: 'fa-paper-plane', title: 'Deliver', body: 'Text and relevant images reach the traveler in seconds.' },
]

const COMPARE = {
  usLabel: 'VegaAI by PolarisAI Labs',
  themLabel: 'Generic Travel Platforms / Social Media',
  items: [
    { feature: 'Speed & Specificity', us: 'Delivers answers to hyper-specific queries in under 2 seconds.', them: 'Slow, manual search process with generic, often irrelevant results.' },
    { feature: 'Accuracy', us: 'Targets <1% bias and misinformation through a proprietary RAG implementation.', them: 'Riddled with outdated information, sponsored content, and user-generated noise.' },
    { feature: 'Freshness', us: 'Curates real-time influencer content, with 95% of updates posted in the last 24 hours.', them: 'Content is often months or years old, making it unreliable for planning.' },
    { feature: 'Safety-First Approach', us: 'Provides proactive "Things Not To Do" guidance and pre-travel readiness checks.', them: 'Lacks structured safety information, exposing travelers to avoidable risks.' },
    { feature: 'Personalization', us: 'Leverages AI to deliver recommendations based on individual travel style and history.', them: 'Offers one-size-fits-all recommendations that ignore personal preferences.' },
  ],
}

const WALKTHROUGH = [
  'The problem: hours lost to generic, outdated advice',
  'What sets VegaAI apart: real-time influencer information, "Things Not To Do" guidance, answers in about 2 seconds',
  'How a query travels: query cache and optimizer, hybrid search, context builder',
  'How several small models are ensembled and scored into one answer',
]

const RELIABILITY = [
  'Retrieves the latest factual information instead of relying on what a model memorized',
  'Cross-references multiple authoritative sources',
  'Hybrid search combines meaning-based and keyword matching for relevance',
  'Input guardrails block, rewrite or allow each prompt before it reaches a model',
  'Several small models answer, and relevance scoring picks the best response',
  'Output guardrails catch quality and security failures before anything is shown',
]

const TRAVELERS = [
  { icon: 'fa-suitcase', title: 'Backpackers', body: 'Fresh, on-the-ground tips and prerequisites that match a light, flexible trip.' },
  { icon: 'fa-users', title: 'Family Travel', body: 'Safety and packing guidance tailored to travelling with children.' },
  { icon: 'fa-female', title: 'Solo Women', body: 'Destination-specific "Things Not To Do" and readiness checks for travelling alone.' },
  { icon: 'fa-compass', title: 'Adventure Travelers', body: 'Current conditions and risks for destinations where plans change quickly.' },
]

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
        modules={HERO_MODULES.vegaai}
        ctaLabel="Try VegaAI"
        ctaTo="/products/vegaai/request-demo"
        poweredBy={{ label: 'PolarisAI Platform', to: '/platform' }}
      />

      {/* Intro (boxed) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[15px] leading-8 text-ink">
            Travel planning is <strong>broken</strong>: the freshest, most useful insights exist, but they are buried
            across endless social media feeds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-clock-o text-brand-teal-dark mr-2" aria-hidden="true" />
              The problem
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Travelers spend countless hours searching, only to find generic, outdated advice that leads to
              disappointing experiences. Critical real-time insights from on-the-ground sources stay fragmented,
              creating a gap between planning and reality that costs time and money.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-lightbulb-o text-brand-teal-dark mr-2" aria-hidden="true" />
              The solution
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              VegaAI is the world&apos;s first AI-powered travel assistant that delivers real-time, verified
              destination updates sourced directly from top travel influencers, so a question like &ldquo;What&apos;s
              new in Havelock Island today?&rdquo; gets an instant, conversational answer.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard number="<2s" label="from question to recommendation" />
          <StatCard number="95%" label="of surfaced content posted within the past 24 hours" />
          <StatCard number="<1%" label="bias and misinformation incidents (target)" />
          <StatCard number=">90%" label="positive user ratings (target)" />
        </div>

        <p className="text-[14.5px] leading-8 text-ink-soft text-center">
          <strong>VegaAI</strong> brings speed, accuracy, freshness, safety and personalization together.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-brand-teal-dark">First</span>
            <h3 className="text-base font-bold text-ink mt-1 mb-2">Real-time influencer content</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Fresh posts from top travel influencers on Instagram, YouTube and TikTok are curated using advanced
              Retrieval-Augmented Generation and fine-tuned AI models.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-t-4 border-t-brand-teal rounded p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
            <span className="text-[11px] font-bold tracking-wider uppercase text-brand-teal-dark">Second</span>
            <h3 className="text-base font-bold text-ink mt-1 mb-2">Safety-first guidance</h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Destination-specific &ldquo;Things Not To Do&rdquo; and pre-travel readiness checks for documents,
              health and safety, so surprises happen before the trip, not during it.
            </p>
          </div>
        </div>

        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[14.5px] leading-8 text-ink">
            Together they make VegaAI the <strong>essential travel companion</strong> for next-generation travelers.
          </p>
        </div>
      </section>

      {/* ============ Why influencers ============ */}
      <PageHeader title="Why Influencer-Sourced Insight" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
          Travelers already rely on the people who are actually at the destination. VegaAI makes that knowledge
          searchable the moment you need it.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <StatCard number="42%" label="of travelers trust influencer recommendations over traditional ads" source="Travelboom" />
          <StatCard number="28%" label="of travelers book accommodations based on influencer recommendations" source="Travelboom" />
          <StatCard number="60%" label="of consumers found influencers most useful when producing travel content" source="Statista" />
        </div>
      </section>

      {/* ============ Pipeline ============ */}
      <PageHeader title="How VegaAI Works" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          From a creator&apos;s latest post to your screen, VegaAI runs one continuous pipeline. Crawlers keep
          collecting while travelers keep asking, so answers reflect what was posted today.
        </p>
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 flex flex-wrap">
          {PIPELINE.map((step, i) => (
            <PipelineStep key={step.title} icon={step.icon} title={step.title} isLast={i === PIPELINE.length - 1}>
              {step.body}
            </PipelineStep>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-start gap-x-10 gap-y-6">
          <div className="w-full max-w-md">
            <VideoPlayer
              src="/video/vega-product-demo.mp4"
              poster="/img/vega-product-demo-poster.jpg"
              title="Watch: VegaAI Product Walkthrough"
              caption="About 5 minutes."
            />
          </div>
          <div className="flex-1 min-w-[260px]">
            <h4 className="text-[14px] font-bold text-ink mb-3">What you will see</h4>
            <ul className="space-y-2.5">
              {WALKTHROUGH.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] leading-6 text-ink-soft">
                  <i className="fa fa-check-circle text-brand-teal-dark mt-1 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Capabilities ============ */}
      <PageHeader title="VegaAI Capabilities" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <CapCard icon="fa-refresh" title="Real-Time Influencer Curation">
            A crawler continuously looks for the latest travel content from top influencers on YouTube,
            Instagram and TikTok, downloading new videos and images as soon as they are available. The result is
            freshness by design: 95% of surfaced content was posted within the past 24 hours, not months ago.
          </CapCard>
          <CapCard icon="fa-film" title="Native Video & Image Understanding">
            VegaAI reads video the way a traveler watches it. Frames become embeddings that are processed together
            with text, with dynamic frame-rate sampling and time-aware position encoding so the model knows not
            only what appears but when. That supports captioning, question answering, text from frames and
            finding the right moment in a long video.
          </CapCard>
          <CapCard icon="fa-search" title="Hybrid Search & RAG">
            Instead of matching keywords alone, an LLM first parses the intent behind a question. The parsed
            query goes to hybrid search over text and image indexes, and agents can add information from tools
            such as web search and news APIs. A context builder merges the query with everything retrieved, so
            the model answers from evidence.
          </CapCard>
          <CapCard icon="fa-exclamation-triangle" title="Safety-First Guidance">
            Good trips avoid avoidable mistakes. VegaAI provides destination-specific &ldquo;Things Not To
            Do&rdquo; guidance and pre-travel prerequisites that cover document, health and safety readiness,
            making risks visible while there is still time to plan around them.
          </CapCard>
          <CapCard icon="fa-user" title="Personalized & Voice-Enabled">
            Recommendations are shaped by individual travel style and history, and voice-enabled natural language
            processing lets travelers simply ask. Hands-free questions get conversational answers, in text and
            images, that fit the person asking rather than a one-size-fits-all list.
          </CapCard>
          <CapCard icon="fa-th-large" title="Model-Agnostic by Design">
            VegaAI supports Llama, Qwen, Gemma, Kimi and Gemini behind a model gateway that offers one unified
            interface to many models, including self-hosted ones. Travelers can pick a model, or leave the
            default: several small models answer, their outputs are ensembled, and relevance scoring selects the
            best response.
          </CapCard>
          <CapCard icon="fa-bolt" title="Efficient Small Language Models">
            Fast answers need lean models. The small language models inside VegaAI are tuned with
            parameter-efficient fine-tuning, LoRA, PreciseTrim and distillation, then PreciseQuantized to lower memory use
            and speed up inference. Chain-of-Thought reasoning helps them handle multi-part travel questions.
          </CapCard>
          <CapCard icon="fa-lock" title="Input & Output Guardrails">
            Every prompt is intercepted after context is added and before it reaches the main model. It is
            checked against rules, and a guardrail can block it, rewrite it to remove sensitive details, or
            allow it. Before anything is shown, output guardrails catch quality and security failures and apply a
            policy for each.
          </CapCard>
        </div>
      </section>

      {/* ============ In action ============ */}
      <PageHeader title="VegaAI in Action" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
          The latest prototype, as a traveler sees it. Ask a question, optionally choose a model, and get a text
          answer with relevant images.
        </p>
        <div className="flex flex-wrap justify-center items-start gap-6">
          <div className="w-full max-w-md">
            <VideoPlayer
              src="/video/vega-ux-demo.mp4"
              poster="/img/vega-ux-demo-poster.jpg"
              title="Watch: The VegaAI User Experience"
              caption="Choosing a model, asking a question and sharing the answer. About 2.5 minutes."
            />
          </div>
          <figure className="w-full max-w-xs md:pt-8">
            <a href="/img/vega-model-select.jpg" target="_blank" rel="noreferrer" title="Click to enlarge">
              <img
                loading="lazy"
                src="/img/vega-model-select.jpg"
                alt="VegaAI prototype showing the model selection dropdown with Llama, Qwen, Gemma, Kimi and Gemini"
                className="w-full rounded-lg border border-gray-200 shadow-md shadow-black/5"
              />
            </a>
            <figcaption className="text-xs text-ink-soft mt-2">
              Choose Llama, Qwen, Gemma, Kimi or Gemini, or leave the default to ensemble.
            </figcaption>
          </figure>
          <figure className="w-full max-w-xs md:pt-8">
            <a href="/img/vega-in-action.jpg" target="_blank" rel="noreferrer" title="Click to enlarge">
              <img
                loading="lazy"
                src="/img/vega-in-action.jpg"
                alt="VegaAI prototype answering a query about Paradise Island, Maldives with text and a relevant image"
                className="w-full rounded-lg border border-gray-200 shadow-md shadow-black/5"
              />
            </a>
            <figcaption className="text-xs text-ink-soft mt-2">A text answer with relevant images, ready to share.</figcaption>
          </figure>
        </div>
      </section>

      {/* ============ Competitive advantage ============ */}
      <PageHeader title="Our Competitive Advantage" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          VegaAI is fundamentally different from generic travel platforms and traditional search engines. Its
          edge is built on five pillars.
        </p>
        <CompareTable rows={COMPARE} />
      </section>

      {/* ============ Reliability ============ */}
      <PageHeader title="Accuracy You Can Plan Around" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-[1.4fr_1fr] gap-12">
        <div className="space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
          <p>
            A confident wrong answer is worse than no answer, especially when it concerns safety, money or a
            booking you cannot undo. VegaAI&apos;s retrieval-augmented design keeps responses tied to current,
            factual information, which helps minimize bias and misinformation.
          </p>
          <p>
            Reliability is layered rather than assumed. Guardrails check what goes into the model and what comes
            out, several models contribute so no single model decides alone, and relevance scoring chooses the
            strongest response. The platform targets fewer than 1% bias and misinformation incidents.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-ink mb-5">How VegaAI Keeps Answers Reliable</h4>
          <ul className="space-y-2.5">
            {RELIABILITY.map((item) => (
              <li key={item} className="flex gap-2.5 text-[13px] leading-6 text-ink-soft">
                <i className="fa fa-check-circle text-brand-teal-dark mt-1 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ Travelers ============ */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-lg font-bold text-ink mb-2">Built for Every Kind of Traveler</h3>
          <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
            Different trips carry different risks. VegaAI tailors safety and packing prerequisites to the way
            you travel.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAVELERS.map((t) => (
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
        <h3 className="text-lg font-bold text-ink mb-8">What Travelers Get</h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <InfoBlock icon={<i className="fa fa-clock-o" aria-hidden="true" />} title="Time Back">
            Hours of searching become a single question. VegaAI answers hyper-specific queries in under two
            seconds.
          </InfoBlock>
          <InfoBlock icon={<i className="fa fa-refresh" aria-hidden="true" />} title="Today's Information">
            Answers draw on content posted in the last 24 hours, so plans match what is happening on the ground.
          </InfoBlock>
          <InfoBlock icon={<i className="fa fa-shield" aria-hidden="true" />} title="Fewer Surprises">
            &ldquo;Things Not To Do&rdquo; guidance and readiness checks surface risks before you leave.
          </InfoBlock>
          <InfoBlock icon={<i className="fa fa-heart" aria-hidden="true" />} title="A Better Fit">
            Recommendations reflect your travel style and history, not a generic top-ten list.
          </InfoBlock>
        </div>
      </section>

      {/* ============ Trends ============ */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#333] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-brand-teal text-lg font-bold mb-6">2026 Trends Shaping the VegaAI Roadmap</h3>
          <div className="grid md:grid-cols-2 gap-x-10">
            <div>
              <TrendItem badge="HOT">
                <strong className="text-white">Influencers as the New Guidebook:</strong> 42% of travelers trust
                influencer recommendations over traditional ads, and 28% book accommodations based on them
                (Travelboom).
              </TrendItem>
              <TrendItem badge="HOT">
                <strong className="text-white">Influencer Marketing Keeps Growing:</strong> The industry reaches
                $32.55 billion in 2025, with global market size estimated at $37.8 billion by 2030 (Influencer
                Marketing Hub).
              </TrendItem>
              <TrendItem badge="NEW">
                <strong className="text-white">Freshness as the Differentiator:</strong> Static guides age
                quickly. Real-time curation is what separates a co-pilot from a brochure.
              </TrendItem>
            </div>
            <div>
              <TrendItem badge="NEW">
                <strong className="text-white">Small, Efficient Models:</strong> PreciseQuant, LoRA and
                distillation make it practical to run several models together and still answer in seconds.
              </TrendItem>
              <TrendItem badge="RISING">
                <strong className="text-white">Voice-First Travel:</strong> Travelers on the move want to ask a
                question and hear a clear answer, without typing.
              </TrendItem>
              <TrendItem badge="RISING">
                <strong className="text-white">Trust and Safety by Default:</strong> Guardrails and verified
                sources are becoming a baseline expectation for AI that gives real-world advice.
              </TrendItem>
            </div>
          </div>
        </div>
      </div>

      <CTA
        title="Ready to Meet Your AI Travel Co-pilot?"
        action={
          <Link
            to="/products/vegaai/request-demo"
            className="inline-flex items-center gap-2 bg-brand-teal text-[#111] font-semibold text-sm px-7 py-3 rounded-full hover:bg-brand-teal-dark hover:text-white transition-colors"
          >
            <i className="fa fa-plane" aria-hidden="true" /> Request a Demo
          </Link>
        }
      >
        VegaAI is more than another travel app. By fusing cutting-edge AI with authentic, real-time influencer
        insights, it solves the pervasive problem of outdated and generic travel information and turns every
        journey into an informed, delightful experience. See it answer your own questions.
      </CTA>

      <DidYouKnow facts={FACTS} icon="plane" />
    </div>
  )
}
