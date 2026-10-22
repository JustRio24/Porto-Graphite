/* ============================================================
   RIO — Preloader logic (sinematik: reveal per huruf + counter + curtain)
   ============================================================ */
(function () {
  'use strict';

  var MIN_TIME = 1500;
  var MAX_TIME = 3600;
  var start = performance.now();
  var hid = false;
  var full = 100;

  function hidePreloader() {
    if (hid) return;
    hid = true;
    var loader = document.getElementById('preloader');
    if (!loader) return;
    loader.classList.add('exit');
    setTimeout(function () {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, 950);
    setTimeout(function () {
      var hero = document.querySelector('#home .hero-portrait-mask, #hero-title');
      if (hero) hero.classList.add('reveal-on-load');
    }, 120);
  }

  function splitLetters() {
    var title = document.querySelector('.pl-title');
    if (!title) return;
    var text = title.textContent.trim();
    title.textContent = '';
    for (var i = 0; i < text.length; i++) {
      var s = document.createElement('span');
      s.className = 'pl-letter';
      s.textContent = text[i] === ' ' ? '\u00A0' : text[i];
      title.appendChild(s);
    }
  }

  /* Eased progress so the counter feels mechanical but refined */
  function tick() {
    if (hid) return;
    var elapsed = performance.now() - start;
    var t = Math.min(1, elapsed / MAX_TIME);
    var eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    var pct = Math.round(eased * 100);

    var fill = document.getElementById('pl-fill');
    var dot = document.getElementById('pl-dot');
    var num = document.getElementById('pl-num');
    var line = document.getElementById('pl-line');

    if (fill && line) {
      var w = line.offsetWidth || 320;
      fill.style.width = (pct / 100) * w + 'px';
      if (dot) dot.style.left = (pct / 100) * w + 'px';
    }
    if (num) num.textContent = pct;
    full = pct;

    requestAnimationFrame(tick);
  }

  function ready() {
    splitLetters();
    setTimeout(tick, 300);

    function attempt() {
      var elapsed = performance.now() - start;
      if (elapsed >= MIN_TIME) {
        hidePreloader();
      } else {
        setTimeout(attempt, Math.max(0, MIN_TIME - elapsed));
      }
    }

    var fired = false;
    function finish() {
      if (fired) return;
      fired = true;
      attempt();
    }
    window.addEventListener('load', finish);
    setTimeout(finish, MAX_TIME);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
