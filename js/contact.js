const contact = async (data) => {
    const myHeaders = new Headers();

    const raw = JSON.stringify(data);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: localStorage.getItem('token'),
        },
        body: raw,
        redirect: 'follow',
    };

    const response = await fetch(`https://emeraldstore-server.herokuapp.com/api/contacts`, requestOptions);
    if (!response.ok) {
        const responseText = await response.text();
        throw new Error(responseText || 'Some error occured');
    } else {
        const responseText = await response.json();
        alert(`Thank you ${responseText.data.name} for your Order `);
    }
};

const isValid = (data) => {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const product = data.product;
    const quantity = data.quantity;
    const address = data.address;
    if (name == '') {
        alert('Name field requird');
        return false;
    }
    if (email == '') {
        alert('Email field requird');
        return false;
    }
    if (phone == '') {
        alert('Phone field requird');
        return false;
    }
    if (product == '') {
        alert('product field requird');
        return false;
    }
    if (quantity == '') {
        alert('quantity field requird');
        return false;
    }
    if (address == '') {
        alert('Address field requird');
        return false;
    }

    return true;
};

async function onSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('products').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

    const data = { name, email, phone, product, quantity, address };
    console.log(data);
    if (isValid(data)) {
        contact(data);
    } else {
        console.log('somthing erroe happend');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#contact-form').addEventListener('submit', onSubmit);
});
