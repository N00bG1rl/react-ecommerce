import ProductItem from './ProductItem'

import styles from './ProductList.module.css'

function ProductList(props) {
	return (
		<ul className={styles.productList}>
			{props.products.map(product => (
				<ProductItem
					key={product.id}
					id={product.id}
					image={product.product_image_md}
					name={product.product_name}
					price={product.product_price}
				/>
			))}
		</ul>
	)
}

export default ProductList
