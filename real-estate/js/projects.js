/* ═══════════════════════════════════════════════════════════════
   ARMA REAL ESTATE — Project Database Loader
   ───────────────────────────────────────────────────────────────
   Projects are now managed via the Decap CMS admin panel.
   Admin URL: /real-estate/admin/
   Data file: /real-estate/content/projects.json

   To add or edit a project: open the admin panel in a browser,
   log in with GitHub, and use the form. No code changes needed.
   ═══════════════════════════════════════════════════════════════ */

(function () {

  /* ── Fallback data ───────────────────────────────────────────
     Used only if the CMS JSON file cannot be fetched (e.g. offline
     or first load before the file exists in the repo).
     ─────────────────────────────────────────────────────────── */
  var FALLBACK = [
  {
    "id": "arma-complex",
    "name": "ARMA Complex",
    "category": "commercial",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "Banasree, Dhaka",
    "land": "3.14 Katha",
    "unitType": "Commercial Complex",
    "image": "images/projects/arma-complex.webp",
    "gallery": [
      "images/projects/arma-complex.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Complex is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.14 Katha. Commercial Complex. Completed and handed over.",
    "featured": true,
    "related": [
      "mohona",
      "lake-view",
      "prottasa"
    ]
  },
  {
    "id": "mohona",
    "name": "ARMA Mohona",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House:19, Road: 01, Block-A, Banasree",
    "land": "5.00 Katha",
    "unitType": "12 Apartments",
    "image": "images/projects/mohona.webp",
    "gallery": [
      "images/projects/mohona.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Mohona is an ARMA Real Estate development in Banasree, Dhaka. Land area: 5.00 Katha. 12 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "lake-view",
      "prottasa"
    ]
  },
  {
    "id": "lake-view",
    "name": "ARMA Lake View",
    "category": "residential",
    "status": "handed-over",
    "location": "Mirpur DOHS, Dhaka",
    "address": "Plot: 731,432 Mirpur DOHS",
    "land": "8 Katha",
    "unitType": "10 Apartments",
    "image": "images/projects/lake-view.webp",
    "gallery": [
      "images/projects/lake-view.webp",
      "images/projects/lake-view-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Lake View is an ARMA Real Estate development in Mirpur DOHS, Dhaka. Land area: 8 Katha. 10 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "prottasa"
    ]
  },
  {
    "id": "prottasa",
    "name": "ARMA Prottasa",
    "category": "residential",
    "status": "handed-over",
    "location": "Uttara, Dhaka",
    "address": "House: 14/52, Road:18, Sector-04 Uttara",
    "land": "3 Katha",
    "unitType": "7 Apartments",
    "image": "images/projects/prottasa.webp",
    "gallery": [
      "images/projects/prottasa.webp",
      "images/projects/prottasa-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Prottasa is an ARMA Real Estate development in Uttara, Dhaka. Land area: 3 Katha. 7 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "mm-tower",
    "name": "ARMA MM Tower",
    "category": "commercial",
    "status": "handed-over",
    "location": "Merul Badda, Dhaka",
    "address": "Plot: 1042,1043,1044,1046, Main Road, Merul Badda",
    "land": "10.32 Katha",
    "unitType": "42 Units",
    "image": "images/projects/mm-tower.webp",
    "gallery": [
      "images/projects/mm-tower.webp",
      "images/projects/mm-tower-2.webp",
      "images/projects/mm-tower-3.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA MM Tower is an ARMA Real Estate development in Merul Badda, Dhaka. Land area: 10.32 Katha. 42 Units. Completed and handed over.",
    "featured": true,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "shaily",
    "name": "ARMA Shaily",
    "category": "residential",
    "status": "handed-over",
    "location": "Merul Badda, Dhaka",
    "address": "House: 79/1, Link Road, Merul Badda",
    "land": "4.53 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/shaily.webp",
    "gallery": [
      "images/projects/shaily.webp",
      "images/projects/shaily-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Shaily is an ARMA Real Estate development in Merul Badda, Dhaka. Land area: 4.53 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "shapla",
    "name": "ARMA Shapla",
    "category": "residential",
    "status": "handed-over",
    "location": "Merul Badda, Dhaka",
    "address": "House: 94, Link Road, Merul Badda",
    "land": "6.44 Katha",
    "unitType": "14 Apartments",
    "image": "images/projects/shapla.webp",
    "gallery": [
      "images/projects/shapla.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Shapla is an ARMA Real Estate development in Merul Badda, Dhaka. Land area: 6.44 Katha. 14 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "noori-nibash",
    "name": "ARMA Noori Nibash",
    "category": "residential",
    "status": "handed-over",
    "location": "Uttar Badda, Dhaka",
    "address": "House: 1001, Satarpool Road, Uttar Badda",
    "land": "10 Katha",
    "unitType": "27 Apartments",
    "image": "images/projects/noori-nibash.webp",
    "gallery": [
      "images/projects/noori-nibash.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Noori Nibash is an ARMA Real Estate development in Uttar Badda, Dhaka. Land area: 10 Katha. 27 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "darul-abrar",
    "name": "ARMA Darul Abrar",
    "category": "residential",
    "status": "handed-over",
    "location": "Shahjahanpur, Dhaka",
    "address": "House: 189, Shahjahanpur",
    "land": "6.15 Katha",
    "unitType": "18 Apartments",
    "image": "images/projects/darul-abrar.webp",
    "gallery": [
      "images/projects/darul-abrar.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Darul Abrar is an ARMA Real Estate development in Shahjahanpur, Dhaka. Land area: 6.15 Katha. 18 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "suchana",
    "name": "ARMA Suchana",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 10/12, Road: 04, Block-F, Banasree",
    "land": "7.00 Katha",
    "unitType": "20 Apartments",
    "image": "images/projects/suchana.webp",
    "gallery": [
      "images/projects/suchana.webp",
      "images/projects/suchana-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Suchana is an ARMA Real Estate development in Banasree, Dhaka. Land area: 7.00 Katha. 20 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "binti-kuthir",
    "name": "ARMA Binti Kutir",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "Plot:2-4, Block-A, Banasree, Dhaka",
    "land": "4.00 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/binti-kuthir.webp",
    "gallery": [
      "images/projects/binti-kuthir.webp",
      "images/projects/binti-kuthir-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Binti Kutir is an ARMA Real Estate development in Banasree, Dhaka. Land area: 4.00 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "kunje-kiron",
    "name": "ARMA Kunje Kiron",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: A-07, Road: 2 & Avenue, B-A, Banasree",
    "land": "3.5 Katha",
    "unitType": "Residential",
    "image": "images/projects/kunje-kiron.webp",
    "gallery": [
      "images/projects/kunje-kiron.webp",
      "images/projects/kunje-kiron-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Kunje Kiron is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.5 Katha. Residential. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "angan",
    "name": "ARMA Angon",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "Plot: A/35, Road: 01, Block-A, Banasree",
    "land": "5.00 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/angan.webp",
    "gallery": [
      "images/projects/angan.webp",
      "images/projects/angan-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Angon is an ARMA Real Estate development in Banasree, Dhaka. Land area: 5.00 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "bilash",
    "name": "ARMA Bilash",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "Banasree, Dhaka",
    "land": "5.00 Katha",
    "unitType": "9 Apartments",
    "image": "images/projects/bilash.webp",
    "gallery": [
      "images/projects/bilash.webp",
      "images/projects/bilash-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Bilash is an ARMA Real Estate development in Banasree, Dhaka. Land area: 5.00 Katha. 9 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "wazi-nibash",
    "name": "ARMA Wazi Nibash",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 30, Road: 03, Block- D, Banasree",
    "land": "3.50 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/wazi-nibash.webp",
    "gallery": [
      "images/projects/wazi-nibash.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Wazi Nibash is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.50 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "khonika",
    "name": "ARMA Khonika",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 15, Road: 08, Block-, Banasree",
    "land": "3.00 Katha",
    "unitType": "6 Apartments",
    "image": "images/projects/khonika.webp",
    "gallery": [
      "images/projects/khonika.webp",
      "images/projects/khonika-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Khonika is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.00 Katha. 6 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "jesmin-garden",
    "name": "ARMA Jesmin Garden",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 2-4, Road: 09, Block-D, Banasree",
    "land": "6.00 Katha",
    "unitType": "16 Apartments",
    "image": "images/projects/jesmin-garden.webp",
    "gallery": [
      "images/projects/jesmin-garden.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Jesmin Garden is an ARMA Real Estate development in Banasree, Dhaka. Land area: 6.00 Katha. 16 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "khawaja",
    "name": "ARMA Khawaja",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "Plot: 24/26, Road: 07, Block-E, Banasree",
    "land": "6.00 Katha",
    "unitType": "14 Apartments",
    "image": "images/projects/khawaja.webp",
    "gallery": [
      "images/projects/khawaja.webp",
      "images/projects/khawaja-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Khawaja is an ARMA Real Estate development in Banasree, Dhaka. Land area: 6.00 Katha. 14 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "yuri",
    "name": "ARMA Yuri",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "Plot: E/20, Road: 08, Banasree",
    "land": "3.00 Katha",
    "unitType": "6 Apartments",
    "image": "images/projects/yuri.webp",
    "gallery": [
      "images/projects/yuri.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Yuri is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.00 Katha. 6 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "shamima",
    "name": "ARMA Shamima",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 01, Road: 02, Block-G, Banasree",
    "land": "3.50 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/shamima.webp",
    "gallery": [
      "images/projects/shamima.webp",
      "images/projects/shamima-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Shamima is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.50 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "madhobee",
    "name": "ARMA Madhobee",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 36, Road: 01, Block-G, Banasree",
    "land": "3.50 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/madhobee.webp",
    "gallery": [
      "images/projects/madhobee.webp",
      "images/projects/madhobee-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Madhobee is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.50 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "jamila-garden",
    "name": "ARMA Jamila Garden",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "Plot: G/22, Road: 04, Banasree",
    "land": "3.50 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/jamila-garden.webp",
    "gallery": [
      "images/projects/jamila-garden.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Jamila Garden is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.50 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "jaimush-garden",
    "name": "ARMA Jaimush Garden",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: H/10, Road: 08, Banasree",
    "land": "5.36 Katha",
    "unitType": "14 Apartments",
    "image": "images/projects/jaimush-garden.webp",
    "gallery": [
      "images/projects/jaimush-garden.webp",
      "images/projects/jaimush-garden-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Jaimush Garden is an ARMA Real Estate development in Banasree, Dhaka. Land area: 5.36 Katha. 14 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "shely",
    "name": "ARMA Shely",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 07, Road: 07, Block-J, Banasree",
    "land": "3.40 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/shely.webp",
    "gallery": [
      "images/projects/shely.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Shely is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.40 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "salma-villa",
    "name": "ARMA Salma Villa",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 09, Road: 07, Block-J, Banasree",
    "land": "3.23 Katha",
    "unitType": "12 Apartments",
    "image": "images/projects/salma-villa.webp",
    "gallery": [
      "images/projects/salma-villa.webp",
      "images/projects/salma-villa-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Salma Villa is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.23 Katha. 12 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "badhon",
    "name": "ARMA Badhon",
    "category": "residential",
    "status": "handed-over",
    "location": "Goran Banasree, Dhaka",
    "address": "House: 3/1, Main Road:, Block-L, Goran Banasree",
    "land": "3.95 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/badhon.webp",
    "gallery": [
      "images/projects/badhon.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Badhon is an ARMA Real Estate development in Goran Banasree, Dhaka. Land area: 3.95 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "alam-nibash",
    "name": "ARMA Alam Nibash",
    "category": "residential",
    "status": "handed-over",
    "location": "South Banasree, Dhaka",
    "address": "House: 208, Road: 9/5, Block-E, South Banasree, Dhaka",
    "land": "3.00 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/alam-nibash.webp",
    "gallery": [
      "images/projects/alam-nibash.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Alam Nibash is an ARMA Real Estate development in South Banasree, Dhaka. Land area: 3.00 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "suraiya-garden",
    "name": "ARMA Suraiya Garden",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 03, Road: 01, Block-B, Banasree",
    "land": "3.00 Katha",
    "unitType": "8 Apartments",
    "image": "images/projects/suraiya-garden.webp",
    "gallery": [
      "images/projects/suraiya-garden.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Suraiya Garden is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.00 Katha. 8 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "ferdousi-villa",
    "name": "ARMA Ferdousi Villa",
    "category": "residential",
    "status": "handed-over",
    "location": "Aftabnagar, Dhaka",
    "address": "House:11, Main Road:, Block-B, Aftabnagar",
    "land": "5.00 Katha",
    "unitType": "9 Apartments",
    "image": "images/projects/ferdousi-villa.webp",
    "gallery": [
      "images/projects/ferdousi-villa.webp",
      "images/projects/ferdousi-villa-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Ferdousi Villa is an ARMA Real Estate development in Aftabnagar, Dhaka. Land area: 5.00 Katha. 9 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "nasrin-villa",
    "name": "ARMA Nasrin Villa",
    "category": "residential",
    "status": "handed-over",
    "location": "Aftabnagar, Dhaka",
    "address": "House: 07, Road: 02, Block-C, Aftabnagar",
    "land": "5 Katha",
    "unitType": "12 Apartments",
    "image": "images/projects/nasrin-villa.webp",
    "gallery": [
      "images/projects/nasrin-villa.webp",
      "images/projects/nasrin-villa-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Nasrin Villa is an ARMA Real Estate development in Aftabnagar, Dhaka. Land area: 5 Katha. 12 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "monika",
    "name": "ARMA Monika",
    "category": "residential",
    "status": "handed-over",
    "location": "Aftabnagar, Dhaka",
    "address": "House: 21, Road: 03, Block-C, Aftabnagar",
    "land": "3.50 Katha",
    "unitType": "10 Apartments",
    "image": "images/projects/monika.webp",
    "gallery": [
      "images/projects/monika.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Monika is an ARMA Real Estate development in Aftabnagar, Dhaka. Land area: 3.50 Katha. 10 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "south-view",
    "name": "ARMA South View",
    "category": "residential",
    "status": "handed-over",
    "location": "Aftabnagar, Dhaka",
    "address": "House: 38, Road: 01, Block-F, Aftabnagar",
    "land": "5 Katha",
    "unitType": "12 Apartments",
    "image": "images/projects/south-view.webp",
    "gallery": [
      "images/projects/south-view.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA South View is an ARMA Real Estate development in Aftabnagar, Dhaka. Land area: 5 Katha. 12 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "sejuty",
    "name": "ARMA Sejuty",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 32, Road: 03, Block-C, Banasree",
    "land": "3.50 Katha",
    "unitType": "10 Apartments",
    "image": "images/projects/_cover-fallback.webp",
    "gallery": [
      "images/projects/_cover-fallback.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Sejuty is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.50 Katha. 10 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "moazzem-mili-nibash",
    "name": "ARMA Moazzem Mili Nibash",
    "category": "residential",
    "status": "handed-over",
    "location": "Aftabnagar, Dhaka",
    "address": "House: 49/F, Road: 04, Block-F, Aftabnagar",
    "land": "2.50 Katha",
    "unitType": "6 Apartments",
    "image": "images/projects/moazzem-mili-nibash.webp",
    "gallery": [
      "images/projects/moazzem-mili-nibash.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Moazzem Mili Nibash is an ARMA Real Estate development in Aftabnagar, Dhaka. Land area: 2.50 Katha. 6 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "esha-kanon",
    "name": "ARMA Esha Kanon",
    "category": "residential",
    "status": "handed-over",
    "location": "Banasree, Dhaka",
    "address": "House: 36, Road: 03, Block- D, Banasree",
    "land": "3.50 Katha",
    "unitType": "10 Apartments",
    "image": "images/projects/_cover-fallback.webp",
    "gallery": [
      "images/projects/_cover-fallback.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Esha Kanon is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.50 Katha. 10 Apartments. Completed and handed over.",
    "featured": false,
    "related": [
      "arma-complex",
      "mohona",
      "lake-view"
    ]
  },
  {
    "id": "arshi-nagar",
    "name": "ARMA Arshi Nagar",
    "category": "residential",
    "status": "ongoing",
    "location": "Meradia Bazar, Banasree",
    "address": "House: H/3,4,5,7 Main Road, Meradia Bazar, Banasree",
    "land": "20 Katha",
    "unitType": "75 Apartments",
    "image": "images/projects/arshi-nagar.webp",
    "gallery": [
      "images/projects/arshi-nagar.webp",
      "images/projects/arshi-nagar-2.webp",
      "images/projects/arshi-nagar-3.webp",
      "images/projects/arshi-nagar-4.webp",
      "images/projects/arshi-nagar-5.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Arshi Nagar is an ARMA Real Estate development in Meradia Bazar, Banasree. Land area: 20 Katha. 75 Apartments. Currently under development.",
    "featured": true,
    "related": [
      "arma-complex",
      "mohona",
      "suchana"
    ]
  },
  {
    "id": "asma-garden",
    "name": "ARMA Asma Garden",
    "category": "residential",
    "status": "ongoing",
    "location": "Banasree, Dhaka",
    "address": "Banasree, Dhaka",
    "land": "3.5 Katha",
    "unitType": "G+7 Storied",
    "image": "images/projects/asma-garden.webp",
    "gallery": [
      "images/projects/asma-garden.webp",
      "images/projects/asma-garden-2.webp",
      "images/projects/asma-garden-3.webp",
      "images/projects/asma-garden-4.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Asma Garden is an ARMA Real Estate development in Banasree, Dhaka. Land area: 3.5 Katha. G+7 Storied. Currently under development.",
    "featured": true,
    "related": [
      "arma-complex",
      "mohona",
      "suchana"
    ]
  },
  {
    "id": "jannat-villa",
    "name": "ARMA Jannat Villa",
    "category": "residential",
    "status": "ongoing",
    "location": "Aftabnagar, Badda",
    "address": "Aftabnagar, Badda",
    "land": "",
    "unitType": "Residential",
    "image": "images/projects/jannat-villa.webp",
    "gallery": [
      "images/projects/jannat-villa.webp",
      "images/projects/jannat-villa-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Jannat Villa is an ARMA Real Estate development in Aftabnagar, Badda. Residential. Currently under development.",
    "featured": true,
    "related": [
      "ferdousi-villa",
      "nasrin-villa",
      "monika"
    ]
  },
  {
    "id": "royal-villa",
    "name": "ARMA Royal Villa",
    "category": "residential",
    "status": "ongoing",
    "location": "Aftabnagar, Dhaka",
    "address": "Land Area:",
    "land": "Apartment:",
    "unitType": "Luxury Villas",
    "image": "images/projects/royal-villa.webp",
    "gallery": [
      "images/projects/royal-villa.webp",
      "images/projects/royal-villa-2.webp",
      "images/projects/royal-villa-3.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Royal Villa is an ARMA Real Estate development in Aftabnagar, Dhaka. Land area: Apartment:. Luxury Villas. Currently under development.",
    "featured": true,
    "related": [
      "ferdousi-villa",
      "nasrin-villa",
      "monika"
    ]
  },
  {
    "id": "aliya-garden",
    "name": "ARMA Aliya Garden",
    "category": "residential",
    "status": "ongoing",
    "location": "Aftabnagar, Dhaka",
    "address": "Land Area:",
    "land": "Apartment:",
    "unitType": "Luxury Apartments",
    "image": "images/projects/aliya-garden.webp",
    "gallery": [
      "images/projects/aliya-garden.webp",
      "images/projects/aliya-garden-2.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Aliya Garden is an ARMA Real Estate development in Aftabnagar, Dhaka. Land area: Apartment:. Luxury Apartments. Currently under development.",
    "featured": true,
    "related": [
      "ferdousi-villa",
      "nasrin-villa",
      "monika"
    ]
  },
  {
    "id": "lake-castle",
    "name": "ARMA Lake Castle",
    "category": "residential",
    "status": "ongoing",
    "location": "Meradia Bazar / Aftabnagar",
    "address": "Land Area:",
    "land": "Apartment:",
    "unitType": "Residential",
    "image": "images/projects/lake-castle.webp",
    "gallery": [
      "images/projects/lake-castle.webp",
      "images/projects/lake-castle-2.webp",
      "images/projects/lake-castle-3.webp",
      "images/projects/lake-castle-4.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Lake Castle is an ARMA Real Estate development in Meradia Bazar / Aftabnagar. Land area: Apartment:. Residential. Currently under development.",
    "featured": true,
    "related": [
      "ferdousi-villa",
      "nasrin-villa",
      "monika"
    ]
  },
  {
    "id": "tasnim-paradise",
    "name": "ARMA Tasnim Paradise",
    "category": "residential",
    "status": "ongoing",
    "location": "Aftabnagar, Dhaka",
    "address": "Aftabnagar, Dhaka",
    "land": "",
    "unitType": "Residential",
    "image": "images/projects/tasnim-paradise.webp",
    "gallery": [
      "images/projects/tasnim-paradise.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Tasnim Paradise is an ARMA Real Estate development in Aftabnagar, Dhaka. Residential. Currently under development.",
    "featured": false,
    "related": [
      "ferdousi-villa",
      "nasrin-villa",
      "monika"
    ]
  },
  {
    "id": "moazzem-nibash",
    "name": "ESHA Moazzem Nibash",
    "category": "residential",
    "status": "ongoing",
    "location": "Aftabnagar, Dhaka",
    "address": "Aftabnagar, Dhaka",
    "land": "2.5 Katha",
    "unitType": "G+6 · Single Unit",
    "image": "images/projects/moazzem-nibash.webp",
    "gallery": [
      "images/projects/moazzem-nibash.webp",
      "images/projects/moazzem-nibash-2.webp",
      "images/projects/moazzem-nibash-3.webp",
      "images/projects/moazzem-nibash-4.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ESHA Moazzem Nibash is an ARMA Real Estate development in Aftabnagar, Dhaka. Land area: 2.5 Katha. G+6 · Single Unit. Currently under development.",
    "featured": false,
    "related": [
      "ferdousi-villa",
      "nasrin-villa",
      "monika"
    ]
  },
  {
    "id": "howlader-tower",
    "name": "ARMA Howlader Tower",
    "category": "commercial",
    "status": "upcoming",
    "location": "Aftabnagar, Dhaka",
    "address": "House: A/1,A/3,A/5, Main Road:, Block-A, Aftabnagar",
    "land": "15 Katha",
    "unitType": "14 Units",
    "image": "images/projects/howlader-tower.webp",
    "gallery": [
      "images/projects/howlader-tower.webp"
    ],
    "video": "",
    "mapUrl": "",
    "mapCoords": "",
    "brochure": "",
    "description": "ARMA Howlader Tower is an ARMA Real Estate development in Aftabnagar, Dhaka. Land area: 15 Katha. 14 Units. Upcoming development.",
    "featured": true,
    "related": [
      "ferdousi-villa",
      "nasrin-villa",
      "monika"
    ]
  }
];

  function dispatch() {
    document.dispatchEvent(new CustomEvent('armaProjectsReady'));
  }

  /* ── Try to load from CMS JSON first ────────────────────── */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'content/projects.json', true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        var data = JSON.parse(xhr.responseText);
        window.ARMA_PROJECTS = Array.isArray(data) ? data : (data.projects || FALLBACK);
        console.log('[ARMA CMS] Loaded ' + window.ARMA_PROJECTS.length + ' projects from CMS.');
      } catch (e) {
        console.warn('[ARMA CMS] JSON parse error, using fallback.', e);
        window.ARMA_PROJECTS = FALLBACK;
      }
    } else {
      console.warn('[ARMA CMS] Could not fetch projects.json (status ' + xhr.status + '), using fallback.');
      window.ARMA_PROJECTS = FALLBACK;
    }
    dispatch();
  };
  xhr.onerror = function () {
    console.warn('[ARMA CMS] Network error fetching projects.json, using fallback.');
    window.ARMA_PROJECTS = FALLBACK;
    dispatch();
  };
  xhr.send();

})();
