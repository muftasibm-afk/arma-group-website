# ARMA Line Hardware — Missing Content Audit (Old Site vs New Site)

> **Audit date:** 2026-08-09
> **Old site:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/arma_line_hardware&accessories_ltd/`
> **New site:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-group-website/line-hardware/`

## Headline Finding

**The new site is a content upgrade, not a regression.** The old site was an unmodified
"Electriczone — Electric services & Repair HTML Template" with ARMA's name pasted into it.
Most of its 27 pages are untouched template demo pages containing lorem-ipsum
("Turkey biltong filet mignon cupim meatball chicken andouille…"), fake phone numbers
(`700-789-3456`), stock electrician photos, and fictional staff (Jack Wilshere, Benson Paul).
The old site never had a real product catalogue — the new `index.html` has one.

**The real loss is not pages — it is three things:**
1. Genuine ARMA factory/product photography (8 photos) that is currently replaced by generic Unsplash stock.
2. Third-party certifications and test reports (ISO 9001, BUET, BSTI, DCCI) — the strongest trust
   assets this company owns, and the only source of verified product names.
3. The verified product SKU list recorded on the BSTI test report, which is more specific than the
   new site's eight generic category cards.

---

## Old Site Sitemap

### Root-level entry point
| File | Status |
|---|---|
| `public_html/arma-line-hardware&accessories.php` | **Empty stub.** Contains only `include 'header.php'` + `include 'footer.php'` — no body content. Not a router to the subfolder. |

### Subfolder — `arma_line_hardware&accessories_ltd/`
| Page | Real ARMA content? | Notes |
|---|---|---|
| `index.php` (59.8K) | **Partial — the only real page** | Company blurb, 3 real sliders, 8 real product photos, real director names/photos. Rest is template filler. |
| `index-2.html` (71.7K) | No | Template homepage variant 2, untouched. |
| `about-us.html` | No | Template. Text is about *garage/vehicle servicing* — wrong industry entirely. |
| `our-team.html` | No | Template staff: "Jack Wilshere / Benson Paul / Jane Wilkings". |
| `contact.html` | No | Template. Fake number `700-789-3456`. |
| `portfolio.html` | No | Template, 4× "poor maintenance" placeholder tiles. |
| `services-details.html`, `services-style-1.html`, `services-style-2.html` | No | Template services, lorem ipsum. |
| `shop.html`, `shop-single.html`, `shopping-cart.html`, `checkout.html` | No | Template e-commerce demo. "Showing 1–9 of 15 results" — products are **Milwaukee power tools**, not ARMA line hardware. |
| `blog.html`, `blog-single.html` | No | Template blog. |
| `pricing.html`, `error-page.html` | No | Template. |
| `services.html`, `services-single.html`, `services-single-1…6.html` | **Broken** | All 8 files are saved **404 error pages** from the template author's own server (`/HTML/Electriczone/…`). Dead on the old site. |

### Real content sections inside `index.php`
| Section | Content | Verdict |
|---|---|---|
| Hero slider | 3 slides — real Bangladesh transmission-line photography | **Real — recover** |
| Welcome / About | "Established 2006 to serve increasing demand of quality line hardware & accessories of the power sector"; **"more than 100 items manufactured"**; "besides selling the products to the contractors" | **Real — partly carried over; the "100+ items" figure is lost** |
| Featured services (6 cards) | "shortcircuit repaire", "faulty and old wiring", "poor maintenance", "electrical maintenace", "install and upgrate", "dianosis and repaire" | **Template — do NOT recover.** These are electrician repair services, misspelt, and describe the wrong business. Every card repeats the same paragraph. |
| Our Latest Projects (gallery) | 8 real photos of galvanised pole fittings, brackets, clamps | **Real — recover** |
| Meet Our Specialist | Abdur Razzaque (Founder), Engr. Elias Hossain, Md. Mahfuzul Huque, Mohabbat Ali Pathan | **Real names, but roles conflict** with group `our-people.php` (see Missing Sections) |
| Testimonials | Naimuddin Sentu, Sadiq Rahman (Anik), Sanjida Sultana — all repeating one identical sentence | **Fabricated — do NOT recover.** "Sadiq Rahman Anik" is an ARMA director, not a customer. |
| Counters | "install and upgrate / HAPPY CUSTOMERS / REVIEWS DONE / PROBLEMS SOLVED" — all hardcoded `0` | Template |
| Business Hours | Sat–Thu 07:00–21:00; closed Friday + official holidays | **Real — missing from new site** |
| Footer | Logo, company blurb, "© 2018", dead social links (`href="#"`) | Partly real |

