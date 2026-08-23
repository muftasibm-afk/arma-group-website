# ARMA Electric — Missing Content Audit (Old Site vs New Site)

**Old site:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/armaelectriccompany/` (24 PHP pages, 261 files)
**New site:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-group-website/electric/` (single `index.html`, 3 asset files)
**Audit date:** 2026-08-09

> Note on the root file: `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/arma-electric-company.php` is a 70-byte stub containing only `include 'header.php'` + `include 'footer.php'` with no body content. It renders the *group* chrome with an empty middle. All real Electric content lives in the `armaelectriccompany/` subfolder. Nothing to recover from the root file.

---

## Old Site Sitemap

### Navigation structure (from `header.php`)

| Menu item | Page | Notes |
|---|---|---|
| Home | `index.php` | Homepage |
| About → Our People | `our-people.php` | |
| About → Our Mission & Vision | `mission-vision.php` | |
| Our Production Line | `production-line.php` | Manufactured product catalogue |
| Photo Gallery | `photo-gallery.php` | |
| Certification → ISO Certificate | `iso-certificate.php` | |
| Certification → DCCI | `dcci.php` | |
| Exclusive Partner → KOCOS MESSTECHNIK AG | `kocosmessstexhnik.php` | Hub → 7 product sub-pages |
| Exclusive Partner → UTILITY SOLUTIONS, INC. | `utilitysolution.php` | |
| Exclusive Partner → TAVRIDA ELECTRIC | `tavrideaelectronic.php` | |
| Contacts | `contact.php` | |

### KOCOS product detail sub-pages (linked from `kocosmessstexhnik.php`, not in main nav)

| Page | Product family | Product images | PDF datasheets |
|---|---|---|---|
| `switch_gear_test_systems.php` | ACTAS Portable Switchgear Test Systems | 4 | 2 |
| `relay_test_systems.php` | ARTES Automatic Relay Test Systems | 2 | 1 |
| `high_precision_ohm_meters.php` | PROMET High-Precision Ohm Meters | 3 | 3 |
| `power_quality_analyser.php` | EPPE CX / PX Power Quality Analysers | 3 | 1 |
| `meter_test_systems.php` | METES 340 REF Meter Test System | 1 | 1 |
| `fault_recorder_systems.php` | SHERLOG CRX Fault Recorder Systems | 1 | 1 |
| `voltage_sources.php` | EPOS CV Voltage Sources | 1 | 1 |

### Orphan / non-content pages (do NOT need porting)

- `about.php` — orphaned; not in nav. Text duplicates `index.php` About + Features sections.
- `product-single.php` — unmodified purchased-theme demo page. Contains lorem-ipsum ("Rump tongue salami beef meatloaf doner…"), fake phone `1-888-123-4567`, fake email `electrcs@gmail.com`, and ~200 links to nonexistent theme pages. **Junk — ignore.**
- `certrfication.php` — empty file (0 content lines).
- `header.php` / `footer.php` / `slider.php` — includes, not pages.
- `css/index.php`, `js/index.php`, `img/index.php`, `fonts/index.php` — directory-listing blockers.

### Homepage (`index.php`) section inventory

| # | Section | Content |
|---|---|---|
| 1 | Top bar | "ISO 9001:2015 Certified Company" + Facebook link `https://www.facebook.com/armaelectriccompany/` |
| 2 | Header | ARMA Electric logo, `<h1>ARMA ELECTRIC COMPANY</h1>`, site search box |
| 3 | Hero slider (`slider.php`) | 2 slides: `Power-Poles-Upper.jpg`, `Transmission-Lines.jpg`. No captions/overlay text. |
| 4 | About / Welcome | "Welcome to ARMA Electric Company" — company history paragraph (1985 founding, civil work, BPDB/DPDC, 230KV PGCB line) |
| 5 | Features | "ARMA Electric Company" ISO/capabilities paragraph + 3 teasers: *We are professionals*, *We are trusted*, *We are experts* |
| 6 | International Partners | Carousel of 12 logos (`images/international-partners/partner1–12.png`) |
| 7 | Clients | **Commented out in source** (HTML present, disabled). 8 client logos referenced from `img/our-clients/`. |
| 8 | Footer | Logo, address block, phone, email, embedded Google Map iframe of ARMA Electric Company |
| 9 | Copyright | "© 2018 ARMA GROUP" + "Developed By Cyberdyne Technology Ltd." |

