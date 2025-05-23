const categoryList = document.querySelector("section.category .container ul")
const priductList = document.querySelector("section.items .container div.row")



// Product Categories
const categories = ["All", "Phones", "clothes", "shoes", "watch", "jewellary", "body care"]


const setCatefories = () => {
    categoryList.innerHTML = ""
    categories.forEach((category, index) => {
        categoryList.innerHTML += `<li id="category-${index}" >${category}</li>`
    })
}
setCatefories()

const products = JSON.parse(localStorage.getItem("products")) || []


function listProductsInHtml(products) {
    priductList.innerHTML = ""
    console.log(products)
    products.forEach((product, index) => {
        let category = ""

        categories.forEach((itemCategory, index) => {
            if (product.category === index) {
                category = itemCategory
            }
        })

        priductList.innerHTML += `
        <div class="col-3">
            <div class="product-item">
                <div class="product-img">
                    <img src="${product.image}">
                </div>
                <h3>${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-category">${category}</p>
                <p class="desc">${product.description}</p>
                <a class="addToCartBtn" onclick="addToCart(${index})">Add To Cart</a>
            </div>
        </div>
        `;
    });
}

listProductsInHtml(products)


function addToCart(index) {

    const cartProducts = JSON.parse(localStorage.getItem("cart_products")) || []
    let isIn = false
    isIn = cartProducts.some((cartProduct) => {
        return cartProduct.name === products[index].name
    });


    if (!isIn) {
        cartProducts.push(products[index])
        localStorage.setItem("cart_products", JSON.stringify(cartProducts))
    }
    console.log(cartProducts)
}

