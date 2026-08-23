# ARMA Real Estate — Missing Content Audit (Old Site vs New Site)

**Audit date:** 2026-08-09
**Old site:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/armarealestateltd/`
**New site:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-group-website/real-estate/`

## Headline Findings

| Metric | Old site | New site | Gap |
|---|---|---|---|
| Individual project pages | 46 | 10 | **36 missing** |
| Projects in live data source (`content/projects.json`) | — | 10 | — |
| Original project photographs on disk | ~100 | **0** | **~100 unused** |
| Total original image assets (151 MB) | 154 files | 3 files (logo/favicon/.gitkeep) | **151 unused** |
| Projects using stock/placeholder imagery | 0 | **10 of 10 (100%)** | — |
| Standalone content pages | 13 | 3 | **9 missing/merged** |

> **The single most important finding:** the new site's `images/` directory contains only `logo.png`, `favicon.png`, and `.gitkeep`. **Not one** original ARMA project photograph was migrated. All 10 projects in the new site use either an Unsplash stock URL (7) or an unresolved `PLACEHOLDER_IMAGE_*` string (3). Meanwhile 151 MB of original project photography sits unused in the old site tree.

---

## Old Site Sitemap

### Content pages (from `header.php` navigation)

| Page | File | Content summary |
|---|---|---|
| Home | `index.php` | About blurb, 3 project-category tiles, advertise banners, gallery banner |
| Mission & Vision | `mission-vision.php` | Full mission statement, commitment list (6 items), vision statement |
| Our Values | `our-values.php` | Commitment / Integrity / Responsibility value pillars |
| Our Strength | `our-strength.php` | Employee & customer strength narrative, 7 core strength bullets |
| Chairman's Message | `chairman-message.php` | Full signed message from Abdur Razzaque, Chairman, ARMA GROUP + portrait |
| About Us | `about.php` | Company history — formed 2006, commercial & residential development |
| Completed Project | `completed_project.php` | Listing — 32 linked projects |
| On Going Project | `on_going_project.php` | Listing — 7 projects |
| Upcoming Project | `upcoming_project.php` | Listing — 2 projects |
| Gallery | `gallery.php` | 21-image photo gallery (site/handover photography) |
| Certification | `certrfication.php` | ISO 9001 + REHAB certificates (3 scans) |
| Career | `career.php` | Careers table — 5 open posts with detail links |
| Contact | `contact.php` | Contact form (PHPMailer/SMTP) + map |

Supporting/partials: `header.php`, `footer.php`, `slider.php`, `project.php`, `project-details.php`.
Legacy/unused: `index_1.php`, `project_old.php`, `gallery_old.php`, `#project.php`, `#on_going_project.php`, `slider - Copy.php`, `arma_.php`.

### Full project list (46 projects)

Status is inferred from which listing page references the project. Category is residential unless the name indicates otherwise (Tower/Complex → commercial).

#### Completed / Handed over (32)

