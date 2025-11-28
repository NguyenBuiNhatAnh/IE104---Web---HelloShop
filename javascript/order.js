import { orderItems } from "../sharedata/sharedata.js";
import { OrderItem } from "../components/orderItem.js";

// Hàm render các sản phẩm mà khách hàng đã đặt vào trang order
export function renderOrder() {
  const orderPage = document.getElementById("order-container");
  orderItems.value.forEach(item => {
    if (item.token === localStorage.getItem("token")) {
      let i = {};
      i.image = item.image;
      i.name = item.name;
      i.price = item.price;
      i.quantity = "Quantity: " + item.quantity;
      i.size = "Size: " + item.size;
      i.date = (new Date()).toDateString();
      i.method = item.method;
      i.state = item.state;
      if (i.state === undefined) {
        i.state = "Order Placed";
      }
      orderPage.appendChild(OrderItem(i));
    }
  }) 
}

// Hàm chuyển đến trang order của khách hàng
export function navigateOrderPage() {
  window.location.href = window.location.origin + '/' + '#/order';
}
window.navigateOrderPage = navigateOrderPage;