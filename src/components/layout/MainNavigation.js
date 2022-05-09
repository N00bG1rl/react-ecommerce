import { Link } from 'react-router-dom'
import { useContext } from 'react'

import styles from './MainNavigation.module.css'
import CartContext from '../../store/cart-context'

function MainNavigation() {
	const cartCtx = useContext(CartContext)

	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li className={styles.logo}>
						<Link to='/'>
							<h1>Shop</h1>
						</Link>
					</li>
					<li className={styles.lastNavItem}>
						<Link to='/shoping-cart'>
							Shoping cart
							<small className={styles.badge}>{cartCtx.totalCartItems}</small>
						</Link>
					</li>
					<li className={styles.firstNavItem}>
						<Link to='/new-product'>Add product</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