| # | Project | Location | Land | Units | Detail page | Original image(s) |
|---|---|---|---|---|---|---|
| 1 | ARMA Complex | Banasree, Dhaka | 3.14 Katha | — | `arma_complex.php` | `images/all-project/completed-project/ARMA_COMPLEX_BANASREE.png` |
| 2 | ARMA Mohona | House 19, Rd 01, Block-A, Banasree | 5.00 Katha | 12 | `arma_mohona.php` | `.../completed-project/arma-mohona.jpg` |
| 3 | ARMA Lake View | Plot 731,432 Mirpur DOHS | 8 Katha | 10 | `arma_lake_view.php` | `.../completed-project/4.ARMA LAKE VIEW.jpg`, `arma-lake-view.jpg` |
| 4 | ARMA Prottasa | House 14/52, Rd 18, Sector-04 Uttara | 3 Katha | 07 | `arma_prottasa.php` | `.../completed-project/5.Arma prottasa.jpg`, `arma-prottasa.jpg` |
| 5 | ARMA MM Tower (Majeda Malik Tower) | Plot 1042–1046, Main Rd, Merul Badda | 10.32 Katha | 42 | `arma_mm_tower.php` | `.../completed-project/6.Arma Majeda malik tower.jpg`, `arma-mm-tower.jpg` |
| 6 | ARMA Shaily (Shoily) | House 79/1, Link Rd, Merul Badda | 4.53 Katha | 08 | `arma_shaily.php` | `.../completed-project/7.Arma shaily.JPG`, `arma-shaily-gulshan-link-road.jpg` |
| 7 | ARMA Shapla | House 94, Link Rd, Merul Badda | 6.44 Katha | 14 | `arma_shapla.php` | `.../completed-project/arma-shapla.jpg` |
| 8 | ARMA Noori Nibash | House 1001, Satarpool Rd, Uttar Badda | 10 Katha | 27 | `arma_noori_nibash.php` | `.../completed-project/arma-noori-nibash.jpg` |
| 9 | ARMA Darul Abrar | House 189, Shahjahanpur | 6.15 Katha | 18 | `arma_darul_abrar.php` | `.../completed-project/arma-darul-abrar.jpg` |
| 10 | ARMA Suchana | House 10/12, Rd 04, Block-F, Banasree | 7.00 Katha | 20 | `arma_suchana.php` | `.../completed-project/13.Arma Suchana.jpg`, `arma-suchana.jpg` |
| 11 | ARMA Binti Kutir | Plot 2-4, Block-A, Banasree | 4.00 Katha | 08 | `arma_binti_kutir.php` | `.../completed-project/14.Arma binti kutir.jpg`, `arma-binti-kutir.jpg` |
| 12 | ARMA Kunje Kiron | House A-07, Rd 2 & Avenue, Block-A, Banasree | 3.5 Katha | — | `arma_kunje_kiron.php` | `.../completed-project/15.Armakunje kiron.jpg`, `kunje-kiron.jpg` |
| 13 | ARMA Angon | Plot A/35, Rd 01, Block-A, Banasree | 5.00 Katha | 08 | `arma_angon.php` | `.../completed-project/16.Arma angon.jpg`, `arma-angon.jpg` |
| 14 | ARMA Bilash | Banasree | 5.00 Katha | 09 | `arma_bilash.php` | `.../completed-project/17.Arma bilash.jpg`, `arma-bilash.jpg` |
| 15 | ARMA Wazi Nibash | House 30, Rd 03, Block-D, Banasree | 3.50 Katha | 08 | `arma_wazi_nibash.php` | `.../completed-project/wazi-nibash.jpg` |
| 16 | ARMA Khonika | House 15, Rd 08, Banasree | 3.00 Katha | 06 | `arma_khonika.php` | `.../completed-project/19.Arma khonika.jpg`, `arma-khonika.jpg` |
| 17 | ARMA Jesmin Garden | House 2-4, Rd 09, Block-D, Banasree | 6.00 Katha | 16 | `arma_jesmin_garden.php` | `.../completed-project/jesmin-garden.jpg` |
| 18 | ARMA Khawaja (Khawza Garden) | Plot 24/26, Rd 07, Block-E, Banasree | 6.00 Katha | 14 | `arma_khawaja.php` | `.../completed-project/21.ARMA KHAWAJA-0.jpg`, `arma-khawaja.jpg` |
| 19 | ARMA Yuri | Plot E/20, Rd 08, Banasree | 3.00 Katha | 06 | `arma_yuri.php` | `.../completed-project/arma-yuri.jpg` |
| 20 | ARMA Shamima | House 01, Rd 02, Block-G, Banasree | 3.50 Katha | 08 | `arma_shamima.php` | `.../completed-project/shamima.jpg`, `SHAMIMA_GARDEN.jpeg` |
| 21 | ARMA Madhobee (Madhobi) | House 36, Rd 01, Block-G, Banasree | 3.50 Katha | 08 | `arma_madhobee.php` | `.../completed-project/24.Arma madhobee.JPG`, `arma-madhobee.jpg` |
| 22 | ARMA Jamila Garden | Plot G/22, Rd 04, Banasree | 3.50 Katha | 08 | `arma_jamila_garden.php.php` | `.../completed-project/arma-jamila-garden.jpg` |
| 23 | ARMA Jaimush Garden | House H/10, Rd 08, Banasree | 5.36 Katha | 14 | `arma_jaimush_garden.php.php` | `.../completed-project/arma-jaimush-garden-nc.jpg` |
| 24 | ARMA Shely | House 07, Rd 07, Block-J, Banasree | 3.40 Katha | 08 | `arma_shely.php` | `.../completed-project/arma-shely.jpg` |
| 25 | ARMA Salma Villa (Salma Garden) | House 09, Rd 07, Block-J, Banasree | 3.23 Katha | 12 | `arma_salma_villa.php` | `.../completed-project/28.Arma salma vila.jpg`, `arma-salma-vila.jpg` |
| 26 | ARMA Badhon | House 3/1, Main Rd, Block-L, Goran Banasree | 3.95 Katha | 08 | `arma_badhon.php` | `.../completed-project/arma-badhon.jpg` |
| 27 | ARMA Alam Nibash | House 208, Rd 9/5, Block-E, South Banasree | 3.00 Katha | 08 | `arma_alam_nibash.php` | `.../completed-project/arma-alam-nibash.jpg` |
| 28 | ARMA Suraiya Garden | House 03, Rd 01, Block-B, Banasree | 3.00 Katha | 08 | `arma_suraiya_garden.php` | `.../completed-project/arma-suraiya-garden.jpg` |
| 29 | ARMA Ferdousi Villa | House 11, Main Rd, Block-B, Aftabnagar | 5.00 Katha | 09 | `arma_ferdaousi_villa.php` | `.../completed-project/arma-ferdousi-villa.jpg` |
| 30 | ARMA Nasrin Villa | House 07, Rd 02, Block-C, Aftabnagar | 5 Katha | 12 | `arma_nasrin_villa.php` | `.../completed-project/33.Arma NASRIN Villa.jpg`, `arma-nasrin-villa.jpg` |
| 31 | ARMA Monika | House 21, Rd 03, Block-C, Aftabnagar | 3.50 Katha | 10 | `arma_monika.php` | `.../completed-project/arma-monika.jpg` |
| 32 | ARMA South View | House 38, Rd 01, Block-F, Aftabnagar | 5 Katha | 12 | `arma_south_view.php` | `.../completed-project/arma-south.jpg` |

#### Ongoing (7)

| # | Project | Location | Land | Detail | Original image(s) |
|---|---|---|---|---|---|
| 33 | ARMA Arshi Nagar | House H/3,4,5,7 Main Rd, Meradia Bazar, Banasree | 20 Katha, B+G+15 storied, 6 unit types | `arma_arshi_nagar.php` | `.../ongoing-project/arma-arshi-nagar.png`, `arshi_nagar2.png`, `arshi_nagar3.png`, `.../completed-project/arshi_nagar1.jpg`, `arshi_nagar2.jpg`, `arshi_nagar3.jpg` |
| 34 | ARMA Asma Garden | Banasree | 3.5 Katha, G+7 storied | `arma_asma_garden.php` | `.../ongoing-project/asma_garden/asma garden (2).jpg`, `2.jpg`, `3.jpg`, `.../ongoing-project/Arma_Asma-Gerden_Banasree.png` |
| 35 | **ARMA Jannat Villa** | Aftabnagar, Badda | — | *(no detail page)* | `.../ongoing-project/ARMA_JANNAT_VILLA_AFTABNAGAR_BADDA.jpg` (17 MB), `.png` |
| 36 | ARMA Royal Villa | Aftabnagar | — | `arma_royal_villa.php` | `.../ongoing-project/ARMA_Royal_Villa.jpg`, `.png`, `ARMA_Royal_Villa_old.png` |
| 37 | ARMA Aliya Garden | Aftabnagar | — | `arma_aliya_garden.php` | `.../ongoing-project/ARMA_Aliya_Garden.png` |
| 38 | ARMA Lake Castle | Meradia Bazar, Banasree / Aftabnagar | — | `arma_lake_castle.php` | `.../ongoing-project/ARMA_Lake_Caslte.jpg` (11.8 MB), `.../upcomming-project/Arma-Lake-Castle-1/2/3.png`, `Arma_Lake_Castle.png` |
| 39 | **ARMA Tasnim Paradise** | Aftabnagar | — | *(no detail page)* | `.../ongoing-project/Tasnim_Paradise_3D .jpg` |

