import { currentSize } from "./sharedata/sharedata.js";
import { ProductItem } from "./components/productItem.js";
import { CartItem } from "./components/cartItem.js";
import { renderHome } from "./javascript/home.js";
import { renderCollection } from "./javascript/collection.js";
import { renderCart } from "./javascript/cart.js";
import { navigateProduct } from "./javascript/product.js";
import { initAchievementObserver } from "./javascript/about.js";
import { productIdd } from "./sharedata/sharedata.js";
import { hideAndActiveCartPage } from "./javascript/cart.js";
import { cartTotal } from "./javascript/cart.js";
import { renderOrder } from "./javascript/order.js";
import { cartItemAmoun } from "./javascript/cart.js";
import { collectionProducts } from "./sharedata/sharedata.js";
import { language } from "./sharedata/sharedata.js";
import { langJSON } from "./sharedata/sharedata.js";
import { token } from "./sharedata/sharedata.js";
import { renderProfile } from "./javascript/profile.js";


// Định nghĩa các route và nội dung tương ứng
const routes = {
  "": "pages/home.html",
  "collection": "pages/collection.html",
  "about": "pages/about.html",
  "contact": "pages/contact.html",
  "product": "pages/product.html",
  "cart": "pages/cart.html",
  "placeorder": "pages/placeorder.html",
  "order": "pages/order.html",
  "login": "pages/login.html",
  "admin": "pages/admin.html",
  "register": "pages/register.html",
  "profile": "pages/profile.html"
};

let tokenLocal = localStorage.getItem("token");
if(tokenLocal === null) token.value = "";

// Hàm render nội dung dựa trên hash hiện tại
function renderContent() {
  const hash = window.location.hash.replace("#/", "");
  let filePath = routes[hash];
  let idProduct;
  currentSize.size = undefined;

  if (hash.slice(0, 7) == "product") {
    filePath = routes["product"];
    idProduct = hash.split("/")[1];
    productIdd.value = idProduct;
  }

  if (filePath) {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) throw new Error("File not found");
        return response.text();
      })
      .then(html => {
        document.getElementById("app").innerHTML = html;
        renderLanguage();
        cartItemAmoun();
        closeDropdown();
        if (localStorage.getItem("token") !== null || localStorage.getItem("token") === "" || localStorage.getItem("token") === "user" ) {
          document.getElementById("cart-icon-nav").style.display = "none";
          document.getElementById("hd").style.display = "flex";
          document.getElementById("ft").style.display = "block";
          document.getElementById("admin-hd").style.display = "none";
        }
        if (localStorage.getItem("token") === "user" || (localStorage.getItem("token") !== null && localStorage.getItem("token") !== "" && localStorage.getItem("token") !== "admin")) {
          document.getElementById("cart-icon-nav").style.display = "inline-block";
        }
        else if (localStorage.getItem("token") === "admin") {
          document.getElementById("hd").style.display = "none";
          document.getElementById("ft").style.display = "none";
          document.getElementById("admin-hd").style.display = "flex";
          window.location.href = window.location.origin + '/' + '#/admin';
        }
        if (filePath == "pages/home.html") {
          renderHome(collectionProducts.value, ProductItem);
          // renderLanguage();
        }
        else if (filePath === "pages/collection.html") {
          renderCollection(collectionProducts.value, ProductItem);
          // renderLanguage();
        }
        else if (filePath === "pages/product.html") {
          if (localStorage.getItem("token") === null || localStorage.getItem("token") === "") {
            window.location.href = window.location.origin + '/' + '#/login';
            return;
          }
          navigateProduct(idProduct, collectionProducts.value, ProductItem);
          // renderLanguage();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else if (filePath === "pages/cart.html") {
          renderCart(CartItem);
          hideAndActiveCartPage();
          cartTotal();
          // renderLanguage();
        }
        else if (filePath === "pages/placeorder.html") {
          cartTotal();
          // renderLanguage();
        }
        else if (filePath === "pages/order.html") {
          renderOrder();
          // renderLanguage();
        }
        else if (filePath === "pages/about.html") {
          initAchievementObserver();
          // renderLanguage();
        }
        else if (filePath === "pages/profile.html") {
          renderProfile();
        }
      })
      .catch(() => {
        document.getElementById("app").innerHTML = "<h1>405</h1><p>Không tìm thấy trang.</p>";
      });
  } else {
    document.getElementById("app").innerHTML = "<h1>404</h1><p>Không tìm thấy trang.</p>";
  }
}

