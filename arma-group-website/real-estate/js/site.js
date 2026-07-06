/* ARMA Real Estate — Shared Site Logic */
(function () {
  'use strict';

  const CFG = window.ARMA_CONFIG || {};
  const PROJECTS = window.ARMA_PROJECTS || [];
  const THEME_KEY = 'arma-re-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme === 'night' ? 'night' : 'day');
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'night' ? 'Switch to day mode' : 'Switch to night mode');
      btn.setAttribute('aria-pressed', theme === 'night' ? 'true' : 'false');
    }
  }

  try {
    applyTheme(localStorage.getItem(THEME_KEY) === 'night' ? 'night' : 'day');
  } catch (e) {
    applyTheme('day');
  }

  /* ── LOADER ── */
  function initLoader() {
    const loader = document.getElementById('arma-loader');
    if (!loader) return;

    document.body.classList.add('loading');

    const minTime = 900;
    const start = Date.now();

    function hideLoader() {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minTime - elapsed);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        document.body.classList.add('page-loaded');
      }, wait);
    }

    if (document.readyState === 'complete') hideLoader();
    else window.addEventListener('load', hideLoader);
  }

  /* ── PAGE TRANSITIONS ── */
  function initPageTransitions() {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.documentElement.appendChild(overlay);

    document.body.classList.add('page-enter');

    window.addEventListener('pageshow', () => {
      overlay.classList.remove('active');
      document.body.classList.add('page-loaded');
    });

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || link.target === '_blank') return;
      if (href.includes('.html') || href === 'index.html' || href === 'projects.html' || href === 'project.html') {
        e.preventDefault();
        overlay.classList.add('active');
        document.body.classList.remove('page-loaded');
        setTimeout(() => { window.location.href = href; }, 420);
      }
    });
  }

  /* ── CUSTOM CURSOR ── */
  function initCustomCursor() {
    const outer = document.getElementById('cur-outer');
    const inner = document.getElementById('cur-inner');
    if (!outer || !inner) return;
    if (window.matchMedia('(max-width: 900px)').matches) return;

    let mx = 0;
    let my = 0;
    let ox = 0;
    let oy = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      inner.style.left = mx + 'px';
      inner.style.top = my + 'px';
    });

    function animCursor() {
      ox += (mx - ox) * 0.08;
      oy += (my - oy) * 0.08;
      outer.style.left = ox + 'px';
      outer.style.top = oy + 'px';
      requestAnimationFrame(animCursor);
    }
    animCursor();

    const hoverTargets = 'a, button, .proj-card, .team-card, .news-card, .filter-tab, .btn-primary, .btn-ghost, .btn-outline, .contact-bubble-main, .contact-bubble-child, .gallery-item, input, select, textarea, .hamburger, .theme-switch-btn';
    document.querySelectorAll(hoverTargets).forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('ch'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('ch'));
    });
  }

  /* ── NAV ── */
  function initNav() {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const burger = document.getElementById('hamburger');
    const menu = document.getElementById('navMenu');
    if (burger && menu) {
      burger.addEventListener('click', () => menu.classList.toggle('open'));
      menu.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => menu.classList.remove('open'));
      });
    }

    const path = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('.nav-menu a').forEach((a) => {
      const href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
      if (href === 'projects.html' && path === 'projects.html') a.classList.add('active');
    });
  }

  /* ── CONTACT BUBBLE ── */
  function initContactBubble() {
    const wrap = document.getElementById('contactBubble');
    if (!wrap) return;

    const main = wrap.querySelector('.contact-bubble-main');
    const hotline = wrap.querySelector('.bubble-hotline');
    const messenger = wrap.querySelector('.bubble-messenger');
    const whatsapp = wrap.querySelector('.bubble-whatsapp');

    if (hotline) hotline.href = 'tel:' + (CFG.hotlineDial || '');
    if (messenger) messenger.href = CFG.messenger || '#';
    if (whatsapp) whatsapp.href = 'https://wa.me/' + (CFG.whatsapp || '');

    let closeTimer;
    const open = () => {
      clearTimeout(closeTimer);
      wrap.classList.add('is-open');
    };
    const scheduleClose = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => wrap.classList.remove('is-open'), 280);
    };

    wrap.addEventListener('mouseenter', open);
    wrap.addEventListener('mouseleave', scheduleClose);

    if (main) {
      main.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        wrap.classList.toggle('is-open');
      });
    }

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) wrap.classList.remove('is-open');
    });
  }

  /* ── DAY / NIGHT THEME SWITCH ── */
  function initThemeSwitch() {
    if (!document.getElementById('themeSwitch')) {
      const wrap = document.createElement('div');
      wrap.className = 'theme-switch';
      wrap.id = 'themeSwitch';
      wrap.innerHTML = `
        <div class="theme-switch-cord" aria-hidden="true"></div>
        <button type="button" class="theme-switch-btn" id="themeToggle" aria-label="Switch to night mode" aria-pressed="false">
          <span class="theme-switch-sky theme-switch-sky--day" aria-hidden="true"></span>
          <span class="theme-switch-sky theme-switch-sky--night" aria-hidden="true"></span>
          <span class="theme-switch-stars" aria-hidden="true"></span>
          <svg class="theme-icon theme-icon-sun" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5"></circle>
            <g stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round">
              <line x1="12" y1="2" x2="12" y2="5"></line>
              <line x1="12" y1="19" x2="12" y2="22"></line>
              <line x1="2" y1="12" x2="5" y2="12"></line>
              <line x1="19" y1="12" x2="22" y2="12"></line>
              <line x1="4.9" y1="4.9" x2="7" y2="7"></line>
              <line x1="17" y1="17" x2="19.1" y2="19.1"></line>
              <line x1="4.9" y1="19.1" x2="7" y2="17"></line>
              <line x1="17" y1="7" x2="19.1" y2="4.9"></line>
            </g>
          </svg>
          <svg class="theme-icon theme-icon-moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21 14.5A8.5 8.5 0 0110.2 3.2 8.5 8.5 0 1014 21.8 6.6 6.6 0 0021 14.5z"></path>
          </svg>
        </button>`;
      document.body.appendChild(wrap);
    }

    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    applyTheme(localStorage.getItem(THEME_KEY) === 'night' ? 'night' : 'day');

    btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'night' ? 'day' : 'night';
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
      applyTheme(next);
    });
  }

  /* ── FOOTER ATTRIBUTION ── */
  function initFooter() {
    const il = document.getElementById('interlinkAttr');
    if (il && CFG.interlinkUrl && !CFG.interlinkUrl.includes('PLACEHOLDER')) {
      il.href = CFG.interlinkUrl;
    }
  }

  /* ── PROJECT CARD HTML ── */
  function projectCardHTML(p) {
    const statusLabel = p.status.replace('-', ' ');
    return `
      <a href="project.html?id=${p.id}" class="proj-card" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=70'">
        <div class="proj-card-overlay"></div>
        <div class="proj-card-body">
          <span class="proj-status">${statusLabel}</span>
          <div class="proj-name">${p.name}</div>
          <div class="proj-loc">${p.location}</div>
          <span class="proj-cta">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        </div>
      </a>`;
  }

  /* ── FEATURED PROJECTS (HOME) ── */
  function renderFeaturedProjects() {
    const grid = document.getElementById('featuredProjects');
    if (!grid) return;
    const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
    grid.innerHTML = featured.map(projectCardHTML).join('');
  }

  /* ── PROJECTS PAGE FILTERS ── */
  function initProjectsPage() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    let statusFilter = 'all';
    let categoryFilter = 'all';

    const statusTabs = document.querySelectorAll('[data-status-filter]');
    const categorySelect = document.getElementById('categoryFilter');
    const clearStatus = document.getElementById('clearStatus');
    const clearCategory = document.getElementById('clearCategory');
    const countEl = document.getElementById('projectCount');

    function render() {
      let list = PROJECTS.slice();
      if (statusFilter !== 'all') list = list.filter((p) => p.status === statusFilter);
      if (categoryFilter !== 'all') list = list.filter((p) => p.category === categoryFilter);

      if (list.length === 0) {
        grid.innerHTML = '<p class="no-results">No projects match these filters.</p>';
      } else {
        grid.innerHTML = list.map(projectCardHTML).join('');
      }

      if (countEl) countEl.textContent = list.length;

      if (clearStatus) clearStatus.classList.toggle('has-filter', statusFilter !== 'all');
      if (clearCategory) clearCategory.classList.toggle('has-filter', categoryFilter !== 'all');
    }

    statusTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        statusTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        statusFilter = tab.dataset.statusFilter;
        render();
      });
    });

    if (categorySelect) {
      categorySelect.addEventListener('change', () => {
        categoryFilter = categorySelect.value;
        render();
      });
    }

    if (clearStatus) {
      clearStatus.addEventListener('click', () => {
        statusFilter = 'all';
        statusTabs.forEach((t) => t.classList.toggle('active', t.dataset.statusFilter === 'all'));
        render();
      });
    }

    if (clearCategory) {
      clearCategory.addEventListener('click', () => {
        categoryFilter = 'all';
        if (categorySelect) categorySelect.value = 'all';
        render();
      });
    }

    render();
  }

  /* ── PROJECT DETAIL PAGE ── */
  function initProjectDetail() {
    const root = document.getElementById('projectDetail');
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
      root.innerHTML = '<div class="section"><p class="section-sub">Project not found. <a href="projects.html">View all projects</a></p></div>';
      return;
    }

    document.title = project.name + ' — ARMA Real Estate Ltd.';

    const statusLabel = project.status.replace('-', ' ');
    const heroImg = document.querySelector('.project-hero-img');
    if (heroImg) heroImg.style.backgroundImage = `url('${project.image}')`;

    const set = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
    set('#pdName', project.name);
    set('#pdStatus', statusLabel);
    set('#pdLocation', project.location);
    set('#pdAddress', project.address);
    set('#pdLand', project.land);
    set('#pdLandSide', project.land);
    set('#pdType', project.unitType);
    set('#pdTypeSide', project.unitType);
    set('#pdCategory', project.category);
    set('#pdDesc', project.description);

    const mapLink = document.getElementById('pdMapLink');
    if (mapLink) {
      mapLink.href = project.mapUrl && !project.mapUrl.includes('PLACEHOLDER')
        ? project.mapUrl
        : (project.mapCoords && !project.mapCoords.includes('PLACEHOLDER')
          ? 'https://www.google.com/maps?q=' + project.mapCoords
          : '#');
      if (mapLink.href === '#') mapLink.textContent = 'Map link — add coordinates in projects.js';
    }

    const gallery = document.getElementById('pdGallery');
    if (gallery) {
      gallery.innerHTML = project.gallery.map((src, i) => `
        <div class="gallery-item">
          <img src="${src}" alt="${project.name} — image ${i + 1}" loading="lazy"
            onerror="this.parentElement.style.display='none'">
        </div>`).join('');
    }

    initBrochureGate(project);
    renderRelatedProjects(project);
  }

  /* ── BROCHURE GATE ── */
  let pendingBrochureUrl = '';

  function initBrochureGate(project) {
    const btn = document.getElementById('brochureBtn');
    const modal = document.getElementById('brochureModal');
    const form = document.getElementById('brochureForm');
    const closeBtn = document.getElementById('brochureClose');

    if (!btn || !modal || !form) return;

    btn.addEventListener('click', () => {
      pendingBrochureUrl = project.brochure;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const close = () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const err = document.getElementById('brochureError');

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const phoneOk = /^[\d\s+\-()]{7,}$/.test(phone);

      if (!name || !emailOk || !phoneOk) {
        if (err) { err.textContent = 'Please enter a valid name, email, and phone number.'; err.classList.add('show'); }
        return;
      }
      if (err) err.classList.remove('show');

      if (pendingBrochureUrl && !pendingBrochureUrl.includes('PLACEHOLDER')) {
        const a = document.createElement('a');
        a.href = pendingBrochureUrl;
        a.download = '';
        a.target = '_blank';
        a.click();
      } else {
        alert('Brochure file not uploaded yet. Add PLACEHOLDER_BROCHURE_PDF_URL in projects.js');
      }
      close();
      form.reset();
    });
  }

  /* ── RELATED PROJECTS CAROUSEL ── */
  function renderRelatedProjects(project) {
    const track = document.getElementById('relatedTrack');
    if (!track) return;

    const relatedIds = (project.related || []).filter((id) => id !== project.id);
    const unique = [...new Set(relatedIds)];
    const related = unique
      .map((id) => PROJECTS.find((p) => p.id === id))
      .filter(Boolean)
      .slice(0, 6);

    if (related.length === 0) {
      document.getElementById('relatedSection').style.display = 'none';
      return;
    }

    track.innerHTML = related.map(projectCardHTML).join('');

    let offset = 0;
    const prev = document.getElementById('relatedPrev');
    const next = document.getElementById('relatedNext');

    function slide(dir) {
      const card = track.querySelector('.proj-card');
      if (!card) return;
      const step = card.offsetWidth + 3;
      const max = Math.max(0, track.scrollWidth - track.parentElement.offsetWidth);
      offset = Math.max(0, Math.min(max, offset + dir * step));
      track.style.transform = 'translateX(-' + offset + 'px)';
    }

    if (prev) prev.addEventListener('click', () => slide(-1));
    if (next) next.addEventListener('click', () => slide(1));
  }

  /* ── CONTACT FORM ── */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          btn.textContent = 'Request Received';
          btn.style.background = 'var(--green)';
          form.reset();
          setTimeout(() => { btn.textContent = original; btn.style.background = ''; btn.disabled = false; }, 4000);
        } else throw new Error();
      } catch {
        btn.textContent = 'Error — Try Again';
        btn.disabled = false;
      }
    });
  }

  /* ── INIT ── */
  document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initPageTransitions();
    initCustomCursor();
    initThemeSwitch();
    initNav();
    initContactBubble();
    initFooter();
    renderFeaturedProjects();
    initProjectsPage();
    initProjectDetail();
    initContactForm();
  });
})();
