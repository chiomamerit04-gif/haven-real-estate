const favoritesGrid = document.querySelector("#favorites-grid");
const noFavorites = document.querySelector("#no-favorites");
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

if (favorites.length === 0) {
    noFavorites.style.display = "block";
} else {
    noFavorites.style.display = "none";

    favorites.forEach(id => {
        const property = properties.find(item => item.id === Number(id));

        if (property) {
            const card = document.createElement("article");
            card.classList.add("property-card");
            card.innerHTML = `
            <img class="favorite-property-image" src="${property.image}" alt="${property.name}">
                <div class="property-card-content">
                    <p class="property-location">${property.location}</p>
                    <h3>${property.name}</h3>
                    <p class="property-price">${property.price}</p>
                    <div class="property-card-details">
                        <span>${property.beds}</span>
                        <span>${property.baths}</span>
                        <span>${property.size}</span>
                    </div>
                </div>
            `;
            favoritesGrid.appendChild(card);
        }
    });
}