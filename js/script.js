// Got Matar Institute of Technology — shared site script
// Handles the mobile nav toggle and highlights the current page in the nav.

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');

  if (toggle && primaryNav) {
    toggle.addEventListener('click', function () {
      var open = primaryNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Highlight the nav link matching the current page filename.
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.primary a, .topbar a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });
});
