import ProductItem from './ProductItem'

import styles from './ProductList.module.css'

function ProductList(props) {
	return (
		<ul className={styles.productList}>
			{props.products.map(product => (
				<ProductItem
					key={product.id}
					id={product.id}
					image={product.image}
					name={product.name}
					price={product.price}
				/>
			))}
		</ul>
	)
}

export default ProductList