---

## New Site Sitemap

Single page: `electric/index.html`. No sub-pages. `css/`, `js/` contain only `.gitkeep`.

| # | Section | id | Content |
|---|---|---|---|
| 1 | Nav | — | Logo, links: About / Services / Clients / Partners / Contact / ← Group |
| 2 | Hero | `#home` | "ARMA ELECTRIC CO.", tagline, 4 badges (ISO 9001:2015, BPDB Approved, Est. 1985, 230KV Capable), 2 CTAs. Background = **Unsplash stock photo**. |
| 3 | Ticker | — | Scrolling marquee of 5 claims |
| 4 | Stats | — | 4 animated counters: 1985 / 40+ / 9 / 10+ |
| 5 | About | `#about` | 2 paragraphs (history, 230KV/PGCB, ISO) + 6-item tech list. Image = **Unsplash stock photo**. |
| 6 | Services | `#services` | 6 cards: Transmission Line, Substation, Civil Construction, Line Hardware Supply, e-GP Tendering, International Trade |
| 7 | Clients | `#clients` | 9 text rows (BPDB, DPDC, PGCB, DESCO, EGCB, APSCL, REB, WZPDCL, NESCO). **Text only — no logos.** |
| 8 | Partners | `#partners` | 3 cards: KOCOS (Germany), Utility Solutions (USA), Tavrida Electric (Russia). **Names + 1-line blurb only.** |
| 9 | International Partners | — | Marquee of the 12 partner logos, hotlinked to `raw.githubusercontent.com/muftasibm-afk/arma-group-website/.../images/intl_partners/`. Alt text is `"Partner 1"…`— **no company names**. |
| 10 | Certifications | `#certifications` | 4 icon cards: ISO 9001:2015, DCCI Member, BPDB Registered, Test Reports. **No certificate images.** |
| 11 | Contact | `#contact` | Address, phone `+8802-2440-6189`, email `info@armagroup.com.bd`, Formspree form. **No map.** |
| 12 | Footer | — | Brand, 5 links, copyright, "Powered by Interlink" |

---

## Missing Pages

| Old page | Status in new site | Impact |
|---|---|---|
| `production-line.php` — **Product catalogue** | **ABSENT.** No product/manufacturing section at all. | **HIGH.** 8 own-manufactured, part-numbered products (AEC-C001…C008) with photos. This is ARMA Electric's own product line — the "Line Hardware Supply" service card mentions supply generically but never lists a single SKU. |
| `photo-gallery.php` | **ABSENT.** No gallery. | **HIGH.** 7 original factory/galvanising-yard photographs lost. |
| `our-people.php` | **ABSENT.** No leadership/team section. | MEDIUM. Old page shows Abdur Razzaque, CEO, with photo. |
| `mission-vision.php` | **ABSENT.** | MEDIUM. ~400 words of Mission, 6-point Commitment list, and Vision statement. Nothing equivalent in new site. |
| `iso-certificate.php` | Replaced by an icon card. | **HIGH.** Two scanned certificates (WQS + BSCIC) are gone. |
| `dcci.php` | Replaced by an icon card. | MEDIUM. Scanned DCCI membership certificate gone. |
| `kocosmessstexhnik.php` + 7 sub-pages | Compressed to one 3-line card. | **HIGH.** Entire KOCOS product hub — 15 product images, 7 product families, 10 PDF datasheets — reduced to a single sentence. |
| `utilitysolution.php` | Compressed to one card. | LOW-MED. Old page lists 3 products but bodies are lorem ipsum. Product *names* are real and worth keeping. |
| `tavrideaelectronic.php` | Compressed to one card. | LOW-MED. Same: 2 real product names, lorem-ipsum bodies. |
| `contact.php` | Merged into `#contact`. | Mostly covered — but see contact-detail discrepancies below. |

---

## Missing Sections (on existing pages)

### 1. Google Map embed — REMOVED
Old `footer.php:53` embeds a Google Map pinned to the ARMA Electric Company place listing. New `#contact` has a text address only. No map anywhere on the new site.

### 2. Contact details changed — VERIFY WHICH IS CORRECT
| Field | Old site | New site |
|---|---|---|
| Email | `info.armagroupbd@gmail.com` | `info@armagroup.com.bd` |
| Phone | `+8802224406189` | `+8802-2440-6189` (same digits, reformatted) |
| Fax | `8802-7288179` (commented out in `header.php:246`) | absent |

