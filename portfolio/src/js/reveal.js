// Animação de entrada: elementos .rv aparecem suavemente ao entrar na tela
(function () {
  var targets = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) { targets.forEach(function (el) { el.classList.add('show'); }); return; }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('show'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  targets.forEach(function (el) { observer.observe(el); });
})();
