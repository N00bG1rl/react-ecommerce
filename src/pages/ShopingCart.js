import { useContext } from 'react'
import CartContext from '../store/cart-context'
import ProductList from '../components/products/ProductList'

function ShopingCart() {
	const { cartItems, totalCartItems } = useContext(CartContext)

	let content

	if (!totalCartItems) {
		content = <p>No items in cart.</p>
	} else {
		content = <ProductList products={cartItems} />
	}

	return (
		<section>
			<h1>Shoping cart</h1>
			{content}
		</section>
	)
}

export default ShopingCart
