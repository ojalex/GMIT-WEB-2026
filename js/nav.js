






// Got Matar Institute of Technology — shared site script
// Handles the mobile nav toggle and highlights the current page in the nav.
// Load the footer content from an external HTML file.
document.addEventListener("DOMContentLoaded", () => {
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer not found");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error(error));
});

//Load the navigation content from an external HTML file.
async function loadNav() {
    const response = await fetch("nav.html");
    const html = await response.text();

    document.getElementById("nav-container").innerHTML = html;

    // Highlight active page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("#nav-container a").forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }
    });
}

loadNav();

// Handle the mobile nav toggle and highlight the current page in the nav.
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


