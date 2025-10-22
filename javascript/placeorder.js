import { cartItems } from "../sharedata/sharedata.js";
import { orderItems } from "../sharedata/sharedata.js";
import { formSubmit } from "../sharedata/sharedata.js";
import { method } from "../sharedata/sharedata.js";

export function submitForm(event) {
  event.preventDefault();
  formSubmit.value.firstName = document.getElementById("firstName-input").value;
  formSubmit.value.lastName = document.getElementById("lastName-input").value;
  formSubmit.value.email = document.getElementById("email-input").value;
  formSubmit.value.street = document.getElementById("street-input").value;
  formSubmit.value.city = document.getElementById("city-input").value;
  formSubmit.value.state = document.getElementById("state-input").value;
  formSubmit.value.zipcode = document.getElementById("zipcode-input").value;
  formSubmit.value.country = document.getElementById("country-input").value;
  formSubmit.value.phone = document.getElementById("phone-input").value;
  cartItems.value.forEach(item => {
    item.method = method;
  })
  orderItems.value.push(...cartItems.value);
  cartItems.value = [];
  window.location.href = window.location.origin + '/' + '#/order';
}
window.submitForm = submitForm;

export function bankingMethod() {
  document.getElementById("banking-btn").classList.add("display-none");
  document.getElementById("cod-btn").classList.add("display-none");
  document.getElementById("completed-btn").classList.remove("display-none");
  document.getElementById("img-banking").classList.remove("display-none");
  document.getElementById("h2-com").classList.add("display-none");
  method = "Banking";
}
window.bankingMethod = bankingMethod;

export function setMethodCOD() {
  method.value = "COD";
}
window.setMethodCOD = setMethodCOD;
