export function renderHome(products, ProductItem) {
  const productList = products.slice(0, 10);
  const proBestseller = products.slice(0, 5);
  const latestProducts = document.getElementById("latest-products");
  const bestseller = document.getElementById("best-seller");

  productList.forEach((product) => {
    const itemElement = ProductItem(product);
    latestProducts.appendChild(itemElement);
  });

  proBestseller.forEach((product) => {
    const itemElement = ProductItem(product);
    bestseller.appendChild(itemElement);
  });
}
