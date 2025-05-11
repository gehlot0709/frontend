document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("productContainer");
  const categories = ['---Select---', 'Phones', 'Clothes', 'Shoes', 'Watch'];
  const products = JSON.parse(localStorage.getItem("products")) || [];

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
  }

  function isProductInCart(productId) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.some(item => item.id === productId);
  }

  function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Category: ${categories[product.category]}</p>
      <p>${product.description}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;

    // Add event listener to button
    const button = card.querySelector(".add-to-cart");
    button.addEventListener("click", () => handleAddToCart(product));

    return card;
  }

  function handleAddToCart(product) {
    if (isProductInCart(product.id)) {
      alert("This product is already in the cart!");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
  }

  function renderProducts() {
    if (products.length === 0) {
      container.innerHTML = "<p>No products available.</p>";
      return;
    }

    container.innerHTML = "";
    products.forEach(product => {
      const card = createProductCard(product);
      container.appendChild(card);
    });
  }

  // Initialize
  updateCartCount();
  renderProducts();
});
