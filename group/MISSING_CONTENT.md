# ARMA Group — Missing Content Audit (Old Site vs New Site)

**Old site (source of truth):** `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/` (PHP, root level = group/holding site)
**New site:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-group-website/group/index.html` (single-page HTML)
**Audit date:** 2026-08-09

Summary in one line: the new group site is a **single-page condensation of an 11-page old site**. Nine standalone pages collapsed into anchor sections, and in the process most of the *long-form written content* (mission, commitment list, vision list, values, strengths, full chairman letter) and *all scanned certificate imagery / staff photography / photo gallery* were dropped.

---

## Old Site Sitemap

### Root pages (the group / holding company site)

| File | Status | Content |
|---|---|---|
| `index.php` (180 lines) | **Real content** | Homepage — see section breakdown below |
| `header.php` (188 lines) | **Real content** | Top bar, logo, full 6-item nav with 4 dropdowns, mobile nav duplicate |
| `footer.php` (76 lines) | **Real content** | Logo, contact block, "CERTIFIED BY" ISO badges, copyright, credit |
| `slider.php` (35 lines) | **Real content** | 7-slide hero carousel |
| `mission&vision.php` (51) | **Real content** | OUR MISSION paragraph + OUR COMMITMENT (6 bullets) + VISION (3 bullets) |
| `our-values.php` (49) | **Real content** | Intro + 4 named values (Commitment, Integrity, Responsibility, Safety), full paragraphs |
| `our-strength.php` (34) | **Real content** | 2 paragraphs + 7-bullet core-strengths list |
| `chairman-message.php` (42) | **Real content** | Chairman portrait + name/title + 3-paragraph signed letter |
| `our-people.php` (273) | **Real content** | Chairman card + 9 visible director cards with photos (2 more hidden, 3 commented out) |
| `gallery.php` (44) | **Real content** | Photo gallery grid — 11 visible images from `photo-gallery/02.03.2024/` |
| `iso-certificate.php` (33) | **Real content** | 3 scanned ISO certificates (ALHAL, AEC, AREL) + lightbox modal |
| `test-report.php` (33) | **Real content** | 2 scanned test reports (BUET, BSTI) |
| `dcci.php` (34) | **Real content** | 1 scanned DCCI member certificate |
| `career.php` (162) | **Real content** | 7 collapsible job openings + "Send Your CV" form with file upload |
| `contact-us.php` (74) | **Real content** | Contact form (name/email/subject-select/message) + office address block with 2 emails |

### Root pages that are EMPTY WRAPPERS (header + footer only, no body)

These were never finished. They are nav placeholders, not lost content:
`our-concern.php`, `csr-program.php`, `arma-welfare.php`, `arma-agriculture.php`, `arma-electric-company.php`, `arma-line-hardware&accessories.php`, `arma-real-estate.php`, `arsc.php`, `esha-holding.php`

### Other root files
- `index2.htm` — "SITE IS UNDER MAINTENANCE" + an unused bootstrap carousel of the 10 customer logos. Dead file.
- `qurbani2025.html` — unrelated standalone "Qurbani Cow Cards 2025" page. Not part of the corporate site.
- `wp-*.php` / `*.suspected` — 0-byte malware artifacts. Ignore.

### Sub-site folders (separate concern sites, out of scope here)
`armaelectriccompany/`, `armarealestateltd/`, `arma_line_hardware&accessories_ltd/`, `armaelectriccompany/`, `arscbd.com/`

### Old homepage (`index.php` + `header.php` + `slider.php` + `footer.php`) section breakdown

1. **Top utility bar** — "ISO CERTIFIED COMPANY" text badge + Facebook icon linking to `facebook.com/armaelectriccompany`
2. **Header** — ARMA Group logo image + 6-item nav:
   - HOME
   - ABOUT US ▸ Mission & Vision / Our Values / Our Strength / Chairman's Message
   - OUR CONCERN ▸ 6 concerns
   - OUR PEOPLE ▸ Key Person / Photo Gallery
   - CERTIFICATION ▸ ISO Certificate / Test Report / DCCI
   - CAREER
   - CONTACT US
3. **Hero slider** — 7 slides, "WELCOME TO / ARMA GROUP" caption on slide 1
4. **"BRIEF OF ARMA GROUP"** — company intro paragraph (founded 1985 as ARMA Electric Company; sectors: Agriculture, Real Estate, Infrastructure Development, Power, Education; seven sister concerns)
5. **"OUR CONCERN"** — 6 concern cards, each with image + **a long descriptive paragraph** (Electric, Line Hardware, Real Estate, ARSC, ESHA Holdings, ARMA Agriculture)
6. **"Our Customer"** — Owl carousel of 10 government client logo images
7. **Footer** — group logo, "GET IN TOUCH WITH US" (address / phone / email), **"CERTIFIED BY:" with two ISO badge images (9001:2008 and 9001:2015)**, copyright, developer credit

---

## New Site Sitemap

Single file: `group/index.html` (1210 lines). No other pages. Sections in DOM order:

| # | Section | id | Notes |
|---|---|---|---|
| 1 | Loader + custom cursor | `#loader` | New, cosmetic |
| 2 | Nav | `#nav` | 5 links: About / Our Concerns / Clients / Leadership / Contact + theme switch |
| 3 | Hero | `#home` | "BUILDING THE NATION." + ISO 9001:2015 stamp. **Background is an Unsplash stock URL**, not ARMA photography |
| 4 | Marquee strip | — | Sector keywords |
| 5 | Stat bar | — | 1985 / 7 / 40 / 5 counters (new content, not in old site) |
| 6 | Timeline | — | 9 milestones 1985→today (new content, derived from old copy) |
| 7 | About | `#about` | "A CONGLOMERATE BUILT ON PRINCIPLE" — 2 paragraphs + 2 pillars (Integrity, Quality) |
| 8 | Sectors | `#sectors` | 6 concern panels, one-line descriptions, **all images Unsplash stock**, links to `../electric/` etc. |
| 9 | Clients | `#clients` | 9 client names as text tickets |
| 10 | Chairman | `#chairman` | One 2-sentence pull-quote + name/title |
| 11 | Certs | `#certifications` | 4 SVG-icon cards (ISO 9001:2015, DCCI, Test Certified, BPDB Registered) — **icons, no scans** |
| 12 | Client logo marquee | — | The 10 customer logos, loaded from **GitHub raw URLs** |
| 13 | Career banner | `#career` | Headline + "Send Your CV" button that just scrolls to `#contact` |
| 14 | Contact | `#contact` | Formspree form + address/email/phone |
| 15 | Footer | — | Company / Concerns / Sectors link columns |

