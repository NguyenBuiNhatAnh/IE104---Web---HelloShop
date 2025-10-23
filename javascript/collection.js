import { categories } from "../sharedata/sharedata.js";
import { subCategories } from "../sharedata/sharedata.js";
import { collectionProducts } from "../sharedata/sharedata.js";
import { filterProducts } from "../sharedata/sharedata.js";
import { ProductItem } from "../components/productItem.js";
import { sort } from "../sharedata/sharedata.js";

export function renderCollection(products, roductItem) {
  const allproduct = products;
  const allcollection = document.getElementById("all-collection");
  allcollection.textContent = "";

  allproduct.forEach((product) => {
    allcollection.appendChild(roductItem(product));
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

export function setCategory(event) {
  if(categories.value.includes(event.target.value)){
    let copy = categories.value;
    categories.value = [];
    copy.forEach(item => {
      if(item != event.target.value){
        categories.value.push(item);
      }
    })
  }
  else {
    categories.value.push(event.target.value);
  }
  filterProductFn();
  renderCollection(filterProducts.value,ProductItem);
}
window.setCategory = setCategory;

export function setSubCategory(event) {
  if(subCategories.value.includes(event.target.value)){
    let copy = subCategories.value;
    subCategories.value = [];
    copy.forEach(item => {
      if(item != event.target.value){
        subCategories.value.push(item);
      }
    })
  }
  else {
    subCategories.value.push(event.target.value);
  }
  filterProductFn();
  renderCollection(filterProducts.value,ProductItem);
}
window.setSubCategory = setSubCategory;

export function filterProductFn() {
  let copy = collectionProducts.value;
  let copy2 = [];
  if(categories.value.length > 0){
    copy.forEach(item => {
      if(categories.value.includes(item.category)) {
        copy2.push(item);
      }
    })
    copy = copy2;
    copy2 = [];
  }
  if(subCategories.value.length > 0){
    copy.forEach(item => {
      if(subCategories.value.includes(item.subCategory)){
        copy2.push(item);
      }
    })
    copy = copy2;
    copy2 = [];
  }
  filterProducts.value = copy;
}

export function sortProduct(event) {
  sort.value = event.target.value;
  let copy = filterProducts.value.slice();
  if(copy.length===0){
    copy = collectionProducts.value.slice();
  }
  if(sort.value === "High") {
    for(let i=0; i<copy.length-1;i++){
      let min = i;
      for(let j=i+1; j<copy.length;j++){
        if(copy[i].price > copy[j].price){
          min = j;
        }
      }
      if(min!==i){
        let tmp = copy[i];
        copy[i]=copy[min];
        copy[min]=tmp;
      }
    }
    filterProducts.value = copy;
    renderCollection(filterProducts.value,ProductItem);
  }
  if(sort.value === "Low") {
    for(let i=0; i<copy.length-1;i++){
      let min = i;
      for(let j=i+1; j<copy.length;j++){
        if(copy[i].price < copy[j].price){
          min = j;
        }
      }
      if(min!==i){
        let tmp = copy[i];
        copy[i]=copy[min];
        copy[min]=tmp;
      }
    }
    filterProducts.value = copy;
    renderCollection(filterProducts.value,ProductItem);
  }
  if(sort.value === "Relavent") {
    filterProductFn();
    renderCollection(filterProducts.value,ProductItem);
  }
}
window.sortProduct = sortProduct;
