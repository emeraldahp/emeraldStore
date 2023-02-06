## EmeraldStore - Computer Shop

### Hosted Website Live link - https://emeraldstore-eahp.netlify.app/
### Hosted Backend Api Link  - https://emeraldstore-server-production.up.railway.app/

### Front End repo link - https://github.com/emeraldahp/emeraldStore
### Back End repo link - https://github.com/emeraldahp/emeraldStore-server

### Tech Stack

#### Front-end Tech - HTML , CSS, JavaScript 
#### Back-end Tech - Node js , Express js Framework
#### Database - MongoDb (hosted On MongoDb Atlas)

### Website Pages
1. Register Page
2. Login Page
3. Home Page
4. Contact us Page

### User Story:-
1. A new User is able to create the account using the username, email and password and the credentials are validated in frontend before making any request to backend API.

2. Password is stored in Database with encryption  using bcrypt library.

3. Now the newly registered user and able to Login to the server using same email and password.

4. After login a token is generated which can be further used to access the Website this token is generated using jwt-token generator library.

5. Now after successfull login user get redirected to landing page which automatically fetchs the product details from database using  fetch API and display the details like price, name, varient of the product.

6. Now User can click buy Now button from list of product or select contact us option to place the order for the product.

7. Contact us page contain a form which asks user to fill there details to successfully place the order.

8. These details get stored in Database for further process.