The email is a genuine change of address, not a formatting difference. Confirm the new one is live before launch.

### 3. Facebook link — REMOVED
`https://www.facebook.com/armaelectriccompany/` (old `header.php:234`). No social links on the new site at all.

### 4. Client logos — DOWNGRADED TO TEXT
New `#clients` lists 9 organisations as plain text rows. The old site has actual logo files for 8+ of them (see asset table below). Logos carry far more credibility than text rows for a government-contractor audience.

### 5. International partner logos are unlabelled
The 12 logos are present but alt text reads `"Partner 1"`…`"Partner 12"`. The identifiable brands are commercially meaningful and should be named:

| File | Company |
|---|---|
| `partner1.png` | DLIG (大连电瓷 / Dalian Insulator Group) |
| `partner2.png` | Ub Exim Private Limited |
| `partner3.png` | JEWAY |
| `partner4.png` | BONLE Insulator |
| `partner5.png` | TCI Insulator Co., Ltd (福建达城电瓷) |
| `partner6.png` | **Larsen & Toubro** |
| `partner7.png` | Jiangxi Tuowang Electric Co., Ltd (江西省拓网电气) |
| `partner8.png` | DSK LINZ |
| `partner9.png` | BESTPOWER (佰能) |
| `partner10.png` | **Kyoritsu** |
| `partner11.png` | **Sonel** |
| `partner12.png` | TISENSE (泰昇) |

### 6. Mission / Vision / Commitment copy — NOT CARRIED OVER
Full text exists at `mission-vision.php`. Includes a 6-point Commitment list and a Vision with concrete goals ("top 10 companies of Bangladesh", environmental/energy conservation). The new site has no values content whatsoever.

### 7. ISO certificate scope detail — LOST
The new site says only "ISO 9001:2015 / Quality Management System". The scanned certificates state the *certified scope*, which is a much stronger sales claim:

> Manufacture of Pole Fittings, Hardware and Accessories (Cross Arm, Bracket, Clamp and Connectors, Nut & Bolt, Wire Rack, Stay Set, Earthing Material, Guy Assembly, X-Former Structure and Sub-Station Gantry Structure); Construction of Grid Sub-Station, Distribution Sub-Station, Transmission and Distribution (OH & UG) Lines; Import & Supply of Equipment and Spare Parts related to Power Generation, Transmission and Distribution Lines.
> — BSCIC cert `BN19597/18679`, IAF Scopes 17b, 19 & 28

Also lost: certificate numbers (WQS `I90387`, BSCIC `BN19597/18679`), and the fact that **two** certification bodies have certified the company.

> ⚠️ **Both scanned certificates are expired.** WQS expired 2020-02-18; BSCIC expired 2023-03-11. The new site's live "ISO 9001:2015 Certified" claim needs a current certificate before you publish any scan. Get the renewal from the client rather than republishing an expired document.

### 8. Hero and About imagery are stock, not ARMA
New site hero uses `images.unsplash.com/photo-1473341304170-971dccb5ac1e`, About uses `photo-1581094794329-c8112a89af12`. Original ARMA site photography exists and is unused (below).

### 9. Site search — removed
Old site had a header search box and a search modal. Minor; probably intentional for a single-page build.

### 10. External hotlinking risk
All 12 partner logos load from `raw.githubusercontent.com`. That is not a CDN, is rate-limited, breaks if the repo is renamed or made private, and adds a third-party dependency on every page view. Copy them into `electric/images/`.

---

## Missing/Unused Original Images & Assets (with old file paths)

Base path for all entries: `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/armaelectriccompany/`

### A. Original ARMA factory photography — HIGH VALUE, currently unused (`photo-gallery.php`)
These are genuine on-site photographs of ARMA's own galvanising yard and manufactured hardware. Verified by inspection — not stock.

| Path | Content |
|---|---|
| `images/product1.jpg` | Large pile of galvanised brackets/base plates, yellow hard hat, factory shed |
| `images/product2.jpg` | Manufactured hardware |
| `images/product3.jpg` | Close-up: galvanised cross-arms with pole clamps and bolts on a work bench |
| `images/product4.jpg` | Manufactured hardware |
| `images/product5.jpg` | Stack of galvanised pole-band clamps |
| `images/product6.jpg` | Manufactured hardware |
| `images/product7.jpg` | Rows of stacked galvanised angle cross-arms in the yard |
| `images/product8.jpg` | Manufactured hardware (not used on gallery page) |

