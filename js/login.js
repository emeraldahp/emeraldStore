import Config from "./config.js";

const isValid = (data) => {
    const email = data.email;
    const password = data.password;
    if (email == '') {
        alert('Email field requird');
        return false;
    }
    if (password == '') {
        alert('Password field requird');
        return false;
    }
    return true;
};

const login = async (loginDetails) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify(loginDetails);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    };

    const response = await fetch(`${Config.API_URL}/api/auth/login`, requestOptions);

    if (!response.ok) {
        const responseText = await response.text();
        throw new Error(responseText || 'Some error occured');
    }
    const data = await response.json();
   // console.log(data);

    localStorage.setItem('token', data.data.token);
    localStorage.setItem('email', data.data.email);
    localStorage.setItem('name', data.data.name);
    return data;
};

async function onLoginFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value; //email
    const password = document.getElementById('password').value; //password
    console.log(email);
    console.log(password);
    const loginDetails = { email, password };
    console.log(loginDetails);
    try {
        const data = await login(loginDetails);
        alert(`${localStorage.getItem('name')}`);
        location.href = 'home.html';
    } catch (error) {
        alert(error.message);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Login');
    document.querySelector('#login-form').addEventListener('submit', onLoginFormSubmit);
});
