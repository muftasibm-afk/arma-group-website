/* ARMA GROUP — CERTIFICATION REGISTER
 * ---------------------------------------------------------------------------
 * Single source of truth for every certificate, membership and test report
 * held across the group. Each site's certifications page filters this list by
 * `companies` and renders it with its own visual language.
 *
 * Editing rules — read before changing anything here:
 *
 *   1. Every factual value below is transcribed from the certificate scan
 *      itself. Do not add a number, date or claim that is not printed on the
 *      document. If a field is absent from the scan, omit the field.
 *   2. `issued` / `expires` are printed exactly as they appear. A certificate
 *      past its expiry date is shown honestly with `status:'expired'` — the
 *      renderer labels it. Never quietly drop a date to make a document look
 *      current.
 *   3. `verify` is the public register where a certificate can be checked by a
 *      third party. Omit it when no such register exists.
 *   4. Scans live in each site's own images/certificates/ directory. `src` is
 *      the bare filename; the renderer resolves the path.
 *
 * Field reference:
 *   id          stable slug, used for deep links (#iso-9001-electric)
 *   src         filename inside images/certificates/
 *   orient      'portrait' | 'landscape' — drives the plate's crop behaviour
 *   rotate      degrees to correct a sideways scan (optional; prefer rotating
 *               the source file itself so the scan is upright everywhere)
 *   title       what the document is
 *   standard    the standard or scheme it certifies against (optional)
 *   issuer      the body that issued it
 *   company     the ARMA entity it was issued to
 *   companies   which site(s) this belongs on
 *   kind        'quality' | 'membership' | 'test'
 *   status      'expired' | 'current' | 'perpetual'  (test reports = perpetual)
 *   certNo      certificate/reference number as printed
 *   issued      issue date as printed
 *   expires     expiry date as printed (omit for test reports)
 *   scope       the certified scope, transcribed
 *   summary     one-line plain-language answer to "what is this?"
 *   detail      2–3 sentences: what the document actually verifies
 *   chain       accreditation chain, most-authoritative first (optional)
 *   facts       [{label, value}] — figures transcribed from the document
 *   note        caveat the reader deserves (supersession, legacy status, etc.)
 *   verify      {label, url} public verification register (optional)
 * ------------------------------------------------------------------------- */

