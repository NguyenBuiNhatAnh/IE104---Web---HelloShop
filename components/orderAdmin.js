import { orderItems } from "../sharedata/sharedata.js";

export function OrderAdmin(formSubmit) {
    const divOrderAdmin = document.createElement('div');
    divOrderAdmin.className = "order-admin";

    const image = document.createElement('img');
    image.src = "./assets/parcel_icon.svg";

    const divInfoForm = document.createElement('div');

    const divInfoMethod = document.createElement('div');

    const pPrice = document.createElement('p');

    const select = document.createElement('select');

    divOrderAdmin.appendChild(image);
    divOrderAdmin.appendChild(divInfoForm);
    divOrderAdmin.appendChild(divInfoMethod);
    divOrderAdmin.appendChild(pPrice);
    divOrderAdmin.appendChild(select);

    const id = formSubmit.id;

    let price = 0;

    orderItems.value.forEach(item => {
        if (item.id === id) {
            const p = document.createElement('p');
            p.textContent = item.name + " x " + item.quantity + " x " + item.size;
            divInfoForm.appendChild(p);
            price += item.price;
        }
    })
    const pName = document.createElement('p');
    pName.textContent = formSubmit.firstName + " " + formSubmit.lastName;
    pName.className = "name-order-admin";

    const pStreet = document.createElement('p');
    pStreet.textContent = formSubmit.street;

    const pAddress = document.createElement('p');
    pAddress.textContent = formSubmit.city + ", " + formSubmit.state + ", " + formSubmit.country + ", " + formSubmit.zipcode

    const pPhone = document.createElement('p');
    pPhone.textContent = formSubmit.phone;

    divInfoForm.appendChild(pName);
    divInfoForm.appendChild(pStreet);
    divInfoForm.appendChild(pAddress);
    divInfoForm.appendChild(pPhone);

    const pMethod = document.createElement('p');
    pMethod.textContent = "Method: " + formSubmit.method;

    const pDate = document.createElement('p')
    pDate.textContent = "Date: " + formSubmit.date;

    divInfoMethod.appendChild(pMethod);
    divInfoMethod.appendChild(pDate);

    pPrice.textContent = '$' + price;

    const options = ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered'];
    options.forEach(text => {
        const option = document.createElement('option');
        option.value = text.toLowerCase();
        option.textContent = text;
        select.appendChild(option);
    });

    

    return divOrderAdmin;
}