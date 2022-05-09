import { useContext } from 'react'
import Card from '../ui/Card'

import styles from './ProductItem.module.css'
import { ReactComponent as RemoveIcon } from '../../assets/removeIcon.svg'
import CartContext from '../../store/cart-context'

function ProductItem({ id, image, name, price }) {
	const cartCtx = useContext(CartContext)

	function handleAddToCart() {
		if (itemExistsInCart) {
			cartCtx.removeCartItem(id)
		} else {
			cartCtx.addCartItem({
				image: image,
				id: id,
				name: name,
				price: price,
			})
		}
	}

	const itemExistsInCart = cartCtx.itemIsInCart(id)

	return (
		<li className={styles.item}>
			<Card>
				<img src={image} alt={name} />
				<button className={styles.removeItem}>
					<RemoveIcon className={styles.removeIcon} />
				</button>
				<figcaption className={styles.content}>
					<h3>{name}</h3>
					<p>€ {price}</p>
					<button className={styles.addToCart} onClick={handleAddToCart}>
						{itemExistsInCart ? 'Remove from cart' : 'Add to cart'}
					</button>
				</figcaption>
			</Card>
		</li>
	)
}

export default ProductItem