#### Upcoming (2)

| # | Project | Location | Land | Units | Detail | Original image |
|---|---|---|---|---|---|---|
| 40 | ARMA Howlader Tower | House A/1,A/3,A/5, Main Rd, Block-A, Aftabnagar | 15 Katha | 14 | `arma_howlader_tower.php` | `.../upcomming-project/arma-howlader-tower.jpg`, `images/slider-img/#Hawlader.jpg` |
| 41 | ARMA Lake Castle *(also listed upcoming)* | Meradia Bazar | — | — | `arma_lake_castle.php` | see #38 |

#### ESHA-branded projects (3) — see cross-reference note below

| # | Project | Location | Land | Units | Detail | Original image(s) |
|---|---|---|---|---|---|---|
| 42 | **ESHA / ARMA Esha Moazzem Nibash** | Aftabnagar | 2.5 Katha, G+6 storied, single unit | `arma_esha_moazzem.php` | `.../ongoing-project/Esha_Moazzem.png`, `Esha_Moazzem.jpg` (3.1 MB), `Esha_Moazzem_old.png`, `#Esha_Moazzem.png`, `.../completed-project/Esha_Moazzem.jpg`, `Esha_Moazzem.png`, `images/slider-img/Esha Moazzem Nibash.png`, `Esha_Moazzem2.png`, `images/advertise/arma_esha_moazzem_nibash-1.jpg` |
| 43 | **ARMA Esha Kanon** | House 36, Rd 03, Block-D, Banasree | 3.50 Katha | 10 | `arma_esha_kanon.php` | *(none found on disk — page has no project photo)* |
| 44 | **ARMA Moazzem Mili Nibash** | House 49/F, Rd 04, Block-F, Aftabnagar | 2.50 Katha | 06 | `arma_moazzem_mili_nibash.php` | `.../completed-project/esha-moazzem-mili-Nibash.jpg` |

#### Additional detail pages without listing-page reference (2)

| # | Project | Location | Land | Units | Detail | Image |
|---|---|---|---|---|---|---|
| 45 | ARMA Sejuty | House 32, Rd 03, Block-C, Banasree | 3.50 Katha | 10 | `arma_sejuty.php` | *(none on disk)* |
| 46 | ARMA Arshi Nagar (root PNGs) | — | — | — | — | `arma_arshi_nagar.png` (885 KB), `arma_arshi_nagar2.png` (475 KB) at site root |

---

## New Site Sitemap

### Pages (3 total)

| Page | Sections present |
|---|---|
| `index.html` | Hero ("Your Dream, Our Expertise"), `#projects-preview` (Featured Residences), `#about`, `#team` (Management & Our Team — all `PLACEHOLDER_TEAM_PHOTO_` / `PLACEHOLDER_NAME`), `#blogs` (PLACEHOLDER_BLOG_TITLE), `#news` (PLACEHOLDER_NEWS_TITLE), `#career`, `#contact` |
| `projects.html` | "Our Projects" grid, filterable, driven by `content/projects.json` |
| `project.html` | Detail template (`?id=slug`) — hero, Video Preview, Project Imagery, Site Coordinates, Related Projects, Download Brochure |

Data source: `content/projects.json` (Decap CMS), with a hardcoded `FALLBACK` array in `js/projects.js:18-132`. Both currently hold the **same 10 projects**.

### Project list (10 total)

| id | Name | Category | Status | Image source |
|---|---|---|---|---|
| `royal-villa` | ARMA Royal Villa | residential | handed-over | Unsplash `photo-1512917774080` (stock) |
| `arshi-nagar` | ARMA Arshi Nagar | residential | handed-over | Unsplash `photo-1545324418` (stock) |
| `aliya-garden` | ARMA Aliya Garden | residential | ongoing | Unsplash `photo-1560518883` (stock) |
| `asma-garden` | ARMA Asma Garden | residential | handed-over | Unsplash `photo-1567521464` (stock) |
| `moazzem-nibash` | ESHA Moazzem Nibash | residential | handed-over | Unsplash `photo-1486325212` (stock) |
| `alam-nibash` | ARMA Alam Nibash | residential | handed-over | Unsplash `photo-1600596542` (stock) |
| `binti-kuthir` | ARMA Binti Kuthir | residential | ongoing | `PLACEHOLDER_IMAGE_BINTI_KUTHIR` (broken) |
| `kunje-kiron` | ARMA Kunje Kiron | residential | ongoing | `PLACEHOLDER_IMAGE_KUNJE_KIRON` (broken) |
| `angan` | ARMA Angan | residential | upcoming | `PLACEHOLDER_IMAGE_ANGAN` (broken) |
| `arma-tower` | ARMA Commercial Tower | commercial | upcoming | Unsplash `photo-1486406146926` (stock) |

**Note:** `ARMA Commercial Tower` (`arma-tower`, Tejgaon) does **not** exist on the old site under that name — it appears to be a newly invented entry. All its field data is `PLACEHOLDER_*`. Verify with the client whether this is a real project.

Every project also carries unresolved `PLACEHOLDER_ADDRESS_*`, `PLACEHOLDER_LAND_AREA`, `PLACEHOLDER_VIDEO_URL`, `PLACEHOLDER_MAP_COORDINATES_URL`, `PLACEHOLDER_LAT,PLACEHOLDER_LNG` and `PLACEHOLDER_BROCHURE_PDF_URL` values — except `binti-kuthir`, `kunje-kiron` and `angan`, which have real addresses and land areas.

---

## Missing Projects (in old, not in new)

**36 projects** exist on the old site with detail pages and/or photography but are entirely absent from `content/projects.json` and the `FALLBACK` array.

### Completed / handed over — 26 missing

