const cartItems = [];

function calculateTotals() {
    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const taxRate = 0.08; // Example tax rate of 8%
    const total = subtotal * (1 + taxRate);

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function renderCart() {
    const tbody = document.querySelector('#cart-table tbody');
    tbody.innerHTML = ''; // Clear existing rows

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><img src="${item.image}" alt="${item.name}" class="product-image"></td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;

        tbody.appendChild(row);
    });

    calculateTotals();
}

function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const quantity = parseInt(document.getElementById('product-quantity').value);
    const imageInput = document.getElementById('product-image');
    const imageFile = imageInput.files[0];

    if (name && !isNaN(price) && price > 0 && !isNaN(quantity) && quantity > 0 && imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            cartItems.push({ 
                name, 
                price, 
                quantity, 
                image: e.target.result 
            });
            renderCart();
        }
        reader.readAsDataURL(imageFile);

        // Clear the input fields
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-quantity').value = '';
        imageInput.value = '';
    } else {
        alert('Please enter valid product details and upload an image.');
    }
}

function removeItem(index) {
    cartItems.splice(index, 1); // Remove item from array
    renderCart(); // Re-render cart
}

document.getElementById('add-product').addEventListener('click', addProduct);

document.getElementById('place-order').addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Here you would typically handle the order placement, e.g., by sending data to a server
});

// Initial render
renderCart();




// Toggle menu function
function menutoggle() {
    var MenuItems = document.getElementById("MenuItems");
    if (MenuItems.classList.contains('show')) {
        MenuItems.classList.remove('show');
    } else {
        MenuItems.classList.add('show');
    }
}

// Navigate to selected page
function navigateToPage() {
    var select = document.getElementById("product-filter");
    var value = select.value;
    if (value) {
        window.location.href = value;
    }
}







