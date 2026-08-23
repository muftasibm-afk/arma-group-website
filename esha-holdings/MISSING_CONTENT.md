# ESHA Holdings — Missing Content Audit (Old Site vs New Site)

**Audit date:** 2026-08-09
**Old site root:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/`
**New site root:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-group-website/esha-holdings/`

---

## Old Site Status (no dedicated page — content found elsewhere)

**Confirmed: the old site had NO ESHA Holdings website.**

`/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/esha-holding.php` is **70 bytes** and contains only:

```php
<?php include 'header.php';?>



<?php include 'footer.php';?>
```

No body, no `<h1>`, no content whatsoever. It renders as a bare header + footer shell. There is also **no `esha-holdings/` or `eshaholding/` subfolder or sub-app** in the old site (unlike `armarealestateltd/`, `armaelectriccompany/`, `arscbd.com/` which are full sub-sites).

Even the old navigation acknowledged this. In `header.php` (lines 112 and 164), the "Our Concerns" dropdown lists ESHA with a **dead link**:

```html
<li><a href="#" target="__blank"><span class="name">ESHA</span>HOLDINGS LTD</a></li>
```

It points at `#`, not at `esha-holding.php`. The page was effectively unreachable and unpublished.

### Where ESHA content actually lives in the old site

There are exactly **four** sources of real ESHA content:

**1. The concern card on the old homepage** — `public_html/index.php` lines 107–122. This is the only prose description of the company that exists anywhere in the old site:

> **ESHA Holdings Ltd.**
> Established in 2010, we are amongst Bangladeshi leading builders, with an outstanding track record in large-scale, integrated real estate development. Our strong engineering heritage allows us to successfully address the enormous potential of the infrastructure sector.

Image used: `img/property/esha-holdings.jpg`.

> This copy **has been carried over** to the new site (`index.html` line 194, the statement section) — expanded and rewritten, but the substance is preserved. This is the one thing that did migrate.

**2. Two named directors** — `public_html/our-people.php`:

| Name | Title | Photo | Lines |
|---|---|---|---|
| Shafiq Rahman Aumi | Director, ESHA Holding Ltd. | `assets/img/our people/Shafiq_Rahman_Aumi.jpg` | 85–101 |
| Rafia Sultana Esha | Director, ESHA Holding Ltd. | `assets/img/our people/Rafia_Sultana_Esha1.jpeg` | 103–119 |

A third director, **Engr. Elias Hossain** (Director, ESHA Holding Ltd.), is present but **fully commented out** at lines 251–267 — no photo file referenced beyond `assets/img/our people/Engr. Elias Hossain.jpg`. Treat this one as intentionally removed / uncertain and confirm with the client before publishing.

Note the naming: the company is the namesake of **Rafia Sultana Esha**, and the flagship projects are named "Esha Moazzem" / "Esha Kanon" — the family/brand link is explicit. This is a strong "About / Leadership" story that currently appears nowhere on the new ESHA site.

**3. Three ESHA-branded real estate projects** — full detail pages under `armarealestateltd/` (see next section). These are ESHA's actual built portfolio, but they are filed under the Real Estate sub-site.

**4. Standalone image assets** — 26 verified files across `img/`, `assets/img/`, and `armarealestateltd/images/` (see the image inventory section — this is the high-priority part).

---

## Esha-Branded Real Estate Projects Found

All three have complete, verbatim-usable copy. This is real, specific, hard-to-recreate content.

### 1. ARMA Esha Moazzem (a.k.a. "ESHA Moazzem Nibash, Aftabnagar")