Assets referenced: `group/images/logo.png`, `group/images/favicon.png`, `../shared/css/theme-switch.css`, `../shared/js/theme-switch.js`, plus remote GSAP, Google Fonts, Unsplash, and GitHub-raw images.

---

## Missing Pages

Every one of these existed as a real, populated page on the old site and has **no equivalent** in the new site.

| Old page | Old path | New site status |
|---|---|---|
| **Photo Gallery** | `gallery.php` → 11 images in `assets/img/photo-gallery/02.03.2024/` | **Completely absent.** No gallery section, no images. |
| **Our People / Key Person** | `our-people.php` | **Completely absent.** 10 leadership profiles with photos gone; only the chairman's name survives as a signature line. |
| **ISO Certificate** | `iso-certificate.php` | **Absent as a page.** Replaced by one text card. The 3 certificate scans are not shown anywhere. |
| **Test Report** | `test-report.php` | **Absent as a page.** BUET/BSTI scans not shown. |
| **DCCI Certificate** | `dcci.php` | **Absent as a page.** DCCI scan not shown. |
| **Mission & Vision** | `mission&vision.php` | **Absent.** No mission statement, no commitment list, no vision list anywhere in the new site. |
| **Our Values** | `our-values.php` | **Absent.** 4 values reduced to 2 one-line "pillars" (Integrity, Quality) in the About block. |
| **Our Strength** | `our-strength.php` | **Absent.** No equivalent section. |
| **Chairman's Message** | `chairman-message.php` | **Absent as a page.** Reduced to a 2-sentence paraphrase quote. |
| **Career** | `career.php` | **Absent as a page.** Reduced to a banner. No job listings, no CV upload. |
| **Contact Us** | `contact-us.php` | Partially covered by `#contact`. See below. |

---

## Missing Sections (on existing pages)

