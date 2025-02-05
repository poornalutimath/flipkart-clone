document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("login-modal");
    const loginBtn = document.getElementById("login-btn");
    const closeBtn = document.querySelector(".close");

    loginBtn.onclick = () => modal.style.display = "block";
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = "none";
    };

    const products = [
        { name: "iPhone 15", category: "Mobiles" },
        { name: "Samsung TV", category: "Electronics" },
        { name: "Nike Shoes", category: "Dresses" },
        { name: "Dell Laptop", category: "Electronics" }
    ];

    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.textContent = product.name;
        div.onclick = () => addToCart(product.name);
        productList.appendChild(div);
    });


    const cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");

    function addToCart(item) {
        cart.push(item);
        cartCount.textContent = cart.length;
        cartItems.innerHTML = cart.map(i => `<p>${i}</p>`).join("");
    }

    document.getElementById("search").addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        productList.childNodes.forEach(product => {
            product.style.display = product.textContent.toLowerCase().includes(query) ? "block" : "none";
        });
    });

    let scrollAmount = 0;
    function slide(direction) {
        scrollAmount += direction * 200;
        productList.scrollLeft = scrollAmount;
    }
});
