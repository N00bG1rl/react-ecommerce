import { useNavigate } from 'react-router-dom'

import AddProductForm from '../components/products/AddProductForm'

//const URL = process.env.REACT_APP_FIREBASE_API

function NewProduct() {
	const navigate = useNavigate()

	const handleProductAdd = productData => {
		console.log(productData)

		fetch(
			'https://react-ecommerce-4c48d-default-rtdb.europe-west1.firebasedatabase.app/products.json',
			{
				method: 'POST',
				body: JSON.stringify(productData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then(() => {
			navigate('/')
		})
	}

	return (
		<section>
			<h1>Add new product</h1>
			<AddProductForm onAddProduct={handleProductAdd} />
		</section>
	)
}

export default NewProduct
