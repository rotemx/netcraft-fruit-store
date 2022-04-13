import {PRODUCTS}                                                  from "./modules/product-list.js";
import {onDomReady, populateProductList, registerAddButtonClicked} from "./modules/dom-module.js";
import {populateShoppingCart}                                      from "./modules/shopping-cart-module.js";

	const shoppingCartItems = [];

const callback = (eventObject) => {
	console.log(`You have added ${eventObject.amount} units of ${eventObject.product.name} for ${eventObject.product.price}`);
	shoppingCartItems.push(eventObject)
	populateShoppingCart(shoppingCartItems)
};

registerAddButtonClicked(callback)

onDomReady(()=>{
	populateProductList(PRODUCTS);
})