### Group-level pages carrying Line Hardware content
| Page | Content |
|---|---|
| `iso-certificate.php` | ISO certs for all three concerns, incl. **`ISO-ALHAL.jpg` = Line Hardware's own ISO 9001** |
| `test-report.php` | **BUET** and **BSTI** test reports — both are Line Hardware's |
| `dcci.php` | DCCI member certificate |
| `our-people.php` | Mohabbat Ali Pathan = **Managing Director, ARMA Line Hardware & Accessories Ltd.** |
| `our-strength.php` | Group "Our Strengths" — 7 bullet values |

---

## New Site Sitemap

Single-page application: `line-hardware/index.html` (29.6K), matching the pattern used by every
sibling site (`electric/`, `agriculture/`, `real-estate/`, …). This is intentional, not an omission.

| Section | Anchor | Content |
|---|---|---|
| Nav | — | Logo, About / Products / Contact / Get a Quote / ← Group, theme switch |
| Hero | `#home` | "LINE HARDWARE & ACCS."; "Est. 2006 · Dhaka & Munshiganj"; trust chips: BPDB Approved, e-GP Ready, Import & Export |
| Clients bar | — | BPDB, DPDC, PGCB, DESCO, REB, EGCB, WZPDCL, NESCO |
| Stats row | — | 2006 established / 8 product categories / 2 locations |
| About | `#about` | Founded 2006, sister concern of ARMA Electric; HQ Banasree Dhaka + Unit 1 Munshiganj |
| **Product catalogue** | `#catalogue` | 8 cards: HT/LT Line Hardware · Insulators · MCCBs · LA & DOFC · Power Transformers · Measuring Instruments · SPC Poles · e-GP Procurement. Filter chips: All / HT-LT Lines / Protection / Distribution |
| Contact | `#contact` | Phone +8802-2440-6189, info@armagroup.com.bd, ARMA Complex Banasree address, Formspree enquiry form |
| Footer | — | Brand line, group link, © 2025 |

**Assets:** `images/logo.png`, `images/favicon.png` only. `css/` and `js/` are empty (`.gitkeep`);
all styling is inlined. **Both photographic images are external Unsplash URLs**, not owned assets.

---

## Missing Pages

Very little of genuine value. Ranked by whether recovery is warranted:

| Old page | Recover? | Reasoning |
|---|---|---|
| **Certifications / Test Reports** (`iso-certificate.php`, `test-report.php`, `dcci.php`) | **YES — highest priority** | Not currently represented anywhere on the new site. ISO 9001, BUET and BSTI reports are the company's strongest procurement credentials, directly relevant to the government tender audience the hero already targets. |
| **Gallery / Our Projects** | **YES** | 8 genuine factory photos exist and are unused. |
| Team / Leadership | Optional | Only real fact worth keeping is Mohabbat Ali Pathan = Managing Director. Photos are ~150px — too small to reuse. Group site may already cover this. |
| Business Hours | Optional | One-line addition to the contact section. |
| About Us, Our Team, Portfolio, Services ×9, Shop ×4, Blog ×2, Pricing, 404 | **NO** | 100% unmodified template. Recreating them would import lorem ipsum, a fake phone number, fictional staff, and text about car servicing. |

---

## Missing Sections (on existing pages)

Sections to add to the **existing** `index.html`:

1. **Certifications & Compliance strip** *(highest value)* — ISO 9001:2015 (BCC, cert. `ABZB15Q20359R0S`,
   scope: *"Manufacturing of Pole Fittings"*), BUET Mechanical Engineering test report, BSTI Physical
   Testing report, DCCI membership. The nav already claims "BPDB Approved" as a bare trust chip with
   nothing backing it — these certificates are the proof.

2. **Verified product SKU list.** The BSTI report names six *actual* manufactured products with yield
   strengths — far more concrete than the current generic category cards:
   | Product | Yield strength (N/mm²) |
   |---|---|
   | 5-Spool wire Rack (channel) | 361 |
   | 5-Spool wire Rack (angle) | 375 |
   | Guy set | 390 |
   | Top Mount Bracket | 317 |
   | Side Mount Bracket | 291 |
   | Pole Band | 370 |

   BUET separately certifies **Steel Cross Arm** (tensile 485 MPa, yield 358 MPa, galvanisation
   720 g/m² — all "OK" against BS 729:1971). Note none of these seven appear on the new site's
   eight cards, and conversely the new site advertises **Insulators, MCCBs, Power Transformers and
   Measuring Instruments** — which are *traded* goods, not manufactured. Worth distinguishing
   **"We Manufacture"** from **"We Supply/Import"**; it is a genuine competitive differentiator
   and the ISO scope explicitly covers manufacturing only.

3. **"More than 100 items manufactured"** — a strong, specific claim from the old About copy that
   is absent from the new site. The stats row currently shows "8 Product Categories"; "100+ Items
   Manufactured" is a stronger number.

