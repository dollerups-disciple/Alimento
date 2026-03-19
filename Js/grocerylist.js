// Vi finder containeren med klassen "cards"
const container = document.querySelector(".cards");

// Vi henter data fra kategorien groceries
fetch("https://dummyjson.com/products/category/groceries?limit=24")
  .then((res) => res.json())
  .then((data) => {
    // Vi sender listen af produkter videre til showData funktionen
    showData(data.products);
  });

function showData(products) {
  let markup = "";

  products.forEach((product) => {
    // Bygger de 24+ kort dynamisk
    // VIGTIGT: Brug ` (backtick) - den sidder til venstre for Backspace
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

  // Til sidst lægger vi al teksten (markup) ind i vores HTML-beholder
  container.innerHTML = markup;
}