// Hàm đồng bộ ngôn ngữ giữa user và admin
export function renderLanguage() {
  const selectAdmin = document.getElementById("select-admin");
  const selectUser = document.getElementById("select-user");
  if (selectAdmin) {
    selectAdmin.value = language.value;
  }
  if (selectUser) {
    selectUser.value = language.value;
  }
  langJSON.forEach(item => {
    const element = document.getElementById(item.id);
    if (element) {
      if (language.value === "EN") {
        element.textContent = item.EN;
      }
      else {
        element.textContent = item.VN;
      }
    }
  })
}

// Bắt sự kiện thay đổi hash (khi người dùng điều hướng hoặc reload)
window.addEventListener("hashchange", renderContent);

// Render lần đầu khi trang được tải
renderContent();

// Hàm mở drop down khi ấn vào Profile icon
export function openDropdown() {
  if (localStorage.getItem("token") === null || localStorage.getItem("token") === "") {
    window.location.href = window.location.origin + '/' + '#/login';
    return;
  }
  const dropdown = document.getElementById("drd");
  dropdown.style.display = "block";
}
window.openDropdown = openDropdown;

// Hàm đóng dropdown
export function closeDropdown() {
  document.getElementById("drd").style.display = "none"
}
window.closeDropdown = closeDropdown;

// Bắt sự kiện khi click vào thẻ a thì style cho thẻ đó
export function updateActiveLinks() {
  const currentURL = window.location.hash;
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    link.classList.remove("active");

    // So sánh tuyệt đối hoặc tương đối tùy vào cấu trúc href
    const href = link.getAttribute("href");
    if (href === currentURL) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("hashchange", updateActiveLinks);

// Hàm mở menu trên mobile
export function openMenu() {
  const mobilemeu = document.getElementById("mobile-menu");
  const divmobilemenu = document.getElementById("div-mobile-menu");
  mobilemeu.style.width = "100%";
  divmobilemenu.style.display = "flex";
}
window.openMenu = openMenu;

// Hàm đóng menu trên mobile
export function closeMenu() {
  const mobilemeu = document.getElementById("mobile-menu");
  const divmobilemenu = document.getElementById("div-mobile-menu");
  mobilemeu.style.width = "0";
  divmobilemenu.style.display = "none";
}
window.closeMenu = closeMenu;

// Gắn sự kiện scroll để ẩn hiện header
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Kéo xuống -> ẩn header
    header.classList.add("hidden-header");
  } else {
    // Kéo lên -> hiện header
    header.classList.remove("hidden-header");
  }

  lastScrollTop = currentScroll;
});
window.updateActiveLinks = updateActiveLinks;

// Hàm logout
export function logout() {
  localStorage.setItem("token", "");
  window.location.href = window.location.origin + "/#/login";
}
window.logout = logout;

// Hàm đổi ngôn ngữ
function changeLanguage(event) {
  const lang = event.target.value;
  language.value = lang;
  langJSON.forEach(item => {
    const element = document.getElementById(item.id);
    if (element) {
      if (language.value === "EN") {
        element.textContent = item.EN;
      }
      else {
        element.textContent = item.VN;
      }
    }
  })
}
window.changeLanguage = changeLanguage;

// Hàm thông báo
export function showPopup(textEN, textVN, er) {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
  const span = document.createElement('p');
  if (er) {
  span.style.background = "rgba(255, 59, 48, 0.7)";
}

  span.className = "pop-up"
  if(language.value === 'EN') {
    span.textContent = textEN;
  }
  else {
    span.textContent = textVN;
  }
  popup.appendChild(span)

  // Tự động ẩn sau 3 giây
  setTimeout(() => {
    span.style.display = "none";
  }, 3000);
}
window.showPopup = showPopup;




