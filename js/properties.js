const propertyPageCards = document.querySelectorAll(".property-card");
const favoriteButtons = document.querySelectorAll(".favorite-btn");

propertyPageCards.forEach((card) => {
    card.addEventListener("click", () => {
        const propertyId = card.dataset.id;

        if (propertyId) {
            window.location.href = `property-details.html?id=${propertyId}`;
        }
    });
});

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
            favorites = favorites.filter((id) => id !== propertyId);
            button.textContent = "♡";
        } else {
            favorites.push(propertyId);
            button.textContent = "♥";
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    });
});