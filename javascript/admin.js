import { collectionProducts } from "../sharedata/sharedata.js";
import { ListItem } from "../components/listItem.js";
import { imageAddProduct1, imageAddProduct2, imageAddProduct3, imageAddProduct4 } from "../sharedata/sharedata.js";
import { sizesAddProduct } from "../sharedata/sharedata.js";
import { formSubmit } from "../sharedata/sharedata.js";
import { OrderAdmin } from "../components/orderAdmin.js";
import { orderItems } from "../sharedata/sharedata.js";
import { renderLanguage } from "../app.js";
import { showPopup } from "../app.js";

// Hàm để thêm hoặc xóa class khi ấn vào một trong 3 chức năng ở trang admin
export function buttonChoosen(button) {
    const buttons = document.getElementsByClassName("admin-change");
    [...buttons].forEach(item => {
        item.classList.remove("choose");
    })
    button.classList.add("choose");
}
window.buttonChoosen = buttonChoosen;

// Hàm để render trang thêm sản phẩm vào trang admin
export async function renderAddPage(button) {
    buttonChoosen(button);

    const response = await fetch("../pages/addpage.html");
    const html = await response.text();

    const targetRender = document.getElementById("admin-display");
    targetRender.textContent = "";
    targetRender.innerHTML = html;
    renderLanguage();
}
window.renderAddPage = renderAddPage;

// Hàm để render trang danh sách sản phẩm vào trang admin
export async function renderListPage(button) {
    buttonChoosen(button);

    const response = await fetch("../pages/listpage.html");
    const html = await response.text();

    const targetRender = document.getElementById("admin-display");
    targetRender.textContent = "";
    targetRender.innerHTML = html;

    const listItemContainer = document.getElementById("list-item-container");
    collectionProducts.value.forEach(item => {
        listItemContainer.appendChild(ListItem(item));
    });
    renderLanguage();
}
window.renderListPage = renderListPage;

// Hàm để render trang order ở admin
export async function renderOrdersPage(button) {
    buttonChoosen(button);

    const response = await fetch("../pages/orders.html");
    const html = await response.text();

    const targetRender = document.getElementById("admin-display");
    targetRender.textContent = "";
    targetRender.innerHTML = html;
    renderOrderAdmin();
    renderLanguage();
}
window.renderOrdersPage = renderOrdersPage;

// Hàm để xóa các sản phẩm ở trang danh sách sản phẩm admin
export function removeProduct(button) {
    const id = button.target.id;
    collectionProducts.value = collectionProducts.value.filter(item => {
        return ("action-" + item._id) !== id;
    });
    const listItemContainer = document.getElementById("list-item-container");
    listItemContainer.textContent = "";
    collectionProducts.value.forEach(item => {
        listItemContainer.appendChild(ListItem(item));
    });
    console.log(collectionProducts.value.length);
}
window.removeProduct = removeProduct;

//Hàm để hiển thị ảnh thay cho biểu tượng upload khi chọn ảnh
export function previewImage(input, a) {

    console.log("Hello");
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64 = e.target.result;
        if(a===1) {
            document.getElementById("img-1-admin").src = base64;
            imageAddProduct1.value = base64;
        }
        else if(a===2) {
            document.getElementById("img-2-admin").src = base64;
            imageAddProduct2.value = base64;
        }
        else if(a===3) {
            document.getElementById("img-3-admin").src = base64;
            imageAddProduct3.value = base64;
        }
        else if(a===4) {
            document.getElementById("img-4-admin").src = base64;
            imageAddProduct4.value = base64;
        }
    };
    reader.readAsDataURL(file);
}
window.previewImage = previewImage;

// Hàm thêm class khi admin chọn các size ở trang thêm sản phẩm
export function adminChooseSizes(size) {
    const s = size.textContent.trim();
    if(sizesAddProduct.value.includes(s)){
        size.classList.remove("choose");
        sizesAddProduct.value = sizesAddProduct.value.filter(item => {
            return item !== s;
        })
    }
    else {
        size.classList.add("choose");
        sizesAddProduct.value.push(s);
    }
}
window.adminChooseSizes = adminChooseSizes;

// Hàm tạo id random
function randomId() {
  return Math.random().toString(36).substr(2, 8);
}

// Hàm thêm một đối tượng sản phẩm vào allProductCollection khi admin ấn ADD
export function adminAddProduct(event) {
    event.preventDefault();
    const product = {};
    product._id = randomId();
    product.name = document.getElementById("add-name").value;
    product.description = document.getElementById("add-desc").value;
    product.price = Number(document.getElementById("add-price").value);
    product.image = [];
    product.image.push(imageAddProduct1.value);
    product.image.push(imageAddProduct2.value);
    product.image.push(imageAddProduct3.value);
    product.image.push(imageAddProduct4.value);
    product.category = document.getElementById("add-category").value;
    product.subCategory = document.getElementById("add-subcategory").value;
    product.sizes = sizesAddProduct.value;
    if(document.getElementById("add-bestseller").value === "yes") {
        product.bestseller = true;
    }
    else {
        product.bestseller = false;
    }
    collectionProducts.value.unshift(product);
    showPopup("Added products successfully!", "Thêm sản phẩm thành công!")
}
window.adminAddProduct = adminAddProduct;

// Hàm render các sản phẩm mà khách hàng đã order ở trang admin
function renderOrderAdmin() {
    formSubmit.value.forEach(item => {
        const target = document.getElementById("admin-display");
        target.appendChild(OrderAdmin(item));
    })
}

// Hàm cập nhật tính trạng đơn hàng cho khách hàng
export function updateState(event) {
    const value = event.target.value;
    const id = event.target.id;
    orderItems.value.forEach(item => {
        if(("form-submit-" + item.id) === id) {
            item.state = value;
        }
    })

    formSubmit.value.forEach(item => {
        if(("form-submit-") + item.id === id) {
            item.state = value;
        }
    })

}
window.updateState = updateState;