**Source:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/armarealestateltd/arma_esha_moazzem.php` (lines 316–335)

- **Location:** House # 59, Road # 4, Block - F, Aftabnagar, Dhaka-1219
- **Building:** G+6th Storied
- **Land Area:** 2.5 Katha
- **Facing:** North
- **Unit:** Single
- **Ratio:** 50/50
- **Floor Area:** 1450 Sft.
- **Description:** 3 Bed, 3 Toilet, 3 Ver, Drawing & Dining Separate
- **Hand Over:** April, 2021

Listed on `project.php` under **ongoing**, but on `completed_project.php` under **completed** (titled "ESHA MOAZZEM NIBASH, AFTABNAGAR"). Given the April 2021 handover date, **completed** is correct — the ongoing listing is stale old-site data.

**Images:**
- `armarealestateltd/images/all-project/ongoing-project/Esha_Moazzem.jpg` — 2480x3508, 3.0 MB (highest resolution asset for this project)
- `armarealestateltd/images/all-project/completed-project/Esha_Moazzem.jpg` — 2209x3105, 1.4 MB
- `armarealestateltd/images/all-project/completed-project/Esha_Moazzem.png` — 365x529
- `armarealestateltd/images/all-project/ongoing-project/Esha_Moazzem_old.png` — 365x529
- `armarealestateltd/images/all-project/ongoing-project/#Esha_Moazzem.png` — 365x529 (leading `#` = disabled variant)
- `armarealestateltd/images/slider-img/Esha_Moazzem2.png` — 340x500
- `armarealestateltd/images/advertise/arma_esha_moazzem_nibash-1.jpg` — 909x800 (marketing/advertise creative)
- `armarealestateltd/images/slider-img/arma_asma_garden_esha_moazzem2.jpg` — 1165x750 (shared banner with ARMA Asma Garden)

> **Broken link in old site (informational):** `armarealestateltd/project.php:255` references `images/all-project/ongoing-project/Esha_Moazzem.png`, which **does not exist** on disk. Only `#Esha_Moazzem.png` and `Esha_Moazzem_old.png` exist there. Do not carry this path forward.

### 2. ARMA Esha Kanon (a.k.a. "ARMA ESHA KANON, BANASREE")

**Source:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/armarealestateltd/arma_esha_kanon.php` (lines 324–338)

- **Address:** House: 36, Road: 03, Block-D, Banasree
- **Land Area:** 3.50 Katha
- **Apartment:** 10
- **Basement:** 01
- **Floor With Basement:** *(blank in source)*
- **Garage:** *(blank in source)*

**Images: NONE.** This page uses five placeholder photos hotlinked from the theme vendor `http://theasianweb.com/realestate/images/properties/properties-details-1..5.jpg`. On `completed_project.php:136–140` the project is listed with an **empty `<img src="">`**. There is genuinely no photograph of Esha Kanon anywhere in the old site. **Action: request photos from the client.**

### 3. ARMA Moazzem Mili Nibash (a.k.a. "ESHA Moazzem Mili Nibash")

