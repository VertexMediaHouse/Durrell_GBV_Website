# GBV Legacy Group website

React + Vite + Tailwind CSS. Replaces the old Framer export.

```bash
npm install
npm run dev      # local dev server
npm run build    # static site in dist/ (one index.html per route, with its own title/description)
```

## Where things live

- `src/site.js`: pages (nav labels, titles, meta descriptions) and contact details
- `src/data.js`: Track Record deals and Case Studies
- `src/components/ui.jsx`: shared UI (buttons, sections, cards, icons, placeholders)
- `src/components/Layout.jsx`: header, mobile menu, page hero, CTA band, footer
- `src/components/Form.jsx`: form fields, validation and submission
- `src/pages/`: one file per page

## Forms

Contact, Buyers List and Partner forms POST JSON (`{ form, ...fields }`) to `VITE_FORM_ENDPOINT`.
Copy `.env.example` to `.env` and set it (Formspree, Basin or your own API). If it isn't set, the forms
ask visitors to email you instead of submitting.

## Sample content (replace before launch)

The site currently shows **sample** numbers, deals, photos and copy so it looks finished. None of it is real GBV data.
Search the code for `SAMPLE` and `sample: true`:

- `src/site.js`: `CONTACT` (phone, email, hours) and `STATS` (headline numbers, animated count-up)
- `src/data.js`: deals and case studies. Stock photos show a "Sample image" tag while `sample: true`
- `src/pages/About.jsx`: founder story, quote and portrait; `src/pages/WhatWeDo.jsx`: buy box
- Legal page: `[bracketed]` placeholders (effective date, legal entity, cookies) plus a legal review notice
- `public/robots.txt`, `public/sitemap.xml`: replace `__DOMAIN__`
