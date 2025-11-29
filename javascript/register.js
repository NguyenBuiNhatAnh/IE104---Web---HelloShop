import { showPopup } from "../app.js";

// Hàm đăng ký
export function register(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    showPopup(
      "Passwords do not match!",
      "Mật khẩu xác nhận không trùng khớp!",
      true
    );
    return;
  }

  let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  const isExist = users.some((user) => user.email === email);
  if (isExist) {
    showPopup("Email already exists!", "Email này đã được đăng ký!", true);
    return;
  } 

  const newUser = {
    email: email,
    password: password
  };

  users.push(newUser);
  localStorage.setItem("registeredUsers", JSON.stringify(users));

  showPopup("Registration successful!", "Đăng ký thành công!");

  setTimeout(() => {
    window.location.href = window.location.origin + "/#/login";
  }, 1000);
}

window.register = register;
