
import { ProductItem } from "./components/productItem.js";
import { products } from "./assets/assets.js";

// Định nghĩa các route và nội dung tương ứng
const routes = {
  "": "pages/home.html",
  "collection": "pages/collection.html",
  "about": "pages/about.html",
  "contact": "pages/contact.html",
  "product": "pages/product.html"
};

function a() {
  const productList = products.slice(0, 10);
  const proBestseller = products.slice(0,5);
  const latestProducts = document.getElementById("latest-products");
  const bestseller = document.getElementById("best-seller");

  productList.forEach(product => {
    const itemElement = ProductItem(product);
    latestProducts.appendChild(itemElement);
  });

  proBestseller.forEach(product => {
    const itemElement = ProductItem(product);
    bestseller.appendChild(itemElement);
  });
}

function b() {
  const allproduct = products;
  const allcollection = document.getElementById("all-collection");

  allproduct.forEach(product => {
    allcollection.appendChild(ProductItem(product));
  })
}

// Hàm render nội dung dựa trên hash hiện tại
function renderContent() {
  const hash = window.location.hash.replace("#/", "");
  let filePath = routes[hash];
  console.log(hash.slice(8));
  let idProduct;

  if(hash.slice(0,7)=="product"){
    filePath = routes["product"];
    idProduct = hash.split("/")[1];
    console.log(idProduct);
  }
  console.log(filePath)

  if (filePath) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) throw new Error("File not found");
        return response.text();
      })
      .then(html => {
        document.getElementById("app").innerHTML = html;
        if(filePath == "pages/home.html"){
          a();
        }
        else if(filePath === "pages/collection.html"){
          b();
        }
        else if(filePath === "pages/product.html"){
          navigateProduct(idProduct);
        }

      })
      .catch(() => {
        console.log("hello");
        document.getElementById("app").innerHTML = "<h1>404</h1><p>Không tìm thấy trang.</p>";
      });
  } else {
    console.log("hi");
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
window.addEventListener("hashchange", updateActiveLinks);

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

//function khi nhấn vào product chuyển qua trang product tương ứng
export function navigateProduct(idProduct) {
  let imageProduct;
  let productItem;

  products.forEach(product => {
    if (idProduct === product._id) {
      imageProduct = product.image;
      productItem = product;
    }
  });

  fetch("pages/product.html")
    .then(response => response.text()) // cần chuyển response thành text
    .then(html => {
      const app = document.getElementById("app");
      app.innerHTML = html;

      const img1 = document.createElement("img");
      const img2 = document.createElement("img");
      const img3 = document.createElement("img");
      const img4 = document.createElement("img");
      if(imageProduct[0]) {
        img1.src = imageProduct[0];
        document.getElementById("sub-image").appendChild(img1);
      }
      if(imageProduct[1]) {
        img2.src = imageProduct[1];
        document.getElementById("sub-image").appendChild(img2);
      }
      if(imageProduct[2]) {
        img3.src = imageProduct[2];
        document.getElementById("sub-image").appendChild(img3);
      }
      if(imageProduct[3]) {
        img4.src = imageProduct[3];
        document.getElementById("sub-image").appendChild(img4);
      }

      const mainImg = document.createElement("img");
      mainImg.src = imageProduct[0];
      document.getElementById("main-image").appendChild(mainImg);

      document.getElementById("name").innerText = productItem.name;
      document.getElementById("star").innerHTML = `&#9733;&#9733;&#9733;&#9733;&#9733;`;
      document.getElementById("price").innerText = "$"+productItem.price;
      document.getElementById("desc").innerText = productItem.description;

      productItem.sizes.forEach(sizePro => {
        let button = document.createElement("button");
        button.textContent = sizePro;
        document.getElementById("button-size-wrapper").appendChild(button);
      })

      const relatedProducts = [];
      products.forEach(product => {
        if(product.category == productItem.category && product.subCategory == productItem.subCategory) {
          relatedProducts.push(product);
        }
      })
      relatedProducts.forEach(product => {
        document.getElementById("related-products").appendChild(ProductItem(product));
      })
    });
}


window.openDropdown = openDropdown;
window.updateActiveLinks = updateActiveLinks;
window.openMenu = openMenu;
window.closeMenu = closeMenu;
window.navigateProduct = navigateProduct;

       
