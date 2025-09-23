// app.js
// Định nghĩa các route và nội dung tương ứng
import { ProductItem } from "./components/productItem.js";
import { products } from "./assets/assets.js";

const routes = {
  "": "pages/home.html",
  "collection": "pages/collection.html",
  "about": "pages/about.html",
  "contact": "pages/contact.html"
};

function a() {
  const productList = products.slice(0, 10);
  const latestProducts = document.getElementById("latest-products");

  productList.forEach(product => {
    const itemElement = ProductItem(product);
    latestProducts.appendChild(itemElement);
  });
}


// Hàm render nội dung dựa trên hash hiện tại
let first = true;
function renderContent() {
  const hash = window.location.hash.replace("#/", "");
  const filePath = routes[hash];

  if (filePath) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) throw new Error("File not found");
        return response.text();
      })
      .then(html => {
        if(!first){
          updateActiveLinks()
        }
        first = false;
        document.getElementById("app").innerHTML = html;
        if(filePath=="pages/home.html"){
          a();
        }
      })
      .catch(() => {
        document.getElementById("app").innerHTML = "<h1>404</h1><p>Không tìm thấy trang.</p>";
      });
  } else {
    document.getElementById("app").innerHTML = "<h1>404</h1><p>Không tìm thấy trang.</p>";
  }
}

// Bắt sự kiện click trên các thẻ <a data-link>
document.addEventListener("click", e => {
  const link = e.target.closest("a[data-link]");
  if (link) {
    e.preventDefault();
    const href = link.getAttribute("href");
    window.location.hash = href;
  }
});

// Bắt sự kiện thay đổi hash (khi người dùng điều hướng hoặc reload)
window.addEventListener("hashchange", renderContent);

// Render lần đầu khi trang được tải
renderContent();

let visible = false;
export function openDropdown() {
  const dropdown = document.getElementById("drd");
  if (!visible) {
    visible = true;
    dropdown.style.display = "block";
  } else {
    visible = false;
    dropdown.style.display = "none";
  }
}

// Bắt sự kiện khi click vào thẻ a thì style cho thẻ đó
export function updateActiveLinks() {
  const currentURL = window.location.hash;
  console.log(currentURL);
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.classList.remove('active');

    // So sánh tuyệt đối hoặc tương đối tùy vào cấu trúc href
    const href = link.getAttribute('href');
    if (href === currentURL) {
      link.classList.add('active');
    }
  });
}


export function openMenu() {
  const mobilemeu = document.getElementById("mobile-menu");
  const divmobilemenu = document.getElementById("div-mobile-menu");
  mobilemeu.style.width = "100%"
  divmobilemenu.style.display = "flex"
}

export function closeMenu() {
  const mobilemeu = document.getElementById("mobile-menu");
  const divmobilemenu = document.getElementById("div-mobile-menu");
  mobilemeu.style.width = "0"
  divmobilemenu.style.display = "none"
}

window.openDropdown = openDropdown;
window.updateActiveLinks = updateActiveLinks;
window.openMenu = openMenu;
window.closeMenu = closeMenu;
       
