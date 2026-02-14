const places = [
    { name: "Om Beach", taluk: "Kumta", category: "Beach", season: "Summer", visitors: 5200, crowd: "High", fee: 0, image: "images/om-beach.jpeg" }, // Replace with your JPG image for Om Beach
    
    { name: "Mirjan Fort", taluk: "Kumta", category: "Heritage", season: "Monsoon", visitors: 1200, crowd: "Low", fee: 20, image: "images/mirjan-fort.jpeg" }, // Replace with your JPG image for Mirjan F
     { name: "Vibhuti Falls", taluk: "Ankola", category: "Waterfall", season: "Monsoon", visitors: 2500, crowd: "Medium", fee: 20, image: "images/vibhuti-falls.jpeg" }, // Replace with your JPG image for Vibhuti Falls
    
    { name: "Sharavathi Backwaters", taluk: "Honnnavar", category: "Nature", season: "Winter", visitors: 2200, crowd: "Medium", fee: 50, image: "images/sharavathi-backwaters.jpeg" }, // Replace with your JPG image for Sharavathi Backwaters
   
   
    { name: "Kudle Beach", taluk: "Kumta", category: "Beach", season: "Summer", visitors: 5800, crowd: "High", fee: 0, image: "images/kudle-beach.jpeg" }, // Replace with your JPG image for Kudle Beach
   
     { name: "Honey Beach", taluk: "Ankola", category: "Beach", season: "Summer", visitors: 2200, crowd: "Low", fee: 0, image: "images/honey-beach.jpeg" }, // Replace with your JPG image for Honey Beachort
     { name: "Mahabaleshwar Temple", taluk: "Kumta", category: "Temple", season: "All", visitors: 3500, crowd: "Medium", fee: 0, image: "images/mahableshwar-temple.jpeg" }, // Replace with your JPG image for Mahabaleshwar Temple
    { name: "Netrani Island", taluk: "Bhatkal", category: "Adventure", season: "Winter", visitors: 900, crowd: "Low", fee: 1500, image: "images/netrani-island.jpeg" }, // Replace with your JPG image for Netrani Island
    { name: "Sathodi Falls", taluk: "Yellapur", category: "Waterfall", season: "Monsoon", visitors: 2400, crowd: "Medium", fee: 30, image: "images/sathodi-falls.jpeg" }, // Replace with your JPG image for Sathodi Falls
    { name: "Kali River Dandeli", taluk: "Dandeli", category: "Adventure", season: "Winter", visitors: 3200, crowd: "Medium", fee: 500, image: "images/kali-river-dandeli.jpeg" }, // Replace with your JPG image for Kali River Dandeli
    { name: "Tilmati Beach", taluk: "Karwar", category: "Beach", season: "Summer", visitors: 800, crowd: "Low", fee: 0, image: "images/tilmati-beach.jpeg" }, // Replace with your JPG image for Tilmati Beach
    { name: "Jenukallu Gudda", taluk: "Yellapur", category: "Hill Station", season: "Winter", visitors: 2800, crowd: "Medium", fee: 0, image: "images/jenukallu-gudda.jpeg" }, // Replace with your JPG image for Jenukallu Gudda
   
     { name: "Yana Rocks", taluk: "Kumta", category: "Trekking", season: "Winter", visitors: 2600, crowd: "Medium", fee: 30, image: "images/yana.jpeg" }, // Replace with your JPG image for Yana Rocks
    { name: "Murudeshwar Temple", taluk: "Bhatkal", category: "Temple", season: "All", visitors: 7000, crowd: "High", fee: 0, image: "images/Murdeshwar.png" }, // Replace with your JPG image for Murudeshwar Temple
    { name: "Magod Falls", taluk: "Yellapur", category: "Waterfall", season: "Monsoon", visitors: 1600, crowd: "Low", fee: 20, image: "images/magod-falls.jpeg" }, // Replace with your JPG image for Magod Falls
    { name: "Unchalli Falls", taluk: "Siddapur", category: "Waterfall", season: "Monsoon", visitors: 1700, crowd: "Low", fee: 0, image: "images/unchalli-falls.jpeg" }, // Replace with your JPG image for Unchalli Falls
    { name: "Banavasi", taluk: "Sirsi", category: "Heritage", season: "All", visitors: 2200, crowd: "Medium", fee: 0, image: "images/banavasi.jpeg" }, // Replace with your JPG image for Sahasralinga
    { name: "Tibetan Colony", taluk: "Mundgod", category: "Cultural", season: "All", visitors: 3000, crowd: "Medium", fee: 0, image: "images/tibetan-colony.webp" }, // Replace with your JPG image for Tibetan Colony
    { name: "GuddaIli Peak", taluk: "Karwar", category: "Hill Station", season: "Winter", visitors: 1000, crowd: "Low", fee: 0, image: "images/guddaili-peak.jpeg" }, // Replace with your JPG image for GuddaIli Peak
    { name: "Bheemana Gudda", taluk: "Sirsi", category: "Hill Station", season: "Winter", visitors: 800, crowd: "Low", fee: 0, image: "images/bheemana-gudda.webp" } // Replace with your JPG image for Bheemana Gudda
];

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const container = document.getElementById('places-container');
const talukFilter = document.getElementById('taluk-filter');
const categoryFilter = document.getElementById('category-filter');

