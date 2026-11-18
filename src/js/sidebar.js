// Menu lateral no celular: abre pelo botão hambúrguer e fecha ao tocar no fundo
(function () {
  var sidebar = document.getElementById('sb');
  var overlay = document.getElementById('ov');
  function open() { sidebar.classList.add('open'); overlay.classList.add('show'); document.body.style.overflow = 'hidden'; }
  function close() { sidebar.classList.remove('open'); overlay.classList.remove('show'); document.body.style.overflow = ''; }
  document.getElementById('hbg').addEventListener('click', open);
  overlay.addEventListener('click', close);
  sidebar.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
})();
