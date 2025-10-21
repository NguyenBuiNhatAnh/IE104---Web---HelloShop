export function renderCollection(products, ProductItem) {
  const allproduct = products;
  const allcollection = document.getElementById("all-collection");

  allproduct.forEach((product) => {
    allcollection.appendChild(ProductItem(product));
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
window.openAndCloseFilter = openAndCloseFilter;