4. **Manufacturing plant address.** ISO cert gives the registered/geographic address as
   *Alipura, Bhober Chor (Dhaka–Chittagong Highway), Upazila: Gazaria, Dist: Munshiganj*.
   The new site says only "Munshiganj / Dhaka-Chittagong Highway".

5. **Product gallery / factory photography section** — none exists; see below.

6. **Business hours** — Sat–Thu 07:00–21:00, closed Friday and official holidays.

7. **Leadership credit** — Mohabbat Ali Pathan, Managing Director (per group `our-people.php`).
   ⚠️ The old Line Hardware page labelled him "Director" and Abdur Razzaque "Founder", while
   `our-people.php` lists Razzaque as Chairman of ARMA Group and Pathan as MD of Line Hardware.
   **Confirm current titles with the client before publishing.**

8. **Chairman contact-of-record.** The BUET report lists the client as *Mr. Abdur Razzaque, Chairman,
   Arma Line Hardware & Accessories Limited, "Arma Complex", House #1/B, Road #NS-1, Block-A,
   Banasree, Dhaka-1219* — matches the new site's address; useful corroboration.

---

## Missing/Unused Original Images & Assets (with old file paths)

### Tier 1 — Genuine ARMA product photography (recover all)
These are original photos of ARMA's own galvanised line hardware, shot at their yard. **Currently the
new site shows generic Unsplash stock instead.** Only G-1…G-4 were ever displayed on the old site;
G-5…G-8 exist on disk but were never used.

| Old path | Subject | Used on old site? |
|---|---|---|
| `…_ltd/images/gallery/G-1.jpg` (80.3K) | Pile of galvanised brackets/plates, yellow hard hat, factory shed | Yes |
| `…_ltd/images/gallery/G-2.jpg` (41.1K) | Pole-band clamps + cross-arm angles with bolts, close-up | Yes |
| `…_ltd/images/gallery/G-3.jpg` (42.4K) | Same assembly, alternate angle | Yes |
| `…_ltd/images/gallery/G-4.jpg` (36.7K) | Single pole band + bolt set, shallow depth of field | Yes |
| `…_ltd/images/gallery/G-5.jpg` (61.3K) | Stacked pole bands, bulk | **No — unused** |
| `…_ltd/images/gallery/G-6.jpg` (63.4K) | Large pile of pole bands under shed | **No — unused** |
| `…_ltd/images/gallery/G-7.jpg` (52.9K) | Stacked cross arms / angle sections, strong composition | **No — unused** |
| `…_ltd/images/gallery/G-8.jpg` (32.5K) | Single stamped steel cross arm on bench (part marking visible) | **No — unused** |

> `G-7.jpg` and `G-2.jpg` are the two strongest candidates to replace the Unsplash hero and about images.

### Tier 2 — Real infrastructure photography (hero/section backgrounds)
| Old path | Subject |
|---|---|
| `…_ltd/images/main-slider/Slider_1.jpg` (80.4K) | Bangladesh river-crossing transmission towers — distinctive, locally authentic |
| `…_ltd/images/main-slider/Slider_3.jpg` (79.5K) | Bridge with distribution line poles over water — Bangladesh |
| `…_ltd/images/main-slider/Slider_2.jpg` (34.9K) | Pylons at sunset — likely generic stock; lower priority |

### Tier 3 — Certificates & test reports (not images of products, but critical trust assets)
| Old path | Content |
|---|---|
| `public_html/assets/img/certification/ISO-ALHAL.jpg` (2.5M) | **ARMA Line Hardware's own ISO 9001 certificate.** Cert `ABZB15Q20359R0S`, scope "Manufacturing of Pole Fittings", issued 28 Aug 2015 by Beijing New Century Inspection & Certification (BCC/IAF/ANAB). ⚠️ **States ISO9001:2008 and "Valid Until Aug 27, 2018"** — while the company logo claims "ISO 9001:2015". **Request the current, in-date certificate from the client before publishing this scan.** |
| `public_html/assets/img/certification/Test-Report-BUET1.jpg` (228K) | BUET Dept. of Mechanical Engineering, **Test Report of Steel Cross Arm**, 15 May 2017, ref 010746. Tensile 485 / yield 358 MPa, galvanisation 720 g/m², all OK. |
| `public_html/assets/img/certification/Test-Report-BUET.jpg` (527K) | Higher-resolution variant of the above — **prefer this one**. |
| `public_html/assets/img/certification/Test-Report-BSTI.JPG` (149K) | BSTI Physical Testing Wing, ref BSTI/Phy/21(03)/2009, 12 Feb 2009. **Six named products with yield strengths** (see Missing Sections §2). |
| `public_html/assets/img/certification/Test-Report-BSTI 1.jpg` (152K) | Second BSTI page/variant. |
| `public_html/assets/img/certification/DCCI.jpg` (925K) | Dhaka Chamber of Commerce & Industry member certificate (group-level). |

