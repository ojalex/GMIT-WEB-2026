// Got Matar Institute of Technology — shared site script
// Loads shared navigation and footer, handles mobile menu,
// and highlights the active page.

// Load footer
async function loadFooter() {
    try {
        const response = await fetch("footer.html");

        if (!response.ok) {
            throw new Error("Footer not found");
        }

        const html = await response.text();
        document.getElementById("footer").innerHTML = html;
    } catch (error) {
        console.error("Error loading footer:", error);
    }
}
// Load topbar
async function loadTopbar() {
    try {
        const response = await fetch("topbar.html");

        if (!response.ok) {
            throw new Error("Topbar not found");
        }

        const html = await response.text();
        document.getElementById("topbar").innerHTML = html;
    } catch (error) {
        console.error("Error loading topbar:", error);
    }
}

// Load navigation
async function loadNav() {
    try {
        const response = await fetch("nav.html");

        if (!response.ok) {
            throw new Error("Navigation not found");
        }

        const html = await response.text();
        document.getElementById("nav-container").innerHTML = html;

        // Highlight active page
        const currentPage =
            window.location.pathname.split("/").pop() || "index.html";

        document.querySelectorAll("#nav-container a").forEach(link => {
            const href = link.getAttribute("href");
            const page = link.dataset.page || href;

            if (page === currentPage) {
                link.classList.add("active");
            }
        });

        // Mobile menu toggle
        const toggle = document.getElementById("navToggle");
        const primaryNav = document.getElementById("primaryNav");

        if (toggle && primaryNav) {
            toggle.addEventListener("click", () => {
                const open = primaryNav.classList.toggle("open");
                toggle.setAttribute("aria-expanded", open);
            });
        }

    } catch (error) {
        console.error("Error loading navigation:", error);
    }
}

// Load everything after the page is ready
document.addEventListener("DOMContentLoaded", () => {
    loadTopbar();
    loadNav();
    loadFooter();
});