import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductContext from '../store/products-context'
import AddProductForm from '../components/products/AddProductForm'

function NewProduct() {
	const navigate = useNavigate()
	const { addProduct } = useContext(ProductContext)

	const handleProductAdd = productData => {
		addProduct(productData)
		navigate('/')
	}

	return (
		<section>
			<h1>Add new product</h1>
			<AddProductForm onAddProduct={handleProductAdd} />
		</section>
	)
}

export default NewProduct
