# ARMA Real Estate — Standalone Site

Individual site for ARMA Real Estate Ltd., separate from the main ARMA Group hub.

## Structure

```
real-estate/
├── index.html          ← Home (Shanta-inspired)
├── projects.html       ← Filterable project gallery
├── project.html        ← Individual project detail (?id=slug)
├── css/site.css
├── js/config.js        ← Contact numbers — edit here
├── js/projects.js      ← Project database — add projects here
├── js/site.js
├── images/             ← Project photos, logos
└── README.md
```

## Quick Start

Open `index.html` in a browser, or deploy the folder to Vercel as its own project for an individual Real Estate URL.

## Adding a New Project

Edit `js/projects.js` — copy any project object, paste at the end, and update:

- `id` — unique slug (used in URL: `project.html?id=your-slug`)
- `category` — `residential` or `commercial`
- `status` — `upcoming`, `ongoing`, or `handed-over`
- `image`, `gallery`, `video`, `mapUrl`, `brochure` — replace placeholders
- `related` — array of other project `id`s for the carousel

No HTML changes needed. The projects page and detail pages update automatically.

## Changing Contact Numbers

Edit `js/config.js` only:

```js
hotline: '01761-115807',
hotlineDial: '01761115807',
whatsapp: '8801761115807',
messenger: 'https://m.me/YOUR_FB_PAGE_ID',
```

## Features Built

- Custom ARMA loader on every page load
- Page transition animation between pages
- Floating contact bubble (hotline, Messenger, WhatsApp)
- Full navbar with dropdowns (Team, Query)
- Edison-style project filters (status tabs + type dropdown + clear buttons)
- B&W to colour hover on project images
- Brochure download gated behind name/email/phone form
- Related projects carousel on detail pages
- Map schematic with coordinate link placeholder
- Video preview placeholder
- InterLink footer attribution (Option 4 — slash credit)

## Deploy to Vercel (Individual URL)

1. Create a new GitHub repo (e.g. `arma-real-estate`)
2. Upload this entire folder
3. Connect to Vercel → Deploy
4. Optional: add custom domain like `armarealestate.com` or `realestate.armagroup.com`

## Link from Main ARMA Group Site

The group homepage at `../group/index.html` already links here via the Real Estate sector card (`../real-estate/index.html`). The "← Group" nav on this site points back to `../group/index.html`.
