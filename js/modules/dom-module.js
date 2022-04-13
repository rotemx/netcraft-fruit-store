let callback; //callback function to be called when "add" is clicked;

function clickFunctionFactory(eventObject)
{
	return () => {
		console.log('callback runs now:');
		callback({product: eventObject.product, amount:+(eventObject.amountInput.val())})
	};
}

function getProductTemplate(product)
{
	if (!product)
	{
		throw new Error('No product provided!')
	}
	
	const $template = $(`
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
						<input type="number" value="1" min="0" class="amount">
					</div>
					<input type="button" value="add" class="add-button">
			</div>
	`);
	const amountInput = $template.find('input.amount');
	$template.find('input.add-button').click(clickFunctionFactory({product, amountInput}));
	return $template;
}


export function registerAddButtonClicked(fn)
{
	callback = fn;
}


export function populateProductList(products)
{
	const $list = $('#product-list');
	
	for (const product of products)
	{
		$list.append(getProductTemplate(product))
	}
}


export function onDomReady(fn)
{
	$(document).ready(() => {
		console.log('DOM is ready');
		fn();
	})
	
}