window.ARMA_CERTIFICATIONS = [

  /* ── QUALITY MANAGEMENT ────────────────────────────────────────────────── */
  {
    id: 'iso-9001-electric',
    src: 'iso-arma-electric.jpg',
    orient: 'portrait',
    title: 'ISO 9001:2015 Quality Management System',
    standard: 'ISO 9001:2015',
    issuer: 'WQS Certificações Ltda',
    company: 'ARMA Electric Company',
    companies: ['group', 'electric'],
    kind: 'quality',
    status: 'expired',
    certNo: 'I90387',
    issued: '19 February 2017',
    expires: '18 February 2020',
    scope: 'Manufacturer of pole fittings and accessories; construction of grid sub-station, 33KV & 11KV transmission & distribution lines; generation, transmission & distribution lines related spare parts importer & suppliers.',
    summary: 'Third-party audit confirming ARMA Electric runs a quality management system meeting the international standard.',
    detail: 'ISO 9001 specifies the requirements for a quality management system — the documented processes, controls and management responsibilities used to consistently deliver work that meets customer and regulatory requirements. The 2015 revision is built on risk-based thinking and the Plan-Do-Check-Act cycle, and requires top management to lead the system directly rather than delegate it. Certification means an independent body audited the organisation against those requirements and found the system conforming.',
    chain: [
      'Cgcre / Inmetro — Brazil’s national accreditation body',
      'WQS Certificações Ltda — certification body',
      'ARMA Electric Company — certified organisation'
    ],
    facts: [
      { label: 'Certificate No.', value: 'I90387' },
      { label: 'Audit conducted', value: '3–4 February 2017' },
      { label: 'Accreditation ID', value: 'OCS 00048' },
      { label: 'Surveillance audits', value: 'Annual — 2018, 2019' }
    ],
    note: 'Audited against the 2015 revision of the standard. WQS Certificações was acquired by QIMA in 2019 and now trades as QIMA/WQS; the issuing entity name on this certificate is the historic one.',
    verify: { label: 'IAF CertSearch', url: 'https://www.iafcertsearch.org/' }
  },

  {
    id: 'iso-9001-line-hardware',
    src: 'iso-arma-line-hardware.jpg',
    orient: 'portrait',
    title: 'Quality Management System Certification',
    standard: 'ISO 9001:2008',
    issuer: 'Beijing New Century Inspection & Certification Co., Ltd. (BCC)',
    company: 'ARMA Line Hardware & Accessories Ltd.',
    companies: ['group', 'line-hardware'],
    kind: 'quality',
    status: 'expired',
    certNo: 'ABZB15Q20359R0S',
    issued: '28 August 2015',
    expires: '27 August 2018',
    scope: 'Manufacturing of pole fittings.',
    summary: 'Quality management certification for the Gazaria manufacturing plant, held against the 2008 revision of ISO 9001.',
    detail: 'BCC is a Chinese conformity-assessment body approved by CNCA, the state regulator that licenses certification bodies in China, and accredited by CNAS, ANAB and UKAS. This certificate audited the Munshiganj pole-fitting plant against ISO 9001:2008 and covers manufacturing operations at the registered Alipura, Bhober Chor site.',
    chain: [
      'CNCA — Certification and Accreditation Administration of China (state approval)',
      'CNAS · ANAB · UKAS — accreditation bodies',
      'Beijing New Century Inspection & Certification Co., Ltd. — certification body',
      'ARMA Line Hardware & Accessories Ltd. — certified organisation'
    ],
    facts: [
      { label: 'Certificate No.', value: 'ABZB15Q20359R0S' },
      { label: 'Plant', value: 'Alipura, Bhober Chor, Gazaria, Munshiganj' },
      { label: 'Certified scope', value: 'Manufacturing of pole fittings' }
    ],
    note: 'This certificate is against ISO 9001:2008, the revision superseded by ISO 9001:2015. The accredited transition period for the 2008 revision ended on 18 September 2018. It is presented here as evidence of a long-standing quality management programme at the plant, not as a certification currently in force.',
    verify: { label: 'IAF CertSearch', url: 'https://www.iafcertsearch.org/' }
  },

  {
    id: 'iso-9001-real-estate',
    src: 'iso-arma-real-estate.jpg',
    orient: 'portrait',
    title: 'ISO 9001:2015 Certificate of Registration',
    standard: 'ISO 9001:2015',
    issuer: 'Alcumus ISOQAR Limited',
    company: 'ARMA Real Estate Limited',
    companies: ['group', 'real-estate'],
    kind: 'quality',
    status: 'expired',
    certNo: '15772-Q15-001',
    issued: '04 October 2017',
    expires: '04 October 2020',
    scope: 'Detail area planning and development of land, design & construction and sales of residential, commercial and multipurpose building.',
    summary: 'UKAS-accredited quality management certification covering land development, design, construction and sales.',
    detail: 'Alcumus ISOQAR is a UK certification body accredited by UKAS — the sole national accreditation body appointed by the British Government — under accreditation number 0026, to ISO/IEC 17021-1 for management-systems certification. A certificate carrying the UKAS mark is traceable to a government-recognised accreditation body and is accepted internationally without re-certification.',
    chain: [
      'UKAS — United Kingdom Accreditation Service (accreditation no. 0026)',
      'Alcumus ISOQAR Limited — certification body',
      'ARMA Real Estate Limited — certified organisation'
    ],
    facts: [
      { label: 'Certificate No.', value: '15772-Q15-001' },
      { label: 'Initial registration', value: '04 October 2017' },
      { label: 'Re-issue date', value: '16 October 2017' },
      { label: 'UKAS accreditation', value: 'No. 0026' }
    ],
    note: 'Signed by Steve Stubley, Technical Director, on behalf of Alcumus ISOQAR.',
    verify: { label: 'IAF CertSearch', url: 'https://www.iafcertsearch.org/' }
  },

  /* ── MATERIAL TEST REPORTS ─────────────────────────────────────────────── */
  {
    id: 'test-report-buet',
    src: 'test-report-buet.jpg',
    orient: 'portrait',
    title: 'Test Report — Steel Cross Arm',
    standard: 'BS 729:1971 · Supplier’s specification',
    issuer: 'Department of Mechanical Engineering, BUET',
    company: 'ARMA Line Hardware & Accessories Ltd.',
    companies: ['group', 'line-hardware', 'electric'],
    kind: 'test',
    status: 'perpetual',
    certNo: 'BRTC No. 1101-34211/ME/16-17',
    issued: '15 May 2017',
    scope: 'Tensile strength, yield strength and galvanisation coating weight of steel cross arm samples.',
    summary: 'Independent university testing of steel cross arms — every sample passed tensile, yield and galvanising requirements.',
    detail: 'Bangladesh University of Engineering and Technology is the country’s foremost engineering university, and its departmental laboratories perform independent third-party materials testing for industry through BRTC, the Bureau of Research, Testing and Consultation. A BUET report carries weight with utility clients precisely because the laboratory has no commercial stake in the result — it is independent verification rather than a paid-for certification scheme.',
    facts: [
      { label: 'Average tensile strength', value: '485 MPa — against 450 MPa minimum' },
      { label: 'Average yield strength', value: '358 MPa — against 340 MPa minimum' },
      { label: 'Galvanising coating weight', value: '720 g/m² — against 610 g/m² minimum' },
      { label: 'Samples tested', value: '3 specimens per test' },
      { label: 'Result', value: 'OK on all three tests' }
    ],
    note: 'Galvanising was assessed against BS 729:1971, the British Standard for hot dip galvanized coatings on iron and steel articles. That standard was withdrawn in 1999 and superseded by BS EN ISO 1461, though it remains called up in South Asian utility specifications. The measured coating weight of 720 g/m² exceeds the 610 g/m² minimum BS 729 sets for steel articles 5 mm thick and over.'
  },

  {
    id: 'test-report-bsti',
    src: 'test-report-bsti.jpg',
    orient: 'portrait',
    title: 'Test Report — Electrical Line Hardware',
    standard: 'Yield strength determination',
    issuer: 'Bangladesh Standards and Testing Institution (BSTI)',
    company: 'ARMA Line Hardware & Accessories Ltd.',
    companies: ['group', 'line-hardware', 'electric'],
    kind: 'test',
    status: 'perpetual',
    certNo: 'BSTI/Phy/21(03)/2003',
    issued: '12 February 2009',
    scope: 'Yield strength testing of six samples of electrical material — spool racks, guy set, brackets and pole band.',
    summary: 'National standards-body testing of six line hardware components, reported in yield strength.',
    detail: 'BSTI is the national standards body of Bangladesh, an autonomous institution under the Ministry of Industries and the sole national authority for standardisation, conformity assessment and metrology. Its Physical Testing Wing performs mechanical and physical property testing. A BSTI test report is a result from the country’s own national laboratory, which makes it the reference point for government and utility tender compliance.',
    facts: [
      { label: '5-Spool Wire Rack (channel)', value: '361 N/mm²' },
      { label: '5-Spool Wire Rack (angle)', value: '375 N/mm²' },
      { label: 'Guy Set', value: '390 N/mm²' },
      { label: 'Top Mount Bracket', value: '317 N/mm²' },
      { label: 'Side Mount Bracket', value: '291 N/mm²' },
      { label: 'Pole Band', value: '370 N/mm²' }
    ],
    note: 'Issued by the Physical Testing Wing, Maan Bhaban, Tejgaon. A test report certifies the tested samples on the date tested; it is distinct from a BSTI Certification Mark (CM) licence, which authorises ongoing use of the BSTI mark on a product line.'
  },

  /* ── MEMBERSHIPS ───────────────────────────────────────────────────────── */
  {
    id: 'dcci-membership',
    src: 'dcci-membership.jpg',
    orient: 'landscape',
    title: 'General Membership Certificate',
    issuer: 'Dhaka Chamber of Commerce & Industry (DCCI)',
    company: 'ARMA Electric Company',
    companies: ['group', 'electric'],
    kind: 'membership',
    status: 'expired',
    certNo: 'Book No. 049 · Serial No. 04899',
    issued: '06 April 2017',
    expires: '31 December 2017',
    scope: 'Import, supply, contractor & manufacturing of line fittings & accessories.',
    summary: 'General Membership of Bangladesh’s largest business chamber, held by ARMA Electric.',
    detail: 'DCCI is the largest and one of the oldest business chambers in Bangladesh, established in 1958. It represents the private sector to government, runs trade and training programmes, and issues Certificates of Origin for exporters. General Membership is the fuller of its two membership classes, and applications must be proposed by one member and seconded by another.',
    facts: [
      { label: 'Membership class', value: 'General Member' },
      { label: 'Book No.', value: '049' },
      { label: 'Serial No.', value: '04899' },
      { label: 'Registered activity', value: 'Import, supply, contracting & manufacturing' }
    ],
    note: 'DCCI membership is a standing and affiliation credential, not a conformity assessment — it signals formal registered standing in Bangladesh’s business community. Membership is renewed annually through the chamber’s pass book.'
  },

  {
    id: 'rehab-membership',
    src: 'rehab-certificate-2020.webp',
    orient: 'landscape',
    title: 'Membership Certificate',
    issuer: 'Real Estate & Housing Association of Bangladesh (REHAB)',
    company: 'ARMA Real Estate Limited',
    companies: ['real-estate'],
    kind: 'membership',
    status: 'expired',
    certNo: 'Membership No. 350/2006',
    issued: 'Member since 2006',
    expires: 'June 2020',
    scope: 'Real estate development — residential, commercial and multipurpose building.',
    summary: 'Membership of the sole trade association of real estate developers in Bangladesh, held since 2006.',
    detail: 'REHAB is the only trade association of real estate developers in Bangladesh, founded in 1991 and an A Class member of the Federation of Bangladesh Chambers of Commerce and Industry. Its entry criteria require a member to be a registered limited company, to have completed or substantially progressed at least one approved project, to maintain a staffed independent office, and to hold paid-up capital of at least BDT 1 crore.',
    facts: [
      { label: 'Membership No.', value: '350/2006' },
      { label: 'Member since', value: '2006' },
      { label: 'REHAB founded', value: '1991' },
      { label: 'Signed by', value: 'President and Senior Vice President, REHAB' }
    ],
    note: 'REHAB is a trade association, not a government regulator. It mediates disputes between members and buyers, can formally censure member companies, and in serious cases recommend exclusion from the association.'
  },

  {
    id: 'rehab-membership-2018',
    src: 'rehab-certificate.webp',
    orient: 'landscape',
    title: 'Membership Certificate',
    issuer: 'Real Estate & Housing Association of Bangladesh (REHAB)',
    company: 'ARMA Real Estate Limited',
    companies: ['real-estate'],
    kind: 'membership',
    status: 'expired',
    certNo: 'Membership No. 350/2006',
    issued: 'Member since 2006',
    expires: '30 June 2018',
    scope: 'Real estate development — residential, commercial and multipurpose building.',
    summary: 'Earlier REHAB membership certificate for the same membership number, evidencing continuous standing.',
    detail: 'The same REHAB membership carried forward under membership number 350/2006. Read alongside the later certificate, the pair evidences continuous association standing across successive renewal terms rather than a single one-off registration.',
    facts: [
      { label: 'Membership No.', value: '350/2006' },
      { label: 'Member since', value: '2006' },
      { label: 'Valid upto', value: '30 June 2018' }
    ],
    note: 'Superseded by the later membership certificate carrying the same membership number.'
  }
];
