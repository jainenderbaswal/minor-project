document.addEventListener('DOMContentLoaded', () => {
    const ItemsInCart = document.getElementById('cart');
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartTotalTable=document.getElementById('subtotal');

  // Function to calculate cart totals
  function calculateCartTotal() {
    let subtotal = 0;

    // Calculate subtotal
    cart.forEach(item => {
        const itemTotal = parseFloat(item.price.replace('$', '')) * item.quantity;
        subtotal += itemTotal;
    });

    // Update total in the cart
    cartTotalTable.innerHTML = `
        <h3>Cart Totals</h3>
        <table>
            <tr>
                <td>Cart Subtotal</td>
                <td>${cart.length > 0 ? subtotal.toFixed(2) : '0.00'}</td>
            </tr>
            <tr>
                <td>Shipping</td>
                <td>Free</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>${cart.length > 0 ? subtotal.toFixed(2) : '0.00'}</strong></td>
            </tr>
        </table>
        <button class="normal">Proceed to checkout</button>
    `;
}

  
    // Function to render cart items
    function renderCart() {
        if (cart.length === 0) {
            ItemsInCart.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let cartHTML = `
            <table width="100%">
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
        `;

        cart.forEach(item => {
            const subtotal = parseFloat(item.price.replace('$', '')) * item.quantity;
            cartHTML += `
                <tr>
                    <td><a href="#" data-id="${item.id}"><i class="far fa-times-circle remove-item"></i></a></td>
                    <td><img src="${item.Image}" alt="${item.name}"></td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>
                        <div class="qty-wrapper">
                            <span class="minus" data-id="${item.id}">-</span>
                            <span class="qty">${item.quantity}</span>
                            <span class="plus" data-id="${item.id}">+</span>
                        </div>
                    </td>
                    <td class='itemTotal'>${subtotal.toFixed(2)}</td>
                </tr>
            `;
            calculateCartTotal();
        });

        cartHTML += `
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="6"><a href="#" class="clear-cart">Clear Cart</a></td>
                    </tr>
                </tfoot>
            </table>
        `;

        ItemsInCart.innerHTML = cartHTML;


        
    }

   
    // Function to save cart to localStorage
    function addToMemory() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Function to clear the cart
    function clearCart() {
        cart = []; // Clear the cart array
        localStorage.removeItem('cart'); // Remove cart from localStorage
        renderCart(); // Update the HTML to reflect empty cart
    }

    // Initial render
    renderCart();

    // Event delegation for cart operations
    ItemsInCart.addEventListener('click', (e) => {
        e.preventDefault();
   // Handle remove item
        if (e.target.classList.contains('remove-item')) {
            const id = e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].getAttribute('data-id');
            cart = cart.filter(item => item.id !== id);
            addToMemory();
            renderCart();
        }

        // Handle quantity adjustment
        if (e.target.classList.contains('minus') || e.target.classList.contains('plus')) {
            const id = e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].getAttribute('data-id');
            console.log(id)
            const item = cart.find(item => item.id === id);
            if (item) {
                if (e.target.classList.contains('minus')) {
                    if (item.quantity > 1) item.quantity--;
                } else if (e.target.classList.contains('plus')) {
                    item.quantity++;
                }
                addToMemory();
                renderCart();
            }
        }

        // Handle clear cart
        if (e.target.classList.contains('clear-cart')) {
            clearCart();
        }
    });
});