**Source:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/armarealestateltd/arma_moazzem_mili_nibash.php` (lines 300–314)

- **Location:** Aftabnagar
- **Address:** House: 49/F, Road: 04, Block-F, Aftabnagar
- **Land Area:** 2.50 Katha
- **Apartment:** 06
- **Floor With Basement / Basement / Garage:** *(blank in source)*

Listed as **completed** on `project.php:233`.

**Images:**
- `armarealestateltd/images/all-project/completed-project/esha-moazzem-mili-Nibash.jpg` — 365x529
- `img/our-concern/esha-moazzem-mili-nibash.jpg` — 359x210
- `assets/img/our-concern/esha-moazzem-mili-nibash.jpg` — 359x210 (duplicate)

> Note: the detail page itself points at `images/all-project/ongoing-project/esha-moazzem-mili-Nibash.jpg` (lowercase-dir variant), which does not exist; the file is in `completed-project/`. Use the completed-project path.

### 4. "Esha Moazzem Nibash" hero/slider assets (project marketing renders)

Not a separate project — these are large-format renders of the Esha Moazzem development used as homepage sliders on the old group site:

- `img/slider/arel/Esha Moazzem Nibash.jpg` — **2500x3125, 5.7 MB** (the single largest and highest-quality ESHA asset in the entire old site)
- `img/slider/arel/Esha-Moazzem-Nibash.png` — 1200x500 (banner crop)
- `img/arel/Esha Moazzem Nibash.png` — 350x500
- `armarealestateltd/images/slider-img/Esha Moazzem Nibash.png` — 350x500
- plus `assets/img/` duplicates of each

---

## New Site Sitemap

**Single-page site.** `esha-holdings/index.html` — 23.5 KB, 331 lines, fully self-contained (all CSS inline in `<style>`, all JS inline in `<script>`). `css/`, `js/`, and `images/` contain only `.gitkeep` files plus two images.

| # | Section | `id` | In nav? | Content summary |
|---|---|---|---|---|
| 1 | Nav | — | — | Logo (`images/logo.png`), links to About / Developments / Strengths / Contact / ← Group, theme switch, hamburger |
| 2 | Hero | `#home` | Yes (implicit) | "ESHA / *Holdings*", "EST. 2010 · BANGLADESH", tagline "Large-Scale Real Estate · Engineering Heritage". **Background = Unsplash stock photo** |
| 3 | Statement | — | No | One-sentence positioning line. Adapted from old `index.php` concern card |
| 4 | Numbers | — | No | 3 animated counters: 2010 (Established), 15+ (Years in Real Estate), 40+ (Years Group Heritage) |
| 5 | About | `#about` | Yes | "Engineering excellence, at scale." — 3 paragraphs. **Image = Unsplash stock photo** |
| 6 | Developments | `#developments` | Yes | 3 generic cards: "Integrated Housing" (Residential), "Premium Spaces" (Commercial), "Integrated Developments" (Mixed-Use). **All 3 images = Unsplash stock photos. Zero real projects named.** |
| 7 | Strengths | `#strengths` | Yes | 3 roman-numeraled items: Engineering Heritage / Scale & Precision / Uncompromising Quality |
| 8 | Contact | `#contact` | Yes | ARMA Complex address, `info@armagroup.com.bd`, `+8802-2440-6189`, Formspree form (`mykabdyk`) |
| 9 | Footer | — | — | "A Sister Concern of ARMA Group of Companies", © 2026 |

**Sections that do NOT exist:** Projects/Portfolio detail, Leadership/Team/Directors, Gallery, Completed vs Ongoing project listing, Certification (ISO 9001:2015), Career, Mission/Vision.

### New site image inventory (complete)

```
esha-holdings/images/favicon.png   150.7 KB
esha-holdings/images/logo.png      167.7 KB
esha-holdings/css/.gitkeep         0 B
esha-holdings/js/.gitkeep          0 B
esha-holdings/images/.gitkeep      0 B
```

**That is the entire asset library.** Every single photograph on the page — hero, about, and all three "development" cards — is a remote Unsplash URL:

| Line | Unsplash URL | Used as |
|---|---|---|
| 48 | `photo-1512917774080-9991f1c4c750` | Hero background |
| 207 | `photo-1545324418-cc1a3fa10c00` | About image |
| 224 | `photo-1545324418-cc1a3fa10c00` | Developments card 1 (**duplicate of the About image**) |
| 225 | `photo-1486325212027-8081e485255e` | Developments card 2 |
| 226 | `photo-1560518883-ce09059eeffa` | Developments card 3 |

Beyond being generic, these are external dependencies: the page breaks visually if Unsplash is unreachable, rate-limits, or the photo IDs are retired.

---

## Missing/Unused Original Images & Photos — **HIGH PRIORITY**

**26 of 26 original ESHA image files verified present on disk in the old site. 0 of 26 are used in the new site.**

All paths below are relative to `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/`. All were confirmed to exist with `stat`; dimensions read with `sips`.

### Tier 1 — Highest value (large, unique, project renders)

