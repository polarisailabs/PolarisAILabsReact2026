import { useEffect, useState } from 'react'

export default function DidYouKnow({ facts, icon = 'mic' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % facts.length), 5000)
    return () => clearInterval(id)
  }, [facts.length])

  return (
    <div className="brand-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="w-12 h-12 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center text-white">
          <IconGlyph name={icon} />
        </div>
        <p className="text-white/80 text-[12px] font-semibold tracking-wide uppercase mb-1.5">Did you know</p>
        <p key={index} className="text-white text-[14.5px] leading-7 font-medium text-balance transition-opacity duration-500">
          {facts[index]}
        </p>
        <div className="flex justify-center gap-1.5 mt-6">
          {facts.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show fact ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function IconGlyph({ name }) {
  const paths = {
    mic: 'M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z',
    plane: 'M2 12.5 22 5l-6 8 6 6.5-9-3.5L9 22l-1-6.5L2 12.5Z',
  }
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d={paths[name] || paths.mic} />
    </svg>
  )
}
