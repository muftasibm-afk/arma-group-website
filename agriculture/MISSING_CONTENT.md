# ARMA Agriculture — Missing Content Audit (Old Site vs New Site)

Audit date: 2026-08-09
Old site: `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/`
New site: `/Users/rahmanwolied/Documents/Work/ARMA/arma-group-website/agriculture/`

---

## Old Site Status (minimal / no dedicated content)

**Confirmed: the old site has no dedicated Agriculture page.**

`arma-old-site/public_html/arma-agriculture.php` is 64 bytes — literally nothing but:

```php
<?php include 'header.php';?>



<?php include 'footer.php';?>
```

No heading, no body, no sections. It renders as an empty shell between the shared header and footer.

The nav entries in `header.php:111` and `header.php:163` list `ARMA AGRICULTURE LTD` but point at `href="#"` — the link was never wired up. So the concern was never reachable as a page at all.

**`our-concern.php` is empty too** (70 bytes, identical `include header` + `include footer` shell with no body). The "Our Concern" hub page that would have listed the sister companies was never built either — the concern cards that carry the agriculture blurb live on the homepage `index.php` instead. So there is no separate concerns landing page to mine for content.

### What old agriculture content actually exists

All real content lives in **one blurb inside the group homepage**, `index.php:129-148`, in the "Our Concern" card grid. This is the single most valuable artifact from the old site. Full text (typos and SEO-spam injections preserved, see note below):

> **ARMA Agriculture Limited** started its compare and contrast journey in the year 2005 with a plan to produce some agro-based value added products for local and international market. To set up a plant or factory, land is the most important essay writers issue for realization of a project. We have taken govt. permission to purchase 40 acres (4000 decimals) of land. Aagriccordingly we already purchased 21 acres (2100 decimals) essay writers land and rest of the land can be procured at short notice.
>
> The project is located on plots measuring 1400 decimals land at Vill- Sholeasha Bazar, Upazilla- Gangachora and District- Rangpur. The land is attached to Rangpur-Syedpur high way and beside the Tista Barage canal (52 miles long). It is about 13km far from zero point Rangpur, about 550 km from Chittagong sea port and 430 km from Mongla sea port. Indian border Changrabanda is about 160 km pay for essay writing from the project site. Hilli border Joypurhut is almost 200 km from there. The road, telecommunication network of the project site is excellent.
>
> All infrastructural facilities like water, power, skilled labor, communication etc. are available at the site. In near future gas connectivity will be available to the project site. The area of land is adequate and suitable for any project. For future extension more than 100 acres (10000 decimal) land can be purchased through proper litigation. A composite agricultural complex can be set up in the area and the process is already on.
>
> In the mean time we have also purchased necessary land at Alipura, Voberchar, Upazilla-Gozaria, District-Munshiganj beside Dhaka-Chittagong Highway and adjacent to unit-1 of our **ARMA LINE Hardware & Accessories Ltd** to establish a Dairy Farm. We hope to start operation of the farm within a very short time.

**Note on the old text quality:** the old page was compromised by SEO spam injection — the phrases "compare and contrast", "essay writers" (x2), "pay for essay writing", and the mangled word "Aagriccordingly" are injected spam, not real copy. Do not copy this text verbatim. The new site correctly rewrote it.

### Other old-site agriculture mentions (passing only, no unique content)

| File | Nature |
|---|---|
| `index.php:10` | "Agriculture" named in the group intro sentence |
| `slider.php:31` | Homepage slider uses `ARMA_Agriculture_banner.png` |
| `our-people.php:239` | A Director is listed as "Director, ARMA Agriculture Ltd." (name is in surrounding markup) |
| `our-people.php:60` | A second, commented-out Agriculture director entry |
| `chairman-message.php:20-21` | Chairman names Agriculture as a core sector |
| `our-values.php:19` | Values statement names the Agriculture sector |
| `armarealestateltd/*.php` | Same boilerplate repeated in the real-estate sub-site |

**Content lost in the rebuild that had real value:** the director/leadership attribution from `our-people.php` (an Agriculture Ltd. Director is named there but has no counterpart anywhere on the new Agriculture site).

---

## New Site Sitemap

