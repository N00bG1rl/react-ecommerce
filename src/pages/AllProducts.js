import { useState, useEffect } from 'react'

import ProductList from '../components/products/ProductList'

function AllProducts() {
	const [isLoading, setIsLoading] = useState(true)
	const [loadedProducts, setLoadedProducts] = useState([])

	useEffect(() => {
		setIsLoading(true)

		fetch(
			'https://react-ecommerce-4c48d-default-rtdb.europe-west1.firebasedatabase.app/products.json'
		)
			.then(res => {
				return res.json()
			})
			.then(data => {
				const products = []

				for (const key in data) {
					const product = {
						id: key,
						...data[key],
					}

					products.push(product)
				}

				console.log(products)

				setIsLoading(false)
				setLoadedProducts(products)
			})
	}, [])

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		)
	}

	return (
		<section>
			<h1>All products</h1>
			<ProductList products={loadedProducts} />
		</section>
	)
}

export default AllProducts
