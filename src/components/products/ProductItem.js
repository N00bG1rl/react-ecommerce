import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import ProductContext from '../../store/products-context'

import Card from '../ui/Card'
import styles from './ProductItem.module.css'
import { ReactComponent as RemoveIcon } from '../../assets/removeIcon.svg'

function ProductItem({ id, image, name, price }) {
	const { removeCartItem, addCartItem, itemIsInCart } = useContext(CartContext)
	const { deleteProduct } = useContext(ProductContext)
	const itemExistsInCart = itemIsInCart(id)

	const handleAddToCart = () => {
		if (itemExistsInCart) {
			removeCartItem(id)
		} else {
			addCartItem({
				image: image,
				id: id,
				name: name,
				price: price,
			})
		}
	}

	const handleProductDelete = () => {
		deleteProduct(id)
	}

	return (
		<li className={styles.item}>
			<Card>
				<img src={image} alt={name} />
				<button className={styles.removeItem} onClick={handleProductDelete}>
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
