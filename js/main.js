import {PRODUCTS}                                                  from "./modules/product-list.js";
import {onDomReady, populateProductList, registerAddButtonClicked} from "./modules/dom-module.js";

const shoppingCart = [];

const callback = (eventObject) => {
	console.log(eventObject);
	console.log(`You have added ${eventObject.amount} units of ${eventObject.product.name} for ${eventObject.product.price}`);
};

registerAddButtonClicked(callback)

onDomReady(()=>{
	populateProductList(PRODUCTS);
})


