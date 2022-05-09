import { Link } from 'react-router-dom'

function MainNavigation() {
	return (
		<header>
			<h1>Shop</h1>
			<nav>
				<ul>
					<li>
						<Link to='/'>All products</Link>
					</li>
					<li>
						<Link to='/shoping-cart'>Shoping cart</Link>
					</li>
					<li>
						<Link to='/new-product'>Add product</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
