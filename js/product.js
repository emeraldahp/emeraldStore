async function fetchProduct(event) {
    console.log(localStorage.getItem('token'));
    const response = await fetch('https://emeraldstore-server.herokuapp.com/api/products', {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    });
    if (!response.ok) {
        const responseText = await response.text();
        throw new Error(responseText || 'Some error occured');
    }

    const products = await response.json();
    console.log(products.data);
    const productDetails = document.querySelector('.product');
    let productStr = '';
    for (let i = 0; i < products.data.length; i++) {
        let eachDetails = `
        <div class="box">
                <img
                    src="${products.data[i].image}"
                    width="100%"
                />
                <p>Product : ${products.data[i].name}</p>
                <p>Price : ${products.data[i].price}</p>
                <p>varient : version ${products.data[i].varient}</p>
                <a href="contact.html" ><button type="submit">Contact us to Buy Now</button></a>
            </div>
        
        
        `;
        productStr += eachDetails;
    }
    productDetails.innerHTML = productStr;
}

document.addEventListener('DOMContentLoaded', function () {
    fetchProduct();
});
