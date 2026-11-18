// Monta a seção de certificados a partir de window.CERTIFICATES (certificates-data.js)
(function () {
  var root = document.getElementById('certCats');
  if (!root || !window.CERTIFICATES) return;

  var ZOOM = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>';

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  window.CERTIFICATES.forEach(function (cat) {
    var block = el('div', 'cert-cat rv');
    var head = el('div', 'cat-hd');
    var h3 = el('h3', '', cat.label);
    h3.setAttribute('data-i18n', 'cat.' + cat.key);
    head.appendChild(h3);
    head.appendChild(el('span', 'cat-n', ('0' + cat.items.length).slice(-2)));
    block.appendChild(head);

    var grid = el('div', 'cert-grid');
    cat.items.forEach(function (c) {
      var meta = [c.issuer, [c.hours, c.date].filter(Boolean).join(' · ')].filter(Boolean).join(' · ');
      var card = el('button', 'cert-card');
      card.type = 'button';
      card.setAttribute('data-cert', '');
      card.setAttribute('data-title', c.title);
      card.setAttribute('data-meta', meta);
      card.setAttribute('aria-label', c.title);

      var thumb = el('span', 'cert-thumb');
      var img = document.createElement('img');
      img.src = c.img; img.alt = c.title;
      thumb.appendChild(img);
      var zoom = el('span', 'cert-zoom'); zoom.innerHTML = ZOOM;
      thumb.appendChild(zoom);

      var info = el('span', 'cert-info');
      info.appendChild(el('strong', '', c.title));
      info.appendChild(el('em', '', c.issuer));
      info.appendChild(el('small', '', [c.hours, c.date].filter(Boolean).join(' · ')));

      card.appendChild(thumb); card.appendChild(info);
      grid.appendChild(card);
    });
    block.appendChild(grid);
    root.appendChild(block);
  });
})();
