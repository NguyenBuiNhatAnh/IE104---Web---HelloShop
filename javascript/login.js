import { showPopup } from "../app.js";
import { token } from "../sharedata/sharedata.js";

// Hàm login
export function login(event) {
    let logined = false;
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "hello@gmail.com" & password === "helloshop") {
        token.value = "user";
        localStorage.setItem("token", token.value)
        window.location.href = window.location.origin + "/#/";
        showPopup("Loggin successfully!", "Đăng nhập thành công!")
        return;
    }
    else {
        logined = true;
    }
    if(email === "admin@gmail.com" & password === "admin") {
        token.value = "admin";
        localStorage.setItem("token", token.value)
        window.location.href = window.location.origin + "/#/admin";
        showPopup("Loggin successfully!", "Đăng nhập thành công!")
        return;
    }
    else {
        logined = true;
    }
    if(logined) {
        showPopup("The username or password is incorrect!","Sai tài khoản hoặc mật khẩu!",true)
    }
}
window.login = login;