import { useContext } from 'react'

import CartContext from '../store/cart-context'
import ProductList from '../components/products/ProductList'

function ShopingCart() {
	const cartCtx = useContext(CartContext)

	let content

	if (!cartCtx.totalCartItems) {
		content = <p>No items in cart.</p>
	} else {
		content = <ProductList products={cartCtx.cartItems} />
	}

	return (
		<section>
			<h1>Shoping cart</h1>
			{content}
		</section>
	)
}

export default ShopingCart
