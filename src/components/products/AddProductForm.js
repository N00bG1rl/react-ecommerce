import { useRef } from 'react'
import Card from '../ui/Card'
import styles from './AddProductForm.module.css'

function AddProductForm({ onAddProduct }) {
	const imageInputRef = useRef()
	const nameInputRef = useRef()
	const priceInputRef = useRef()

	function handleSubmit(event) {
		event.preventDefault()

		const enteredImage = imageInputRef.current.value
		const enteredName = nameInputRef.current.value
		const enteredPrice = priceInputRef.current.value

		const productData = {
			image: enteredImage,
			name: enteredName,
			price: enteredPrice,
		}

		onAddProduct(productData)
	}

	return (
		<Card>
			<form className={styles.form} onSubmit={handleSubmit}>
				<p className={styles.control}>
					<label htmlFor='image'>Product image url</label>
					<input type='url' required id='image' ref={imageInputRef} />
				</p>
				<p className={styles.control}>
					<label htmlFor='name'>Product name</label>
					<input type='text' required id='name' ref={nameInputRef} />
				</p>
				<p className={styles.control}>
					<label htmlFor='price'>Product price</label>
					<input type='number' required id='price' ref={priceInputRef} />
				</p>
				<button type='submit' className={styles.actions}>
					Add Product
				</button>
			</form>
		</Card>
	)
}

export default AddProductForm