**This is the single most valuable recovery.** It is the only real evidence on either site that ARMA Electric physically manufactures anything.

### B. Product catalogue images (`production-line.php`) — 8 part-numbered SKUs
| Path | Product |
|---|---|
| `images/products/Cross-Arm (Angle Type) (AEC-C001).jpg` | Cross-Arm (Angle Type) |
| `images/products/Cross-Arm Tie (AEC-C002).jpg` | Cross-Arm Tie |
| `images/products/Cross-Arm (Tension Type) (AEC-C003).jpg` | Cross-Arm (Tension Type) |
| `images/products/Extension Strap (AEC-C004).jpg` | Extension Strap |
| `images/products/Side Mount Bracket (AEC-C005).jpg` | Side Mount Bracket |
| `images/products/Top Mount Bracket (AEC-C006).jpg` | Top Mount Bracket |
| `images/products/2 Way Clamp (AEC-C007).jpg` | 2 Way Clamp |
| `images/products/Square Base Plate (AEC-C008).jpg` | Square Base Plate |

Note: these are small (11–24 KB) and low-resolution. The **originals in section A are much better** (32–80 KB, sharper) and depict the same product families — consider re-cropping from those, or request hi-res originals.

### C. Scanned certificates — HIGH VALUE
| Path | Content |
|---|---|
| `images/certification/ISO-AEC.JPG` | WQS Certificações ISO 9001:2015 cert, No. `I90387`, issued 2017-02-19, **expired 2020-02-18** |
| `images/certification/bscic.png` | BSCIC ISO 9001:2015 cert, No. `BN19597/18679`, issued 2020-03-12, **expired 2023-03-11**. Newer + fuller scope. |
| `images/certification/DCCI.jpg` | DCCI Membership Certificate, Book 049 / Serial 04899, ARMA Electric Company, valid to 2017-12-31 |
| `images/certification/iso-image.png` | ISO 9001:2015 badge/seal graphic (8 KB) — useful as a trust badge |

### D. Client / customer logos — currently text-only on new site
| Path | Organisation |
|---|---|
| `images/key-customer/bub.png` | Bangladesh Power Development Board (BPDB) — official Bengali crest |
| `images/key-customer/pgcb.jpg` | Power Grid Company of Bangladesh |
| `images/key-customer/dpdcl.png` | Dhaka Power Distribution Company Ltd |
| `images/key-customer/rhd.jpg` | Roads & Highways Department |
| `images/key-customer/ucep.png` | UCEP Bangladesh |
| `images/key-customer/bkuc.png` | (Kushtia palli bidyut / BKUC) |
| `images/key-customer/kps.png` | Kushtia Palli Bidyut Samity crest |
| `images/key-customer/mps.jpg` | Meherpur Palli Bidyut Samity |

Duplicate/alternate set in `img/our-clients/`: `BEDB.png`, `BEDC.png`, `DPDCL.png`, `PGCB.jpg`, `RHD.jpg`, `UCEP.png`, `Kustia.png`, `Meherpur.jpg`, `Bangladesh-power-development-board-job-circular.jpg`.

> Note: the group site already has hi-res customer imagery at `arma-group-website/images/our_customers_main/` (BPDB, PGCB, DPDC, DESCO, EGCB, APSCL, NESCO, WZPDCL, RPCL, BREB — 580–670 KB each). **Prefer those** over the old low-res logos; the old set adds RHD, UCEP, Kushtia and Meherpur, which the group set lacks.

### E. Branding
| Path | Content |
|---|---|
| `images/ARMA-Electric-Company-Logo.jpg` | Green triangle ARMA mark **with "ISO 9001:2015" lockup** (109 KB). New site's `logo.png` is a different treatment — check whether the ISO lockup variant is wanted. |
| `images/ARMA-GROUP-Logo.jpg` | ARMA Group logo (12.7 KB) |

