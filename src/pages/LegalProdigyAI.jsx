import ProductHero from '../components/ProductHero.jsx'
import ContactBlock from '../components/ContactBlock.jsx'
import { HERO_MODULES } from '../data/heroModules.js'
import DidYouKnow from '../components/DidYouKnow.jsx'

const FACTS = [
  'Only 42% of people worldwide feel they have access to justice — World Justice Project.',
  '75% of civil cases in US state courts involve at least one self-represented litigant — National Center for State Courts.',
  '68% of law firm clients would prefer to handle some legal issues on their own if they had access to reliable legal information — Clio.',
]

export default function LegalProdigyAI() {
  return (
    <div>
      <ProductHero
        logoIcon="fa-gavel"
        title="LegalProdigyAI"
        badges={['Legal AI', 'Indian Law']}
        sub="Accessible, reliable AI-powered legal information for everyone — saving time, money and complexity."
        tagline="Indian Penal Code · Self-Represented Litigants · Legal Q&A · GPT-Powered · Expanding to US Law"
        modules={HERO_MODULES.legalprodigyai}
        gradient="bg-[linear-gradient(135deg,#92400e_0%,#b45309_50%,#d97706_100%)]"
        ctaLabel="Try LegalProdigyAI"
        ctaHref="https://polarisailabs-legalprodigy.hf.space"
        ctaIcon="fa-gavel"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
        <p>
          You may have heard the recent news that an AI-powered 'robot lawyer' will defend a human in a US court
          in what has been called a 'historic' first. Additionally, a survey by Clio found that 68% of law firm
          clients would prefer to handle some legal issues on their own if they had access to reliable legal
          information. These statistics highlight the importance of providing accessible legal information,
          especially as the World Justice Project reports that only 42% of people worldwide feel they have
          access to justice. The National Center for State Courts also reports that 75% of civil cases in state
          courts involve at least one self-represented litigant, emphasizing the need for accessible legal
          information for those who cannot afford a lawyer. These figures clearly demonstrate the significant
          need for AI-based products in the legal field.
        </p>
        <p>
          Obtaining legal information can be a complex and daunting task, filled with legal jargon and
          complexities that can be difficult for non-lawyers to navigate. The cost of hiring a lawyer or
          purchasing legal resources can also be prohibitive, making it difficult for many people to access the
          legal information they need. In addition, legal information may not be readily available or easily
          accessible to everyone, particularly those living in rural areas or with limited internet access.
          Trustworthiness can also be an issue, as it can be hard to know what sources are reliable and accurate.
          Misunderstandings or misinterpretations of legal information can have serious consequences, making it
          even more important to have access to reliable information. Traditional legal information sources may
          be outdated or insufficient, which is where our product comes in.
        </p>
        <p>
          Our product, LegalProdigyAI, offers relevant and specific legal answers that are human-like, saving
          you time and money while ensuring you have the information needed to make informed decisions.
          LegalProdigyAI is powered by a Generative Pre-trained Transformer model and was trained using a
          technique called transformer neural networks. Currently, LegalProdigyAI covers data from the Indian
          Penal Code and legal queries restricted to Indian law. We are planning to expand the coverage to
          include other countries, including the US.
        </p>
      </section>

      <ContactBlock />
      <DidYouKnow facts={FACTS} />
    </div>
  )
}
