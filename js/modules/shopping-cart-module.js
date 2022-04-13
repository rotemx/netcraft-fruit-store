
export function populateShoppingCart(shoppingCartItems){
	const cart = $('#shopping-cart');
	
	cart.empty();
	
	for (const item of shoppingCartItems)
	{
	cart.append(`<div>${item.product.name} ${item.amount} | total:  ${item.amount * item.product.price}</div>`)
	
	}
}