| # | Old path | Dimensions | Size | Notes |
|---|---|---|---|---|
| 1 | `img/slider/arel/Esha Moazzem Nibash.jpg` | 2500x3125 | 5.7 MB | **Best asset in the set.** Full-resolution project render |
| 2 | `armarealestateltd/images/all-project/ongoing-project/Esha_Moazzem.jpg` | 2480x3508 | 3.0 MB | Full-resolution Esha Moazzem render |
| 3 | `armarealestateltd/images/all-project/completed-project/Esha_Moazzem.jpg` | 2209x3105 | 1.4 MB | Alternate high-res render |
| 4 | `img/slider/arel/Esha-Moazzem-Nibash.png` | 1200x500 | 1.2 MB | Wide banner crop — ideal hero replacement |
| 5 | `armarealestateltd/images/slider-img/arma_asma_garden_esha_moazzem2.jpg` | 1165x750 | 561 KB | Shared slider w/ ARMA Asma Garden |
| 6 | `armarealestateltd/images/advertise/arma_esha_moazzem_nibash-1.jpg` | 909x800 | 110 KB | Marketing/advertise creative |

### Tier 2 — Project thumbnails and concern cards

| # | Old path | Dimensions | Size | Notes |
|---|---|---|---|---|
| 7 | `img/our-concern/esha-holdings.png` | 350x500 | 396 KB | ESHA Holdings concern card art |
| 8 | `assets/img/our-concern/esha-holdings.png` | 360x240 | 199 KB | Different crop — **not** a byte duplicate of #7 |
| 9 | `img/property/esha-holdings.png` | 320x457 | 371 KB | Property-card art |
| 10 | `img/property/esha-holdings.jpg` | 147x210 | 20 KB | The image actually shown on the old homepage concern card |
| 11 | `img/our-concern/esha-moazzem-mili-nibash.jpg` | 359x210 | 624 KB | Moazzem Mili Nibash |
| 12 | `assets/img/our-concern/esha-moazzem-mili-nibash.jpg` | 359x210 | 624 KB | Duplicate of #11 |
| 13 | `img/arel/Esha Moazzem Nibash.png` | 350x500 | 396 KB | |
| 14 | `assets/img/arel/Esha Moazzem Nibash.png` | 350x500 | 396 KB | Duplicate of #13 |
| 15 | `assets/img/slider/arel/Esha Moazzem Nibash.jpg` | 2500x3125 | 5.7 MB | Duplicate of #1 |
| 16 | `assets/img/slider/arel/Esha-Moazzem-Nibash.png` | 1200x500 | 1.2 MB | Duplicate of #4 |
| 17 | `armarealestateltd/images/slider-img/Esha Moazzem Nibash.png` | 350x500 | 396 KB | Duplicate of #13 |
| 18 | `armarealestateltd/images/slider-img/Esha_Moazzem2.png` | 340x500 | 351 KB | Distinct crop |
| 19 | `armarealestateltd/images/all-project/completed-project/esha-moazzem-mili-Nibash.jpg` | 365x529 | 121 KB | Moazzem Mili Nibash project thumb |
| 20 | `armarealestateltd/images/all-project/completed-project/Esha_Moazzem.png` | 365x529 | 359 KB | |
| 21 | `armarealestateltd/images/all-project/ongoing-project/Esha_Moazzem_old.png` | 365x529 | 359 KB | Duplicate of #20 |
| 22 | `armarealestateltd/images/all-project/ongoing-project/#Esha_Moazzem.png` | 365x529 | 383 KB | Leading `#` marks it disabled in the old site; content is a valid variant |

### Tier 3 — Leadership portraits (needed for an About/Leadership section)

