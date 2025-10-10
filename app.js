
import { ProductItem } from "./components/productItem.js";
import { products } from "./assets/assets.js";
import { CartItem } from "./components/cartItem.js";

let cartItems = [];
let currentSize = undefined;
let productId = undefined;
let cartItemAmoun = 0;
let formSubmit = {};

export function bankingMethod() {
  document.getElementById("banking-btn").classList.add("display-none");
  document.getElementById("cod-btn").classList.add("display-none");
  document.getElementById("completed-btn").classList.remove("display-none");
  document.getElementById("img-banking").classList.remove("display-none");
  document.getElementById("h2-com").classList.add("display-none");
}

window.bankingMethod = bankingMethod;

export function submitForm(event) {
  event.preventDefault();
  formSubmit.firstName = document.getElementById("firstName-input").value;
  formSubmit.lastName = document.getElementById("lastName-input").value;
  formSubmit.email = document.getElementById("email-input").value;
  formSubmit.street = document.getElementById("street-input").value;
  formSubmit.city = document.getElementById("city-input").value;
  formSubmit.state = document.getElementById("state-input").value;
  formSubmit.zipcode = document.getElementById("zipcode-input").value;
  formSubmit.country = document.getElementById("country-input").value;
  formSubmit.phone = document.getElementById("phone-input").value;
  formSubmit.method = event.target.textContent;
  window.location.href = window.location.origin + '/' + '#/order';
}

window.submitForm = submitForm;

function hideAndActiveCartPage() {
  if (cartItemAmoun === 0) {
    document.getElementById("cart-page-container").classList.remove("active");
    document.getElementById("empty-cart").classList.add("active");
  } else {
    document.getElementById("cart-page-container").classList.add("active");
    document.getElementById("empty-cart").classList.remove("active");
  }
}

function cartTotal() {
  let sum = 0;
  if (cartItems[0]) {
    cartItems.forEach(item => {
      sum += item.quantity * item.price;
    })
  }
  document.getElementById("sub-total-price").textContent = "$" + sum + ".00";
  document.getElementById("total-price").textContent = "$" + (sum + 10) + ".00";
}

function cartItemAmount() {
  if (cartItems[0]) {
    let sum = 0;
    cartItems.forEach(item => {
      sum += item.quantity;
    })
    cartItemAmoun = sum;
  }
  else cartItemAmoun = 0;
  document.getElementById("cart-amount").textContent = cartItemAmoun;
}

export function changeQuantity(event) {
  const idInput = event.target.id;
  cartItems.forEach(item => {
    if ((item._id + item.size + "input") === idInput) {
      item.quantity = parseInt(event.target.value);
    }
  })
  cartItemAmount();
  cartTotal();
}
window.changeQuantity = changeQuantity;

export function removeCartItem(event) {
  let i = 0;
  let j = 0;
  const idCartItem = event.target.id;
  cartItems.forEach(item => {
    if ((item._id + item.size) === idCartItem) {
      j = i
    }
    i++;
  })
  cartItems.splice(j, 1);
  document.getElementById("cart-page").textContent = "";
  cartItemAmount();
  hideAndActiveCartPage();
  cartTotal();
  renderCart();
}
window.removeCartItem = removeCartItem;

export function addCartItem() {
  if (currentSize) {
    let currentProduct = undefined;
    let lived = false;
    cartItems.forEach(item => {
      if (item._id === productId && item.size === currentSize) {
        item.quantity++;
        lived = true;
        cartItemAmount();
      }
    })
    if (!lived) {
      products.forEach((product) => {
        if (product._id === productId) {
          currentProduct = product;
        }
      })

      let cartItem = {};
      cartItem._id = currentProduct._id;
      cartItem.image = currentProduct.image;
      cartItem.name = currentProduct.name;
      cartItem.size = currentSize;
      cartItem.price = currentProduct.price;
      cartItem.quantity = 1;

      cartItems.push(cartItem);
      cartItemAmount();
    }
  }
}

window.addCartItem = addCartItem;

// Định nghĩa các route và nội dung tương ứng
const routes = {
  "": "pages/home.html",
  "collection": "pages/collection.html",
  "about": "pages/about.html",
  "contact": "pages/contact.html",
  "product": "pages/product.html",
  "cart": "pages/cart.html",
  "placeorder": "pages/placeorder.html"
};

