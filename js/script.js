fetch("components/header.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#header").innerHTML = data;

        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");

        if (menuToggle && navLinks) {
            menuToggle.addEventListener("click", () => {
                navLinks.classList.toggle("active");
            });

            const navLinksItems = document.querySelectorAll(".nav-links a");

            navLinksItems.forEach((link) => {
                link.addEventListener("click", () => {
                    navLinks.classList.remove("active");
                });
            });
        }

        const themeToggle = document.querySelector(".theme-toggle");

        if (themeToggle) {
            themeToggle.addEventListener("click", () => {
                document.body.classList.toggle("dark-mode");

                if (document.body.classList.contains("dark-mode")) {
                    themeToggle.textContent = "☀️";
                    localStorage.setItem("theme", "dark");
                } else {
                    themeToggle.textContent = "🌙";
                    localStorage.setItem("theme", "light");
                }
            });

            const savedTheme = localStorage.getItem("theme");

            if (savedTheme === "dark") {
                document.body.classList.add("dark-mode");
                themeToggle.textContent = "☀️";
            }
        }
    });

fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#footer").innerHTML = data;
    });

const scrollTop = document.querySelector(".scroll-top");

if (scrollTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollTop.classList.add("show");
        } else {
            scrollTop.classList.remove("show");
        }
    });

    scrollTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

const searchForm = document.querySelector(".search-form");
const propertyCards = document.querySelectorAll(".property-card");
const noResults = document.querySelector(".no-results");

if (searchForm && propertyCards.length && noResults) {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const location = document.querySelector("#location").value.toLowerCase().trim();
        const type = document.querySelector("#property-type").value;
        const price = document.querySelector("#price").value;
        let found = false;
        propertyCards.forEach((card) => {
            const cardLocation = card.dataset.location;
            const cardType = card.dataset.type;
            const cardPrice = Number(card.dataset.price);
            const matchesLocation = !location || cardLocation.includes(location);
            const matchesType = !type || cardType === type;
            const matchesPrice = !price ||
                (price === "under-50m" && cardPrice < 50000000) ||
                (price === "50m-100m" && cardPrice >= 50000000 && cardPrice <= 100000000) ||
                (price === "100m-200m" && cardPrice > 100000000 && cardPrice <= 200000000) ||
                (price === "over-200m" && cardPrice > 200000000);

            if (matchesLocation && matchesType && matchesPrice) {
                card.style.display = "";
                found = true;
            } else {
                card.style.display = "none";
            }
        });
        noResults.style.display = found ? "none" : "block";
    });
}

const clearSearch = document.querySelector(".clear-search");
if (clearSearch) {
    clearSearch.addEventListener("click", () => {
        document.querySelector("#location").value = "";
        document.querySelector("#property-type").value = "";
        document.querySelector("#price").value = "";

        propertyCards.forEach((card) => {
            card.style.display = "";
        });
        noResults.style.display = "none";
    });
}