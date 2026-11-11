// Sends the contact form to Formspree.
// The Formspree form ID lives in /contact-config.json (next to index.html on the server),
// so it can be changed by editing that file - no rebuild needed.
export async function sendContact(form, source) {
  let formspreeId = ''
  try {
    const cfg = await fetch('/contact-config.json', { cache: 'no-store' }).then((r) => r.json())
    formspreeId = (cfg.formspreeId || '').trim()
  } catch {
    /* config missing or unreadable */
  }
  if (!formspreeId || formspreeId.startsWith('PASTE_')) {
    throw new Error('The contact form is not configured yet. Please email us directly.')
  }

  let res
  try {
    res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.comment,
        page: source,
        _subject: `Website enquiry from ${form.name} (${source})`,
        _gotcha: form.website || '', // spam trap: real visitors leave it empty
      }),
    })
  } catch {
    throw new Error('Network problem. Please check your connection and try again.')
  }

  if (!res.ok) {
    let msg = 'Could not send your message. Please try again.'
    try {
      const data = await res.json()
      if (data.errors && data.errors.length) msg = data.errors.map((e) => e.message).join(' ')
    } catch {
      /* ignore */
    }
    throw new Error(msg)
  }
}
