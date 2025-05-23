const productName = document.querySelector(".pName");
const productPrice = document.querySelector(".pPrice");
const productImg = document.querySelector(".pImg");
const productCat = document.querySelector(".category");
const previewImg = document.getElementById("preview-img");

const categories = ["Phone", "Electronic", "Beauty Care", "Toys"];

const setCategories = () => {
  productCat.innerHTML = '<option disabled selected>Select a category</option>';
  categories.forEach((category, index) => {
    productCat.innerHTML += `<option value="${category.toLowerCase()}">${category}</option>`;
  });
};
setCategories();

productImg.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("product-form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    productName.value.trim() === "" ||
    productPrice.value.trim() === "" ||
    productImg.files.length === 0 ||
    productCat.value === ""
  ) {
    alert("Please fill in all fields.");
  } else {
    const reader = new FileReader();
    reader.onload = function (e) {
      const product = {
        name: productName.value.trim(),
        price: productPrice.value.trim(),
        image: e.target.result,
        category: productCat.value,
      };

      // Get existing products or initialize empty array
      const existing = JSON.parse(localStorage.getItem("products")) || [];
      existing.push(product);

      // Save back to localStorage
      localStorage.setItem("products", JSON.stringify(existing));

      // Redirect to home.html
      window.location.href = "home.html";
    };
    reader.readAsDataURL(productImg.files[0]);
  }
});
