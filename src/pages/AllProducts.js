import { useContext } from 'react'
import ProductContext from '../store/products-context'
import ProductList from '../components/products/ProductList'

function AllProducts() {
	const { isLoading, products } = useContext(ProductContext)

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		)
	}

	if (!products.length) {
		return (
			<section>
				<p>No products jet.</p>
			</section>
		)
	}

	return (
		<section>
			<h1>All products</h1>
			<ProductList products={products} />
		</section>
	)
}

export default AllProducts
