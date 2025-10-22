import { currentSize } from "../sharedata/sharedata.js";

export function navigateProduct(idProduct, products, ProductItem) {
  let imageProduct;
  let productItem;

  products.forEach(product => {
    if (idProduct === product._id) {
      imageProduct = product.image;
      productItem = product;
    }
  });

  fetch("../pages/product.html")
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

function effectSizeChosen(event) {
  const buttons = document.getElementsByClassName('button-item');
  [...buttons].forEach(button => {
    button.classList.remove('active');
    if (button === event.target) {
      button.classList.add('active');
      currentSize.size = button.textContent;
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