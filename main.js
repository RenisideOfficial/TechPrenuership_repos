//all code will be ran here when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    let isRegistered = false;
    const inventory = [];
    const sampleProducts = [
        { name: "Akara", price: 1.0, expiry: "2025-01-15"},
        { name: "Bread", price: 1.2, expiry: "2025-01-10" },
        { name: "Eggs", price: 3.0, expiry: "2025-01-20" },
        { name: "Cheese", price: 4.5, expiry: "2025-02-01" },
        { name: "Butter", price: 2.8, expiry: "2025-01-25" },
    ];

    const registerForm = document.querySelector(".form_box");
    const addProductForm = document.getElementById("addproduct_box")
    const inventoryList = document.getElementById("items");
    //addproduct container
    const addProductSection = document.getElementById("addProduct");

    //we push items to a new array
    sampleProducts.forEach((product) => inventory.push(product))
    updateInventoryList()

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault()
        isRegistered = true;
        alert("You are now registered")
        addProductSection.style.display = "block"
    })

    addProductForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if(!isRegistered){
            alert("You must be registered to add products.")
            return;
        }

        const productName = document.getElementById("product_name").value
        const productPrice = document.getElementById("product_price").value
        const productExpiry = document.getElementById("productExpiry").value

        const product = {
            name: productName,
            price: parseFloat(productPrice).toFixed(2),
            expiry: productExpiry,
        };

        inventory.push(product);
        updateInventoryList();
        addProductForm.reset();
    })


    function updateInventoryList() {   
        inventory.forEach((item) => {
            const li = document.createElement("li")
            li.textContent = `${item.name} - $${item.price} - Exp: ${item.expiry}`;
            inventoryList.appendChild(li);
        })
    }
})