### 1. Chairman's message — text is gone (high impact)
Old `chairman-message.php` has a real, signed, three-paragraph letter. The new site's `#chairman` block contains only an invented 2-sentence pull-quote ("Bangladesh is on the stage of take-off…"). The following original content is nowhere in the new site:
- Paragraph on Bangladesh's macroeconomic position and the Power / Real Estate / Agriculture sectors
- Paragraph on professionalism, quality control, workmanship, and the philosophy **"Give the customer value for his money"**
- Paragraph on upgrading group activities, human resources, financial fundamentals, mission and vision

Also missing: the real chairman **portrait** (`assets/img/our people/Abdur Razzaque.jpg`). The new site uses `images/Chairman GLDNC GRNBG.png`, a heavily processed cut-out — verify this is the same person and is the intended treatment.

### 2. Mission, Commitment and Vision — entirely gone (high impact)
No trace in the new site of:
- **OUR MISSION** paragraph
- **OUR COMMITMENT** — 6 bullets (empowering customers, organic growth via visionary leadership, work culture / training & mentoring, employee safety-health-happiness, integrity & ethics, growth with customers and suppliers)
- **VISION** — 3 bullets (top-10 in Bangladesh, global player with international customer base, environmentally-conscious product development)

### 3. Our Values — 4 values reduced to 2 slogans
Old `our-values.php` has full paragraphs for **Commitment, Integrity, Responsibility, Safety**. New site's About pillars cover only "Integrity" and "Quality" with one sentence each. **Responsibility** and **Safety** disappear entirely, as does the framing sentence about being a values-driven organisation in Real Estate, Power & Agriculture.

### 4. Our Strengths — entirely gone
Old `our-strength.php` content (employee commitment paragraph, esteemed-customers paragraph, and the 7-bullet list: ethical standards, positive attitude & transparency, peoples participation, common well-being, employee empowerment, culture building, value addition & enrichment) has no counterpart.

### 5. "OUR CONCERN" descriptions — heavily thinned
Old homepage gave each concern a full paragraph. New `#sectors` panels give one sentence each. Specifically lost:
- **ARMA Electric** — the detail on civil work (buildings, roads, bridges for Govt/semi-Govt), distribution lines and sub-stations under BPDB & DPDC, and the **230KV transmission line + control room building under PGCB**
- **ARMA Line Hardware** — rationale of strengthening the group's tender-bidding capacity in the power sector
- **ARSC (Abdur Razzaque School & College)** — founding story, growth from 180 children / 20 teachers to 550 students / 40 teachers, non-discrimination statement, campus description
- **ARMA Agriculture** — the entire project description: 40 acres government permission, 21 acres already purchased, site at Sholeasha Bazar, Gangachora, Rangpur, adjacent to Tista Barrage canal, distances to Chittagong / Mongla ports and Changrabanda / Hilli borders, planned dairy farm at Alipura, Voberchar, Gozaria, Munshiganj
- **ESHA Holdings** — the "strong engineering heritage / infrastructure sector potential" framing (partially retained)

> **Note for the copy editor:** the old ARMA Agriculture and ARSC paragraphs are contaminated with SEO spam injected into the source ("literary review example", "essay writers", "buy essay writing service", "pay for essay writing"). Recover the *facts*, strip the spam. See `index.php:87-100` and `index.php:135-147`.

### 6. Certification scans — replaced by generic icons (high impact for credibility)
The new `#certifications` section shows 4 SVG icon cards. The actual **scanned certificates are not displayed anywhere**. Missing:
- 3 ISO certificate scans (one per concern: ALHAL, AEC, AREL)
- 2 test report scans (BUET, BSTI)
- 1 DCCI membership certificate scan
- The footer **"CERTIFIED BY:" ISO 9001:2008 and ISO 9001:2015 badge images**

Also note a possible factual regression: the old footer claims **both** ISO 9001:2008 and ISO 9001:2015; the new site claims only 9001:2015. Confirm which is current.

### 7. Career page — reduced to a banner
Missing: the 7 collapsible job-opening entries (**Site Engineer, Project Manager, Assistant Manager, Computer Operator, Cleaner, Project Head, MLSS**) and the dedicated CV form with **file upload**. The new "Send Your CV" button only jumps to a generic contact form with no attachment field, so applicants have no way to actually submit a CV.

