// Destaca no menu lateral a seção que está na tela (página inicial)
(function () {
  var sections = ['about', 'projects', 'certifications', 'contact'];
  var linkFor = { home: 'ln-home', about: 'ln-about', projects: 'ln-projects', certifications: 'ln-certs', contact: 'ln-contact' };
  window.addEventListener('scroll', function () {
    var current = 'home';
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 150) current = id;
    });
    document.querySelectorAll('.sb-link').forEach(function (l) { l.classList.remove('on'); });
    var active = document.getElementById(linkFor[current]);
    if (active) active.classList.add('on');
  });
})();
