// ===========================
// Beauty Studio
// script.js
// ===========================

// ---------------------------
// Бургер-меню
// ---------------------------

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

        menuToggle.textContent =
            nav.classList.contains("active") ? "✕" : "☰";

    });

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            menuToggle.textContent = "☰";

        });

    });

    document.addEventListener("click", (e) => {

        if (
            !nav.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {

            nav.classList.remove("active");
            menuToggle.textContent = "☰";

        }

    });

}

// ---------------------------
// Анимация появления секций
// ---------------------------

const animatedSections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

animatedSections.forEach((section) => {

    observer.observe(section);

});