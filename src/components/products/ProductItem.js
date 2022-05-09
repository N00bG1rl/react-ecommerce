import Card from '../ui/Card'

import styles from './ProductItem.module.css'
import { ReactComponent as RemoveIcon } from '../../assets/removeIcon.svg'

function ProductItem({ image, name, price }) {
	return (
		<li className={styles.item}>
			<Card>
				<img src={image} alt={name} />
				<p className={styles.removeItem}>
					<RemoveIcon className={styles.removeIcon} />
				</p>
				<figcaption className={styles.content}>
					<h3>{name}</h3>
					<p>€ {price}</p>
					<p className={styles.addToCart}>Add to cart</p>
				</figcaption>
			</Card>
		</li>
	)
}

export default ProductItem
