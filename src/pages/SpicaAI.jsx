import ProductHero from '../components/ProductHero.jsx'
import ContactBlock from '../components/ContactBlock.jsx'
import { HERO_MODULES } from '../data/heroModules.js'
import DidYouKnow from '../components/DidYouKnow.jsx'

const FACTS = [
  "The EU AI Act can impose fines of up to €35 million or 7% of global revenue for non-compliance.",
  '78% of organizations are now using AI in at least one business function.',
  'Over 12,700 startups shut down in India alone in 2024, drawing intense regulatory scrutiny over AI-driven market consolidation.',
]

export default function SpicaAI() {
  return (
    <div>
      <ProductHero
        logoIcon="fa-balance-scale"
        title="SpicaAI"
        badges={['Policy AI', 'Compliance']}
        sub="Transform AI regulatory burdens into a streamlined strategic advantage."
        tagline="EU AI Act · GDPR · ISO/IEC 42001 · Conflict Detection · Risk Mitigation · Real-time Monitoring"
        modules={HERO_MODULES.spicaai}
        gradient="bg-[linear-gradient(135deg,#e8738a_0%,#c0394a_50%,#a0002a_100%)]"
        ctaLabel="Try SpicaAI"
        ctaHref="https://polarisailabs-policyprodigy.hf.space"
        ctaIcon="fa-balance-scale"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
        <p>
          New AI policies and regulations are creating a complex landscape for companies and governments
          worldwide. Globally, AI adoption is surging, with 78% of organizations now using it in at least one
          business function. In response, governments are establishing comprehensive regulations; the EU's AI
          Act, for instance, can impose fines of up to €35 million or 7% of global revenue for non-compliance.
          This regulatory pressure is significant, as a 2024 report indicated 56% of organizations plan to adopt
          generative AI within the next year.
        </p>
        <p>
          Despite this growth, the tech landscape faces challenges; in India alone, over 12,700 startups shut
          down in 2024. Globally, confirmed startup shutdowns on the Carta platform increased by 58% in the
          first quarter of 2024 compared to the previous year. This wave of consolidation is attracting intense
          regulatory scrutiny over concerns that it could stifle competition. Antitrust regulators are
          particularly focused on "Big Tech" acquiring nascent AI competitors, with one major deal, HPE's
          attempted $14 billion acquisition of Juniper, being blocked in 2024.
        </p>
        <p>
          Former Federal Trade Commission (FTC) Chair Lina Khan has been a central figure in this heightened
          oversight. Under her leadership, the FTC launched inquiries into major AI partnerships, including
          those between Microsoft and OpenAI, and Amazon and Anthropic. Khan has also warned that AI models
          trained on non-consensual data could violate antitrust laws. Her aggressive regulatory approach has
          reportedly caused some companies to abandon acquisition attempts, signalling a significant shift in
          the environment for AI. In today's rapidly changing technological landscape, staying informed about
          the latest AI advancements on policy, regulations and compliance is crucial to protect your
          organization.
        </p>
        <p>
          SpicaAI, our Policy AI platform, provides critical, up-to-date information on the latest AI
          advancements in policy, regulation, and compliance, allowing you to confidently maneuver through these
          developments. Our system automates the entire policy lifecycle by using AI to detect conflicts, flag
          potential compliance gaps against standards like The EU AI Act, GDPR and ISO/IEC 42001, and actively
          help mitigate risks. This transforms compliance from a reactive burden into a streamlined, strategic
          advantage, ensuring your organization remains secure and ahead of regulatory changes.
        </p>
      </section>

      <ContactBlock />
      <DidYouKnow facts={FACTS} />
    </div>
  )
}
