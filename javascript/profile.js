
export function renderProfile() {
    if(localStorage.getItem("token") === "user") {
        document.getElementById("pro-email").value = "hello@gmail.com";
    }
    else {
        document.getElementById("pro-email").value = localStorage.getItem("token");
    }
}