### 8. Contact details — thinner
- Old site lists **two** email addresses: `info.armagroupbd@gmail.com` and `info@armagroup.com.bd`. New site lists only `info@armagroup.com.bd`.
- Old company name in address: `"ARMA Complex"`, House # 1/B, Road # NS-1 (Main Rd), Block-A, Banasree, Dhaka 1219. New site drops **"Block-A"** and **"(Main Rd)"** and adds "Rampura" — verify which is correct.
- Old contact form subject options: General Customer Service / Suggestions / Product Support. New options are different (Business Partnership / Project-Tender / Real Estate / Career-CV / General) — this is an improvement, just noting the change.

### 9. Social link — gone
Old header had a Facebook link: `https://www.facebook.com/armaelectriccompany`. The new site has **no social links at all**.

### 10. ARMA Welfare Society — was already commented out
`header.php:114` and `:166` have a commented-out nav item for `arma_welfare/index.php`, and `arma-welfare.php` is an empty wrapper. There is a `assets/img/property/welfare.jpg` image. This was a planned-but-unbuilt section; flag it to the client rather than treating it as lost content.

### 11. CSR Program — was already an empty wrapper
`csr-program.php` exists but is header+footer only, and is not linked from the nav. No content was lost, but the client evidently intended a CSR page. Worth asking.

---

## Missing/Unused Original Images & Assets (with old file paths)

All paths below are relative to `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/`.
Cross-checked against `/Users/rahmanwolied/Documents/Work/ARMA/arma-group-website/images/` and `.../group/images/` — the new site contains only `logo.png`, `favicon.png`, `Chairman GLDNC GRNBG.png`, `Chairman-bgrmvd.png`, `Golden Circle*.png`, `Who We Are.jpeg`, `agriculture-about.jpg`, `intl_partners/`, `our_customers_main/`.

### A. Leadership photography — 100% unused (highest recovery value; irreplaceable)
`assets/img/our people/` — original portraits, none present in the new site:
```
assets/img/our people/Abdur Razzaque.jpg              → Chairman (also at img/our people/Abdur Razzaque.jpg)
assets/img/our people/Abdur_Razzaque.jpeg             → Chairman (variant used on our-people.php)
assets/img/our people/Abdur-Razzaque.png
assets/img/our people/Sadiq_Rahman_Anik_pic.jpg       → Director, ARMA Real Estate Ltd.
assets/img/our people/Shafiq_Rahman_Aumi.jpg          → Director, ESHA Holding Ltd.
assets/img/our people/Rafia_Sultana_Esha1.jpeg        → Director, ESHA Holding Ltd.
assets/img/our people/Khandaker_Golam_Zilani.png      → Director, ARMA Group
assets/img/our people/Mohabbat_Ali_Pathan.jpeg        → MD, ARMA Line Hardware & Accessories Ltd.
assets/img/our people/MOHAMMAD_AHASANUL_HAQUE.png     → Director, ARMA Group
assets/img/our people/Md_Mosiur_Rahman.png            → Director, ARMA Group
assets/img/our people/Md_Jashim_Uddin_Khan.png        → Director, ARMA Group
assets/img/our people/FM_Quyum_Kajol.png              → Director, ARMA Group
assets/img/our people/Naimuddin Sentu.jpg             → hidden on old page (display:none) — confirm status
assets/img/our people/Sanjida Sultana.jpg             → hidden on old page (display:none) — confirm status
assets/img/our people/Md. Mahfuzul Huque.jpg          → commented out on old page — confirm status
assets/img/our people/Engr. Elias Hossain.jpg         → commented out on old page — confirm status
```

### B. Certification scans — 100% unused (irreplaceable legal/credibility documents)
```
assets/img/certification/ISO-ALHAL.jpg          → ISO cert, ARMA Line Hardware
assets/img/certification/ISO-AEC.JPG            → ISO cert, ARMA Electric Company
assets/img/certification/ISO-AREL.JPG           → ISO cert, ARMA Real Estate
assets/img/certification/Test-Report-BUET1.jpg  → BUET test report (also Test-Report-BUET.jpg)
assets/img/certification/Test-Report-BSTI.JPG   → BSTI test report (also 'Test-Report-BSTI 1.jpg')
assets/img/certification/DCCI.jpg               → DCCI member certificate
assets/img/ISO-9001-2008-icon.png               → footer "certified by" badge
assets/img/iso-image.png                        → footer "certified by" badge (9001:2015)
assets/img/ISO-9001-2015-icon.png
assets/img/ISO-9001-2015-favicon.png / ISO-9001-2015-faicon.png / ISO-9001-2008-favicon.png
```

