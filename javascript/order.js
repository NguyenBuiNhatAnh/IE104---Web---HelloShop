import { orderItems } from "../sharedata/sharedata.js";
import { OrderItem } from "../components/orderItem.js";


export function renderOrder() {
  const orderPage = document.getElementById("order-container");
  orderItems.value.forEach(item => {
  let i = {};
  i.image = item.image;
  i.name = item.name;
  i.price = "$" + item.price;
  i.quantity = "Quantity: " + item.quantity;
  i.size = "Size: " + item.size;
  i.date = (new Date()).toDateString();
  i.method = item.method;
  orderPage.appendChild(OrderItem(i));
  })
}


export function navigateOrderPage() {
  window.location.href = window.location.origin + '/' + '#/order';
}
window.navigateOrderPage = navigateOrderPage;