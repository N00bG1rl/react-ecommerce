import { useEffect, useState, createContext } from 'react'

const ProductContext = createContext({
	products: [],
	loading: false,
	addProduct: handleProductAdd => {},
	deleteProduct: handleProductDelete => {},
})

const URL =
	'https://react-ecommerce-4c48d-default-rtdb.europe-west1.firebasedatabase.app'

export function ProductContextProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false)
	const [loadedProducts, setLoadedProducts] = useState([])

	useEffect(() => {
		setIsLoading(true)
		fetchProducts()
	}, [])

	function fetchProducts() {
		fetch(`${URL}/products.json`)
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

				setIsLoading(false)
				setLoadedProducts(products)
			})
	}

	function handleProductAdd(productData) {
		fetch(`${URL}/products.json`, {
			method: 'POST',
			body: JSON.stringify(productData),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			setLoadedProducts(prevState => {
				return prevState.concat(productData)
			})
		})
	}

	function handleProductDelete(productId) {
		fetch(`${URL}/products/${productId}.json`, {
			method: 'DELETE',
		}).then(() => {
			setLoadedProducts(prevState => {
				return prevState.filter(item => item.id !== productId)
			})
		})
	}

	const context = {
		products: loadedProducts,
		loading: isLoading,
		addProduct: handleProductAdd,
		deleteProduct: handleProductDelete,
	}

	return (
		<ProductContext.Provider value={context}>
			{children}
		</ProductContext.Provider>
	)
}

export default ProductContext
