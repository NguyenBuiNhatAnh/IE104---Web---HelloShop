
export function ListItem({ _id, name, category, price, image }) {

    const listItemDiv = document.createElement('div');
    listItemDiv.className = "list-item";

    const listItemImage = document.createElement('img');
    listItemImage.src = image[0];

    const listItemName = document.createElement('p');
    listItemName.textContent = name

    const listItemCategory = document.createElement('p');
    listItemCategory.textContent = category;

    const listItemPrice = document.createElement('p');
    listItemPrice.textContent = "$" + price;

    const listItemAction = document.createElement('p');
    listItemAction.textContent = "X";
    listItemAction.id = "action-" + _id;
    listItemAction.className = "action-p";
    listItemAction.onclick = function (event) {
        removeProduct(event);
    };

    listItemDiv.appendChild(listItemImage);
    listItemDiv.appendChild(listItemName);
    listItemDiv.appendChild(listItemCategory);
    listItemDiv.appendChild(listItemPrice);
    listItemDiv.appendChild(listItemAction);

    return listItemDiv;
}