| Project | Old detail page | Original image(s) available |
|---|---|---|
| ARMA Complex | `arma_complex.php` | `images/all-project/completed-project/ARMA_COMPLEX_BANASREE.png` |
| ARMA Mohona | `arma_mohona.php` | `images/all-project/completed-project/arma-mohona.jpg` |
| ARMA Lake View | `arma_lake_view.php` | `images/all-project/completed-project/4.ARMA LAKE VIEW.jpg`, `arma-lake-view.jpg` |
| ARMA Prottasa | `arma_prottasa.php` | `images/all-project/completed-project/5.Arma prottasa.jpg`, `arma-prottasa.jpg` |
| ARMA MM Tower | `arma_mm_tower.php` | `images/all-project/completed-project/6.Arma Majeda malik tower.jpg`, `arma-mm-tower.jpg`, `images/slider-img/Majeda malik tower.png` |
| ARMA Shaily | `arma_shaily.php` | `images/all-project/completed-project/7.Arma shaily.JPG`, `arma-shaily-gulshan-link-road.jpg` |
| ARMA Shapla | `arma_shapla.php` | `images/all-project/completed-project/arma-shapla.jpg` |
| ARMA Noori Nibash | `arma_noori_nibash.php` | `images/all-project/completed-project/arma-noori-nibash.jpg` |
| ARMA Darul Abrar | `arma_darul_abrar.php` | `images/all-project/completed-project/arma-darul-abrar.jpg` |
| ARMA Suchana | `arma_suchana.php` | `images/all-project/completed-project/13.Arma Suchana.jpg` (9.3 MB), `arma-suchana.jpg` |
| ARMA Bilash | `arma_bilash.php` | `images/all-project/completed-project/17.Arma bilash.jpg` (5 MB), `arma-bilash.jpg` |
| ARMA Wazi Nibash | `arma_wazi_nibash.php` | `images/all-project/completed-project/wazi-nibash.jpg` |
| ARMA Khonika | `arma_khonika.php` | `images/all-project/completed-project/19.Arma khonika.jpg`, `arma-khonika.jpg` |
| ARMA Jesmin Garden | `arma_jesmin_garden.php` | `images/all-project/completed-project/jesmin-garden.jpg` |
| ARMA Khawaja | `arma_khawaja.php` | `images/all-project/completed-project/21.ARMA KHAWAJA-0.jpg` (4.9 MB), `arma-khawaja.jpg` |
| ARMA Yuri | `arma_yuri.php` | `images/all-project/completed-project/arma-yuri.jpg` |
| ARMA Shamima | `arma_shamima.php` | `images/all-project/completed-project/shamima.jpg`, `SHAMIMA_GARDEN.jpeg` |
| ARMA Madhobee | `arma_madhobee.php` | `images/all-project/completed-project/24.Arma madhobee.JPG`, `arma-madhobee.jpg` |
| ARMA Jamila Garden | `arma_jamila_garden.php.php` | `images/all-project/completed-project/arma-jamila-garden.jpg` |
| ARMA Jaimush Garden | `arma_jaimush_garden.php.php` | `images/all-project/completed-project/arma-jaimush-garden-nc.jpg`, `images/slider-img/JAIMUSH GARDEN.png` |
| ARMA Shely | `arma_shely.php` | `images/all-project/completed-project/arma-shely.jpg` |
| ARMA Salma Villa | `arma_salma_villa.php` | `images/all-project/completed-project/28.Arma salma vila.jpg`, `arma-salma-vila.jpg` |
| ARMA Badhon | `arma_badhon.php` | `images/all-project/completed-project/arma-badhon.jpg` |
| ARMA Suraiya Garden | `arma_suraiya_garden.php` | `images/all-project/completed-project/arma-suraiya-garden.jpg` |
| ARMA Ferdousi Villa | `arma_ferdaousi_villa.php` | `images/all-project/completed-project/arma-ferdousi-villa.jpg`, `images/slider-img/Ferdushi Villa.png` |
| ARMA Nasrin Villa | `arma_nasrin_villa.php` | `images/all-project/completed-project/33.Arma NASRIN Villa.jpg`, `arma-nasrin-villa.jpg` |
| ARMA Monika | `arma_monika.php` | `images/all-project/completed-project/arma-monika.jpg` |
| ARMA South View | `arma_south_view.php` | `images/all-project/completed-project/arma-south.jpg` |

### Ongoing — 3 missing

| Project | Old detail page | Original image(s) available |
|---|---|---|
| **ARMA Jannat Villa** | *(none — listing only)* | `images/all-project/ongoing-project/ARMA_JANNAT_VILLA_AFTABNAGAR_BADDA.jpg` (**17 MB, largest asset on site**), `.png` (4.8 MB) |
| **ARMA Tasnim Paradise** | *(none — listing only)* | `images/all-project/ongoing-project/Tasnim_Paradise_3D .jpg` |
| ARMA Lake Castle | `arma_lake_castle.php` | `images/all-project/ongoing-project/ARMA_Lake_Caslte.jpg` (11.8 MB), `images/all-project/upcomming-project/Arma-Lake-Castle-1.png`, `-2.png`, `-3.png`, `Arma_Lake_Castle.png`, `images/slider-img/Arma_Lake_Caslte2.png` |

### Upcoming — 1 missing

| Project | Old detail page | Original image(s) available |
|---|---|---|
| ARMA Howlader Tower | `arma_howlader_tower.php` | `images/all-project/upcomming-project/arma-howlader-tower.jpg`, `images/slider-img/#Hawlader.jpg` |

### ESHA-branded — 2 missing (see §6 below)

| Project | Old detail page | Original image(s) available |
|---|---|---|
| **ARMA Esha Kanon** | `arma_esha_kanon.php` | *(no photo on disk)* |
| **ARMA Moazzem Mili Nibash** | `arma_moazzem_mili_nibash.php` | `images/all-project/completed-project/esha-moazzem-mili-Nibash.jpg` |

### Uncategorised — 1 missing

| Project | Old detail page | Original image(s) available |
|---|---|---|
| ARMA Sejuty | `arma_sejuty.php` | *(no photo on disk)* |

---

## Projects With Placeholder/Generic Images (should use original photos)

