import { showPopup } from "../app.js";
import { cartItems } from "../sharedata/sharedata.js";
import { orderItems } from "../sharedata/sharedata.js";
import { formSubmit } from "../sharedata/sharedata.js";
import { method } from "../sharedata/sharedata.js";
import { idOrder } from "../sharedata/sharedata.js";
import { language } from "../sharedata/sharedata.js";

export function submitForm(event) {
  event.preventDefault();
  const form = {};
  form.firstName = document.getElementById("firstName-input").value;
  form.lastName = document.getElementById("lastName-input").value;
  form.email = document.getElementById("email-input").value;
  form.street = document.getElementById("street-input").value;
  form.city = document.getElementById("city-input").value;
  form.state = document.getElementById("state-input").value;
  form.zipcode = document.getElementById("zipcode-input").value;
  form.country = document.getElementById("country-input").value;
  form.phone = document.getElementById("phone-input").value;
  form.id = idOrder.value;
  form.method = method.value;
  form.date = (new Date()).toDateString();
  form.state = "Order Placed";
  cartItems.value.forEach(item => {
    item.method = method.value;
  })
  cartItems.value.forEach(item => {
    let a = item;
    a.id = idOrder.value;
    orderItems.value.push(a);
  })
  cartItems.value = [];
  idOrder.value++;
  formSubmit.value.push(form);
  window.location.href = window.location.origin + '/' + '#/order';
  showPopup("Order placed successfully!","Đặt hàng thành công")
}
window.submitForm = submitForm;

export function bankingMethod() {
  document.getElementById("banking-btn").classList.add("display-none");
  document.getElementById("cod-btn").classList.add("display-none");
  document.getElementById("completed-btn").classList.remove("display-none");
  document.getElementById("img-banking").classList.remove("display-none");
  document.getElementById("h2-com").classList.add("display-none");
  method.value = "Banking";
}
window.bankingMethod = bankingMethod;

export function setMethodCOD() {
  method.value = "COD";
}
window.setMethodCOD = setMethodCOD;
