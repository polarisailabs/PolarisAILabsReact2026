# PolarisAI Labs — React + Tailwind

A static React rebuild of the PolarisAI Labs marketing site (originally static Bootstrap/jQuery HTML),
converted to Vite + React 19 + React Router + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Structure

```
src/
  components/   Navbar, Footer, Layout, shared UI (cards, hero, contact form, demo embeds, etc.)
  pages/        One file per route
  index.css     Tailwind entry + brand theme tokens (teal/blue/purple gradient, Inter + Sora fonts)
public/
  img/          All images you supplied, referenced by original filename
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About Us (team, industries, expertise, leadership, contact form + map) |
| `/platform` | PolarisAI Platform |
| `/products/vegaai` | VegaAI |
| `/products/marisai` | MarisAI |
| `/products/spicaai` | SpicaAI |
| `/products/legalprodigyai` | LegalProdigyAI |
| `/product-management` | Product Management Advisory |
| `/mentorship` | Mentorship & Coaching |
| `/technology` | Technology Advisory |
| `/pricing` | Pricing |
| `/demos/conversational-ai` | Conversational AI Demos (HF Space iframes) |
| `/demos/prompt-engineering` | Prompt Engineering Demo |
| `/demos/recommendations` | Recommendation Engine Demos |
| `/demos/text-classification` | Text Classification Demo |

## Notes & assumptions made during conversion

- **Navigation**: Pricing and the four demo pages weren't linked from the original header nav, so I added a
  "Resources" dropdown so they're reachable in the SPA. Remove/rename as you like in
  `src/components/Navbar.jsx`.
- **Hero image slider on Home**: the original `img/slides/1-4.jpg` files weren't supplied, so the homepage
  hero is a rotating text/gradient hero instead of a photo slider.
- **Some images referenced in the original HTML weren't supplied** and are substituted with the closest
  available image: `img/MentorGrow.jpeg`, `img/CTeams.jpeg`, `img/CCxos.jpeg`, `img/PMentor.jpeg` (Mentorship
  page) now use `strategy.jpg` / `vision.jpg` / `mission.jpg` / `PMGrow.jpg`. Swap in real photos when you
  have them.
- **Contact forms** (About + every product page) are client-side only — they show a success state on submit
  but don't send anywhere. Wire them up to your backend/email service of choice (e.g. Formspree, a serverless
  function, or your own API).
- **Google Map on About** uses a no-API-key `maps.google.com/maps?...&output=embed` iframe pointed at
  Hyderabad. Swap in an exact address/embed code if you have one.
- **jQuery/Bootstrap/FlexSlider/Fancybox** dependencies from the original site are gone — replaced with
  native React state (dropdowns, mobile nav, rotating hero/testimonial carousels) and Tailwind utility
  classes.
- **`aiml.html`** wasn't linked from any page's navigation in the source files, so it wasn't ported as a
  route. Let me know if it should be (e.g. under a specific menu) and I'll add it.

## Deploying

This is a plain client-side SPA. On most static hosts (Netlify, Vercel, GitHub Pages, S3+CloudFront) you'll
want a catch-all rewrite to `index.html` so deep links like `/products/vegaai` work on refresh — e.g. a
`_redirects` file with `/* /index.html 200` for Netlify, or the default SPA rewrite on Vercel.
