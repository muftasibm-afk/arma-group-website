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
      id: 'royal-villa', name: 'ARMA Royal Villa', category: 'residential',
      status: 'handed-over', location: 'Dhaka', address: 'PLACEHOLDER_ADDRESS_ROYAL_VILLA',
      land: 'PLACEHOLDER_LAND_AREA', unitType: 'Luxury Villas',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80',
      gallery: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80'],
      video: 'PLACEHOLDER_VIDEO_URL', mapUrl: 'PLACEHOLDER_MAP_COORDINATES_URL',
      mapCoords: 'PLACEHOLDER_LAT,PLACEHOLDER_LNG', brochure: 'PLACEHOLDER_BROCHURE_PDF_URL',
      description: 'Independent luxury villas offering exclusivity, privacy, and the finest craftsmanship.',
      featured: true, related: ['arshi-nagar', 'aliya-garden', 'asma-garden']
    },
    {
      id: 'arshi-nagar', name: 'ARMA Arshi Nagar', category: 'residential',
      status: 'handed-over', location: 'Dhaka', address: 'PLACEHOLDER_ADDRESS_ARSHI_NAGAR',
      land: 'PLACEHOLDER_LAND_AREA', unitType: 'Residential Complex',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80',
      gallery: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80'],
      video: 'PLACEHOLDER_VIDEO_URL', mapUrl: 'PLACEHOLDER_MAP_COORDINATES_URL',
      mapCoords: 'PLACEHOLDER_LAT,PLACEHOLDER_LNG', brochure: 'PLACEHOLDER_BROCHURE_PDF_URL',
      description: 'Premium apartments in a prime Dhaka location with modern amenities and thoughtful design.',
      featured: true, related: ['aliya-garden', 'asma-garden', 'royal-villa']
    },
    {
      id: 'aliya-garden', name: 'ARMA Aliya Garden', category: 'residential',
      status: 'ongoing', location: 'Dhaka', address: 'PLACEHOLDER_ADDRESS_ALIYA_GARDEN',
      land: 'PLACEHOLDER_LAND_AREA', unitType: 'Luxury Apartments',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
      gallery: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80'],
      video: 'PLACEHOLDER_VIDEO_URL', mapUrl: 'PLACEHOLDER_MAP_COORDINATES_URL',
      mapCoords: 'PLACEHOLDER_LAT,PLACEHOLDER_LNG', brochure: 'PLACEHOLDER_BROCHURE_PDF_URL',
      description: 'Spacious layouts, high-end finishes, and garden views for families seeking premium living.',
      featured: true, related: ['arshi-nagar', 'asma-garden', 'royal-villa']
    },
    {
      id: 'asma-garden', name: 'ARMA Asma Garden', category: 'residential',
      status: 'handed-over', location: 'Dhaka', address: 'PLACEHOLDER_ADDRESS_ASMA_GARDEN',
      land: 'PLACEHOLDER_LAND_AREA', unitType: 'Garden Apartments',
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&auto=format&fit=crop&q=80',
      gallery: ['https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&auto=format&fit=crop&q=80'],
      video: 'PLACEHOLDER_VIDEO_URL', mapUrl: 'PLACEHOLDER_MAP_COORDINATES_URL',
      mapCoords: 'PLACEHOLDER_LAT,PLACEHOLDER_LNG', brochure: 'PLACEHOLDER_BROCHURE_PDF_URL',
      description: 'Garden-facing apartments designed for calm, green living in the heart of the city.',
      featured: false, related: ['aliya-garden', 'arshi-nagar', 'royal-villa']
    },
    {
      id: 'moazzem-nibash', name: 'ESHA Moazzem Nibash', category: 'residential',
      status: 'handed-over', location: 'Dhaka', address: 'PLACEHOLDER_ADDRESS_MOAZZEM_NIBASH',
      land: 'PLACEHOLDER_LAND_AREA', unitType: 'Residential',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&auto=format&fit=crop&q=80',
      gallery: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&auto=format&fit=crop&q=80'],
      video: 'PLACEHOLDER_VIDEO_URL', mapUrl: 'PLACEHOLDER_MAP_COORDINATES_URL',
      mapCoords: 'PLACEHOLDER_LAT,PLACEHOLDER_LNG', brochure: 'PLACEHOLDER_BROCHURE_PDF_URL',
      description: 'A refined residential address combining ESHA heritage with ARMA construction quality.',
      featured: false, related: ['aliya-garden', 'asma-garden', 'arshi-nagar']
    },
    {
      id: 'alam-nibash', name: 'ARMA Alam Nibash', category: 'residential',
      status: 'handed-over', location: 'South Banasree, Dhaka', address: 'PLACEHOLDER_ADDRESS_ALAM_NIBASH',
      land: 'PLACEHOLDER_LAND_AREA', unitType: 'Residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80',
      gallery: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80'],
      video: 'PLACEHOLDER_VIDEO_URL', mapUrl: 'PLACEHOLDER_MAP_COORDINATES_URL',
      mapCoords: 'PLACEHOLDER_LAT,PLACEHOLDER_LNG', brochure: 'PLACEHOLDER_BROCHURE_PDF_URL',
      description: 'South Banasree residences built for families who value connectivity and craftsmanship.',
      featured: false, related: ['binti-kuthir', 'kunje-kiron', 'angan']
    },
    {
      id: 'binti-kuthir', name: 'ARMA Binti Kuthir', category: 'residential',
      status: 'ongoing', location: 'Banasree, Dhaka',
      address: "Plot# 2/4, 20' N.S Road, Block - A, Banasree, Dhaka-1219",
      land: '3.5 Katha', unitType: 'Single Unit',
      image: 'PLACEHOLDER_IMAGE_BINTI_KUTHIR',
      gallery: ['PLACEHOLDER_IMAGE_BINTI_KUTHIR'],
      video: 'PLACEHOLDER_VIDEO_URL', mapUrl: 'PLACEHOLDER_MAP_COORDINATES_URL',
      mapCoords: 'PLACEHOLDER_LAT,PLACEHOLDER_LNG', brochure: 'PLACEHOLDER_BROCHURE_PDF_URL',
      description: 'A thoughtfully planned single-unit residence in the heart of Banasree.',
      featured: false, related: ['kunje-kiron', 'angan', 'aliya-garden']
    },
    {
      id: 'kunje-kiron', name: 'ARMA Kunje Kiron', category: 'residential',
      status: 'ongoing', location: 'Rampura, Dhaka',
      address: 'House # 7, Road # 02, Block-A, Banasree, Rampura, Dhaka-1219',
      land: '3.5 Katha', unitType: 'Single Unit',
      image: 'PLACEHOLDER_IMAGE_KUNJE_KIRON',
      gallery: ['PLACEHOLDER_IMAGE_KUNJE_KIRON'],
      video: 'PLACEHOLDER_VIDEO_URL', mapUrl: 'PLACEHOLDER_MAP_COORDINATES_URL',
      mapCoords: 'PLACEHOLDER_LAT,PLACEHOLDER_LNG', brochure: 'PLACEHOLDER_BROCHURE_PDF_URL',
      description: 'Compact luxury living on a prime Rampura plot with ARMA engineering standards.',
      featured: false, related: ['binti-kuthir', 'angan', 'aliya-garden']
    },
    {
      id: 'angan', name: 'ARMA Angan', category: 'residential',
      status: 'upcoming', location: 'Rampura, Dhaka',
      address: 'House # 35, Road # 01, Block-A, Banasree, Rampura, Dhaka-1219',
      land: '5 Katha', unitType: 'Single Unit',
      image: 'PLACEHOLDER_IMAGE_ANGAN',
      gallery: ['PLACEHOLDER_IMAGE_ANGAN'],
      video: 'PLACEHOLDER_VIDEO_URL', mapUrl: 'PLACEHOLDER_MAP_COORDINATES_URL',
      mapCoords: 'PLACEHOLDER_LAT,PLACEHOLDER_LNG', brochure: 'PLACEHOLDER_BROCHURE_PDF_URL',
      description: 'An upcoming courtyard-inspired residence on a generous 5 Katha plot.',
      featured: false, related: ['binti-kuthir', 'kunje-kiron', 'aliya-garden']
    },
    {
      id: 'arma-tower', name: 'ARMA Commercial Tower', category: 'commercial',
      status: 'upcoming', location: 'Tejgaon, Dhaka', address: 'PLACEHOLDER_ADDRESS_COMMERCIAL_TOWER',
      land: 'PLACEHOLDER_LAND_AREA', unitType: 'Commercial Floors',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
      gallery: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80'],
      video: 'PLACEHOLDER_VIDEO_URL', mapUrl: 'PLACEHOLDER_MAP_COORDINATES_URL',
      mapCoords: 'PLACEHOLDER_LAT,PLACEHOLDER_LNG', brochure: 'PLACEHOLDER_BROCHURE_PDF_URL',
      description: 'Grade-A commercial floors designed for modern enterprises in central Dhaka.',
      featured: false, related: ['arshi-nagar', 'aliya-garden', 'royal-villa']
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
