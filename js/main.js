import {PRODUCTS}            from "./modules/product-list.js";
import {populateProductList} from "./modules/dom-module.js";

$(document).ready(()=>{
    console.log('DOM is ready');
    
    populateProductList(PRODUCTS);
	
})
