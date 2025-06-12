
window.onload = () => {
    const factsData = [
        {
            title: "Contoh Fakta",
            image: "https://placehold.co/600x300/BBDEFB/333333?text=Contoh",
            shortDescription: "Ini adalah contoh fakta dari PintarSekilas.",
            description: "Deskripsi lengkap fakta contoh.",
            category: "Sains"
        }
    ];

    const factOfTheDayElement = document.getElementById('factOfTheDay');
    const factGridElement = document.getElementById('factGrid');

    const fact = factsData[0];
    if (factOfTheDayElement) {
        factOfTheDayElement.innerHTML = `
            <img src="${fact.image}" alt="${fact.title}" />
            <h3>${fact.title}</h3>
            <p>${fact.shortDescription}</p>
        `;
    }

    if (factGridElement) {
        const factCard = document.createElement('div');
        factCard.innerHTML = `
            <img src="${fact.image}" alt="${fact.title}" />
            <h4>${fact.title}</h4>
            <p>${fact.shortDescription}</p>
        `;
        factGridElement.appendChild(factCard);
    }
};
