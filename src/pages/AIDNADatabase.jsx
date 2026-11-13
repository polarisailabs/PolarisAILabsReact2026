import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductHero from '../components/ProductHero.jsx'
import DidYouKnow from '../components/DidYouKnow.jsx'
import { PageHeader, CapCard, PipelineStep, StatCard, CTA } from '../components/ui.jsx'

/* ---------- Data ---------- */

const HERO_MODULES = [
  { icon: 'fa-database', title: 'Ultra-Dense Storage', body: 'Up to ~1 exabyte per cubic millimeter in theory' },
  { icon: 'fa-clock-o', title: 'Long-Lived Archive', body: 'Half-life of over 500 years' },
  { icon: 'fa-sliders', title: 'AI-Aware Codecs', body: 'Learned encoders tuned to chemistry constraints' },
  { icon: 'fa-shield', title: 'Error Resilience', body: 'Redundancy and correction across synthesis and sequencing' },
  { icon: 'fa-search', title: 'Semantic Retrieval', body: 'Find archived data by meaning, not just by address' },
  { icon: 'fa-sitemap', title: 'Random Access', body: 'Index-driven reads without sequencing everything' },
  { icon: 'fa-leaf', title: 'Low-Energy Cold Storage', body: 'Molecular media that needs no power at rest' },
  { icon: 'fa-line-chart', title: 'Promising Early Results', body: 'Encouraging findings from our first experiments' },
]

// Public facts, each attributed to the source it comes from.
const WHY_DNA_STATS = [
  { number: '~1 EB/mm³', label: 'theoretical storage density of DNA', source: 'Microsoft Research' },
  { number: '500+ yrs', label: 'estimated half-life of DNA as a storage medium', source: 'Microsoft Research' },
  { number: '1,000×', label: 'denser than the most compact solid-state drive, at least', source: 'Wyss Institute' },
  { number: '300×', label: 'more durable than the most stable magnetic tape, at least', source: 'Wyss Institute' },
]

const FOCUS_AREAS = [
  {
    icon: 'fa-sliders',
    title: 'AI-Aware Encoding',
    body: 'Chemistry limits what can be written reliably: long runs of one base and lopsided GC content cause errors. We are researching learned encoders that map digital data to DNA while staying inside those limits.',
  },
  {
    icon: 'fa-shield',
    title: 'Learned Error Correction',
    body: 'Synthesis and sequencing both introduce substitutions, insertions and deletions. We are exploring models that work alongside classical error-correcting codes to recover data from noisy, partial reads.',
  },
  {
    icon: 'fa-search',
    title: 'Semantic Retrieval',
    body: 'An archive is only useful if you can find things in it. We are studying embeddings and learned indexes so that a query about meaning can be resolved to the right molecular address before anything is sequenced.',
  },
  {
    icon: 'fa-sitemap',
    title: 'Random Access & Indexing',
    body: 'Sequencing an entire archive to read one file is not practical. Our work looks at address design and index structures that keep reads targeted, fast and cheap.',
  },
  {
    icon: 'fa-line-chart',
    title: 'Cost & Throughput Modeling',
    body: 'Synthesis cost is the main barrier today. We model how encoding choices, redundancy and read depth trade off against cost, so that design decisions are made with numbers in hand.',
  },
  {
    icon: 'fa-lock',
    title: 'Integrity & Provenance',
    body: 'Archives are meant to outlive their authors. We are working on checksums, versioning and provenance records that let future readers verify that what they decoded is what was stored.',
  },
]

const PIPELINE = [
  { icon: 'fa-file-text-o', title: 'Encode', body: 'Digital data is mapped to the four DNA bases: A, C, G and T.' },
  { icon: 'fa-shield', title: 'Protect', body: 'Redundancy, addressing and error-correction are added.' },
  { icon: 'fa-flask', title: 'Write', body: 'The sequences are synthesized as physical DNA.' },
  { icon: 'fa-archive', title: 'Store', body: 'The DNA is kept dry and cold, with no power needed at rest.' },
  { icon: 'fa-search', title: 'Read', body: 'Targeted molecules are sequenced back into digital reads.' },
  { icon: 'fa-check-circle', title: 'Decode', body: 'Reads are corrected, verified and restored to the original data.' },
]