Single-page site. `index.html` (24.7 KB, all CSS and JS inlined — `css/` and `js/` contain only `.gitkeep`, so the README's "split styles here" step has not been done).

| # | Section | `id` | In nav | Content |
|---|---|---|---|---|
| 1 | Nav | — | — | Logo (`images/logo.png`) → `../group/index.html`; links About / Our Site / Products / Get in Touch; Group back-link; theme switch mount; hamburger |
| 2 | Hero | `#home` | — | Kicker "Agriculture · Est. 2005 · Ashulia"; H1 "From the soil of Ashulia, to the world."; sub-copy re 40-acre site beside Tista Barage Canal; CTAs → Products, Contact. Parallax background |
| 3 | Stats bar | — | — | 3 GSAP count-up figures: **2005** Year Founded · **40** Acres Permitted · **13** Km from Ashulia |
| 4 | About | `#about` | ✅ | Blob-masked image + 2 paragraphs (2005 founding, Ashulia siting, 1,400 decimals at Sholeasha Bazar, 40 acres permitted / 21 secured) |
| 5 | Our Site | `#site` | ✅ | Single card "Ashulia — Main Site": address, highway adjacency, Tista Barage Canal, 13km/160km distances, Google Maps link |
| 6 | Products | `#products` | ✅ | 3 cards: Value-Added Agro Products · Dairy Farm Products · Export Pathways |
| 7 | Contact | `#contact` | ✅ | Head office address, email, phone; Formspree form (`mykabdyk`) with Name / Email / Enquiry Type / Message |
| 8 | Footer | — | — | Brand, links (Group / About / Products / Contact), © 2025 |

**Shared dependencies:** `../shared/css/theme-switch.css`, `../shared/js/theme-switch.js`, GSAP + ScrollTrigger via cdnjs, Google Fonts (Fraunces + Inter).

### Sections that exist on sibling concern sites but not here

The `site-grid` is forced to `grid-template-columns:1fr` with a single card, and the "Our Site" section holds only the Ashulia location — the **Munshiganj dairy farm land is described in Products but has no location card**, despite the old copy documenting it specifically (Alipura, Voberchar, Gozaria, Munshiganj, adjacent to ARMA Line Hardware unit-1).

Also absent vs. the old material: leadership/director, any gallery, any project-status or timeline section, and any coverage of the live cattle operation (see Potential Content Sources).

---

## Missing / Unused Original Images (old file paths)

`agriculture/images/` currently contains only `favicon.png`, `logo.png`, and `.gitkeep`. **Zero old-site photography was carried over.** All 8 old agriculture images are unused:

| Old path | Dimensions | What it shows | Verdict |
|---|---|---|---|
| `assets/img/slider/group/ARMA_Agriculture_banner.png` | 1140×600 | **Real photo of the actual ARMA Agriculture Ltd. facility gate** — green signboard "আরমা এগ্রিকালচার লি.", brick boundary wall, tiled gatehouse, sliding gate, bougainvillea | ⭐ **Highest value — recover** |
| `assets/img/our-concern/ARMA_Agriculture.png` | 360×235 | Same gate photo, cropped tighter and low-res | Recover only if the 1140×600 is unusable |
| `img/our-concern/agriculture.png` | 360×235 | Duplicate of the above (legacy `img/` tree) | Duplicate |
| `assets/img/our-concern/agriculture.png` | 360×235 | Duplicate | Duplicate |
| `assets/img/property/agriculture.jpg` | 1600×470 | Generic green paddy field with a thatched hut — **stock photo, not ARMA property** | Skip |
| `img/property/agriculture.jpg` | 1600×470 | Duplicate | Skip |
| `assets/img/slider/group/agriculture.png` | 1200×500 | Generic slider banner | Skip |
| `img/slider/group/agriculture.png` | 1200×500 | Duplicate | Skip |

Only 3 distinct images exist across the 8 files; only **one** (the facility gate) is genuine ARMA property photography.

### ⚠️ The gate signboard resolves the Rangpur / Ashulia contradiction

The Bangla signboard in the banner photo reads:

> **আরমা এগ্রিকালচার লি.** (আরমা গ্রুপের একটি প্রতিষ্ঠান)
> **বঙ্গবন্ধু সড়ক, চারাবাগ, আশুলিয়া, সাভার, ঢাকা**
> — Bangabandhu Sarak, Charabagh, Ashulia, Savar, Dhaka

This is photographic confirmation that the operating facility is at **Ashulia, Savar** — matching the new site, **not** the old text's Rangpur. The old blurb's Rangpur description (Sholeasha Bazar / Gangachora / Rangpur-Syedpur highway / 13 km from zero point Rangpur) is a *separate, older land holding* — or simply stale.

**But the new site has merged the two incompatibly.** It keeps the Ashulia name while retaining Rangpur-specific facts:

- `index.html:187` and `:230` — "beside the Tista Barage Canal" — the Tista Barrage is in **Rangpur**, ~300 km from Ashulia. Geographically impossible at the Ashulia site.
- `index.html:213`, `:229` — "Sholeasha Bazar" and "adjacent to the Ashulia-Saidpur highway". Sholeasha Bazar is in Rangpur; the Saidpur highway is a Rangpur road. The new copy appears to have done a find-and-replace of "Rangpur" → "Ashulia", producing a road name ("Ashulia-Saidpur Highway") that does not exist.
- `index.html:199`, `:231` — "13 km from Ashulia" is a straight carry-over of "13 km from zero point Rangpur".
- `index.html:228` correctly gives the real address from the signboard: "Bangabandhu Sarak, Charabagh, Ashulia District, Savar" (note: Ashulia is a *union/area*, not a district — should be "Savar, Dhaka").

**This needs a factual decision from the client, not a copy edit.** Either the company has two sites (Rangpur land bank + operating Ashulia facility) and both should be presented, or the Rangpur material is obsolete and the canal/Sholeasha/Saidpur references must be deleted outright.

The group hub at `../group/index.html:583` still says *"Launched agro-industrial venture in **Rangpur** — 40 acres"*, directly contradicting the Agriculture site's Ashulia framing. One of the two is wrong and they must be reconciled.

---

## Unresolved Placeholder Images in New Site

**No literal `PLACEHOLDER_*` strings remain in `index.html`** — the README's step 4 was nominally completed. However, it was completed by pointing at **remote URLs rather than local files**, which leaves two real problems:

| Location | Reference | Problem |
|---|---|---|
| `index.html:56` (hero background) | `https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&...` | **Unsplash stock photo, not ARMA property.** The hero of the company's own site shows someone else's farm. Should be the real facility. Also an external runtime dependency. |
| `index.html:206` (about image) | `https://github.com/muftasibm-afk/arma-group-website/blob/main/images/agriculture-about.jpg?raw=true` | **Hotlinked from a personal GitHub repo** — returns HTTP 302 and depends on a third-party account staying public. Will break if the repo is renamed, made private, or the account is deleted. Also has **no `alt` attribute**. |

Both are effectively unresolved placeholders in substance. Neither image is stored in `agriculture/images/`.

The same Unsplash URL is reused on the group hub (`../group/index.html:663`) as the Agriculture sector panel thumbnail — so the stock photo problem spans two pages.

---

## Potential Content Sources (cattle / agriculture data files found outside the website)

Located in `/Users/rahmanwolied/Documents/Work/ARMA/discarded/` — **not** website files, but they document a real, active livestock business the site says almost nothing about.

| File | Size | Nature |
|---|---|---|
| `ARmA Agriculture Ltd._compressed.pdf` | 4.7 MB | ~9 pages, **scanned images, no text layer**. Likely a company profile / project proposal — the most likely source of authoritative Agriculture copy. Needs OCR or manual reading. |
| `Arma Cattle data.pdf` | 41.5 MB | ~50 pages, ~173 embedded images. Scanned. Likely per-animal records with photos. |
| `cattledata.pdf` | 32.4 MB | ~47 pages, ~43 images. Scanned. Overlaps with the above. |
| `cattle-data.csv` | 15.2 KB | **78 records of real, structured herd data.** Machine-readable. |
| `cattle_data.csv` | 70 B | Header row only, no data — an empty template (`cattle no, live weight (kg), purchase price per kg, date, location, status`). |

### What `cattle-data.csv` actually contains

Fields: `id, cattleNumber, name, gender, cattlePurchaseId, cattleSaleId, cattleClass, imageUrl, isQuarantined, isPregnant, isLactating, isInseminated, healthStatus, healthNotes, isVaccinated, createdAt, updatedAt, purchaseDate, purchasePricePerKg, liveWeight, meatPercentage, fatPercentage, purchaseLocation`

78 head of cattle, with:

- **Grading:** SILVER 67 · GOLD 10 · PLATINUM 2
- **Health status:** HEALTHY 69 · SICK 6 · DEAD 4
- **Purchase locations:** Choubaria Hat 30 · Munshiganj 17 · Hargoz Hat 8 · Mataji Hat 8 · Manikganj 11+5
- **Per-animal metrics:** live weight (kg), purchase price per kg, meat %, fat %
- **Breeding/lactation tracking:** pregnancy, lactation, insemination, vaccination, quarantine flags
- Records dated **July 2025**

Note the `imageUrl` column exists but is empty across all rows — the herd photography likely lives in the two scanned cattle PDFs.

### Why this matters for the site

The new site mentions dairy in exactly one 20-word product card ("Dairy Farm Products — Establishing dairy operations in Munshiganj..."), phrased as a *future* plan. The data shows a **live, operating, individually-tracked herd of 78 cattle**, with purchases sourced from Munshiganj — matching the old text's Munshiganj dairy-farm land. The dairy/livestock arm is materially under-represented: it is the business's most concrete, best-documented activity and gets the least space.

Concrete sections this data could support: a Livestock / Dairy Farm page; a herd-scale stat ("78 head", "3 grading tiers"); a "how we source" section naming the cattle markets (Choubaria, Hargoz, Mataji Hat); an animal-welfare / herd-health section (vaccination, quarantine, veterinary tracking — 88% healthy); and genuine on-farm photography extracted from the scanned PDFs.

---

## Recommendations (priority order)

### P0 — Factual correctness (blocking; the site currently states things that cannot be true)

1. **Resolve Rangpur vs. Ashulia with the client.** Determine whether these are two sites or whether Rangpur is obsolete. This gates items 2 and 3.
2. **Remove or correct the geographically impossible claims.** The Tista Barage Canal (`index.html:187`, `:230`), "Sholeasha Bazar" (`:213`), and the non-existent "Ashulia-Saidpur Highway" (`:229`) cannot coexist with an Ashulia location. Same for "13 km from Ashulia" (`:199`, `:231`) — 13 km from *what*?
3. **Reconcile the group hub.** `../group/index.html:583` says Rangpur; the Agriculture site says Ashulia. Fix whichever is wrong so the two pages agree.
4. **Fix the address on `index.html:228`** — "Ashulia District, Savar" is not a real administrative unit. The signboard reads "Bangabandhu Sarak, Charabagh, Ashulia, Savar, Dhaka".

### P1 — Image integrity (broken-by-design references)

5. **Recover `assets/img/slider/group/ARMA_Agriculture_banner.png` (1140×600)** from the old site into `agriculture/images/`. It is the only genuine photo of the company's own facility that exists anywhere, and it is currently unused while a stock photo occupies the hero.
6. **Replace the hotlinked GitHub image** (`index.html:206`) with a local file in `images/`. Hotlinking a personal repo is a live outage waiting to happen. Add an `alt` attribute while you are there.
7. **Replace the Unsplash hero** (`index.html:56`) with real ARMA farm photography — and the matching Unsplash thumbnail on `../group/index.html:663`.

### P2 — Recover lost content

8. **OCR `ARmA Agriculture Ltd._compressed.pdf`** (9 pages, scanned). This is the most likely source of authoritative, non-spam company copy — the old site's only text blurb is SEO-compromised and should not be reused as-is.
9. **Add a Munshiganj / Dairy Farm location card** to the `#site` section. The old text documents it specifically (Alipura, Voberchar, Gozaria, Munshiganj, adjacent to ARMA Line Hardware unit-1) and the section is currently a single-card grid with room for it.
10. **Restore Agriculture leadership.** `our-people.php:239` names a Director of ARMA Agriculture Ltd.; the new site has no leadership content at all.

### P3 — Build out the under-represented livestock arm

11. **Expand dairy/livestock from one card into a real section**, backed by `cattle-data.csv`: herd size, sourcing markets, grading tiers, health and breeding programme.
12. **Extract usable herd photography** from `Arma Cattle data.pdf` / `cattledata.pdf` (~216 embedded images between them) to replace stock imagery site-wide.
13. **Update the dairy tense.** The site says dairy is being "established" (future); the July 2025 herd records show it is operating.

### P4 — Housekeeping

14. **Complete the README's rebuild steps.** `css/` and `js/` hold only `.gitkeep`; all styles and scripts are still inlined in `index.html`. Steps 1–3 (`js/config.js`, `css/site.css`, `js/site.js`, matching `../real-estate/`) are outstanding.
15. **Wire the "Products" nav label to reality** once the livestock section lands, and consider whether a single-page layout still fits the expanded content.

---

## Files Referenced

- `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/arma-agriculture.php` (empty, 64 B)
- `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/index.php` (lines 129–148 — the only real agriculture copy)
- `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/header.php` (lines 111, 163 — dead nav links)
- `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/our-people.php` (line 239 — Agriculture director)
- `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/assets/img/slider/group/ARMA_Agriculture_banner.png` (the facility gate photo)
- `/Users/rahmanwolied/Documents/Work/ARMA/arma-group-website/agriculture/index.html`
- `/Users/rahmanwolied/Documents/Work/ARMA/arma-group-website/group/index.html` (line 583 — conflicting Rangpur claim)
- `/Users/rahmanwolied/Documents/Work/ARMA/discarded/` (PDFs + cattle CSVs)
