const products = [
    { id: 1, name: "Produk 1", price: 100000 },
    { id: 2, name: "Produk 2", price: 150000 },
    { id: 3, name: "Produk 3", price: 200000 },
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
        productItem.innerHTML = `
            <p>${product.name}</p>
            <p>Rp${product.price}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";

    cart.forEach((product) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <p>${product.name}</p>
            <p>Rp${product.price}</p>
            <button onclick="removeFromCart(${product.id})">Hapus</button>
        `;
        cartDiv.appendChild(cartItem);
    });
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex((p) => p.id === productId);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        displayCart();
    }
}

function checkout() {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    alert(`Total belanja: Rp${total}`);
    cart.length = 0;
    displayCart();
}

function addProduct() {
    const name = prompt("Masukkan nama produk:");
    const price = parseFloat(prompt("Masukkan harga produk:"));

    if (name && !isNaN(price)) {
        const newProduct = {
            id: products.length + 1,
            name: name,
            price: price,
        };
        products.push(newProduct);
        displayProducts();
    }
}

displayProducts();

const checkoutButton = document.getElementById("checkout");
const addProductButton = document.getElementById("add-product-button");

checkoutButton.addEventListener("click", checkout);
addProductButton.addEventListener("click", addProduct);

