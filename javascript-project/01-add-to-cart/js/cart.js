document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cartContainer");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartCount() {
    const countElement = document.getElementById("cart-count");
    if (countElement) {
      countElement.textContent = cart.length;
    }
  }

  if (cart.length === 0) {
    container.innerHTML = "<p>No items in cart.</p>";
  } else {
    cart.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <div class="product-info">
          <h5>Product Name: ${item.name}</h5>
          <p>Price: $${item.price}</p>
          <p>Desc: ${item.description}</p>
          <div class="quantity-controls">
            <button class="decrease-btn">-</button>
            <span class="quantity">${item.quantity || 1}</span>
            <button class="increase-btn">+</button>
          </div>
          <button class="remove-from-cart">Remove</button>
        </div>
      `;
      container.appendChild(card);

      // Increase button
      card.querySelector(".increase-btn").addEventListener("click", () => {
        item.quantity = item.quantity ? item.quantity + 1 : 2;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        card.querySelector(".quantity").textContent = item.quantity;
      });

      // Decrease button
      card.querySelector(".decrease-btn").addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity -= 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartCount();
          card.querySelector(".quantity").textContent = item.quantity;
        }
      });

      // Remove button
      card.querySelector(".remove-from-cart").addEventListener("click", () => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
      });
    });
  }

  updateCartCount();
});
