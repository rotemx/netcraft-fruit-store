function getProductTemplate(product)
{
	if (!product)
	{
		throw new Error('No product provided!')
	}
	
	return $(`
	<div class="product-list-item">
		<div class="product-image">
			<img height="50" width="50" src="img/${product.img_url}" />
		</div>

		<div class="product-name">
			${product.name}
		</div>
		<div class="product-price">
			${product.price} $
		</div>
		<div class="number-selector">
			<input type="number" value="1" min="0">
		</div>
	</div>
	`);
}


export function populateProductList(products) {
	const $list = $('#product-list');
	
	for (const product of products)
	{
		$list.append(getProductTemplate(product))
	}
}