**All 10 projects in the new site fall into this category.** Seven use Unsplash stock photography of buildings that are not ARMA properties; three point at unresolved placeholder strings that render as broken images.

Prefix all old paths with `arma-old-site/public_html/armarealestateltd/`.

| New project | Current new-site image | Available original photo (old path) |
|---|---|---|
| `royal-villa` — ARMA Royal Villa | Unsplash `photo-1512917774080` **(stock)** | `images/all-project/ongoing-project/ARMA_Royal_Villa.jpg`, `ARMA_Royal_Villa.png`, `ARMA_Royal_Villa_old.png`, `images/advertise/ARMA_Royal_Villa.png` |
| `arshi-nagar` — ARMA Arshi Nagar | Unsplash `photo-1545324418` **(stock)** | `images/all-project/ongoing-project/arma-arshi-nagar.png`, `arshi_nagar2.png`, `arshi_nagar3.png`, `#arma-arshi-nagor.jpg`; `images/all-project/completed-project/arshi_nagar1.jpg`, `arshi_nagar2.jpg`, `arshi_nagar3.jpg`; `images/slider-img/arma_arshi_nagar_combined.png`, `arma_arshi_nagar_combined.jpg`, `arma_arshi_nagar_combined-compressed.jpg`, `arma_arshi_nagar2.png`, `Arshi Nagar.png`, `#Arshi Nagar.png`, `arshinagar_slider_1.png`; `images/advertise/arma_arshi_nagar-1.png`, `arma_arshi_nagar-2.png`; root `arma_arshi_nagar.png`, `arma_arshi_nagar2.png` — **19 originals available** |
| `aliya-garden` — ARMA Aliya Garden | Unsplash `photo-1560518883` **(stock)** | `images/all-project/ongoing-project/ARMA_Aliya_Garden.png`, `images/advertise/ARMA_Aliya_Garden.png` |
| `asma-garden` — ARMA Asma Garden | Unsplash `photo-1567521464` **(stock)** | `images/all-project/ongoing-project/asma_garden/asma garden (2).jpg`, `2.jpg`, `3.jpg`; `images/all-project/ongoing-project/Arma_Asma-Gerden_Banasree.png`; `images/all-project/completed-project/Arma_Asma-Gerden_Banasree.png`; `images/slider-img/Arma-Asma-Gerden-Banasree2.png`, `arma_asma_garden_esha_moazzem2.jpg`; `images/advertise/arma_asma_garden-1.jpg` — **8 originals available** |
| `moazzem-nibash` — ESHA Moazzem Nibash | Unsplash `photo-1486325212` **(stock)** | `images/all-project/ongoing-project/Esha_Moazzem.png`, `Esha_Moazzem.jpg` (3.1 MB), `Esha_Moazzem_old.png`, `#Esha_Moazzem.png`; `images/all-project/completed-project/Esha_Moazzem.jpg`, `Esha_Moazzem.png`; `images/slider-img/Esha Moazzem Nibash.png`, `Esha_Moazzem2.png`; `images/advertise/arma_esha_moazzem_nibash-1.jpg` — **9 originals available** |
| `alam-nibash` — ARMA Alam Nibash | Unsplash `photo-1600596542` **(stock)** | `images/all-project/completed-project/arma-alam-nibash.jpg` |
| `binti-kuthir` — ARMA Binti Kuthir | `PLACEHOLDER_IMAGE_BINTI_KUTHIR` **(broken)** | `images/all-project/completed-project/14.Arma binti kutir.jpg`, `arma-binti-kutir.jpg` |
| `kunje-kiron` — ARMA Kunje Kiron | `PLACEHOLDER_IMAGE_KUNJE_KIRON` **(broken)** | `images/all-project/completed-project/15.Armakunje kiron.jpg` (3.6 MB), `kunje-kiron.jpg` |
| `angan` — ARMA Angan | `PLACEHOLDER_IMAGE_ANGAN` **(broken)** | `images/all-project/completed-project/16.Arma angon.jpg` (2 MB), `arma-angon.jpg` |
| `arma-tower` — ARMA Commercial Tower | Unsplash `photo-1486406146926` **(stock)** | *No old-site equivalent.* Closest real commercial projects are **ARMA MM Tower** (`arma-mm-tower.jpg`) and **ARMA Howlader Tower** (`arma-howlader-tower.jpg`) — confirm whether this entry should be replaced by one of them. |

### Status discrepancies to reconcile

| Project | Old site status | New site status | Note |
|---|---|---|---|
| ARMA Royal Villa | **Ongoing** | `handed-over` | Contradiction — verify |
| ARMA Arshi Nagar | **Ongoing** | `handed-over` | Contradiction — verify |
| ARMA Asma Garden | **Ongoing** | `handed-over` | Contradiction — verify |
| ARMA Binti Kutir | **Completed** | `ongoing` | Contradiction — verify |
| ARMA Kunje Kiron | **Completed** | `ongoing` | Contradiction — verify |
| ARMA Angan | **Completed** | `upcoming` | Contradiction — verify |
| ESHA Moazzem Nibash | Ongoing *and* completed listings | `handed-over` | Old site itself ambiguous |

Six of ten projects carry a status that contradicts the old site. Some may reflect genuine progress since the old site was last updated, but they should be confirmed with the client rather than assumed.

---

## Missing Pages/Sections