// Edit these to reflect the measurements from your own experiments.
const FINDINGS = [
  {
    icon: 'fa-check-circle',
    title: 'Lossless round-trips',
    body: 'In our test corpora, data encoded with our pipeline decoded back to the original, bit for bit, in simulated write and read cycles.',
  },
  {
    icon: 'fa-bolt',
    title: 'Faster targeted retrieval',
    body: 'Index-guided lookups located the sequences we needed without scanning the full archive, which is the behavior random access depends on.',
  },
  {
    icon: 'fa-shield',
    title: 'Robust to noise',
    body: 'Our error-handling approach recovered data from reads carrying injected substitutions, insertions and deletions in simulation.',
  },
  {
    icon: 'fa-compress',
    title: 'Chemistry-friendly sequences',
    body: 'Learned encoders produced sequences that stayed within the homopolymer and GC-balance limits that synthesis requires.',
  },
]

const REFERENCES = [
  {
    label: 'Microsoft Research: DNA Storage',
    href: 'https://www.microsoft.com/en-us/research/project/dna-storage/',
    note: 'Microsoft and the University of Washington on DNA as a high-density, durable archival medium.',
  },
  {
    label: 'Wyss Institute at Harvard: DNA Data Storage',
    href: 'https://wyss.harvard.edu/technology/dna-data-storage/',
    note: 'Enzyme-driven DNA writing as a lower-cost, more sustainable route to molecular storage.',
  },
  {
    label: 'Industry commentary on DNA-powered data (LinkedIn)',
    href: 'https://www.linkedin.com/posts/aditya-singh-581bb813a_shes-building-the-worlds-first-dna-powered-ugcPost-7356961212879814656-4_3R/',
    note: 'A practitioner post on commercial momentum in DNA-based data.',
  },
]

const FACTS = [
  'DNA can in theory hold about 1 exabyte of data per cubic millimeter, according to Microsoft Research.',
  'The Wyss Institute reports DNA is at least 1,000 times denser than the most compact solid-state drive.',
  'DNA synthesis cost is the main barrier to adoption, and enzymatic writing is one route to bringing it down.',
]

/* ---------- Live encoder ---------- */

const BASES = ['A', 'C', 'G', 'T']
const BASE_STYLE = {
  A: 'bg-emerald-100 text-emerald-700',
  C: 'bg-sky-100 text-sky-700',
  G: 'bg-amber-100 text-amber-700',
  T: 'bg-rose-100 text-rose-700',
}

function encodeToDna(text) {
  const bytes = new TextEncoder().encode(text)
  let out = ''
  for (const b of bytes) {
    for (let shift = 6; shift >= 0; shift -= 2) out += BASES[(b >> shift) & 3]
  }
  return { bytes: bytes.length, dna: out }
}

function decodeFromDna(dna) {
  const bytes = new Uint8Array(dna.length / 4)
  for (let i = 0; i < bytes.length; i++) {
    let b = 0
    for (let j = 0; j < 4; j++) b = (b << 2) | BASES.indexOf(dna[i * 4 + j])
    bytes[i] = b
  }
  return new TextDecoder().decode(bytes)
}

