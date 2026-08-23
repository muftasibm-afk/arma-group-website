# ARSC School — Missing Content Audit (Old Site vs New Site)

**Old site:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-old-site/public_html/arscbd.com/`
(CodeIgniter 3 app, `Home` controller + `application/views/common/*`, Bengali-language, ~30 public pages)
**New site:** `/Users/rahmanwolied/Documents/Work/ARMA/arma-group-website/arsc-school/index.html`
(single English-language landing page, 6 sections)

> Note: root-level `public_html/arsc.php` is an empty stub (only `header.php` + `footer.php` includes) — all real ARSC content lives in the `arscbd.com/` CodeIgniter app. Route pattern is `home/<MethodName>` (default controller `home`).

---

## Old Site Sitemap (public-facing pages only)

Derived from `application/views/common/header.php` (main nav) and `application/controllers/Home.php`.

### হোম / Home — `/` → `views/common/main_body.php`
- Hero slider (DB-driven, `tbl_slider`)
- Exam results 2017 PDF download CTA
- Admission form (ভর্তি ফরম) PDF download CTA
- Welcome/intro text: "শিক্ষাই জাতির মেরুদন্ড…" + 10-year milestone (Dec 2018) + JSC/SSC results note
- "আব্দুর রাজ্জাক স্কুল অ্যান্ড কলেজের প্রতিষ্ঠা" — founding story, Balanced/Total Education philosophy, founder as শিক্ষানুরাগী ও সমাজসেবক, annual scholarships for poor & meritorious students
- বিদ্যালয়ের ভবন / প্রশাসনিক ভবন — building photo blocks
- প্রয়োজনীয় ফাইল (Downloads): প্রসপেক্টাস, ভর্তির নীতিমালা, মেধা তালিকা-২০১৭, পরীক্ষার সময়সূচী, পরীক্ষার নীতিমালা
- সর্বশেষ ঘটনাবলী (Latest events feed)
- Photo gallery strip (pulls `images/photo-gallery/`)
- Student photos strip (pulls `images/student/`)
- "At a glance" image row (`assets/website/images/glance/img-00…05.jpg`)

### আমাদের কথা / About Us
| Page | Route | View |
|---|---|---|
| প্রতিষ্ঠাতার পরিচিতি (Founder's Profile) | `home/ChairmanIntroduction` | `ChairmanIntroduction.php` |
| অধ্যক্ষর বাণী (Principal's Message) | `home/PrincipalStatment` | `PrincipalStatment.php` |
| উপাধ্যক্ষর বানী (Vice-Principal's Message) | `home/VicePrincipalStatment` | `VicePrincipalStatment.php` |
| লক্ষ্য ও উদ্দেশ্য (Aims & Objectives) | `home/aimsAndObjective` | `aimsAndObjective.php` (DB-driven, `tbl_about`) |
| আমাদের বৈশিষ্ট্য (Key Features) | `home/keyFetures` | `keyFetures.php` |
| শিক্ষক ও কর্মচারীবৃন্দ (Teachers & Staff) | `home/TeachersAndStaffs` | `TeachersAndStaffs.php` |
| Teacher detail page | `home/TeachersMoreInfo/<id>` | `TeachersMoreInfo.php` |
| পরিচালনা পর্ষদ (Governing Body) | `home/bodCollege` | `bodCollege.php` (+ `bodSchool.php`) |

### একাডেমিক তথ্য / Academic Information
| Page | Route | View |
|---|---|---|
| শিক্ষাবর্ষ সূচি (Academic Calendar) | `home/AcademicClaender` | `AcademicClaender.php` (20 KB, full-year event table) |
| শ্রেণির সময়সূচী (Class Routine) | `home/ClassSchedule` | `ClassSchedule.php` (47 KB, Classes 1–10 tabbed routines) |
| পরীক্ষার সময়সূচী (Exam Schedule) | `home/ExamSchedule` | `ExamSchedule.php` (DB-driven) |
| গুনবিচার ও মূল্যায়ন ব্যবস্থা (Grading & Assessment) | `home/evaluation` | `evaluation.php` |
| স্কুলের পোষাক (School Uniform) | `home/SchoolDressInfo` | `SchoolDressInfo.php` |
| বিষয়াবলী (Subjects) | `home/subjects` | `subjects.php` (HSC Science/Business/Humanities streams w/ subject codes) |
| সকল ফী সূমহ (Fee Structure) | `home/Fees` | `Fees.php` (full fee table, Bangla + English medium) |
| School Session Info | `home/SchoolSessionInfo` | `SchoolSessionInfo.php` (stub) |

### ভর্তি তথ্য / Admissions
| Page | Route | View |
|---|---|---|
| ভর্তি প্রক্রিয়া (Admission Procedure & Policy) | `home/AdmissionProcedure` | `AdmissionProcedure.php` |
| আবেদনের নিয়মাবলী (How to Apply) | `home/HowToApply` | `HowToApply.php` |

### সুবিধাসমূহ এবং সেবা / Facilities & Services
| Page | Route | View |
|---|---|---|
| আইসিটি ল্যাব (ICT Lab) | `home/IctLab` | `IctLab.php` |
| গ্রন্থাগার (Library) | `home/Library` | `Library.php` |
| সাংস্কৃতিক কর্মকান্ড ও খেলাধুলা (Culture & Sports) | `home/PlayingFacelite` | `PlayingFacelite.php` |
| বিজ্ঞানাগার (Science Lab) | `home/ScienceLab` | `ScienceLab.php` — *nav item commented out; placeholder text ("Cyberdyne"/"MEMS")* |
| School Transport | `home/SchoolTransport` | `SchoolTransport.php` — *nav item commented out; placeholder text* |

### সংবাদ ও ঘটনাবলী / News & Events
| Page | Route | View |
|---|---|---|
| আমাদের সাফল্য (Our Achievements) | `home/Achievement` | `Achievement.php` — 23 named GPA-5 achievers, 2012–2017 |
| বিজ্ঞপ্তি এবং ঘোষণা (Notices) | `home/NoticeAndAnnouncement` | `NoticeAndAnnouncement.php` |
| আসন্ন ঘটনাবলী (Upcoming Events) | `home/UpcomingEvent` | `UpcomingEvent.php` (stub) |

### পরীক্ষার ফলাফল / Exam Results
| Page | Route | View |
|---|---|---|
| একক ফলাফল (Individual Result lookup) | `home/ExamResult_index` → `home/ExamResult` | `common/report/ExamResult*.php` |
| Printable result cards (per class, Play→Class 10) | `home/print_exam_report_single` | `common/report/print_single_result_class_*.php` |
| Printable exam routine | `home/print_exam_routine` | `common/report/print_exam_routine.php` |

### যোগাযোগ / Contact — `home/ContactUs`
- Google Maps embed of the actual campus (Banasree)
- Contact form (নাম / ইমেইল / বিষয় / মন্তব্য)
- "আমাদের বিদ্যালয়" campus photo carousel

### Footer (`views/common/footer.php`) — sitewide
- Education-board link block: প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়, JSC, SSC, HSC Board Bangladesh
- বিদ্যালয়ের অবস্থান (location), যোগাযোগ
- Facebook + YouTube social links (`SidebarLeft.php`)

### Real contact data (from `db/db_school_dcis_mahbub.sql`, `tbl_header`)
- Address: বাসা # ৩৬, রাস্তা # ৩, বনশ্রী, ঢাকা-১২১৯ (House 36, Road 3, Banasree, Dhaka-1219)
- Mobile: ০১৭৪১৪৬৩৮৭১ / 01741463871
- Telephone: ৮৩৯৬২৯৫ / 8396295
- Email: **info.arsc2014@gmail.com**
- Website: www.arscbd.com

---

## New Site Sitemap

Single page, `arsc-school/index.html` (28.7 KB). No sub-pages exist.

| # | Section | id | Content |
|---|---|---|---|
| 1 | Nav | `#nav` | Logo, links: About / Our Values / Campus / Admissions / ← Group |
| 2 | Hero | `#home` | "A school with difference and purpose", pennant "Admissions Open · Est. 2008", 2 CTAs, stock photo, floating stats 550+ students / 40 teachers |
| 3 | Stats band | — | Founded 2008 · 550+ Students · 40 Teachers · 17 Years Strong (GSAP counters) |
| 4 | About | `#about` | 3 paragraphs: founded 2008 Banasree; started 180 children / 20 teachers → 550 students / 40 teachers; inclusivity statement |
| 5 | Values | `#values` | 6 icon cards: Fun Meets Learning, Open to All, Purposeful Growth, Modern Curriculum, Passionate Educators, Beautiful Campus |
| 6 | Campus | `#campus` | 3 icon cards: Bright Classrooms, Sports & Play, Modern Resources |
| 7 | Admissions banner | — | CTA strip → scrolls to contact form |
| 8 | Contact | `#contact` | Location "Banasree, Rampura, Dhaka", email `info@armagroup.com.bd`, phone `+880 2-224406189`, Formspree enquiry form (name/phone/grade/message) |
| 9 | Footer | — | Brand line, links back to Group, © 2025 |

Assets: `images/favicon.png`, `images/logo.png` only. Both photos in the page are **external Unsplash stock URLs**, not ARSC photos.

---

## Missing Pages

Every page below exists on the old site and has **no equivalent** on the new site.

**Critical (core school information):**
1. **প্রতিষ্ঠাতার পরিচিতি — Founder's Profile** (`ChairmanIntroduction.php`) — ~8 paragraph biography of Abdur Razzaque: Kushtia/Daulatpur origin, father Abdul Mottalib, choice of business over govt service, founding of ARMA Welfare Society (2003), ~400 annual "Abdur Razzaque Merit Scholarships", Abdur Razzaque Fisheries Technology Institute, "Abdur Razzaque General Ward" at Arabinda Children's Hospital Dinajpur, schools/health institutions in Kushtia, Rajshahi, Dinajpur. **This is the richest narrative content on the entire old site and it is 100% absent from the new one.**
2. **অধ্যক্ষর বাণী — Principal's Message** (`PrincipalStatment.php`) — full message signed **প্রফেসর ড. এম এ কে নেওয়াজ (Prof. Dr. M A K Newaz), Principal**. Includes the "politics-free and smoke-free campus" pledge and the stated ambition to expand ARSC to university level.
3. **উপাধ্যক্ষর বানী — Vice-Principal's Message** (`VicePrincipalStatment.php`) — signed **সানজিদা সুলতানা (Sanjida Sultana), Vice-Principal**.
4. **শিক্ষক ও কর্মচারীবৃন্দ — Faculty & Staff directory** (`TeachersAndStaffs.php` + `TeachersMoreInfo.php`) — grid of **48 named staff with individual photos and designations**, each with a detail page. New site only asserts the number "40".
5. **পরিচালনা পর্ষদ — Governing Body** (`bodCollege.php`, 18 KB) — named board members with titles: মোঃ আকতার উজ-জামান (Additional Secretary, GoB), ড. রকিবুল হাসান (Chairman, Bangla Dept, Southeast University), মোঃ আলাউদ্দিন খান, বিদৌরা সুলতানা (teacher rep), Prof. Dr. M A K Newaz (Member Secretary), সাদিক রহমান অনিক (Director, ARMA Real Estate — donor member), মোহাঃ তৌফিক ইমতিয়াজ (guardian rep). Separate school-branch board (`bodSchool.php`).
6. **ভর্তি প্রক্রিয়া — Admission Procedure & Policy** (`AdmissionProcedure.php`) — classes open for admission (Play Group → Class XI), full session-charge waiver for top 5 entrance scorers (≥80%) in Classes 5–9, full waiver for GPA-5 holders entering Class 6 and 9.
7. **আবেদনের নিয়মাবলী — How to Apply** (`HowToApply.php`) — form price **Tk 200**, entrance exam required, form purchased at office and submitted before the exam, **no entrance exam for Play Group / Nursery**, age requirements **Play Group 3+, Nursery 4+**, selection-board appearance mandatory.
8. **সকল ফী সূমহ — Fee Structure** (`Fees.php`, 13 KB) — itemised table (admission test, session charge, monthly tuition, cultural fee, ID card, receipt book, annual milad, generator fee) with totals for new vs. returning students, both Bangla and English medium. e.g. Play Group–Class 10: session charge ৪,০০০/-, monthly ১,৩০০/-, new-student total ৯,০০০/-, returning ৬,৫০০/-.
9. **আমাদের সাফল্য — Achievements** (`Achievement.php`, 13 KB) — 23 named GPA-5 achievers across PSC 2012/2013/2014/2016, JSC 2013/2015/2016, SSC 2016/2017 (Afrina Jahan Nilima, Fairuz Saima, Humaiya Akter Ikra, Md. Omar Faruk, Sabrina Ferdous Upoma, Nusrat Zaman Raya, Maleka Parvez Chandrima, and others).
10. **বিজ্ঞপ্তি এবং ঘোষণা — Notice Board** (`NoticeAndAnnouncement.php`) — dated parent notices (e.g. the 07 Sep 2018 study tour to Bangabandhu Sheikh Mujib Safari Park with fee, deadline, uniform and departure-time details).

**Important (academic detail):**
11. **শিক্ষাবর্ষ সূচি — Academic Calendar** (`AcademicClaender.php`, 20 KB) — full half-yearly + annual calendar of holidays, exams, milad mahfil, annual picnic, cultural competition, result-publication dates.
12. **শ্রেণির সময়সূচী — Class Routine** (`ClassSchedule.php`, 47 KB — largest content file on the site) — tabbed weekly period-by-period routine for Classes 1 through 10.
13. **পরীক্ষার সময়সূচী — Exam Schedule** (`ExamSchedule.php`) + printable exam routine.
14. **গুনবিচার ও মূল্যায়ন ব্যবস্থা — Grading & Assessment** (`evaluation.php`) — weighting scheme per level (Play Group: 10% attendance / 50% class assessment / 40% class test; Nursery: 5/20/25/50; KG–Class 12: 5% attendance / 20% monthly & assignment / 75% term; annual = 40% half-yearly + 60% annual).
15. **বিষয়াবলী — Subjects** (`subjects.php`, 11 KB) — HSC (Class XI–XII) subject lists with official board subject codes for Humanities, Business Studies and Science streams, plus compulsory Bangla/English/ICT.
16. **স্কুলের পোষাক — School Uniform** (`SchoolDressInfo.php`) — itemised boys' and girls' uniform specs by class band (navy blue shorts/trousers, blue-white check shirt/kameez, black shoes/socks/belt, winter sweater, hair band).
17. **আমাদের বৈশিষ্ট্য — Key Features** (`keyFetures.php`) — 7-storey academic building owned by the founder, ground-floor assembly, Bangla + English version, CCTV-monitored classrooms, multimedia projector teaching, canteen for tiffin & stationery, academic calendar & syllabus distributed at year start, financial support for poor meritorious students.
18. **আইসিটি ল্যাব / গ্রন্থাগার / সাংস্কৃতিক কর্মকান্ড ও খেলাধুলা — Facilities pages** (`IctLab.php`, `Library.php`, `PlayingFacelite.php`) — the new site has three generic "Campus" cards but none of the real detail: dedicated computer room with trained operator; library open to all with a weekly library class from Class 3 supervised by two teachers; society programme (recitation, debate, speech, music, dance, drawing, acting, spoken English) every Thursday for one hour; indoor games policy including the injury-liability and opt-out clause for guardians.
19. **পরীক্ষার ফলাফল — Online Result Lookup** (`ExamResult_index` → `ExamResult` → printable class-wise result cards) — a working student result portal with login. Entirely absent.
20. **লক্ষ্য ও উদ্দেশ্য — Aims & Objectives** (`aimsAndObjective.php`, DB-backed via `tbl_about`) — content lives in `tbl_about` row 5.

---

## Missing Sections (on existing pages)

On the new single-page site:

1. **Homepage downloads block** — old home had "প্রয়োজনীয় ফাইল": প্রসপেক্টাস, ভর্তির নীতিমালা, মেধা তালিকা-২০১৭, পরীক্ষার সময়সূচী, পরীক্ষার নীতিমালা, plus the 2017 results PDF and the admission form PDF. No downloads exist on the new site.
2. **Founding-story detail in About** — new About is a 3-paragraph gloss. Missing: the "Balanced Education / Total Education" philosophy statement, the "শিক্ষাই জাতির মেরুদন্ড" framing, and the explicit link to Abdur Razzaque as ARMA Group founder & chairman and philanthropist.
3. **Named leadership** — new site names no one. Old site names the Principal (Prof. Dr. M A K Newaz), Vice-Principal (Sanjida Sultana), and all governing-body members.
4. **Bengali language entirely** — the old site is Bengali-first (nav, all body copy, headings). The new site is English-only with no Bengali version or toggle. For a Dhaka school with Bangla-medium classes this is a significant audience loss.
5. **Contact block is wrong/degraded:**
   - Address on new site is vague "Banasree, Rampura, Dhaka" — real address is **House # 36, Road # 3, Banasree, Dhaka-1219**.
   - Email on new site is the group address `info@armagroup.com.bd` — school's own is **info.arsc2014@gmail.com**.
   - Phone on new site is `+880 2-224406189` (a group number) — school's are **01741463871** (mobile) and **8396295** (landline).
   - **Google Maps embed is gone** (old `ContactUs.php` line 18 has the real campus map embed).
6. **Education-board links** (footer) — links to Ministry of Primary & Mass Education, JSC, SSC, HSC Board are gone.
7. **Social links** — Facebook and YouTube links present in old `SidebarLeft.php` are absent from the new footer.
8. **Campus photo carousel** — old `ContactUs.php` had an "আমাদের বিদ্যালয়" carousel of campus photos; new site has none.
9. **Latest events / news feed** — old homepage had a dated news feed. New site has no news area at all.
10. **Class range not stated** — old site is explicit: national curriculum, Bangla and English version, **Play Group through Class XII**. New site's only hint is a dropdown in the enquiry form.
11. **"Est. 2008 / 17 years"** — the hero says "Est. 2008" but the stats band computes "17 Years Strong". Old site's own copy (written 2018) says 10 years as of Dec 2018 — 2025 makes it 17, so this is consistent, but worth confirming intent.

---

## Missing/Unused Original Images & Assets (with old file paths)

The new site ships **only** `arsc-school/images/favicon.png` and `arsc-school/images/logo.png`. Both photographs on the page are external Unsplash stock. Every original ARSC photo below is unused.

### Campus / event photography — `arscbd.com/images/photo-gallery/` (21 files, ~90 MB total, full-resolution DSLR originals)
```
arscbd.com/images/photo-gallery/DSC00741.JPG    (4.1 MB)
arscbd.com/images/photo-gallery/DSC007411.JPG   (4.1 MB)   [dup of DSC00741]
arscbd.com/images/photo-gallery/DSC01528.JPG    (4.9 MB)
arscbd.com/images/photo-gallery/DSC01594.JPG    (5.0 MB)
arscbd.com/images/photo-gallery/DSC01624.JPG    (5.0 MB)
arscbd.com/images/photo-gallery/DSC016241.JPG   (5.0 MB)   [dup]
arscbd.com/images/photo-gallery/DSC01627.JPG    (5.1 MB)
arscbd.com/images/photo-gallery/DSC016271.JPG   (5.1 MB)   [dup]
arscbd.com/images/photo-gallery/DSC01630.JPG    (5.3 MB)
arscbd.com/images/photo-gallery/DSC016301.JPG   (5.3 MB)   [dup]
arscbd.com/images/photo-gallery/DSC05150.JPG    (2.3 MB)
arscbd.com/images/photo-gallery/DSC051501.JPG   (4.1 MB)
arscbd.com/images/photo-gallery/DSC051502.JPG   (2.3 MB)   [dup]
arscbd.com/images/photo-gallery/DSC05753.JPG    (4.1 MB)
arscbd.com/images/photo-gallery/DSC05764.JPG    (4.1 MB)
arscbd.com/images/photo-gallery/DSC057641.JPG   (4.1 MB)   [dup]
arscbd.com/images/photo-gallery/DSC05785.JPG    (3.9 MB)
arscbd.com/images/photo-gallery/DSC05798.JPG    (4.1 MB)
arscbd.com/images/photo-gallery/DSC057981.JPG   (4.1 MB)   [dup]
arscbd.com/images/photo-gallery/DSC05824.JPG    (3.9 MB)
arscbd.com/images/photo-gallery/DSC058241.JPG   (3.9 MB)   [dup]
```
**≈13 unique frames** after removing the `…1`/`…2` duplicates. These are the only genuine campus/event photographs that exist — they should replace the Unsplash placeholders in the hero and About sections. They need downscaling + WebP conversion before web use.

### Faculty portraits — `arscbd.com/images/teacher/` (48 real portraits + placeholders)
Real named portraits (matched to `tbl_teacher` rows in `db/db_school_dcis_mahbub.sql`):
```
profdrmakneoaj.jpg        (565 KB)  Prof. Dr. M A K Newaz — Principal   ← highest priority
sanjidasultana.jpg        (567 KB)  Sanjida Sultana — Vice-Principal    ← highest priority
bidorasultana.jpg                   Bidoura Sultana — Senior Teacher
farhanaahmed.jpg                    Farhana Ahmed — Senior Teacher
shamimarabegum.jpg                  Shamima Ara Begum — Senior Teacher
nasreenbegum.jpg                    Nasreen Begum — Senior Teacher
kaziafrozabegum.jpg                 Kazi Afroza Begum — Senior Teacher
mdmazharulislam.jpg                 Md. Mazharul Islam — Senior Teacher
mahafujayeasminswapna.jpg           Mahafuja Yeasmin Swapna
mahbubachoudhurysonnet.jpg          Mahbuba Choudhury Sonnet
farzanaislam.jpg                    Farzana Islam
sabinayeasmin.jpg                   Sabina Yeasmin
shoktimoyeehira.jpg                 Shoktimoyee Hira
afsanaaktar.jpg                     Afsana Aktar
tamannasultana.jpg                  Tamanna Sultana
farzanaafroze.jpg / farzanaafroze1.jpg  Farhana Afroze / Farzana Afroze
nadiasultana.jpg                    Nadia Sultana
mohammadkamruzzaman.jpg             Mohammad Kamruzzaman
jubaidagulshanara.jpg               Jubaida Gulshan Ara
orinfariashaon.jpg                  Orin Faria Shaon
sumeakter.jpg                       Sume Akter
farhanajesmin.jpg                   Farhana Jesmin
lipasultana.jpg                     Lipa Sultana
naziaalam.jpg                       Nazia Alam
shamimsheikh.jpg                    Md. Shamim Sheikh
selinaakhter.jpg                    Selina Akhter
mdmasudrana.jpg                     Md. Masud Rana
sujanaislam.jpg                     Sujana Islam
mdabulkhair.jpg                     Md. Abul Khair
mdalmamunkhan.jpg                   Md. Al-Mamun Khan
shamimarahmanbithi.jpg              Shamima Rahman Bithi
jannataradiba.jpg                   Jannat Ara Diba
kismatara.jpg                       Kismat Ara
sazialaizu.jpg                      Sazia Laizu
faridaakter.jpg                     Farida Akter
daliluddinahmed.jpg                 Dalil Uddin Ahmed — Computer Operator
```
Higher-resolution duplicates of some of the above (better source quality, use these where they exist):
```
arscbd.com/images/teacher/Afsana_Aktar.jpg          Farhana_Jesmin.jpg      Farzana_Afroze.jpg
arscbd.com/images/teacher/Jannat_Ara_Diba.jpg       Jubaida_Gulshan_Ara.jpg Kazi_Afroza_Begum.jpg
arscbd.com/images/teacher/Kismat_Ara.jpg            Md__Abul_Khair.jpg      Md__Al-Mamun_Khan.jpg
arscbd.com/images/teacher/Md__Masud_Rana.jpg        Mohammad_Kamruzzaman.jpg Orin_Faria_Shaon.jpg
arscbd.com/images/teacher/Sazia_Laizu.jpg           Selina_Akhter.jpg       Shamim_Sheikh.jpg
arscbd.com/images/teacher/Shoktimoyee_Hira.jpg      Sujana_Islam.jpg        Sume_Akter.jpg
arscbd.com/images/teacher/Atif.jpg  Imran.jpg  Image-012.jpg
```
Skip (not real portraits): `blank-photo*.jpg` (11 placeholder files), `define-pattern*.jpg`, `software*.jpg`.

### Branding / building
```
arscbd.com/images/logo-large.png                    (24 KB)  large ARSC logo
arscbd.com/images/arma-complex.jpg                  (23 KB)  ARMA complex building — used on old homepage
arscbd.com/assets/images/headerImages/logo1.png     (260 KB) live header logo per tbl_header
arscbd.com/assets/images/headerImages/logo2.png     (268 KB)
arscbd.com/assets/images/headerImages/rsz_arsc.png  (26 KB)  resized ARSC mark
arscbd.com/assets/website/images/footer_logo.png    (51 KB)
arscbd.com/assets/website/images/logow.png          (7 KB)   white/reversed logo
arscbd.com/assets/website/images/logo2.png          (10 KB)
arscbd.com/favicon.png                              (20 KB)
```

### Theme stock imagery (verify before reuse — likely template stock, not ARSC)
```
arscbd.com/assets/website/images/glance/img-00…05.jpg   "at a glance" row on old homepage
arscbd.com/assets/website/images/events/img-01.jpg      events sidebar thumbnail
arscbd.com/assets/website/images/school/               (directory is EMPTY — the ContactUs
                                                        campus carousel references img-10…13.jpg
                                                        which no longer exist on disk)
arscbd.com/assets/website/images/{bod,teacher,students,courses,tutors,authors,brands}/
```
Note: the old `ContactUs.php` campus carousel is already broken — `assets/website/images/school/` is empty, so those campus photos are lost. `images/photo-gallery/` is the surviving source of campus imagery.

### Structured data worth recovering (not images)
```
arscbd.com/db/db_school_dcis_mahbub.sql   (804 KB)
```
Contains `tbl_teacher` (48 staff with names, designations, joining dates, photo filenames), `tbl_designation` (8 role titles in Bengali), `tbl_about`, `tbl_header` (real address/phone/email), `tbl_notice_publish`. This is the authoritative source for rebuilding the faculty directory and correcting the contact block.

---

## Recommendations (priority order)

**P0 — factual corrections to the existing page (quick, high impact)**
1. Fix the contact block: real address **House # 36, Road # 3, Banasree, Dhaka-1219**, school email **info.arsc2014@gmail.com**, school phones **01741463871 / 8396295**. Re-add the Google Maps embed (the working embed URL is in `arscbd.com/application/views/common/ContactUs.php:18`).
2. Replace both Unsplash stock photos with real ARSC photography from `images/photo-gallery/` (resize + WebP; the originals are 4–5 MB each and must not be shipped raw).
3. State the class range explicitly — "Play Group through Class XII, National Curriculum, Bangla and English version" — currently only implied by a form dropdown.

**P1 — restore the content that makes a school site credible to parents**
4. **Admissions page or section** — merge `AdmissionProcedure.php` + `HowToApply.php` + `Fees.php`: form price Tk 200, entrance exam (none for Play Group/Nursery), ages 3+/4+, scholarship waivers for top-5 and GPA-5 entrants, and the full fee table. This is the single most-searched content for a school and the new site has none of it.
5. **Faculty page** — rebuild from `tbl_teacher` + `images/teacher/`. 48 named staff with photos and Bengali designations. Lead with Principal **Prof. Dr. M A K Newaz** and Vice-Principal **Sanjida Sultana**.
6. **Leadership messages** — Founder's Profile, Principal's Message, Vice-Principal's Message. The founder biography (`ChairmanIntroduction.php`) is the strongest brand narrative ARMA has and it ties the school to ARMA Welfare Society, the merit scholarships, and the Dinajpur hospital ward. Note: it is encoded in the legacy **SutonnyMJ ASCII-Bijoy** font, so it needs conversion to Unicode Bengali before reuse (the Principal's and Vice-Principal's messages are already clean Unicode and can be lifted directly).
7. **Governing Body page** — named members with titles (`bodCollege.php`). Signals institutional legitimacy.

**P2 — depth and ongoing content**
8. **Academics section** — subjects with board codes, grading/assessment weightings, academic calendar, school uniform. Source: `subjects.php`, `evaluation.php`, `AcademicClaender.php`, `SchoolDressInfo.php`. Note the calendar and class routines are dated 2018 and must be refreshed or dropped, not republished as-is.
9. **Achievements page** — 23 named GPA-5 students, 2012–2017 (`Achievement.php`). Refresh with recent years if the school can supply them.
10. **Notice board / news** — even a lightweight static list restores the "this school is active" signal. The old notices are 2018-vintage and should be replaced with current ones rather than migrated.
11. **Photo gallery page** — ~13 unique campus/event frames from `images/photo-gallery/`.
12. **Facilities detail** — replace the three generic Campus cards with the real specifics: 7-storey own building with ground-floor assembly, CCTV-monitored and multimedia-equipped classrooms, computer lab with trained operator, library with weekly class from Class 3, Thursday society hour (recitation, debate, music, dance, drawing, acting, spoken English), canteen.

**P3 — structural**
13. **Bengali version.** The entire old site was Bengali-first. An English-only page will not reach most of the parent audience in Banasree. At minimum, provide Bengali for admissions, fees, and contact.
14. **Do not attempt to port the exam-result portal** (`ExamResult*`, `print_*_result_class_*`) — it is a DB-backed login system, out of scope for a static site. If results lookup matters, link out to a separate system.
15. Skip `ScienceLab.php` and `SchoolTransport.php` — both contain unedited vendor placeholder text referencing "Cyberdyne" and "MEMS", not ARSC. Their nav entries were already commented out on the old site. Only restore if the school confirms these facilities exist.
