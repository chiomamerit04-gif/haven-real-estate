const propertyCards = document.querySelectorAll(".property-card");
const propertyCount = document.querySelector(".property-count");

propertyCards.forEach(card => {
    card.addEventListener("click", () => {
        const propertyId = card.dataset.id;

        window.location.href = `property-details.html?id=${propertyId}`;
    });
});

const searchForm = document.querySelector(".search-form");
const locationInput = document.querySelector("#location");
const propertyTypeInput = document.querySelector("#property-type");
const priceInput = document.querySelector("#price");
const noResults = document.querySelector(".no-results");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = locationInput.value.toLowerCase().trim();
    const propertyType = propertyTypeInput.value.toLowerCase();
    const priceRange = priceInput.value;
    let visibleProperties = 0;

    propertyCards.forEach((card) => {
        const cardLocation = card.dataset.location.toLowerCase();
        const cardType = card.dataset.type.toLowerCase();
        const cardPrice = Number(card.dataset.price);

        const matchesLocation =
            location === "" || cardLocation.includes(location);

        const matchesType =
            propertyType === "" || cardType === propertyType;

        let matchesPrice = true;

        if (priceRange === "under-50m") {
            matchesPrice = cardPrice < 50000000;
        } else if (priceRange === "50m-100m") {
            matchesPrice = cardPrice >= 50000000 && cardPrice <= 100000000;
        } else if (priceRange === "100m-200m") {
            matchesPrice = cardPrice > 100000000 && cardPrice <= 200000000;
        } else if (priceRange === "over-200m") {
            matchesPrice = cardPrice > 200000000;
        }

        if (matchesLocation && matchesType && matchesPrice) {
            card.style.display = "block";
            visibleProperties++;
        } else {
            card.style.display = "none";
        }
    });
    propertyCount.textContent = `${visibleProperties} Properties Found`;

    if (visibleProperties === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});

const favoriteButtons = document.querySelectorAll(".favorite-btn");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

favoriteButtons.forEach((button) => {
    const card = button.closest(".property-card");
    const propertyId = card.dataset.id;

    if (favorites.includes(propertyId)) {
        button.textContent = "♥";
    }

    button.addEventListener("click", (event) => {
        event.stopPropagation();

        if (favorites.includes(propertyId)) {
            favorites = favorites.filter(id => id !== propertyId);
            button.textContent = "♡";
        } else {
            favorites.push(propertyId);
            button.textContent = "♥";
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    });
});