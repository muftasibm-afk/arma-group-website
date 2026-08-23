/* ── ARMA Group — Navbar logo contrast ──────────────────────────────
   Every site logo is dark ink on transparency (green wordmark + a large
   share of near-black text). On a dark navbar that black text renders at
   roughly 1.1:1 — invisible.

   This measures the navbar's ACTUAL rendered backdrop and toggles
   `.on-dark` on the logo, which flips the ink to light via CSS filter.
   Measuring beats hard-coding a class per site because several navbars
   are transparent at the top and sit over a hero image or video, change
   on scroll, and change again in night mode. */
(function () {
  'use strict';

  var DARK_THRESHOLD = 0.55; // relative luminance below this ⇒ treat as dark

  function parseColor(str) {
    if (!str) return null;
    var m = str.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    var p = m[1].split(',').map(function (v) { return parseFloat(v.trim()); });
    if (p.length < 3 || p.some(isNaN)) return null;
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  }

  /* WCAG relative luminance (sRGB → linear). */
  function luminance(c) {
    var ch = [c.r, c.g, c.b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
  }

  function over(fg, bg) {
    var a = fg.a;
    return {
      r: fg.r * a + bg.r * (1 - a),
      g: fg.g * a + bg.g * (1 - a),
      b: fg.b * a + bg.b * (1 - a),
      a: 1
    };
  }

  /* Nav backgrounds are often gradients (`linear-gradient(to bottom, …)`).
     getComputedStyle returns the whole image string, so pull the colour
     stops out and average them — the logo spans the bar's full height. */
  function gradientColor(image) {
    if (!image || image === 'none') return null;
    var stops = image.match(/rgba?\([^)]*\)/g);
    if (!stops || !stops.length) return null;
    var acc = { r: 0, g: 0, b: 0, a: 0 }, n = 0;
    stops.forEach(function (s) {
      var c = parseColor(s);
      if (!c) return;
      acc.r += c.r; acc.g += c.g; acc.b += c.b; acc.a += c.a; n++;
    });
    if (!n) return null;
    return { r: acc.r / n, g: acc.g / n, b: acc.b / n, a: acc.a / n };
  }

  /* Walk up from `el`, compositing each backdrop, until we hit an opaque
     layer. Returns a fully opaque colour. */
  function resolveBackdrop(el) {
    var layers = [];
    var node = el;
    while (node && node !== document.documentElement.parentNode) {
      var cs = getComputedStyle(node);
      var c = gradientColor(cs.backgroundImage) || parseColor(cs.backgroundColor);
      if (c && c.a > 0) {
        layers.push(c);
        if (c.a >= 0.99) break;
      }
      node = node.parentElement;
    }
    // Assume white paper under everything if nothing opaque was found.
    var base = { r: 255, g: 255, b: 255, a: 1 };
    for (var i = layers.length - 1; i >= 0; i--) base = over(layers[i], base);
    return base;
  }

  /* A transparent nav sits over whatever the page scrolled under it.
     Sample the element actually behind the bar's midpoint rather than
     trusting the nav's own (transparent) background. */
  function backdropBehind(nav) {
    var rect = nav.getBoundingClientRect();
    var x = Math.round(rect.left + rect.width * 0.12); // near the logo
    var y = Math.round(rect.bottom + 8);               // just under the bar
    var stack = document.elementsFromPoint ? document.elementsFromPoint(x, y) : [];
    for (var i = 0; i < stack.length; i++) {
      var el = stack[i];
      if (nav.contains(el)) continue;
      // Media behind the bar is treated as dark: heroes are dark-toned
      // across these sites and overlaid with a dark scrim.
      if (/^(IMG|VIDEO|CANVAS|SVG)$/i.test(el.tagName)) return { r: 40, g: 40, b: 40, a: 1 };
      var cs = getComputedStyle(el);
      if (cs.backgroundImage && cs.backgroundImage !== 'none' &&
          /url\(/.test(cs.backgroundImage)) return { r: 40, g: 40, b: 40, a: 1 };
      var c = parseColor(cs.backgroundColor);
      if (c && c.a >= 0.99) return c;
    }
    return null;
  }

  /* Read the nav's FINAL background, not the mid-animation one.

     These navbars animate `background` over .3-.45s. Sampling during that
     window returns an interpolated colour, so the logo could only be
     decided once the bar had settled — leaving it visibly wrong for the
     duration of the transition (worst on a fast scroll back to the top).

     Setting `transition:none` forces the style engine to resolve the
     computed value to the transition's destination immediately. We restore
     the inline value in the same frame, before the browser paints, so the
     nav's own animation is unaffected. */
  function targetBackground(nav) {
    var prev = nav.style.transition;
    nav.style.transition = 'none';
    var cs = getComputedStyle(nav);
    var own = gradientColor(cs.backgroundImage) || parseColor(cs.backgroundColor);
    // Reading above flushes style; restoring now keeps the paint untouched.
    if (prev) nav.style.transition = prev; else nav.style.removeProperty('transition');
    return own;
  }

  /* targetBackground() writes nav.style.transition, and the observer below
     watches `style` — so updates must never re-enter, or they loop. */
  var running = false;

  function update() {
    if (running) return;
    running = true;
    try { measure(); } finally { running = false; }
  }

  function measure() {
    var navs = document.querySelectorAll('nav');
    Array.prototype.forEach.call(navs, function (nav) {
      var logos = nav.querySelectorAll('.nav-logo-img');
      if (!logos.length) return;

      var own = targetBackground(nav);
      var bg;

      if (own && own.a >= 0.99) {
        bg = own;
      } else {
        var behind = backdropBehind(nav) || resolveBackdrop(nav.parentElement || document.body);
        bg = own && own.a > 0 ? over(own, behind) : behind;
      }

      var dark = luminance(bg) < DARK_THRESHOLD;
      Array.prototype.forEach.call(logos, function (img) {
        img.classList.toggle('on-dark', dark);
      });
    });
  }

  var queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; update(); });
  }

  function init() {
    update();
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule, { passive: true });
    addEventListener('pageshow', schedule);

    // Nav state changes are class-driven (.scrolled/.light/.nav-scrolled) and
    // theme changes are attribute-driven. Update synchronously: because
    // targetBackground() reads past the transition, there is nothing to
    // wait for, and any delay here shows as the logo lagging the bar.
    var navs = document.querySelectorAll('nav');
    if (window.MutationObserver) {
      var mo = new MutationObserver(function () { update(); });
      Array.prototype.forEach.call(navs, function (n) {
        // 'class' only: these navs switch state by class, and watching
        // 'style' would echo this script's own transition writes back.
        mo.observe(n, { attributes: true, attributeFilter: ['class'] });
      });
      mo.observe(document.documentElement, {
        attributes: true, attributeFilter: ['data-theme', 'data-site']
      });
    }
    // Catch late-loading webfonts/images shifting layout.
    setTimeout(update, 600);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
