/* ARMA Group — Shared day/night theme switch */
(function (global) {
  'use strict';

  const ICONS = {
    sun: `<svg class="theme-icon theme-icon-sun" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5"></circle>
      <g stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round">
        <line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="22"></line>
        <line x1="2" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="22" y2="12"></line>
        <line x1="4.9" y1="4.9" x2="7" y2="7"></line><line x1="17" y1="17" x2="19.1" y2="19.1"></line>
        <line x1="4.9" y1="19.1" x2="7" y2="17"></line><line x1="17" y1="7" x2="19.1" y2="4.9"></line>
      </g>
    </svg>`,
    moon: `<svg class="theme-icon theme-icon-moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 14.5A8.5 8.5 0 0110.2 3.2 8.5 8.5 0 1014 21.8 6.6 6.6 0 0021 14.5z"></path>
    </svg>`
  };

  const SITE_KEYS = {
    group: 'arma-group-theme',
    electric: 'arma-electric-theme',
    agriculture: 'arma-agriculture-theme',
    'line-hardware': 'arma-line-hardware-theme',
    'real-estate': 'arma-re-theme',
    'esha-holdings': 'arma-esha-theme',
    'arsc-school': 'arma-arsc-theme'
  };

  const SWITCH_MS = 620;

  function applyTheme(theme, btn) {
    document.documentElement.setAttribute('data-theme', theme === 'night' ? 'night' : 'day');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'night' ? 'Switch to day mode' : 'Switch to night mode');
      btn.setAttribute('aria-pressed', theme === 'night' ? 'true' : 'false');
    }
  }

  function applyEarly(storageKey) {
    try {
      const t = localStorage.getItem(storageKey);
      document.documentElement.setAttribute('data-theme', t === 'night' ? 'night' : 'day');
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'day');
    }
  }

  function playSwitchAnim(btn, onMidpoint) {
  btn.classList.remove('is-rising', 'is-dropping');
  void btn.offsetWidth;
  btn.classList.add('is-rising');

  window.clearTimeout(btn._riseTimer);
  window.clearTimeout(btn._dropTimer);

  btn._riseTimer = window.setTimeout(() => {
    onMidpoint();
    btn.classList.add('is-dropping');

    btn._dropTimer = window.setTimeout(() => {
      btn.classList.remove('is-rising', 'is-dropping');
      void btn.offsetWidth;
    }, 430);
  }, 320);
}

  function buildWidget(site, placement) {
    const hang = placement === 'hang';
    return `
      <div class="theme-switch theme-switch--${site}${hang ? ' theme-switch--hang' : ' theme-switch--inline'}" id="themeSwitch">
        ${hang ? '<div class="theme-switch-cord" aria-hidden="true"></div>' : ''}
        <button type="button" class="theme-switch-btn" id="themeToggle" aria-label="Switch to night mode" aria-pressed="false">
          <span class="theme-switch-decor" aria-hidden="true"></span>
          <span class="theme-switch-sky theme-switch-sky--day" aria-hidden="true"></span>
          <span class="theme-switch-sky theme-switch-sky--night" aria-hidden="true"></span>
          <span class="theme-switch-stars" aria-hidden="true"></span>
          ${ICONS.sun}${ICONS.moon}
        </button>
      </div>`;
  }

  function init(options) {
    const site = options.site || 'group';
    const storageKey = options.storageKey || SITE_KEYS[site] || 'arma-theme';
    const placement = options.placement || (site === 'real-estate' ? 'hang' : 'inline');
    const mountSel = options.mount || '#themeSwitchMount';

    document.documentElement.setAttribute('data-site', site);

    if (!document.getElementById('themeSwitch')) {
      const html = buildWidget(site, placement);
      const mount = document.querySelector(mountSel);
      if (mount) {
        mount.innerHTML = html;
      } else {
        const wrap = document.createElement('div');
        wrap.innerHTML = html;
        document.body.appendChild(wrap.firstElementChild);
      }
    }

    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    applyTheme(localStorage.getItem(storageKey) === 'night' ? 'night' : 'day', btn);

   btn.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'night' ? 'day' : 'night';
  playSwitchAnim(btn, () => {
    try { localStorage.setItem(storageKey, next); } catch (e) { /* ignore */ }
    applyTheme(next, btn);
  });
});

    document.querySelectorAll('.theme-switch-btn').forEach((el) => {
      const hoverOn = site === 'group' ? 'cursor-hover' : 'ch';
      el.addEventListener('mouseenter', () => {
        if (getComputedStyle(document.body).cursor === 'none') {
          document.body.classList.add(hoverOn);
          if (site === 'group') document.body.classList.add('ch');
        }
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove(hoverOn, 'ch', 'cursor-hover');
      });
    });
  }

  global.ARMATheme = { init, applyEarly, SITE_KEYS };
})(typeof window !== 'undefined' ? window : globalThis);
