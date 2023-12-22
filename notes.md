# Steps in creating the app

_Packages installed_
npm i bootstrap react-bootstrap react-router-dom

Create a folder called component

-   Navbar
-   CartProduct.js
-   ProductCard.js

Create a folder called pages

-   cancel.js
-   Store.js
-   Success.js

After creating the navbar, import it into the App.js and ingest Routes functionality

Create the productsStore.js, to store the products information on the webpage

Import productSTore.js into the Store and map the array to display the items

Create the productCard.js and import it to the Store to pass the product props into it

Create CartContext

-   It allows us to store the cart data
-   And also functions we can use anywhere in the component

**The Provider** gives the React app access to all the things in the context