| Old page | Content | Status on new site |
|---|---|---|
| **Chairman's Message** (`chairman-message.php`) | Full signed message from **Abdur Razzaque, Chairman, ARMA GROUP** — ~1,700 chars on Bangladesh's economy, ARMA's role in real estate/agriculture/power, "Give the customer value for his money" philosophy. Portrait: `images/director/আব্দুর রাজ্জাক.jpg` | **MISSING ENTIRELY** — no page, no section, no portrait |
| **Certification** (`certrfication.php`) | ISO 9001:2008 + REHAB membership certificates. Scans: `images/certificates/iso-arel.jpg`, `rehab-certificate.jpg`, `REHAB Certificate-2020.jpg`; badges `images/certification/ISO-9001-2008-icon.png`, `iso-image.png` | **MISSING ENTIRELY** — significant trust signal for a real-estate buyer |
| **Gallery** (`gallery.php`) | 21-image photo gallery — site progress, handovers, company events (`images/photo-gallery/`, incl. 10 dated `*-17-02-24.jpeg` images) | **MISSING ENTIRELY** — no gallery page or section |
| **Mission & Vision** (`mission-vision.php`) | Mission statement, 6-point commitment list, vision ("top 10 companies of Bangladesh") | **MISSING** — no equivalent content in `#about` |
| **Our Values** (`our-values.php`) | Commitment / Integrity / Responsibility pillars, ~1,700 chars | **MISSING** — no equivalent section |
| **Our Strength** (`our-strength.php`) | Employee & customer strength narrative + 7 core strength bullets (ethical standards, transparency, empowerment, culture building…) | **MISSING** — no equivalent section |
| **About Us** (`about.php`) | Company history — formed 2006, growth, commercial & residential development, quality commitment | `#about` section exists but content not verified as carried over — **check that the 2006 founding and history narrative are present** |
| **Career** (`career.php`) | Careers table with 5 named posts (Project Engineer, Site Engineer, Accountant, Executive (Commercial), Assistant Store Officer) + per-post detail pages under `career/` | `#career` section exists on `index.html` but **the job listings are gone** — no posts, no detail pages |
| **Contact** (`contact.php`) | Working PHPMailer/SMTP contact form + map | `#contact` section exists — verify the form actually submits (old form used server-side PHP; new site is static) |
| **Completed / Ongoing / Upcoming listings** | Three separate category listing pages | Merged into single `projects.html` with filters — **acceptable consolidation**, but only 10 of 41 projects survive |
| Homepage slider | `slider.php` — rotating hero of `arma_arshi_nagar_combined.png`, `arma_asma_garden_esha_moazzem2.jpg` | Hero exists but uses no original imagery |
| Advertise banners | `images/advertise/` — 6 marketing banners | **MISSING** — none reused |

### Sections new to the new site (no old-site content to populate them)

`#team` (Management & Our Team), `#blogs`, `#news` — all contain only `PLACEHOLDER_TEAM_PHOTO_*`, `PLACEHOLDER_NAME`, `PLACEHOLDER_BLOG_TITLE`, `PLACEHOLDER_NEWS_TITLE`, `PLACEHOLDER_DATE`. The old site has agent/director photography that could partly fill `#team`: `images/agent/` (7 named staff portraits — Abdur Razzaque, Engr. Elias Hossain, Md. Mahfuzul Huque, Mohabbat Ali Pathan, Naimuddin Sentu, Sadiq Rahman (Anik), Sanjida Sultana) and `images/director/` (2 portraits).

---

## Missing/Unused Original Images & Assets

**151 of 154 image files (≈151 MB) are unused.** The new site's `images/` folder holds only `logo.png`, `favicon.png`, `.gitkeep`.

All paths below are relative to `arma-old-site/public_html/armarealestateltd/`.

### Completed-project photography — 46 files, none reused

```
images/all-project/completed-project/13.Arma Suchana.jpg          (9.3 MB)
images/all-project/completed-project/14.Arma binti kutir.jpg
images/all-project/completed-project/15.Armakunje kiron.jpg       (3.6 MB)
images/all-project/completed-project/16.Arma angon.jpg            (2.0 MB)
images/all-project/completed-project/17.Arma bilash.jpg           (5.0 MB)
images/all-project/completed-project/19.Arma khonika.jpg          (1.4 MB)
images/all-project/completed-project/21.ARMA KHAWAJA-0.jpg        (4.9 MB)
images/all-project/completed-project/24.Arma madhobee.JPG         (1.8 MB)
images/all-project/completed-project/28.Arma salma vila.jpg       (1.5 MB)
images/all-project/completed-project/33.Arma NASRIN Villa.jpg     (1.4 MB)
images/all-project/completed-project/4.ARMA LAKE VIEW.jpg         (13.1 MB)
images/all-project/completed-project/5.Arma prottasa.jpg          (1.4 MB)
images/all-project/completed-project/6.Arma Majeda malik tower.jpg
images/all-project/completed-project/7.Arma shaily.JPG            (1.6 MB)
images/all-project/completed-project/Arma_Asma-Gerden_Banasree.png
images/all-project/completed-project/ARMA_COMPLEX_BANASREE.png    (2.9 MB)
images/all-project/completed-project/arma-alam-nibash.jpg
images/all-project/completed-project/arma-angon.jpg
images/all-project/completed-project/arma-badhon.jpg
images/all-project/completed-project/arma-bilash.jpg
images/all-project/completed-project/arma-binti-kutir.jpg
images/all-project/completed-project/arma-darul-abrar.jpg
images/all-project/completed-project/arma-ferdousi-villa.jpg
images/all-project/completed-project/arma-jaimush-garden-nc.jpg
images/all-project/completed-project/arma-jamila-garden.jpg
images/all-project/completed-project/arma-khawaja.jpg
images/all-project/completed-project/arma-khonika.jpg
images/all-project/completed-project/arma-lake-view.jpg
images/all-project/completed-project/arma-madhobee.jpg
images/all-project/completed-project/arma-mm-tower.jpg
images/all-project/completed-project/arma-mohona.jpg
images/all-project/completed-project/arma-monika.jpg
images/all-project/completed-project/arma-nasrin-villa.jpg
images/all-project/completed-project/arma-noori-nibash.jpg
images/all-project/completed-project/arma-prottasa.jpg
images/all-project/completed-project/arma-salma-vila.jpg
images/all-project/completed-project/arma-shaily-gulshan-link-road.jpg
images/all-project/completed-project/arma-shapla.jpg
images/all-project/completed-project/arma-shely.jpg
images/all-project/completed-project/arma-south.jpg
images/all-project/completed-project/arma-suchana.jpg
images/all-project/completed-project/arma-suraiya-garden.jpg
images/all-project/completed-project/arma-yuri.jpg
images/all-project/completed-project/arshi_nagar1.jpg             (2.0 MB)
images/all-project/completed-project/arshi_nagar2.jpg             (1.9 MB)
images/all-project/completed-project/arshi_nagar3.jpg             (1.8 MB)
images/all-project/completed-project/Esha_Moazzem.jpg             (1.4 MB)
images/all-project/completed-project/Esha_Moazzem.png
images/all-project/completed-project/esha-moazzem-mili-Nibash.jpg
images/all-project/completed-project/jesmin-garden.jpg
images/all-project/completed-project/kunje-kiron.jpg
images/all-project/completed-project/SHAMIMA_GARDEN.jpeg
images/all-project/completed-project/shamima.jpg
images/all-project/completed-project/wazi-nibash.jpg
```