function renderPlaces(filteredPlaces) {
    container.innerHTML = '';
    
    // Determine column class based on current page using body class
    let colClass = 'col-lg-4 col-md-4 col-sm-6 col-12'; // Default 3 cards per line
    
    if (document.body.classList.contains('page-culture')) {
        colClass = 'col-lg-6 col-md-6 col-sm-6 col-12'; // 2 cards per line for culture page
    }
    
    filteredPlaces.forEach((place, index) => {
        const isFavorited = favorites.includes(place.name);
        const col = document.createElement('div');
        col.className = colClass;
        col.innerHTML = `
            <div class="card place-card h-100" data-place="${place.name}">
                <div class="position-relative">
                    <img src="${place.image}" class="card-img-top" alt="${place.name}">
                    <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" data-place="${place.name}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${place.name}</h5>
                    <p class="card-text"><strong>Taluk:</strong> ${place.taluk}</p>
                    <p class="card-text"><strong>Category:</strong> ${place.category}</p>
                    <p class="card-text"><strong>Best Season:</strong> ${place.season}</p>
                    <p class="card-text"><strong>Avg Visitors/Month:</strong> ${place.visitors}</p>
                    <p class="card-text"><strong>Crowd Level:</strong> ${place.crowd}</p>
                    <p class="card-text"><strong>Entry Fee:</strong> ₹${place.fee}</p>
                </div>
            </div>
        `;
        container.appendChild(col);
    });

    // Add event listeners
    document.querySelectorAll('.place-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.favorite-btn')) {
                const placeName = card.dataset.place;
                const place = places.find(p => p.name === placeName);
                showModal(place);
            }
        });
    });

    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', toggleFavorite);
    });
}

function showModal(place) {
    document.getElementById('modal-image').src = place.image;
    document.getElementById('modal-image').alt = place.name;
    document.getElementById('modal-title').textContent = place.name;
    document.getElementById('modal-taluk').textContent = place.taluk;
    document.getElementById('modal-category').textContent = place.category;
    document.getElementById('modal-season').textContent = place.season;
    document.getElementById('modal-visitors').textContent = place.visitors;
    document.getElementById('modal-crowd').textContent = place.crowd;
    document.getElementById('modal-fee').textContent = place.fee;

    const modal = new bootstrap.Modal(document.getElementById('placeModal'));
    modal.show();
}

function toggleFavorite(e) {
    const placeName = e.currentTarget.dataset.place;
    const index = favorites.indexOf(placeName);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(placeName);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderPlaces(getFilteredPlaces());
}

function getFilteredPlaces() {
    const selectedTaluk = talukFilter.value;
    const selectedCategory = categoryFilter.value;
    
    return places.filter(place => {
        return (selectedTaluk === '' || place.taluk === selectedTaluk) &&
               (selectedCategory === '' || place.category === selectedCategory);
    });
}

function filterPlaces() {
    renderPlaces(getFilteredPlaces());
}

talukFilter.addEventListener('change', filterPlaces);
categoryFilter.addEventListener('change', filterPlaces);

// Initial render
renderPlaces(places);