### C. Photo gallery — 100% unused (original event/site photography)
The 11 images actually rendered by `gallery.php`:
```
assets/img/photo-gallery/02.03.2024/new_14.jpeg
assets/img/photo-gallery/02.03.2024/15.jpeg
assets/img/photo-gallery/02.03.2024/13.png
assets/img/photo-gallery/02.03.2024/4.png
assets/img/photo-gallery/02.03.2024/5.png
assets/img/photo-gallery/02.03.2024/6.png
assets/img/photo-gallery/02.03.2024/7.png
assets/img/photo-gallery/02.03.2024/9.png
assets/img/photo-gallery/02.03.2024/8.png
assets/img/photo-gallery/02.03.2024/11.png
assets/img/photo-gallery/02.03.2024/12.png
```
Plus images that were hidden or commented out on the old page but exist on disk:
```
assets/img/photo-gallery/02.03.2024/1.png, 2.png, 3.png, 10.png
```
Plus an older, unlinked gallery batch (worth reviewing before discarding):
```
assets/img/photo-gallery/01-27-02-24.jpeg … 08-27-02-24.jpeg   (8 images)
assets/img/photo-gallery/1.jpg … 9.jpg, 11.jpg                  (10 images)
assets/img/photo-gallery/New folder/1.jpg … 9.jpg, 11.jpg        (duplicates)
```

### D. Company logos — unused
```
assets/img/ARMAGROUPLogo.jpg                        → header logo on old site
assets/img/ARMA-GROUP-Logo.jpg                      → footer + contact page logo
assets/img/our company logo/ARMA-GROUP-Logo.jpg     → mission & vision page
assets/img/__ARMA_GROUP_Logo.jpg
assets/img/our company logo/sustainable-future2.jpg → unused; possible CSR/sustainability asset
assets/img/logo.png  /  logo.png (root)
```
The new site ships its own `group/images/logo.png` — confirm it is derived from these originals and not a lookalike.

### E. Hero slider imagery — unused, replaced by Unsplash stock (high impact)
The new hero and all six sector panels use **Unsplash stock URLs**. These original ARMA-specific slider images are unused:
```
assets/img/slider/group/welcome.png
assets/img/slider/group/Transmission-Lines.png  (+ .jpg)
assets/img/slider/group/Power-Poles.png         (+ .jpg)
assets/img/slider/group/power-station.png
assets/img/slider/group/ARMA_Agriculture_banner.png
assets/img/slider/group/agriculture.png
assets/img/slider/group/line-hardware.jpg
assets/img/slider/group/power-line.png / .jpg
assets/img/slider/arel/slider1.png, slider2.png
assets/img/FOR GROUP/Transmission-Lines.jpg
assets/img/FOR GROUP/62703-power-line.jpg
assets/img/FOR GROUP/Power-Poles-Upper-Lines-Power-Lines-High-Voltage-Scenery-HD-Wallpaper.jpg
assets/img/FOR GROUP/1.jpg, slider1.jpg
```

### F. Concern / property imagery — unused, replaced by Unsplash stock
```
assets/img/property/Power-Poles.png              → ARMA Electric card
assets/img/property/line-hardware.jpg            → ARMA Line Hardware card
assets/img/our-concern/arshi_nagar_2.png         → ARMA Real Estate card
assets/img/our-concern/arsc.png                  → ARSC card
assets/img/our-concern/ARMA_Agriculture.png      → ARMA Agriculture card
img/property/esha-holdings.jpg / .png            → ESHA Holdings card (referenced as img/property/esha-holdings.jpg)
assets/img/our-concern/esha-holdings.png
assets/img/our-concern/power-plant.jpg
assets/img/our-concern/real-estate.jpeg
assets/img/our-concern/agriculture.png
assets/img/our-concern/supply.jpg
assets/img/our-concern/introduction.jpg
assets/img/our-concern/esha-moazzem-mili-nibash.jpg
assets/img/property/agriculture.jpg, arsc.png, holdings.jpeg, 01.jpg, 02.jpg
assets/img/property/welfare.jpg                  → for the unbuilt ARMA Welfare section
assets/img/our_values.jpg                        → hero image on the Our Values page
```

