# ARMA Group Website

Monorepo for all ARMA web properties — one **mother site** plus **six sister concern sites**, each in its own folder for separate domains and independent development.

**Live (group):** https://arma-group-website.vercel.app/

## Project Structure

```
arma-group-website/
├── index.html                 → Redirects to group/
├── README.md                  → This file
│
├── group/                     → MOTHER SITE (ARMA Group hub)
│   ├── index.html             ← Main homepage — links to all concerns
│   └── README.md
│
├── electric/                  → ARMA Electric Company
│   ├── index.html
│   ├── css/  js/  images/
│   └── README.md
│
├── line-hardware/             → ARMA Line Hardware
│   ├── index.html
│   ├── css/  js/  images/
│   └── README.md
│
├── real-estate/               → ARMA Real Estate (active rebuild — most complete)
│   ├── index.html
│   ├── projects.html
│   ├── project.html
│   ├── css/site.css
│   ├── js/config.js           ← Edit contact numbers here
│   ├── js/projects.js         ← Add projects here
│   ├── js/site.js
│   ├── images/
│   └── README.md
│
├── agriculture/               → ARMA Agriculture (next up)
│   ├── index.html
│   ├── css/  js/  images/
│   └── README.md
│
├── esha-holdings/             → ESHA Holdings
│   ├── index.html
│   ├── css/  js/  images/
│   └── README.md
│
└── arsc-school/               → ARSC School
    ├── index.html
    ├── css/  js/  images/
    └── README.md
```

## How It Works

| Site | Entry point | Deploy as |
|------|-------------|-----------|
| ARMA Group (mother) | `group/index.html` | Main domain — `armagroup.com` |
| Each concern | `{concern}/index.html` | Own subdomain or domain |

The **group homepage** links to every concern via `../electric/index.html`, `../real-estate/index.html`, etc.

Each **concern site** links back via `../group/index.html`.

## Development Order (suggested)

1. **Real Estate** — in progress (`real-estate/`)
2. **Agriculture** — next (`agriculture/`)
3. Electric, Line Hardware, ESHA, ARSC — one folder at a time

When rebuilding a concern, copy the pattern from `real-estate/`:

- `css/site.css` — styles
- `js/config.js` — phone numbers, social links
- `js/site.js` — loader, transitions, contact bubble
- `images/` — all local assets

## Local Preview

| Site | Open this file |
|------|----------------|
| ARMA Group | `group/index.html` |
| Real Estate | `real-estate/index.html` |
| Agriculture | `agriculture/index.html` |
| (etc.) | `{folder}/index.html` |

## Deploy Options

**Option A — One repo, one Vercel project**

Upload the whole repo. URLs become:

- `/group/` — mother site
- `/real-estate/` — Real Estate
- `/electric/` — Electric
- etc.

**Option B — Separate domains (roadmap)**

Deploy each `{concern}/` folder as its own Vercel project:

- `armagroup.com` → `group/`
- `armarealestate.com` → `real-estate/`
- `armaagriculture.com` → `agriculture/`
- etc.

Update group homepage links to full URLs when live domains are assigned.

## Quick Edit Guide

| What | Where |
|------|-------|
| Group homepage | `group/index.html` |
| Real Estate contact numbers | `real-estate/js/config.js` |
| Real Estate projects | `real-estate/js/projects.js` |
| Other concerns (for now) | `{concern}/index.html` |
| Images for any site | `{concern}/images/` |
