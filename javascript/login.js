import { token } from "../sharedata/sharedata.js";

export function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "hello@gmail.com" & password === "hellobro") {
        token.value = "user";
        localStorage.setItem("token", token.value)
        window.location.href = window.location.origin + "/#/";
        return;
    }
    if(email === "admin@gmail.com" & password === "admin") {
        token.value = "admin";
        localStorage.setItem("token", token.value)
        window.location.href = window.location.origin + "/#/admin";
        return;
    }
}
window.login = login;