### Ongoing-project photography — 18 files, none reused

```
images/all-project/ongoing-project/#arma-arshi-nagor.jpg
images/all-project/ongoing-project/#Esha_Moazzem.png
images/all-project/ongoing-project/ARMA_Aliya_Garden.png
images/all-project/ongoing-project/Arma_Asma-Gerden_Banasree.png
images/all-project/ongoing-project/ARMA_JANNAT_VILLA_AFTABNAGAR_BADDA.jpg  (17.0 MB — largest asset)
images/all-project/ongoing-project/ARMA_JANNAT_VILLA_AFTABNAGAR_BADDA.png  (4.8 MB)
images/all-project/ongoing-project/ARMA_Lake_Caslte.jpg                    (11.8 MB)
images/all-project/ongoing-project/ARMA_Royal_Villa_old.png
images/all-project/ongoing-project/ARMA_Royal_Villa.jpg
images/all-project/ongoing-project/ARMA_Royal_Villa.png                    (4.1 MB)
images/all-project/ongoing-project/arma-arshi-nagar.png
images/all-project/ongoing-project/arshi_nagar2.png
images/all-project/ongoing-project/arshi_nagar3.png
images/all-project/ongoing-project/asma_garden/2.jpg
images/all-project/ongoing-project/asma_garden/3.jpg
images/all-project/ongoing-project/asma_garden/asma garden (2).jpg
images/all-project/ongoing-project/Esha_Moazzem_old.png
images/all-project/ongoing-project/Esha_Moazzem.jpg                        (3.1 MB)
images/all-project/ongoing-project/Tasnim_Paradise_3D .jpg
```

### Upcoming-project photography — 5 files, none reused

```
images/all-project/upcomming-project/Arma_Lake_Castle.png
images/all-project/upcomming-project/arma-howlader-tower.jpg
images/all-project/upcomming-project/Arma-Lake-Castle-1.png
images/all-project/upcomming-project/Arma-Lake-Castle-2.png
images/all-project/upcomming-project/Arma-Lake-Castle-3.png
```

### Category banners — 3 files, none reused

```
images/all-project/completed-project.jpg
images/all-project/on-going-project.jpg
images/all-project/up-comming-project.jpg
```

### Marketing / advertise banners — 6 files, none reused

```
images/advertise/ARMA_Aliya_Garden.png
images/advertise/arma_arshi_nagar-1.png
images/advertise/arma_arshi_nagar-2.png
images/advertise/arma_asma_garden-1.jpg
images/advertise/arma_esha_moazzem_nibash-1.jpg
images/advertise/ARMA_Royal_Villa.png
```

### Homepage slider imagery — 16 files, none reused

```
images/slider-img/#Arshi Nagar.png
images/slider-img/#Hawlader.jpg
images/slider-img/arma_arshi_nagar_combined-compressed.jpg
images/slider-img/arma_arshi_nagar_combined.jpg
images/slider-img/arma_arshi_nagar_combined.png
images/slider-img/arma_arshi_nagar2.png
images/slider-img/arma_asma_garden_esha_moazzem2.jpg
images/slider-img/Arma_Lake_Caslte2.png
images/slider-img/Arma-Asma-Gerden-Banasree2.png
images/slider-img/Arshi Nagar.png
images/slider-img/arshinagar_slider_1.png
images/slider-img/Esha Moazzem Nibash.png
images/slider-img/Esha_Moazzem2.png
images/slider-img/Ferdushi Villa.png
images/slider-img/JAIMUSH GARDEN.png
images/slider-img/Majeda malik tower.png
images/slider-img/slider_2.png
```

### Photo gallery — 21 files, none reused

```
images/photo-gallery/01-17-02-24.jpeg   images/photo-gallery/06-17-02-24.jpeg
images/photo-gallery/02-17-02-24.jpeg   images/photo-gallery/07-17-02-24.jpeg
images/photo-gallery/03-17-02-24.jpeg   images/photo-gallery/08-17-02-24.jpeg
images/photo-gallery/04-17-02-24.jpeg   images/photo-gallery/09-17-02-24.jpeg
images/photo-gallery/05-17-02-24.jpeg   images/photo-gallery/10-17-02-24.jpeg
images/photo-gallery/1.jpg   images/photo-gallery/2.JPG (4.0 MB)   images/photo-gallery/3.JPG (4.0 MB)
images/photo-gallery/4.JPG (4.2 MB)   images/photo-gallery/5.JPG (4.3 MB)   images/photo-gallery/6.JPG
images/photo-gallery/6new.jpg   images/photo-gallery/8.JPG (4.6 MB)   images/photo-gallery/9.JPG (1.7 MB)
images/photo-gallery/10.jpg   images/photo-gallery/11.JPG (3.0 MB)
images/photo-gallery/banner.jpg
images/photo-gallery/6ph.psd   (source PSD — not for web, but keep for archive)
```

### Certificates & certification badges — 5 files, none reused

```
images/certificates/iso-arel.jpg
images/certificates/rehab-certificate.jpg
images/certificates/REHAB Certificate-2020.jpg
images/certification/ISO-9001-2008-icon.png
images/certification/iso-image.png
```

### People photography — 9 files, none reused (candidates for `#team`)

