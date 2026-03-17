const productId = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".product-detail-container");

fetch(`https://dummyjson.com/products/${productId}`)
  .then((res) => res.json())
  .then((product) => {
    showDetails(product);
  });

function showDetails(product) {
  container.innerHTML = `
    <article class="detail-view">
      <img src="${product.thumbnail}" alt="${product.title}">
      
      <div class="info">
        <h1>${product.title}</h1>
        <p class="category"><strong>Category:</strong> ${product.tags.join(", ")}</p>
        <p class="description"><strong>Description:</strong> ${product.description}</p>
        
        <div class="price-section">
          <span class="price">${product.price} €</span>
          <button class="buy-btn">Add to basket</button>
        </div>
      </div>
    </article>
  `;
}
