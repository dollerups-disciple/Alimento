const container = document.querySelector(".cards");
const priceSort = document.querySelector("#price-sort"); // Finder dropdown
const filterButtons = document.querySelectorAll(".filter-btn"); // Finder knapper

// --- 2. HUSKE-KASSER (Nyt) ---
let allProducts = []; // Her gemmer vi produkterne, så vi kan "ryste posen"
let currentFilter = "all"; // Her husker vi, om vi kigger på kød eller frugt

// --- 3. HENT DATA (Opdateret) ---
fetch("https://dummyjson.com/products/category/groceries?limit=24")
  .then((res) => res.json())
  .then((data) => {
    allProducts = data.products; // Vi gemmer dem i vores "huske-kasse"
    applyFilters(); // Vi kalder "hjernen", som viser dem første gang
  });

// --- 4. LYT EFTER KLIK (Nyt) ---
// Her giver vi dine filter-knapper liv
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.getAttribute("data-category"); // Vi tjekker hvad der står i HTML (f.eks. 'meat')
    applyFilters(); // Vi beder "hjernen" om at opdatere visningen
  });
});

// Her lytter vi på din pris-dropdown
priceSort.addEventListener("change", applyFilters);

// --- 5. HJERNEN: applyFilters (Nyt) ---
// Denne funktion kører hver gang du klikker på noget
function applyFilters() {
  let filteredList = [...allProducts]; // Vi starter altid med en frisk kopi af alle varer

  // A: Filtrering (Hvis man har valgt andet end "Vis alle")
  if (currentFilter !== "all") {
    filteredList = filteredList.filter((product) =>
      product.tags.includes(currentFilter),
    );
  }

  // B: Sortering (Tjekker om prisen skal være op eller ned)
  if (priceSort.value === "low") {
    filteredList.sort((a, b) => a.price - b.price);
  } else if (priceSort.value === "high") {
    filteredList.sort((a, b) => b.price - a.price);
  }

  // C: Send resultatet videre til din showData-funktion
  showData(filteredList);
}

// --- 6. VIS DATA (Den originale funktion) ---
function showData(products) {
  let markup = "";

  products.forEach((product) => {
    markup += `
<a href="productdetails.html?id=${product.id}">
<article class="card">
<img src="${product.thumbnail}" alt="${product.title}" />
<p>${product.title}</p>
<p><strong>${product.price} €</strong></p>
</article>
</a>
`;
  });

  container.innerHTML = markup;
}
