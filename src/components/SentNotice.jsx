import { useEffect, useRef } from 'react'

export default function SentNotice({
  onReset,
  title = 'Message sent successfully',
  message = 'Thanks for contacting us. We will get back to you soon.',
  resetLabel = 'Send another message',
}) {
  const ref = useRef(null)

  useEffect(() => {
    // The form disappears and the page gets shorter, so bring the message into view
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      className="rounded-lg bg-teal-50 border border-teal-300 px-6 py-8 text-center"
    >
      <div className="w-12 h-12 rounded-full bg-brand-teal text-[#111] flex items-center justify-center mx-auto mb-3 text-xl">
        <i className="fa fa-check" aria-hidden="true" />
      </div>
      <h4 className="text-lg font-bold text-teal-900 mb-1">{title}</h4>
      <p className="text-[14.5px] text-teal-800">{message}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-sm font-semibold text-brand-teal-dark hover:underline"
      >
        {resetLabel}
      </button>
    </div>
  )
}