### Tier 4 — Logo
| Old path | Note |
|---|---|
| `…_ltd/images/ARMA-Line&Hardware-Accessories-Ltd-Logo.JPG` (269K) | Full lockup with "ISO 9001: 2015" line. **The new `images/logo.png` is already this same logo** — but it is visibly low-resolution/upscaled with JPEG halftone artefacts, and `index.html` applies `mix-blend-mode:multiply` to hide the white box. A clean vector/transparent-PNG redraw is worth requesting from the client. |
| `…_ltd/images/logo.png`, `logo-3.png`, `logo-small.png` | Small variants (3–5K); check whether any is cleaner than the JPEG. |

### Leadership portraits — low value
`…_ltd/images/resource/{Abdur Razzaque, Engr. Elias Hossain, Md. Mahfuzul Huque, Mohabbat Ali Pathan}.jpg`
— real people, but ~150×130px passport crops. Too small for modern use; request fresh headshots.

### Explicitly NOT worth recovering (template stock, verified by inspection)
- `…_ltd/images/resource/products/1–13.jpg`, `prod-thumb-*.jpg` — **Milwaukee-branded power tools**, template demo shop stock. Not ARMA products.
- `…_ltd/images/gallery/1–16.jpg` (the plain-numbered ones) — stock electrician photos (hands with wire strippers, fuse boxes).
- `…_ltd/images/resource/{service-*, blog-image-*, team-image-*, testi-image-*, author-*, post-thumb-*}.jpg` — template assets.
- `…_ltd/images/brand/1–5.png` — template client logos.
- `…_ltd/images/background/*` — template backgrounds. Note `image-2.html` is a **404 page saved with a `.jpg`-style reference**; the old gallery section's background was already broken in production.

---

## Recommendations (priority order)

### P0 — Do these first
1. **Replace both Unsplash images with ARMA's own photography.**
   Hero → `gallery/G-7.jpg` (stacked cross arms) or `G-2.jpg`; About → `main-slider/Slider_1.jpg`
   (river-crossing towers). A manufacturer illustrated by stock photos of someone else's
   infrastructure undercuts the whole page. These are owned assets sitting unused on disk.

2. **Add a Certifications section.** ISO 9001 + BUET + BSTI + DCCI, as clickable thumbnails
   opening full scans. This is the single highest-conversion addition for a government-tender
   audience, and it substantiates the "BPDB Approved" chip the hero already asserts.
   *Blocker:* confirm current cert validity first (see P1.1).

3. **Add a product gallery section** using all 8 `G-*.jpg` photos — four of which have never been
   published anywhere. Slots naturally between `#catalogue` and `#contact`.

### P1 — Verify with client before publishing
1. **ISO certificate is expired on its face** (2008 standard, valid until 27 Aug 2018) while the logo
   claims ISO 9001:2015. Obtain the current certificate. **Do not publish the 2015-issued scan as
   current evidence.**
2. **Confirm director titles** — old site and `our-people.php` disagree on Razzaque and Pathan's roles.
3. **Confirm the manufacture-vs-supply split.** ISO scope covers pole fittings manufacturing only;
   transformers/MCCBs/insulators are presumably imported. Getting this wrong on a tender site is a
   compliance risk, not just a copy issue.

### P2 — Content enrichment
4. **Split the catalogue into "We Manufacture" and "We Supply / Import."** Populate the manufacturing
   side with the seven BSTI/BUET-verified SKUs and their test-certified strengths. Verified spec data
   is rare and highly persuasive to procurement engineers.
5. **Add "100+ Items Manufactured"** to the stats row (from old About copy) — stronger than
   "8 Product Categories".
6. **Add the full plant address** (Alipura, Bhober Chor, Gazaria, Munshiganj) to the Munshiganj
   location chip.
7. **Add business hours** (Sat–Thu 07:00–21:00) to the contact section.

### P3 — Housekeeping
8. **Source a clean logo.** Current `images/logo.png` is an upscaled JPEG-artefacted scan masked with
   `mix-blend-mode:multiply`. Request vector/transparent PNG.
9. **Request fresh leadership headshots** if a team section is wanted; the ~150px originals are unusable.
10. **Do not port any other old page.** All remaining old pages are unmodified template with lorem
    ipsum, a fake phone number (`700-789-3456`), fictional staff, Milwaukee tool product listings,
    and about-us copy describing a car garage. Eight of them are literally saved 404 error pages.
    Recreating them would actively damage credibility.
11. **Drop the old "services" list entirely** ("shortcircuit repaire", "faulty and old wiring", …) —
    misspelt template text describing electrical repair work, which is not this company's business.
12. **Drop the old testimonials** — three identical sentences attributed to people including an
    actual ARMA director. Fabricated; a liability if republished.