| # | Old path | Dimensions | Size | Notes |
|---|---|---|---|---|
| 23 | `assets/img/our people/Rafia_Sultana_Esha.jpeg` | 500x500 | 14 KB | **Best of the four** — largest, square, crop-friendly |
| 24 | `assets/img/our people/Rafia_Sultana_Esha1.png` | 140x150 | 37 KB | |
| 25 | `assets/img/our people/Rafia_Sultana_Esha1.jpeg` | 140x150 | 4 KB | The one actually used on old `our-people.php` |
| 26 | `assets/img/our people/Rafia_Sultana_Esha.jfif` | 140x150 | 4 KB | `.jfif` — convert to `.jpg`; some tooling and older browsers reject `.jfif` |

**Also required if a leadership section is built** (found while auditing, outside the brief's original list):

| Old path | Dimensions | Size | Notes |
|---|---|---|---|
| `assets/img/our people/Shafiq_Rahman_Aumi.jpg` | — | 7.9 KB | Shafiq Rahman Aumi, the other named Director of ESHA Holding Ltd. |

**Dedup summary:** the 26 files resolve to roughly **13 distinct images**. Duplicates are exact copies mirrored between `img/` and `assets/img/`. Migrate the highest-resolution copy of each distinct image; the rest are safe to drop.

**All four Rafia Sultana Esha portraits are low-resolution** (500x500 at best, 140x150 for three of them). They are usable at small avatar sizes only. Request a proper headshot from the client for any prominent leadership treatment.

---

## Missing Content

### 1. The entire real project portfolio — most severe gap

The new "Developments" section shows three Unsplash stock photos labeled "Integrated Housing", "Premium Spaces", and "Integrated Developments". These are invented placeholder categories. Meanwhile ESHA has **three real, named, documented, photographed developments** with addresses, katha, unit counts, floor areas, and handover dates — all sitting unused in the old site.

A visitor to the new ESHA site cannot learn that a single ESHA building exists. The company's actual track record — the thing the statement section claims ("an outstanding track record in large-scale, integrated real estate development") — is entirely unsubstantiated on the page. Card 1 and the About image are even the same Unsplash photo.

### 2. No leadership or About/Team section

Two named Directors with photos exist in the old site and appear nowhere on the new one. The Rafia Sultana Esha connection (company namesake, project namesake) is a genuine brand story that is currently invisible.

### 3. No completed vs. ongoing project distinction

The old Real Estate site categorized ESHA projects by status. New site has no project-status concept at all.

### 4. No ISO 9001:2015 certification badge

Every old ARMA sub-site header carried "ISO 9001:2015 Certified Company" and footers displayed `images/certification/iso-image.png`. The new ESHA page carries no certification signal. Worth confirming whether the certification covers ESHA Holdings specifically or only ARMA Real Estate before adding it.

### 5. Zero locally-hosted photography

Every photo is a remote Unsplash URL. Beyond authenticity, this is a reliability and licensing exposure.

### 6. Unverified statistics

`index.html:287` animates counters to 2010, 15+, 40+. "EST. 2010" is corroborated by the old homepage copy. "15+ Years in Real Estate" and "40+ Years Group Heritage" have no source in the old site. Confirm with the client.

### 7. Contact details are ARMA Group's, not ESHA's

The contact section uses the shared ARMA Complex address, `info@armagroup.com.bd`, and the group switchboard. If ESHA has its own contact channel, it should appear here.

### 8. Uncertain: third director

Engr. Elias Hossain is listed as an ESHA Holding Ltd. Director but is commented out in the old `our-people.php`. Confirm before including or excluding.

---

## Recommendations (priority order)

### P0 — Migrate the original photography

Copy the deduplicated high-resolution originals into `esha-holdings/images/projects/` and `esha-holdings/images/team/`. Start with Tier 1 (six files, largest impact) and replace the five Unsplash URLs. Recommended mapping:

| New site slot | Replace with |
|---|---|
| Hero background (line 48) | `img/slider/arel/Esha-Moazzem-Nibash.png` (1200x500 banner) or a wide crop of the 2500x3125 JPG |
| About image (line 207) | `armarealestateltd/images/all-project/ongoing-project/Esha_Moazzem.jpg` |
| Developments card 1 (line 224) | `armarealestateltd/images/all-project/completed-project/Esha_Moazzem.jpg` → **ESHA Moazzem Nibash** |
| Developments card 2 (line 225) | `armarealestateltd/images/all-project/completed-project/esha-moazzem-mili-Nibash.jpg` → **ESHA Moazzem Mili Nibash** |
| Developments card 3 (line 226) | Needs a photo — see P2 (Esha Kanon has none) |

Compress on the way in: the 5.7 MB and 3.0 MB source files must be resized and re-encoded (target ≤400 KB for hero, ≤200 KB for cards) before they ship. Also normalize filenames — strip spaces and the leading `#` (`Esha Moazzem Nibash.jpg` → `esha-moazzem-nibash.jpg`), and convert the `.jfif` portrait to `.jpg`.

### P1 — Replace the placeholder Developments section with the real portfolio

Rewrite the three generic cards as the three real ESHA projects using the verbatim specs captured above. Even a card + modal treatment (no separate detail pages) would convert this section from decorative to substantive. Include address, land area, unit/apartment count, floor area, and handover date — that specificity is exactly what a real estate buyer scans for, and the copy already exists.

### P2 — Obtain missing photography from the client

- **ARMA Esha Kanon** has zero photos anywhere. If it is to be shown, photos must be sourced.
- A **high-resolution headshot of Rafia Sultana Esha** (the existing best is 500x500) and of **Shafiq Rahman Aumi**.
- Confirm whether Engr. Elias Hossain should be listed.

### P3 — Add a Leadership section

Insert between About and Developments. Two confirmed directors, using the migrated portraits. Lead with the Rafia Sultana Esha / ESHA Holdings / Esha Moazzem naming story — it is authentic, differentiating, and free.

### P4 — Verify claims and contact details with the client

The 15+ / 40+ counters, the ISO 9001:2015 applicability to ESHA specifically, and whether ESHA has a dedicated phone/email distinct from the group's.

### P5 — Self-host all remaining assets

Once P0 is done, no Unsplash URLs should remain. If a stock photo is genuinely needed as filler, download and serve it locally with license provenance recorded.

---

## Cross-Concern Overlap Risk (coordination note — Real Estate audit is a separate workstream)

The three Esha-branded projects live physically under `armarealestateltd/` in the old site and are branded **"ARMA Esha Moazzem"** / **"ESHA Moazzem Nibash"** — carrying *both* marques. They are simultaneously ARMA Real Estate portfolio items and ESHA Holdings' own developments.

This creates a genuine ambiguity the new site must resolve deliberately rather than by accident:

- **Both sites will likely want the same photos.** Duplicate the image files into both `real-estate/images/` and `esha-holdings/images/` (they are small enough that a shared-asset directory is not worth the coupling), but ensure the *narrative framing* differs — Real Estate as "a project we built", ESHA Holdings as "our flagship holding".
- **Naming inconsistency exists in the source data.** The old site variously calls the same building "ARMA Esha Moazzem", "ESHA Moazzem Nibash", and "Esha Moazzem". Pick one canonical name per project and apply it on both sites.
- **Status conflict.** ARMA Esha Moazzem is listed as *ongoing* on `project.php` and *completed* on `completed_project.php`. The April 2021 handover date says completed. Both sites must agree.
- **Decision needed from the client:** are these ESHA Holdings developments that ARMA Real Estate constructed, or ARMA Real Estate projects that happen to carry the ESHA name? The answer determines whether ESHA's Developments section presents them as "our portfolio" or "developments delivered with ARMA Real Estate". Recommend asking directly rather than inferring.

The Real Estate concern audit is being handled separately; this note exists only to flag the shared-asset and canonical-naming dependency between the two workstreams.
