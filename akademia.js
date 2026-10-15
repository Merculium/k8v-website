/* Akademia Walidacji — wspólny skrypt podstron */
(function () {
  var nav = document.getElementById('main-nav');
  var links = document.getElementById('nav-links');
  var toggle = document.getElementById('nav-toggle');

  // ── Menu (to samo zachowanie co na index.html) ──
  var subs = document.querySelectorAll('.has-sub');
  function closeSubmenus() {
    subs.forEach(function (li) {
      li.classList.remove('open');
      li.querySelector('.sub-toggle').setAttribute('aria-expanded', 'false');
    });
  }
  window.closeMenu = function () { nav.classList.remove('open'); links.classList.remove('open'); closeSubmenus(); };
  subs.forEach(function (li) {
    var btn = li.querySelector('.sub-toggle');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !li.classList.contains('open');
      closeSubmenus();
      li.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
    });
  });
  document.addEventListener('click', function (e) {
    subs.forEach(function (li) { if (!li.contains(e.target)) closeSubmenus(); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSubmenus(); });
  toggle.addEventListener('click', function () {
    nav.classList.toggle('open'); links.classList.toggle('open');
  });

  // ── Język: elementy z data-en przełączają się razem z html[lang] ──
  function isEn() { return document.documentElement.lang === 'en'; }
  var current = null; // kafelek otwarty w oknie
  var dlg = document.getElementById('tile-dialog');
  function applyLang() {
    var en = isEn();
    document.querySelectorAll('[data-en]').forEach(function (el) {
      if (el.tagName === 'META') {
        if (el.dataset.pl === undefined) el.dataset.pl = el.getAttribute('content');
        el.setAttribute('content', en ? el.dataset.en : el.dataset.pl);
        return;
      }
      if (el.dataset.pl === undefined) el.dataset.pl = el.innerHTML;
      el.innerHTML = en ? el.dataset.en : el.dataset.pl;
    });
    document.querySelectorAll('[data-en-alt]').forEach(function (el) {
      if (el.dataset.plAlt === undefined) el.dataset.plAlt = el.getAttribute('alt') || '';
      el.setAttribute('alt', en ? el.dataset.enAlt : el.dataset.plAlt);
    });
    var close = document.querySelector('.dlg-close');
    if (close) close.setAttribute('aria-label', en ? 'Close' : 'Zamknij');
    if (dlg && dlg.open && current) fillDialog(current);
  }
  new MutationObserver(applyLang).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  var lt = document.getElementById('lang-toggle');
  if (lt) lt.addEventListener('click', function () { setTimeout(applyLang, 60); });

  // ── Okno ze szczegółami kafelka ──
  if (dlg) {
    var body = document.getElementById('dlg-body');
    var norm = function (s) { return String(s || '').toLowerCase().replace(/[\s_-]+/g, ''); };
    var findTile = function (code) {
      var n = norm(code);
      return Array.prototype.find.call(document.querySelectorAll('.tile'), function (t) {
        return norm(t.querySelector('.tile-code').textContent) === n;
      });
    };
    var fillDialog = function (tile) {
      var tone = tile.closest('[data-tone]');
      dlg.dataset.tone = tone ? tone.dataset.tone : '';
      document.getElementById('dlg-code').textContent = tile.querySelector('.tile-code').textContent;
      document.getElementById('dlg-title').textContent = tile.querySelector('h3').textContent;
      body.innerHTML = tile.querySelector('.tile-full').innerHTML;
      body.scrollTop = 0;
    };
    var setHash = function (h) {
      try { history.replaceState(null, '', h ? '#' + h : location.pathname + location.search); } catch (e) {}
    };
    var openTile = function (tile) {
      current = tile;
      fillDialog(tile);
      setHash(tile.querySelector('.tile-code').textContent.toLowerCase().replace(/\s+/g, '-'));
      if (!dlg.hasAttribute('open')) {
        document.body.style.overflow = 'hidden';
        dlg.showModal();
      }
    };
    document.addEventListener('click', function (e) {
      // link „Powiązane kursy”: kafelek z tej strony otwiera okno, inny — normalne przejście do strony
      var rel = e.target.closest('[data-open]');
      if (rel) {
        var t = findTile(rel.getAttribute('data-open'));
        if (t) { e.preventDefault(); openTile(t); }
        return;
      }
      var tile = e.target.closest('.tile');
      if (tile) { openTile(tile); return; }
      if (e.target === dlg || e.target.closest('.dlg-close')) dlg.close();
    });
    dlg.addEventListener('close', function () {
      document.body.style.overflow = '';
      current = null;
      setHash('');
    });
    // otwarcie kafelka z adresu, np. akademiatermostatyki.html#mk7a
    var fromHash = function () {
      var h = decodeURIComponent((location.hash || '').slice(1));
      if (!h) return;
      var t = findTile(h);
      if (t) { openTile(t); }
    };
    window.addEventListener('hashchange', function () {
      var h = (location.hash || '').slice(1);
      if (h && !(dlg.open && current && norm(current.querySelector('.tile-code').textContent) === norm(h))) fromHash();
    });
    window.addEventListener('load', function () { setTimeout(fromHash, 80); });
  }

  applyLang();
})();
