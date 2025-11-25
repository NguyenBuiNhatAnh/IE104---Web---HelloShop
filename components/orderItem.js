
// Component để render các sản phẩm mà khách hàng đã đặt
function OrderItem ({image, name, price, quantity, size, method, date, state}) {
    const orderItem = document.createElement('div');
    orderItem.className = "order-item";

    const orderItemInfoImage = document.createElement('div');
    orderItemInfoImage.className = "order-item-info-image";

    const orderSubContainer = document.createElement('div');
    orderSubContainer.className = "sub-container-order";

    const div = document.createElement('div');

    orderItem.appendChild(orderItemInfoImage);
    orderItem.appendChild(orderSubContainer);
    orderItem.appendChild(div);

    const orderImage = document.createElement('img');
    orderImage.src = image[0];
    orderImage.className = "order-item-image";
    
    const orderItemInfo = document.createElement("div");
    orderItemInfo.className = "order-item-info";

    orderItemInfoImage.appendChild(orderImage);
    orderItemInfoImage.appendChild(orderItemInfo);

    const circle = document.createElement('p');
    circle.className = "circle";

    const textOrderPlace = document.createElement('p');
    textOrderPlace.textContent = state;

    orderSubContainer.appendChild(circle);
    orderSubContainer.appendChild(textOrderPlace);

    const button = document.createElement('button');
    button.className = "btn";
    button.textContent = "Track Order";

    div.appendChild(button);

    const orderName = document.createElement('p');
    orderName.textContent = name;

    const divinfo = document.createElement('div');
    divinfo.className = "sub-info-order";

    const orderDate = document.createElement('p');
    orderDate.className = "kietdo";
    orderDate.textContent = date;

    const orderMethod = document.createElement('p');
    orderMethod.className = "kietdo";
    orderMethod.textContent = method;

    orderItemInfo.appendChild(orderName);
    orderItemInfo.appendChild(divinfo);
    orderItemInfo.appendChild(orderDate);
    orderItemInfo.appendChild(orderMethod);

    const priceOrder = document.createElement('p');
    priceOrder.textContent = "$" + price;

    const quantityOrder = document.createElement('p');
    quantityOrder.textContent = quantity;

    const sizeOrder = document.createElement('p');
    sizeOrder.textContent = size;

    divinfo.appendChild(priceOrder);
    divinfo.appendChild(quantityOrder);
    divinfo.appendChild(sizeOrder);

    return orderItem;
}

export {OrderItem};