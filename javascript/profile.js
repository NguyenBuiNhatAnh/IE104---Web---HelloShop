
export function renderProfile() {
    if(localStorage.getItem("token") === "user") {
        document.getElementById("pro-email").value = "hello@gmail.com";
    }
    else {
        document.getElementById("pro-email").value = localStorage.getItem("token");
    }
}

export function togglePasswordForm() {
    var form = document.getElementById("password-form");
    
    // Kiểm tra nếu đang ẩn (none) HOẶC rỗng ("") thì hiện lên
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
window.togglePasswordForm = togglePasswordForm;

export function handleChangePassword() {

    const currentPassInput = document.getElementById("old-pass").value;
    const newPassInput = document.getElementById("new-pass").value;
    const confirmPassInput = document.getElementById("confirm-password").value;

    const token = localStorage.getItem("token");

    // --- Validate cơ bản ---
    if (!currentPassInput || !newPassInput || !confirmPassInput) {
        showPopup("Please complete all the required information!","Vui lòng điền đầy đủ thông tin!",true);
        return;
    }

    if (newPassInput !== confirmPassInput) {
        showPopup("The new password and confirmation do not match!","Mật khẩu mới và xác nhận không khớp!",true);
        return;
    }


    // --- Xử lý Logic tìm và đổi mật khẩu ---

    if (token === "user" || token === "admin") {
        showPopup("Demo accounts cannot change their password!","Tài khoản Demo không thể đổi mật khẩu!",true);
        return;
    }

    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    
    const userIndex = users.findIndex(u => u.email === token);

    if (userIndex !== -1) {

        if (users[userIndex].password !== currentPassInput) {
            showPopup("The entered current password is invalid!","Mật khẩu hiện tại không đúng!",true);
            return;
        }

        users[userIndex].password = newPassInput;

        localStorage.setItem("registeredUsers", JSON.stringify(users));

        showPopup("Password changed successfully!","Đổi mật khẩu thành công!");
        
        document.getElementById("old-pass").value = "";
        document.getElementById("new-pass").value = "";
        document.getElementById("confirm-password").value = "";
        togglePasswordForm(); // Đóng form
    } else {
        showPopup("User information not found!","Không tìm thấy thông tin người dùng!",true);
    }
}

window.handleChangePassword = handleChangePassword;