### G. Assets that WERE carried over (no action needed)
- All 10 client logos: `assets/img/our-customer/*.jpg` → present as `images/our_customers_main/*.jpg` (same filenames). **But note they are loaded over the network from `raw.githubusercontent.com` rather than the local folder** — see recommendation 8.
- All 12 international partner logos: `assets/img/international-partners/partner1-12.png` → present as `images/intl_partners/partner1-12.png`. **However, no page in `group/index.html` references them.** On the old site these were used on the ARMA Electric sub-site ("Our International Partners" carousel, `armaelectriccompany/index.php:68-116`), not the group homepage — so this is a *staged-but-unused* asset, not a regression on the group site. Decide whether the group site should surface them.
- `img/our clients/` is an empty directory on the old site (only `index.php` placeholder). Nothing lost.

---

## Recommendations (priority order)

1. **Restore the certification evidence.** Replace or supplement the 4 icon cards in `#certifications` with the actual scans (`assets/img/certification/`) behind a lightbox, exactly as `iso-certificate.php` / `test-report.php` / `dcci.php` did. For a Bangladeshi contractor bidding on BPDB/PGCB tenders, visible certificates are the single highest-value trust signal on the site. Copy the 6 scans into `group/images/certificates/`.

2. **Restore the leadership section.** Build an "Our People" section or page from `our-people.php`: 1 chairman + 9 directors with names, titles and the original portraits from `assets/img/our people/`. Confirm with the client which of the 4 hidden/commented profiles (Naimuddin Sentu, Sanjida Sultana, Md. Mahfuzul Huque, Engr. Elias Hossain) should return.

3. **Restore the chairman's full letter.** The current 2-sentence quote is a paraphrase, not the chairman's words. Add the real 3-paragraph message from `chairman-message.php` (either expanding `#chairman` or as a dedicated page), including the "Give the customer value for his money" philosophy line.

4. **Restore Mission / Commitment / Vision / Values / Strengths.** These are ~5 screens of original corporate copy currently reduced to two one-line pillars. Suggested: one "About" page carrying Mission, the 6 Commitment bullets, the 3 Vision bullets, all 4 Values, and the 7 Strengths bullets. Sources: `mission&vision.php`, `our-values.php`, `our-strength.php`.

5. **Make the Career section functional.** Either restore the 7 job listings with a real CV upload (Formspree supports file attachments on paid plans; otherwise a `mailto:` with instructions), or replace the "Send Your CV" button with something that actually works. Right now the button promises a CV submission and delivers a form with no attachment field.

6. **Swap Unsplash stock for ARMA's own photography.** The hero and all 6 sector panels currently show generic stock. `assets/img/slider/group/`, `assets/img/FOR GROUP/`, `assets/img/property/` and `assets/img/our-concern/` contain the real ARMA transmission lines, power poles, substations, Arshi Nagar, ARSC campus and agriculture banners. This is both a credibility and a licensing issue.

7. **Rebuild the photo gallery.** 11 curated images from `assets/img/photo-gallery/02.03.2024/` plus ~18 more in older batches. Ask the client to curate before publishing — several are hidden on the old site for a reason.

8. **Localise remote image dependencies.** `group/index.html` loads the chairman photo, the "Who We Are" image and all 10 client logos from `github.com` / `raw.githubusercontent.com`. Those files already exist locally at `arma-group-website/images/`. Point the `src` attributes at `../images/...` — remote GitHub raw URLs are rate-limited, uncached, and break if the repo is renamed or made private.

9. **Restore lost contact details.** Add the second email (`info.armagroupbd@gmail.com`), restore "Block-A" in the address, and add the Facebook link (`facebook.com/armaelectriccompany`) — currently the new site has no social presence at all.

10. **Resolve the ISO 9001:2008 vs 9001:2015 discrepancy** with the client, and fix the placeholder `href="YOUR_INTERLINK_URL"` in the footer credit (`group/index.html:854`).

11. **Ask the client about CSR and ARMA Welfare Society.** Both were scaffolded but never built on the old site (`csr-program.php`, `arma-welfare.php` are empty wrappers; a `welfare.jpg` asset exists). Not a regression, but an obvious gap for a conglomerate site.

12. **Decide on the international partner logos.** 12 logos sit unused in `arma-group-website/images/intl_partners/`. On the old site they belonged to the ARMA Electric sub-site. Either surface them on the group homepage or move them to the `electric/` folder where they are actually used.

13. **Copy-edit the recovered concern text.** The old ARMA Agriculture and ARSC descriptions contain injected SEO spam phrases. Recover the facts (locations, acreage, student numbers, distances to ports and borders) and drop the spam.
