// Janela de ampliação dos certificados: clique no cartão para ver em tela cheia.
// Fecha com X, clique fora ou Esc. Setas ← → (ou botões) navegam entre os certificados.
(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll('.cert-card[data-cert]'));
  var box = document.getElementById('lbx');
  if (!box || !cards.length) return;
  var img = document.getElementById('lbxImg');
  var title = document.getElementById('lbxTitle');
  var meta = document.getElementById('lbxMeta');
  var current = 0, lastFocus = null;

  function show(i) {
    current = (i + cards.length) % cards.length;
    var c = cards[current];
    img.src = c.querySelector('img').src;
    img.alt = c.getAttribute('data-title');
    title.textContent = c.getAttribute('data-title');
    meta.textContent = c.getAttribute('data-meta');
  }
  function open(i) {
    lastFocus = document.activeElement;
    show(i);
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('lbxClose').focus();
  }
  function close() {
    box.hidden = true;
    img.src = '';
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  cards.forEach(function (c, i) { c.addEventListener('click', function () { open(i); }); });
  document.getElementById('lbxClose').addEventListener('click', close);
  document.getElementById('lbxPrev').addEventListener('click', function () { show(current - 1); });
  document.getElementById('lbxNext').addEventListener('click', function () { show(current + 1); });
  box.addEventListener('click', function (e) {
    if (e.target === box || e.target.classList.contains('lbx-fig')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });
})();
