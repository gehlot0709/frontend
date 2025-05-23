const form = document.querySelector(".products form")
const imagePreview = document.querySelector(".products .image-preview")
const prodcutName = form.querySelector("div:nth-child(1) input#pName")
const prodcutImage = form.querySelector("div:nth-child(2) input#pImg")
const prodcutPrice = form.querySelector("div:nth-child(3) input#pPrice")
const selectOptions = form.querySelector("div:nth-child(4) select#category")
const prodcutDesc = form.querySelector("div:nth-child(5) textarea#pDesc")
const prodcutSubmit = form.querySelector("[type='submit']")
const prodcutUpdate = form.querySelector("[type='button']")




// Product Categories
const categories = ["---select---", "Phones", "clothes", "shoes", "watch", "jewellary", "body care"]


const setCatefories = () => {
    selectOptions.innerHTML = ""
    categories.forEach((category, index) => {
        selectOptions.innerHTML += `<option value="${index}">${category}</option>`
    })
}

setCatefories()

// Image Using Reader 
const reader = new FileReader();

prodcutImage.onchange = () => {
    let inputImg = prodcutImage.files[0]
    reader.readAsDataURL(inputImg)
    reader.onload = () => {
        imagePreview.innerHTML = `<img src="${String(reader.result)}" alt="">`
    }
}


// form Event Listener
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const products = JSON.parse(localStorage.getItem("products")) || []

    let inputName = prodcutName.value.trim().toLowerCase()
    let inputPrice = Number(prodcutPrice.value.trim())
    let inputCategorie = Number(selectOptions.value.trim())
    let inputDesc = prodcutDesc.value.trim().toLowerCase()

    const product = {
        name: inputName,
        price: inputPrice,
        category: inputCategorie,
        description: inputDesc,
        image: reader.result
    }

    products.push(product)
    localStorage.setItem("products", JSON.stringify(products))

    window.location.assign("index.html");
})