const propertyId = new URLSearchParams(window.location.search).get("id");
console.log("Selected property ID:", propertyId);


const property = properties.find(item => item.id === Number(propertyId));

if (property) {
    document.getElementById("property-image").src = property.image;
    document.getElementById("property-image").alt = property.name;
    document.getElementById("property-location").textContent = property.location;
    document.getElementById("property-name").textContent = property.name;
    document.getElementById("property-price").textContent = property.price;
    document.getElementById("property-beds").textContent = property.beds;
    document.getElementById("property-baths").textContent = property.baths;
    document.getElementById("property-size").textContent = property.size;
    document.getElementById("property-description-title").textContent = property.descriptionTitle;
    document.getElementById("property-description-one").textContent = property.descriptionOne;
    document.getElementById("property-description-two").textContent = property.descriptionTwo;
    document.getElementById("agent-name").textContent = property.agentName;
    document.getElementById("agent-role").textContent = property.agentRole;

    const featuresContainer = document.getElementById("property-features");

    property.features.forEach(feature => {
        const featureItem = document.createElement("span");
        featureItem.textContent = feature;
        featuresContainer.appendChild(featureItem);
    });
}