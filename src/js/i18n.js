// Troca de idioma (EN / PT / FR / ES) — usa window.I18N, definido em js/i18n/*.js
// Cada elemento com data-i18n="chave" tem o texto trocado. Escolha salva em localStorage (ek-lang).
(function () {
  var buttons = document.querySelectorAll('.lb');
  var LANGS = ['en', 'pt', 'fr', 'es'];

  function store(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  function applyLang(lang) {
    var dict = window.I18N[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    buttons.forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    store('ek-lang', lang);
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  var saved = read('ek-lang');
  applyLang(LANGS.indexOf(saved) > -1 ? saved : 'en');
})();