### F. KOCOS partner product images — 15 files, none migrated
All under `images/exclusive_partner/kocos_messstexhnik_ag/`:
- `switch_gear_test_systems/` — `ACTAS_P360.png`, `ACTAS_P260_P360.png`, `ACTAS_P360_full.png`, `ACTAS_P360_right.png`, `ACTAS_P260_right.png`
- `relay_test_systems/` — `ARTES-600.png`, `ARTES-600_frontalpng.png`, `ARTES_460_right.png`
- `high_precision_ohm_meters/` — `PROMET_SE_left.png`, `PROMET_L100_front.png`, `PROMET-L10_frontal.png`, `PROMET-L10-+-bag.png`
- `power_quality_analyser/` — `EPPE_CX.png`, `EPPE_CX_left.png`, `EPPE-PX.png`, `EPPE_W8.png`, `EPPE-PX_left.png`
- `meter_test_systems/` — `METES_340_REF.png`, `meter_test_system.png`
- `fault_recorder_systems/` — `SHERLOG-CRX.png`, `fault_recorder_systems.png`
- `voltage_sources/` — `EPOS_CV.png`, `voltage_sources.png`
- `images/exclusive_partner/cocos_banner_2.png` — KOCOS banner

> These are KOCOS's own manufacturer product renders, not ARMA photography. Recover them only if you rebuild the partner-product pages; confirm redistribution rights with KOCOS.

### G. PDF datasheets — 10 files, none migrated
All under `file/exclusive_partner/kocos_messstexhnik_ag/`:
`BR_ACTAS_P260_P360_AG_201808_ENG.pdf`, `DB_ACTAS_BTT_072016_ENG.pdf`, `BR_ARTES_460_600_201811_AG_ENG.pdf`, `BR_PROMET_SE_201810_AG_ENG.pdf`, `DB_PROMET L100_102018_ENG.pdf`, `DB_PROMET L10_122017_ENG.pdf`, `BR_EPPE_CX_PX_201805_AG_ENG.pdf`, `BR_METES340_201303_ENG.pdf`, `BR_SHERLOG_CRX_201810_AG_ENG.pdf`, `FL_EPOS_CV_201611_AG_ENG.pdf`

Dated 2013–2018. Verify with KOCOS that these are still the current revisions before republishing.

### H. Team photos
| Path | Content |
|---|---|
| `images/team/Abdur-Razzaque.jpg` | Abdur Razzaque, CEO — headshot (41 KB, low-res, ~130px). Used on `our-people.php`. |
| `images/team/Mohabbat-Ali-Pathan.jpg` | Referenced in `our-people.php` source but the entry appears unused/commented |
| `images/team/01.jpg`, `02.jpg`, `03.jpg` | Generic theme stock — ignore |

### I. Slider backgrounds (stock, but high-res and on-brand)
`images/slider/`: `Power-Poles-Upper.jpg` (228 KB), `Transmission-Lines.jpg` (571 KB), `Power-Poles.png` (1.2 MB), `Transmission-Lines.png` (864 KB), `line-hardware.jpg` (1.6 MB), `power-line.jpg` (158 KB), `slider1.jpg` (642 KB), `welcome.png` (1.5 MB).

These are stock/licensed pylon photography, not ARMA-shot — but they are already paid-for, on-brand, and higher quality than nothing. Using them beats hotlinking Unsplash. `line-hardware.jpg` at 1.6 MB may show actual hardware; worth inspecting.

### J. Confirmed junk — do NOT migrate
- `images/gallery/01–12.jpg`, `images/gallery/tile/*` — purchased-theme stock (welding sparks, etc.). `Team.jpg` is a **photo of the Bangladesh national cricket team**; `winner.jpg`, `Nasir.jpg` are unrelated. Never referenced by any Electric page.
- `images/events/01–09.jpg`, `images/categories/*`, `images/shop/*` — theme demo assets, unreferenced.
- `images/recent_post1–3.jpg`, `images/slide01–03.jpg`, `images/jamuna*.jpg`, `images/power4.jpg`, `images/quote_bg.jpg`, `images/status_bg.jpg`, `images/side-image.jpg`, `images/banner.jpg`, `images/Electtric_Line.jpg` — theme demo assets.
- `img/pattern1–11.png`, `img/preloader.gif`, `img/loading.png`, `img/aside_bg.jpg`, `img/background_section.png`, `img/owl.video.play.png` — theme chrome.
- `fonts/` — FontAwesome, Glyphicons, Socicon, rt-icons. New site uses inline SVG + Google Fonts. Not needed.
- `css/`, `js/` — Bootstrap 3 / slick / theme scripts. Superseded.

---

## Recommendations (priority order)

### P0 — Do before launch

1. **Add a Products / Production Line section.** Port the 8 AEC-C001…C008 SKUs with part numbers. Currently nothing on the new site shows ARMA Electric manufactures its own hardware — this is the biggest content regression. Source: `images/products/` (names + part numbers) and `production-line.php`.

