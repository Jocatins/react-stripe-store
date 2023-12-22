const productsArray = [
	{
		id: "price_1OJF8oIKjgdya2n57nbRdzSB",
		title: "Coffee",
		price: 4.99,
	},
	{
		id: "price_1OJFAkIKjgdya2n5y0gbblag",
		title: "Sunglasses",
		price: 9.99,
	},
	{
		id: "price_1OJFBdIKjgdya2n5Y3JxhlZU",
		title: "Camera",
		price: 39.99,
	},
];

// get the data of a product from only the id
function getProductData(id) {
	// .find() helps us loop through every element in the array
	// checking if the id is equal to the id that was passed in the function
	let productData = productsArray.find((product) => product.id === id);

	if (productData === undefined) {
		console.log("Product data does not exist for ID: " + id);
		return undefined;
	}

	return productData;
}

export { productsArray, getProductData };