function DnaEncoderDemo() {
  const [text, setText] = useState('Hello, DNA')

  const { bytes, dna, gc, roundTrip } = useMemo(() => {
    const enc = encodeToDna(text)
    const gcCount = [...enc.dna].filter((c) => c === 'G' || c === 'C').length
    return {
      ...enc,
      gc: enc.dna.length ? Math.round((gcCount / enc.dna.length) * 100) : 0,
      roundTrip: decodeFromDna(enc.dna) === text,
    }
  }, [text])

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm shadow-black/5">
      <label htmlFor="dna-input" className="block text-xs font-semibold text-ink-soft mb-1.5">
        Type something to store in DNA
      </label>
      <input
        id="dna-input"
        type="text"
        value={text}
        maxLength={40}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
      />

      <div
        className="mt-5 flex flex-wrap gap-1 font-mono text-[13px] min-h-[2rem] break-all"
        aria-label="Encoded DNA sequence"
      >
        {[...dna].map((base, i) => (
          <span
            key={i}
            className={`w-6 h-7 rounded flex items-center justify-center font-bold ${BASE_STYLE[base]} ${
              i % 4 === 3 ? 'mr-2' : ''
            }`}
          >
            {base}
          </span>
        ))}
        {!dna && <span className="text-gray-400 text-sm font-sans">Nothing to encode yet.</span>}
      </div>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <Readout label="Bytes in" value={bytes} />
        <Readout label="Bases out" value={dna.length} />
        <Readout label="GC content" value={`${gc}%`} />
        <Readout label="Round-trip" value={roundTrip ? 'Lossless' : 'Mismatch'} />
      </div>

      <p className="text-[11.5px] leading-6 text-gray-500 mt-4">
        Each base carries 2 bits, so one byte becomes four bases (grouped above). This is the simplest possible
        mapping, shown for illustration. Real codecs add addressing, redundancy and error correction, and avoid
        sequences that are hard to synthesize or read.
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

export default function AIDNADatabase() {
  return (
    <div>
      <ProductHero
        logoIcon="fa-database"
        title="AI DNA Database"
        badges={['Research', 'Molecular Storage']}
        modules={HERO_MODULES}
        gradient="bg-[linear-gradient(135deg,#007aff_0%,#5856d6_50%,#af52de_100%)]"
        poweredBy={{ label: 'PolarisAI Platform', to: '/platform' }}
      />

      {/* ============ Intro ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center">
          <p className="text-[15px] leading-8 text-ink">
            The world is producing data faster than it can store it. At PolarisAI Labs we are{' '}
            <strong>researching how AI can help turn DNA into a practical archive</strong>, and our early
            results are encouraging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-database text-brand-teal-dark mr-2" aria-hidden="true" />
              Why DNA
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Demand for storage is growing exponentially, while magnetic and optical media are not keeping
              pace. DNA is extremely dense, lasts for centuries, and can be copied cheaply, which makes it a
              strong candidate for archival data that must be kept for a long time.
            </p>
          </div>
          <div className="bg-white border border-gray-200 border-l-4 border-l-brand-teal rounded p-6">
            <h3 className="text-base font-bold text-ink mb-2">
              <i className="fa fa-cogs text-brand-teal-dark mr-2" aria-hidden="true" />
              Why AI
            </h3>
            <p className="text-[13.5px] leading-7 text-ink-soft">
              Writing and reading DNA is noisy, slow and expensive. Good encoding, error correction and
              indexing decide how much of that cost can be designed away, and these are problems where
              machine learning is well suited to help.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_DNA_STATS.map((s) => (
            <StatCard key={s.label} number={s.number} label={s.label} source={s.source} />
          ))}
        </div>

        <p className="text-[14.5px] leading-8 text-ink-soft text-center">
          The <strong>AI DNA Database</strong> research program works on the software side of that problem.
        </p>
      </section>

      {/* ============ Focus areas ============ */}
      <PageHeader title="What We Are Researching" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
          Our program is organized around six questions. Each one targets a point where a smarter algorithm
          can lower cost, raise reliability, or make a DNA archive easier to use.
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
      <PageHeader title="From Bits to Bases and Back" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-6">
          A DNA archive follows a write path and a read path. AI can improve each stage, and our research
          touches all six.
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
      <PageHeader title="Try It: Encode Text as DNA" />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DnaEncoderDemo />
      </section>

      {/* ============ Results ============ */}
      <PageHeader title="Early Results" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[13.5px] leading-7 text-ink-soft mb-8">
          We are seeing good results in our first rounds of experiments, and they give us confidence to keep
          going. These are preliminary findings from internal work, not yet peer reviewed.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {FINDINGS.map((f) => (
            <CapCard key={f.title} icon={f.icon} title={f.title}>
              {f.body}
            </CapCard>
          ))}
        </div>
        <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-6 text-center mt-8">
          <p className="text-[14.5px] leading-8 text-ink">
            Together, these point to a path where DNA archives become{' '}
            <strong>easier to write, safer to read, and simpler to search</strong>.
          </p>
        </div>
      </section>

      {/* ============ Challenges ============ */}
      <PageHeader title="What Still Has to Be Solved" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4 text-[14px] leading-8 text-ink-soft text-justify">
        <p>
          DNA storage is not practical at scale yet. Microsoft Research notes that the current state of DNA
          synthesis and sequencing is the limiting factor, and that both are improving quickly. The Wyss
          Institute points to synthesis cost as the biggest barrier, and is developing enzyme-based writing
          to bring it down.
        </p>
        <p>
          That is why we are focused on the parts that software can influence: encoding that wastes less
          chemistry, error correction that tolerates cheaper and noisier reads, and indexing that keeps
          retrieval targeted. As the underlying biotechnology improves, those gains compound.
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
        We are open to conversations with labs, storage and biotech companies, and archives who want to
        compare notes on DNA data storage.
      </CTA>

      <DidYouKnow facts={FACTS} />
    </div>
  )
}
