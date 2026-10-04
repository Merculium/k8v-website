/* Akademia Walidacji — wspólny skrypt podstron */
(function () {
  var nav = document.getElementById('main-nav');
  var links = document.getElementById('nav-links');
  var toggle = document.getElementById('nav-toggle');

  // Menu mobilne (to samo zachowanie co na index.html)
  window.closeMenu = function () { nav.classList.remove('open'); links.classList.remove('open'); };
  toggle.addEventListener('click', function () {
    nav.classList.toggle('open'); links.classList.toggle('open');
  });

  // Okno ze szczegółami kafelka
  var dlg = document.getElementById('tile-dialog');
  if (dlg) {
    var body = document.getElementById('dlg-body');
    document.addEventListener('click', function (e) {
      // klik w dowolne miejsce kafelka (grafika, tekst, przycisk) otwiera okno
      var tile = e.target.closest('.tile');
      if (tile) {
        var tone = tile.closest('[data-tone]');
        dlg.dataset.tone = tone ? tone.dataset.tone : '';
        document.getElementById('dlg-code').textContent = tile.querySelector('.tile-code').textContent;
        document.getElementById('dlg-title').textContent = tile.querySelector('h3').textContent;
        body.innerHTML = tile.querySelector('.tile-full').innerHTML;
        body.scrollTop = 0;
        document.body.style.overflow = 'hidden';
        dlg.showModal();
        return;
      }
      // zamknięcie: przycisk × albo kliknięcie w tło
      if (e.target === dlg || e.target.closest('.dlg-close')) dlg.close();
    });
    dlg.addEventListener('close', function () { document.body.style.overflow = ''; });
  }

  // Język: teksty z atrybutem data-en przełączają się razem z html[lang]
  function applyLang() {
    var en = document.documentElement.lang === 'en';
    document.querySelectorAll('[data-en]').forEach(function (el) {
      if (el.dataset.pl === undefined) el.dataset.pl = el.innerHTML;
      el.innerHTML = en ? el.dataset.en : el.dataset.pl;
    });
  }
  new MutationObserver(applyLang).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  var lt = document.getElementById('lang-toggle');
  if (lt) lt.addEventListener('click', function () { setTimeout(applyLang, 60); });
  applyLang();
})();