2. **Replace the two Unsplash stock images with ARMA's own photography.** Use `images/product1.jpg`, `product3.jpg`, `product5.jpg`, `product7.jpg` for the About visual, and the `images/slider/` pylon shots for the hero. Removes a third-party dependency and shows the real operation.

3. **Copy the 12 partner logos into `electric/images/` and stop hotlinking `raw.githubusercontent.com`.** Rate-limited, no CDN, breaks on repo rename or private-flip.

4. **Name the international partners.** Replace `alt="Partner 1"` with real company names (mapping table in section 5 above). Larsen & Toubro, Kyoritsu and Sonel are recognisable names that build credibility — right now they're anonymous.

5. **Confirm the contact email.** Old site: `info.armagroupbd@gmail.com`. New site: `info@armagroup.com.bd`. Verify the new address actually receives mail.

6. **Resolve the ISO certification claim.** Both scans on file are expired (WQS 2020, BSCIC 2023). The new site claims "ISO 9001:2015 Certified" in the hero, ticker, footer and cert card. Get the current certificate from the client. **Do not publish the expired scans** as if current.

### P1 — High value, straightforward

7. **Add a Photo Gallery / Facility section** using the 7–8 original factory photographs (`images/product1–8.jpg`). Only real proof of manufacturing capability that exists.

8. **Upgrade the certifications section** with the certified *scope* text (quoted in section 7 above) — "Manufacture of Pole Fittings… Cross Arm, Bracket, Clamp… Construction of Grid Sub-Station… IAF Scopes 17b, 19 & 28". Far stronger than a generic "Quality Management System" label. Add cert numbers once a current certificate is in hand.

9. **Add client logos to the Clients section.** Use `arma-group-website/images/our_customers_main/` (hi-res, already in repo) for the 9 listed bodies. Optionally add RHD and UCEP from `images/key-customer/` — those are real past clients absent from the new list.

10. **Add the Google Map embed** to `#contact`. Old coords/place ID in `footer.php:53`.

11. **Add the Facebook link** — `https://www.facebook.com/armaelectriccompany/`. New site has zero social presence.

### P2 — Worth doing

12. **Add Mission & Vision content.** ~400 words already written at `mission-vision.php` (Mission, 6-point Commitment, Vision). Fills out a thin single-page site at near-zero cost.

13. **Add a Leadership / Our People entry** for Abdur Razzaque, CEO. Request a hi-res headshot — the existing one is ~130px and unusable at modern sizes.

14. **Expand the partner cards with product families.** Each of the 3 partner cards can list what ARMA actually distributes:
    - KOCOS: ACTAS switchgear test, ARTES relay test, PROMET ohm meters, EPPE power quality analysers, METES meter test, SHERLOG fault recorders, EPOS voltage sources
    - Utility Solutions: Fiberglass Hot Sticks, Load-Trainer II Transformer Simulator, Load Break Tools
    - Tavrida Electric: Automatic Circuit Recloser (ACR), Vacuum Circuit Breaker

    Names are real; the old descriptive copy is lorem ipsum, so bodies need writing fresh.

15. **Decide on the KOCOS product hub.** Rebuilding all 7 sub-pages with 15 renders and 10 PDFs is a large job for distributor content ARMA doesn't own. Recommend: keep the expanded card from #14, and if the client wants the datasheets, link to KOCOS's own site rather than rehosting 2013–2018 PDFs. Revisit only if the client asks.

### P3 — Cleanup / verification

16. **Check the logo variant.** Old `images/ARMA-Electric-Company-Logo.jpg` includes an "ISO 9001:2015" lockup that the new `logo.png` lacks. Confirm which the client wants (and note it ties to item 6).

17. **Inspect `images/slider/line-hardware.jpg` (1.6 MB)** — largest asset in the old site and named for ARMA's actual product category. May be usable original photography.

18. **Fix the malformed CSS rules in `index.html`.** `.marquee-item img{...;filter:opacity(0.65)}` at line 49 contains a literal `...` placeholder, and `.hero{...}}` at line 78 has a stray extra closing brace. Both are pre-existing, unrelated to this audit, but will cause the marquee images to render unstyled.

19. Ignore `product-single.php`, `about.php`, `certrfication.php`, and everything in section J. Confirmed theme boilerplate.
