const selectOptions = document.querySelector("#category");

const categories = ['---Select---', 'Phones', 'Clothes', 'Shoes', 'Watch'];

const setCategories = () => {
    selectOptions.innerHTML = "";
    categories.forEach((category, index) => {
        selectOptions.innerHTML += `<option value="${index}">${category}</option>`;
    });
};
setCategories();

const form = document.querySelector(".products form");
const productName = document.querySelector("#pName");
const productImg = document.querySelector("#pImg");
const productPrice = document.querySelector("#pPrice");
const selectOption = document.querySelector("#category");
const pDesc = document.querySelector("#pDesc");
const imgPreviewContainer = document.querySelector(".img-preview");

let imgData = ""; // To store image data

const reader = new FileReader();

productImg.onchange = () => {
    const file = productImg.files[0];
    if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
            imgData = reader.result;
            imgPreviewContainer.innerHTML = `<img src="${imgData}" alt="Preview" style="max-width: 200px;">`;
        };
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem("products")) || [];

    const inputName = productName.value.trim().toLowerCase();
    const inputPrice = parseFloat(productPrice.value.trim());
    const inputCategory = Number(selectOption.value);
    const inputDesc = pDesc.value.trim().toLowerCase();

    if (!inputName || isNaN(inputPrice) || !imgData || inputCategory === 0 || !inputDesc) {
        alert("Please fill all fields correctly.");
        return;
    }

    const product = {
        name: inputName,
        price: inputPrice,
        category: inputCategory,
        description: inputDesc,
        img: imgData
    };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    form.reset();
    imgPreviewContainer.innerHTML = "<h4>No image selected</h4>";
    imgData = "";
});
