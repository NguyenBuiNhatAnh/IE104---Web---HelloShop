export function renderCart(cartItems, CartItem) {
  const cartPage = document.getElementById("cart-page");

  cartItems.forEach(item => {
    cartPage.appendChild(CartItem(item));
  })
}