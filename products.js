document.addEventListener('DOMContentLoaded', function(){
    const cartItemsContainer = document.getElementById('cart-items');

    // Function to add items to cart
    function addItemToCart(productName, productPrice) {
        const existingItem = cartItemsContainer.querySelector(`tr[data-name="${productName}"]`);
        if (existingItem) {
            const quantityCell = existingItem.querySelector('.quantity');
            quantityCell.textContent = parseInt(quantityCell.textContent) + 1;
            return;
        }

        const row = document.createElement('tr');
        row.setAttribute('data-name', productName);
        row.innerHTML = `
            <td>${productName}</td>
            <td>$${productPrice}</td>
            <td class="quantity">1</td>
            <td>
                <button class="remove-button">Remove</button>
                <button class="increment-button">+</button>
                <button class="decrement-button">-</button>
            </td>
        `;
        cartItemsContainer.appendChild(row);
    }

    // Event listener for adding items to cart
    const addToCartButtons = document.querySelectorAll('.login-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const productContainer = event.target.closest('.product-info-container');
            const productName = productContainer.querySelector('.product-name').textContent;
            const productPrice = productContainer.querySelector('.product-price').textContent.slice(1); // Remove the "$" sign
            addItemToCart(productName, productPrice);
        });
    });

    // Event listener for removing items from cart
    cartItemsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-button')) {
            event.target.closest('tr').remove();
        }
        // Increment button functionality
        if (event.target.classList.contains('increment-button')) {
            const quantityCell = event.target.closest('tr').querySelector('.quantity');
            quantityCell.textContent = parseInt(quantityCell.textContent) + 1;
        }
        // Decrement button functionality
        if (event.target.classList.contains('decrement-button')) {
            const quantityCell = event.target.closest('tr').querySelector('.quantity');
            const quantity = parseInt(quantityCell.textContent);
            if (quantity > 1) {
                quantityCell.textContent = quantity - 1;
            }
        }
    });
});
