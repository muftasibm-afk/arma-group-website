/* ARMA GROUP — CERTIFICATE VIEWER
 * ---------------------------------------------------------------------------
 * Renders the certification register as full-width document plates, each
 * opening into a split viewer: the scan on the left, what it verifies on the
 * right. One implementation, four sites — each page supplies its own palette
 * through CSS custom properties, so this file carries structure and behaviour
 * only and never a colour.
 *
 * Usage:
 *   <link rel="stylesheet" href="../shared/css/cert-viewer.css">
 *   <div id="certRegister"></div>
 *   <script src="../shared/js/certifications.js"></script>
 *   <script src="../shared/js/cert-viewer.js"></script>
 *   <script>ARMACertViewer.init({ site: 'electric', mount: '#certRegister' });</script>
 *
 * Options:
 *   site      which company's certificates to show — filters `companies`
 *   mount     selector for the container element
 *   basePath  path to the images/certificates directory (default 'images/certificates')
 *   order     optional array of ids, controls display sequence
 * ------------------------------------------------------------------------- */

(function (global) {
  'use strict';

  var STATUS_LABEL = {
    expired:   'Term ended',
    current:   'In force',
    perpetual: 'No expiry'
  };

  var KIND_LABEL = {
    quality:    'Quality management',
    membership: 'Association standing',
    test:       'Material test report'
  };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function init(opts) {
    opts = opts || {};
    var site     = opts.site;
    var basePath = opts.basePath || 'images/certificates';
    var mount    = document.querySelector(opts.mount || '#certRegister');
    var all      = global.ARMA_CERTIFICATIONS || [];

    if (!mount || !all.length) return;

    var items = all.filter(function (c) {
      return !site || (c.companies && c.companies.indexOf(site) !== -1);
    });

    if (opts.order) {
      var rank = {};
      opts.order.forEach(function (id, i) { rank[id] = i; });
      items.sort(function (a, b) {
        var ra = rank[a.id] == null ? 999 : rank[a.id];
        var rb = rank[b.id] == null ? 999 : rank[b.id];
        return ra - rb;
      });
    }

    if (!items.length) {
      mount.innerHTML = '<p class="cv-empty">No documents on file for this company yet.</p>';
      return;
    }

    /* ── plates ──────────────────────────────────────────────────────────── */
    items.forEach(function (c, i) {
      var plate = document.createElement('article');
      plate.className = 'cv-plate';
      plate.id = c.id;
      plate.style.setProperty('--cv-i', i);

      var dates = c.status === 'perpetual'
        ? 'Tested ' + esc(c.issued)
        : esc(c.issued) + ' &ndash; ' + esc(c.expires || '');

      plate.innerHTML =
        '<button type="button" class="cv-plate-btn" aria-label="Open ' + esc(c.title) +
          ' issued by ' + esc(c.issuer) + ' &mdash; full document and details">' +
          '<span class="cv-plate-figure" data-orient="' + esc(c.orient || 'portrait') + '">' +
            '<img src="' + basePath + '/' + esc(c.src) + '" alt="' + esc(c.title) +
              ' issued to ' + esc(c.company) + ' by ' + esc(c.issuer) + '" loading="lazy" ' +
              'draggable="false"' + (c.rotate ? ' style="--cv-rotate:' + c.rotate + 'deg"' : '') + '>' +
            '<span class="cv-plate-shade"></span>' +
            '<span class="cv-plate-open">Open document</span>' +
          '</span>' +
          '<span class="cv-plate-body">' +
            '<span class="cv-plate-kind">' + esc(KIND_LABEL[c.kind] || '') + '</span>' +
            '<span class="cv-plate-title">' + esc(c.title) + '</span>' +
            '<span class="cv-plate-summary">' + esc(c.summary) + '</span>' +
            '<span class="cv-plate-meta">' +
              '<span class="cv-plate-issuer">' + esc(c.issuer) + '</span>' +
              '<span class="cv-plate-dates">' + dates + '</span>' +
              '<span class="cv-status cv-status--' + esc(c.status) + '">' +
                esc(STATUS_LABEL[c.status] || '') + '</span>' +
            '</span>' +
          '</span>' +
        '</button>';

      plate.querySelector('.cv-plate-btn').addEventListener('click', function () { open(i); });
      mount.appendChild(plate);
    });

    /* ── viewer ──────────────────────────────────────────────────────────── */
    var box = document.createElement('div');
    box.className = 'cv-viewer';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Certificate viewer');
    box.setAttribute('aria-hidden', 'true');
    box.innerHTML =
      '<div class="cv-viewer-scrim" data-cv-close></div>' +
      '<div class="cv-viewer-shell" role="document">' +
        '<button type="button" class="cv-close" aria-label="Close document viewer">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<div class="cv-viewer-grid">' +
          '<div class="cv-stage">' +
            '<div class="cv-stage-frame" id="cvStageFrame">' +
              /* src is set on open; an empty src attribute would fire a
                 spurious request for the page itself in some browsers */
              '<img id="cvImg" alt="" draggable="false">' +
            '</div>' +
            '<div class="cv-stage-tools">' +
              '<button type="button" class="cv-tool" id="cvZoomOut" aria-label="Zoom out">' +
                '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5M8 11h6"/></svg></button>' +
              '<span class="cv-zoom-level" id="cvZoomLevel" aria-live="polite">100%</span>' +
              '<button type="button" class="cv-tool" id="cvZoomIn" aria-label="Zoom in">' +
                '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5M8 11h6M11 8v6"/></svg></button>' +
              '<button type="button" class="cv-tool cv-tool--wide" id="cvZoomReset">Fit</button>' +
            '</div>' +
          '</div>' +
          '<div class="cv-panel" id="cvPanel" tabindex="-1"></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(box);

    var imgEl    = box.querySelector('#cvImg');
    var frameEl  = box.querySelector('#cvStageFrame');
    var panelEl  = box.querySelector('#cvPanel');
    var closeEl  = box.querySelector('.cv-close');
    var zoomInEl = box.querySelector('#cvZoomIn');
    var zoomOutEl= box.querySelector('#cvZoomOut');
    var zoomRstEl= box.querySelector('#cvZoomReset');
    var zoomLvl  = box.querySelector('#cvZoomLevel');

    var lastFocus = null;
    var zoom = 1, panX = 0, panY = 0;
    var MIN = 1, MAX = 5;

    function applyZoom() {
      imgEl.style.transform =
        'translate(' + panX + 'px,' + panY + 'px) scale(' + zoom + ')';
      zoomLvl.textContent = Math.round(zoom * 100) + '%';
      frameEl.classList.toggle('is-zoomed', zoom > 1);
      zoomOutEl.disabled = zoom <= MIN;
      zoomInEl.disabled  = zoom >= MAX;
    }

    function setZoom(z) {
      zoom = Math.min(MAX, Math.max(MIN, z));
      if (zoom === 1) { panX = 0; panY = 0; }
      applyZoom();
    }

    function renderPanel(c) {
      var h = '';

      h += '<div class="cv-panel-head">';
      h += '<p class="cv-panel-kind">' + esc(KIND_LABEL[c.kind] || '') + '</p>';
      h += '<h3 class="cv-panel-title">' + esc(c.title) + '</h3>';
      if (c.standard) h += '<p class="cv-panel-standard">' + esc(c.standard) + '</p>';
      h += '</div>';

      h += '<dl class="cv-idents">';
      h += '<div><dt>Issued to</dt><dd>' + esc(c.company) + '</dd></div>';
      h += '<div><dt>Issued by</dt><dd>' + esc(c.issuer) + '</dd></div>';
      if (c.certNo) h += '<div><dt>Reference</dt><dd>' + esc(c.certNo) + '</dd></div>';
      if (c.status === 'perpetual') {
        h += '<div><dt>Date of test</dt><dd>' + esc(c.issued) +
             ' <span class="cv-status cv-status--perpetual">' +
             esc(STATUS_LABEL.perpetual) + '</span></dd></div>';
      } else {
        h += '<div><dt>Issued</dt><dd>' + esc(c.issued) + '</dd></div>';
        if (c.expires) {
          h += '<div><dt>Expiry</dt><dd>' + esc(c.expires) +
               ' <span class="cv-status cv-status--' + esc(c.status) + '">' +
               esc(STATUS_LABEL[c.status] || '') + '</span></dd></div>';
        }
      }
      h += '</dl>';

      h += '<div class="cv-block"><h4>What this document verifies</h4><p>' +
           esc(c.detail) + '</p></div>';

      if (c.scope) {
        h += '<div class="cv-block"><h4>Certified scope</h4>' +
             '<p class="cv-scope">' + esc(c.scope) + '</p></div>';
      }

      if (c.facts && c.facts.length) {
        h += '<div class="cv-block"><h4>As printed on the document</h4><ul class="cv-facts">';
        c.facts.forEach(function (f) {
          h += '<li><span class="cv-fact-label">' + esc(f.label) + '</span>' +
               '<span class="cv-fact-value">' + esc(f.value) + '</span></li>';
        });
        h += '</ul></div>';
      }

      if (c.chain && c.chain.length) {
        h += '<div class="cv-block"><h4>Accreditation chain</h4><ol class="cv-chain">';
        c.chain.forEach(function (step) {
          h += '<li>' + esc(step) + '</li>';
        });
        h += '</ol><p class="cv-chain-note">A certificate carries international standing only ' +
             'through an unbroken chain: the accreditation body assesses the certification ' +
             'body, which audits the organisation.</p></div>';
      }

      if (c.note) {
        h += '<div class="cv-note"><h4>Worth knowing</h4><p>' + esc(c.note) + '</p></div>';
      }

      if (c.verify) {
        h += '<a class="cv-verify" href="' + esc(c.verify.url) + '" target="_blank" rel="noopener noreferrer">' +
             'Verify on ' + esc(c.verify.label) +
             '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg></a>';
      }

      panelEl.innerHTML = h;
      panelEl.scrollTop = 0;
    }

    function open(i) {
      var c = items[i];
      lastFocus = document.activeElement;

      imgEl.src = basePath + '/' + c.src;
      imgEl.alt = c.title + ' issued to ' + c.company + ' by ' + c.issuer;
      frameEl.setAttribute('data-orient', c.orient || 'portrait');
      imgEl.style.setProperty('--cv-rotate', (c.rotate || 0) + 'deg');

      renderPanel(c);
      setZoom(1);

      box.classList.add('is-open');
      box.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('cv-locked');
      closeEl.focus();
    }

    function close() {
      box.classList.remove('is-open');
      box.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.remove('cv-locked');
      /* drop the scan from memory without leaving an empty src behind */
      imgEl.removeAttribute('src');
      setZoom(1);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    /* zoom controls */
    zoomInEl.addEventListener('click', function () { setZoom(zoom + 0.5); });
    zoomOutEl.addEventListener('click', function () { setZoom(zoom - 0.5); });
    zoomRstEl.addEventListener('click', function () { setZoom(1); });

    /* click the scan to step through zoom */
    frameEl.addEventListener('click', function (e) {
      if (e.target === imgEl) setZoom(zoom >= MAX ? 1 : zoom + 1);
    });

    /* wheel zoom over the stage */
    frameEl.addEventListener('wheel', function (e) {
      if (!box.classList.contains('is-open')) return;
      e.preventDefault();
      setZoom(zoom + (e.deltaY < 0 ? 0.25 : -0.25));
    }, { passive: false });

    /* drag to pan when zoomed */
    var dragging = false, startX = 0, startY = 0;
    frameEl.addEventListener('pointerdown', function (e) {
      if (zoom <= 1) return;
      dragging = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      frameEl.setPointerCapture(e.pointerId);
      frameEl.classList.add('is-dragging');
    });
    frameEl.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      applyZoom();
    });
    ['pointerup', 'pointercancel'].forEach(function (evt) {
      frameEl.addEventListener(evt, function () {
        dragging = false;
        frameEl.classList.remove('is-dragging');
      });
    });

    /* close affordances */
    box.querySelectorAll('[data-cv-close]').forEach(function (el) {
      el.addEventListener('click', close);
    });
    closeEl.addEventListener('click', close);

    /* deter casual saving of the scans */
    [mount, box].forEach(function (el) {
      el.addEventListener('contextmenu', function (e) {
        if (e.target.tagName === 'IMG') e.preventDefault();
      });
      el.addEventListener('dragstart', function (e) { e.preventDefault(); });
    });

    /* keyboard: escape closes, zoom shortcuts, focus stays inside */
    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('is-open')) return;
      if (e.key === 'Escape') { close(); return; }
      if (e.key === '+' || e.key === '=') { setZoom(zoom + 0.5); return; }
      if (e.key === '-' || e.key === '_') { setZoom(zoom - 0.5); return; }
      if (e.key === '0') { setZoom(1); return; }
      if (e.key !== 'Tab') return;

      var focusables = box.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      var first = focusables[0];
      var last  = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });

    /* reveal plates as they enter the viewport */
    if ('IntersectionObserver' in global) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -12% 0px' });
      mount.querySelectorAll('.cv-plate').forEach(function (p) { io.observe(p); });
    } else {
      mount.querySelectorAll('.cv-plate').forEach(function (p) {
        p.classList.add('is-visible');
      });
    }

    /* deep link — /certifications.html#iso-9001-electric opens that document */
    if (global.location.hash) {
      var target = global.location.hash.slice(1);
      var idx = items.findIndex(function (c) { return c.id === target; });
      if (idx > -1) setTimeout(function () { open(idx); }, 380);
    }
  }

  global.ARMACertViewer = { init: init };

})(window);
