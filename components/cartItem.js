import { changeQuantity } from "../javascript/cart.js";
import { removeCartItem } from "../javascript/cart.js";

// Component để render các sản phẩm trong giỏ hàng
function CartItem ({_id, image, name, size, price, quantity}) {

    const cartItem = document.createElement('div');
    cartItem.className = "cart-item";

    const cartItemInfo = document.createElement('div');
    cartItemInfo.className = "cart-item-info";

    const cartItemInput = document.createElement('input');
    cartItemInput.type = "number";
    cartItemInput.value = quantity;
    cartItemInput.id = _id + size + "input";
    cartItemInput.min = "1";
    cartItemInput.onchange = (event) => changeQuantity(event);

    const cartItemBin = document.createElement('img');
    cartItemBin.src = "./assets/bin_icon.png";
    cartItemBin.id = _id + size;
    cartItemBin.onclick = (event) => removeCartItem(event);

    cartItem.appendChild(cartItemInfo);
    cartItem.appendChild(cartItemInput);
    cartItem.appendChild(cartItemBin);

    const cartItemImage = document.createElement('img');
    cartItemImage.className = "cart-item-image";
    cartItemImage.src = image[0];

    const divInfo = document.createElement('div');
    divInfo.className = "div-info";

    cartItemInfo.appendChild(cartItemImage);
    cartItemInfo.appendChild(divInfo);

    const nameCartItem = document.createElement('p');
    nameCartItem.textContent = name;

    const divPriceSize = document.createElement('div');
    divPriceSize.className = "size-price";

    const priceCartItem = document.createElement('p');
    priceCartItem.className = "price-cart-item";
    priceCartItem.textContent ="$" + price;

    const sizeCartItem = document.createElement('p');
    sizeCartItem.className = "size-cart-item";
    sizeCartItem.textContent = size;

    divPriceSize.appendChild(priceCartItem);
    divPriceSize.appendChild(sizeCartItem);

    divInfo.appendChild(nameCartItem);
    divInfo.appendChild(divPriceSize);

    return cartItem;
}

export {CartItem};