function renderHome() {
  const productList = products.slice(0, 10);
  const proBestseller = products.slice(0, 5);
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

function renderCollection() {
  const allproduct = products;
  const allcollection = document.getElementById("all-collection");

  allproduct.forEach(product => {
    allcollection.appendChild(ProductItem(product));
  })
}

function renderCart() {
  const cartPage = document.getElementById("cart-page");

  cartItems.forEach(item => {
    cartPage.appendChild(CartItem(item));
  })
}

// Hàm render nội dung dựa trên hash hiện tại
function renderContent() {
  const hash = window.location.hash.replace("#/", "");
  let filePath = routes[hash];
  let idProduct;
  currentSize = undefined;

  if (hash.slice(0, 7) == "product") {
    filePath = routes["product"];
    idProduct = hash.split("/")[1];
    productId = idProduct;
  }

  if (filePath) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) throw new Error("File not found");
        return response.text();
      })
      .then(html => {
        document.getElementById("app").innerHTML = html;
        if (filePath == "pages/home.html") {
          renderHome();
        }
        else if (filePath === "pages/collection.html") {
          renderCollection();
        }
        else if (filePath === "pages/product.html") {
          navigateProduct(idProduct);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else if (filePath === "pages/cart.html") {
          renderCart();
          hideAndActiveCartPage();
          cartTotal();
        }
        else if (filePath === "pages/placeorder.html") {
          cartTotal();
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
      if (imageProduct[0]) {
        img1.src = imageProduct[0];
        img1.classList = "sub-image-item";
        img1.onclick = (event) => changeImage(event);
        document.getElementById("sub-image").appendChild(img1);
      }
      if (imageProduct[1]) {
        img2.src = imageProduct[1];
        img2.classList = "sub-image-item";
        img2.onclick = (event) => changeImage(event);
        document.getElementById("sub-image").appendChild(img2);
      }
      if (imageProduct[2]) {
        img3.src = imageProduct[2];
        img3.classList = "sub-image-item";
        img3.onclick = (event) => changeImage(event);
        document.getElementById("sub-image").appendChild(img3);
      }
      if (imageProduct[3]) {
        img4.src = imageProduct[3];
        img4.classList = "sub-image-item";
        img4.onclick = (event) => changeImage(event);
        document.getElementById("sub-image").appendChild(img4);
      }

      const mainImg = document.createElement("img");
      mainImg.src = imageProduct[0];
      mainImg.id = 'main-image-item';
      document.getElementById("main-image").appendChild(mainImg);

      document.getElementById("name").innerText = productItem.name;
      document.getElementById("price").innerText = "$" + productItem.price;
      document.getElementById("desc").innerText = productItem.description;

      productItem.sizes.forEach(sizePro => {
        let button = document.createElement("button");
        button.textContent = sizePro;
        button.className = "button-item";
        button.onclick = (event) => effectSizeChosen(event);
        document.getElementById("button-size-wrapper").appendChild(button);
      })

      const relatedProducts = [];
      products.forEach(product => {
        if (product.category == productItem.category && product.subCategory == productItem.subCategory) {
          relatedProducts.push(product);
        }
      })
      relatedProducts.forEach(product => {
        document.getElementById("related-products").appendChild(ProductItem(product));
      })
    });
}

let close = true;
export function openAndCloseFilter() {
  if (close) {
    document.getElementById("drd-icon").classList.remove("xoay90");
    document.getElementById("ft1").style.display = "none";
    document.getElementById("ft2").style.display = "none";
  }
  else {
    document.getElementById("drd-icon").classList.add("xoay90");
    document.getElementById("ft1").style.display = "block";
    document.getElementById("ft2").style.display = "block";
  }
  close = !close;
}

function effectSizeChosen(event) {
  const buttons = document.getElementsByClassName('button-item');
  let buttonChange;
  [...buttons].forEach(button => {
    button.classList.remove('active');
    if (button === event.target) {
      button.classList.add('active');
      currentSize = button.textContent;
    }
  });
}

function changeImage(event) {
  const images = document.getElementsByClassName('sub-image-item');
  const mainImage = document.getElementById('main-image-item');
  [...images].forEach(image => {
    if (image === event.target) {
      mainImage.src = image.src;
    }
  });
}

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




window.openDropdown = openDropdown;
window.updateActiveLinks = updateActiveLinks;
window.openMenu = openMenu;
window.closeMenu = closeMenu;
window.navigateProduct = navigateProduct;
window.openAndCloseFilter = openAndCloseFilter;


