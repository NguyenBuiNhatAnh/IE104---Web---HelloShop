export function renderCollection(products, ProductItem) {
  const allproduct = products;
  const allcollection = document.getElementById("all-collection");

  allproduct.forEach((product) => {
    allcollection.appendChild(ProductItem(product));
  });
}