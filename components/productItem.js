function ProductItem({ _id, image, name, price }) {
  const currency = "$"; // bạn có thể thay bằng VNĐ hoặc biến context khác

  // Thẻ link bao ngoài
  const link = document.createElement("div");
  link.className = "product-container";

  // Khung ảnh
  const imageWrapper = document.createElement("a");
  imageWrapper.className = "image-wrapper";
  imageWrapper.href = `/#/product/${_id}`;

  const img = document.createElement("img");
  img.src = image[0];
  img.alt = name;
  img.className = "image-product";

  imageWrapper.appendChild(img);

  // Tên sản phẩm
  const pName = document.createElement("p");
  pName.className = "name-product";
  pName.textContent = name;

  // Giá
  const pPrice = document.createElement("p");
  pPrice.className = "price-product";
  pPrice.textContent = currency + price;

  // Ghép tất cả vào link
  link.appendChild(imageWrapper);
  link.appendChild(pName);
  link.appendChild(pPrice);

  return link;
}

export {ProductItem};