```
images/agent/Abdur Razzaque.jpg
images/agent/Engr. Elias Hossain.jpg
images/agent/Md. Mahfuzul Huque.jpg
images/agent/Mohabbat Ali Pathan.jpg
images/agent/Naimuddin Sentu.jpg
images/agent/Sadiq Rahman (Anik).jpg
images/agent/Sanjida Sultana.jpg
images/director/আব্দুর রাজ্জাক.jpg          (Chairman portrait — Abdur Razzaque)
images/director/ড. এম এ কে নেওয়াজ.png       (Dr. M A K Newaz)
```

### Misc site chrome — 9 files

```
images/about.jpg                images/agent/agent-bg.jpg      images/agent/banner.jpg
images/contact-map.jpg          images/filter-box-shadow.png   images/map-bg.png
images/map.jpg                  images/map.png                 images/started-bg.jpg
images/subscribe-bg.jpg         images/logo/ARMA-Real-Estate-Logo.png
```

### Root-level project renders — 2 files

```
arma_arshi_nagar.png    (885 KB)
arma_arshi_nagar2.png   (475 KB)
```

### Note on file hygiene

Several originals need attention before reuse: files with `#` prefixes (`#Arshi Nagar.png`, `#Hawlader.jpg`, `#Esha_Moazzem.png`) will break URLs; filenames with spaces and mixed case (`asma garden (2).jpg`, `Tasnim_Paradise_3D .jpg` — note trailing space) need normalising; two directory names are misspelled upstream (`upcomming-project`, `ARMA_Lake_Caslte.jpg`). Several assets exceed 10 MB and must be resized/compressed before going live.

---

## Recommendations (priority order)

### P0 — Blocking, do before any launch

1. **Migrate the original photography.** Copy the ~100 project photographs from `images/all-project/` into `arma-group-website/real-estate/images/projects/`, normalising filenames to kebab-case slugs matching each project `id`. Compress to web scale (target ≤400 KB, max-width 1920px) — several originals are 9–17 MB and will make the site unusable on mobile.
2. **Replace all 7 Unsplash stock URLs** in `content/projects.json` and the `FALLBACK` array in `js/projects.js:18-132` with real ARMA photos. Showing stock photography of other companies' buildings on a property developer's site is a credibility and arguably a legal problem.
3. **Fix the 3 broken placeholder images** (`binti-kuthir`, `kunje-kiron`, `angan`) — all three have original photos available and are currently rendering as broken images.

### P1 — Content completeness

4. **Add the 36 missing projects** to `content/projects.json`. Every one has a name, address, land area and unit count recoverable from its old detail page (tabulated above), and 33 of the 36 have original photography. This takes the site from 10 to 46 projects.
5. **Restore the Chairman's Message** — a signed statement from Abdur Razzaque is a primary trust asset and is currently absent entirely. Portrait available at `images/director/আব্দুর রাজ্জাক.jpg`.
6. **Restore the Certification section** — ISO 9001:2008 and REHAB membership are the strongest buyer-trust signals a Bangladeshi developer has. Three certificate scans are available.
7. **Restore the Gallery** — 21 original site/handover/event photographs, currently unused.

### P2 — Section restoration

8. **Restore Mission & Vision, Our Values, Our Strength.** All three have complete copy on the old site and no equivalent on the new one. They can be folded into `#about` as sub-sections rather than separate pages.
9. **Verify `#about` carries the company history** — specifically the 2006 founding date and the development-and-construction narrative.
10. **Restore Career listings.** The `#career` section exists but is empty; the old site had 5 named posts with detail pages. Confirm with the client which roles are currently open rather than republishing the 2018 dates verbatim.
11. **Populate `#team` from `images/agent/` and `images/director/`** — 9 real staff portraits are available against the current `PLACEHOLDER_TEAM_PHOTO_*` entries. Confirm current staff with the client before publishing.

### P3 — Data integrity & verification

12. **Reconcile the 6 status contradictions** listed above (Royal Villa, Arshi Nagar, Asma Garden, Binti Kutir, Kunje Kiron, Angan). Some may reflect genuine progress since the old site was last updated — confirm with the client, don't assume.
13. **Verify `ARMA Commercial Tower` (`arma-tower`) is a real project.** It has no old-site equivalent and every field is a placeholder. It may be an invented entry that should be replaced by ARMA MM Tower or ARMA Howlader Tower, both of which are real and have photography.
14. **Add the 2 listing-only projects** — ARMA Jannat Villa and ARMA Tasnim Paradise appear on the old ongoing listing with photography but never had detail pages. Gather their specs from the client.
15. **Resolve the remaining `PLACEHOLDER_*` fields** across all projects: addresses, land areas, video URLs, map coordinates, brochure PDFs, plus `PLACEHOLDER_BLOG_TITLE` / `PLACEHOLDER_NEWS_TITLE` / `PLACEHOLDER_INTERLINK_URL` on `index.html`.
16. **Confirm the contact form works.** The old site used server-side PHPMailer; the new site is static, so the form needs a third-party handler (Formspree, Netlify Forms, etc.) or it will silently fail.

### Cross-reference note — ESHA-branded projects (task item 6)

Three ESHA-branded projects exist on the old real-estate site. Their disposition needs coordinating with the **ESHA Holdings** audit before any of them are added here, to avoid duplicating the same project across two sites:

| Project | Old page | In new real-estate `projects.json`? | Photography |
|---|---|---|---|
| **ESHA / ARMA Esha Moazzem Nibash** | `arma_esha_moazzem.php` | **YES** — as `moazzem-nibash`, "ESHA Moazzem Nibash", but with an Unsplash stock image | **9 originals available** (listed above) |
| **ARMA Esha Kanon** | `arma_esha_kanon.php` | **NO — missing** | None on disk |
| **ARMA Moazzem Mili Nibash** | `arma_moazzem_mili_nibash.php` | **NO — missing** | `images/all-project/completed-project/esha-moazzem-mili-Nibash.jpg` |

Note the naming ambiguity: the old site's `arma_moazzem_mili_nibash.php` is titled "ARMA Moazzem Mili Nibash" but its image is named `esha-moazzem-mili-Nibash.jpg`, and it is a distinct project from Esha Moazzem Nibash (different address, 2.50 vs 2.5 Katha, 06 apartments vs single unit). Confirm with the client whether these belong under ARMA Real Estate, ESHA Holdings, or both.
