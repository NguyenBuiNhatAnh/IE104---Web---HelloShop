import { currentSize } from "../sharedata/sharedata.js";
import { cartItems } from "../sharedata/sharedata.js";
import { productIdd } from "../sharedata/sharedata.js";
import { cartItemAmount } from "../sharedata/sharedata.js";
import { CartItem } from "../components/cartItem.js";
import { collectionProducts } from "../sharedata/sharedata.js";
import { showPopup } from "../app.js";
import { token } from "../sharedata/sharedata.js";

// Hàm render các sản phẩm ở giỏ hàng
function renderCartt() {
  renderCart(CartItem);
}

// Hàm render các sản phẩm ở giỏ hàng
export function renderCart(CartItem) {
  const cartPage = document.getElementById("cart-page");

  cartItems.value.forEach(item => {
    if (item.token === localStorage.getItem("token"))
      cartPage.appendChild(CartItem(item));
  })
}

// Hàm thêm sản phẩm cho giỏ hàng
export function addCartItem() {
  if (currentSize.size) {
    let currentProduct = undefined;
    let lived = false;
    cartItems.value.forEach(item => {
      if ((item._id === productIdd.value && item.size === currentSize.size) && (item.token === localStorage.getItem("token"))) {
        item.quantity++;
        lived = true;
        cartItemAmoun();
      }
    })
    if (!lived) {
      collectionProducts.value.forEach((product) => {
        if (product._id === productIdd.value) {
          currentProduct = product;
        }
      })
      let cartItem = {};
      cartItem._id = currentProduct._id;
      cartItem.image = currentProduct.image;
      cartItem.name = currentProduct.name;
      cartItem.size = currentSize.size;
      cartItem.price = currentProduct.price;
      cartItem.quantity = 1;
      cartItem.token = localStorage.getItem("token");

      cartItems.value.push(cartItem);
      cartItemAmoun();
    }
    showPopup("Product added successfully!", "Thêm sản phẩm thành công!");
  }
  else {
    showPopup("You haven't selected a size!", "Bạn chưa chọn size!", true)
  }
}
window.addCartItem = addCartItem;

// Hàm tính số lượng sản phẩm trong giỏ hàng
export function cartItemAmoun() {
  if (cartItems.value[0]) {
    let sum = 0;
    cartItems.value.forEach(item => {
      if (item.token === localStorage.getItem("token"))
        sum += item.quantity;
    })
    cartItemAmount.value = sum;
  }
  else cartItemAmount.value = 0;
  document.getElementById("cart-amount").textContent = cartItemAmount.value;
}

// Hàm ẩn - hiển biểu tượng giỏ hàng trống hoặc có sản phẩm
export function hideAndActiveCartPage() {
  if (cartItemAmount.value === 0) {
    document.getElementById("cart-page-container").classList.remove("active");
    document.getElementById("empty-cart").classList.add("active");
  } else {
    document.getElementById("cart-page-container").classList.add("active");
    document.getElementById("empty-cart").classList.remove("active");
  }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
export function removeCartItem(event) {
  let i = 0;
  let j = 0;
  const idCartItem = event.target.id;
  cartItems.value.forEach(item => {
    if (((item._id + item.size) === idCartItem) && (item.token === localStorage.getItem("token"))) {
      j = i
    }
    i++;
  })
  cartItems.value.splice(j, 1);
  document.getElementById("cart-page").textContent = "";
  cartItemAmoun();
  hideAndActiveCartPage();
  cartTotal();
  renderCartt();
}

// Hàm tính tổng sản phẩm trong giỏ hàng
export function cartTotal() {
  let sum = 0;
  if (cartItems.value[0]) {
    cartItems.value.forEach(item => {
      if (item.token === localStorage.getItem("token"))
        sum += item.quantity * item.price;
    })
  }
  document.getElementById("sub-total-price").textContent = "$" + sum + ".00";
  document.getElementById("total-price").textContent = "$" + (sum + 10) + ".00";
}

// Hàm xử lý việc thay đổi số lướng sản phẩm trong giỏ hàng
export function changeQuantity(event) {
  const idInput = event.target.id;
  cartItems.value.forEach(item => {
    if (((item._id + item.size + "input") === idInput) && (item.token === localStorage.getItem("token"))) {
      item.quantity = parseInt(event.target.value);
    }
  })
  cartItemAmoun();
  cartTotal();
}
