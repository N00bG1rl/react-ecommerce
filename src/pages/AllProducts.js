import ProductList from '../components/products/ProductList'

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const DUMMY_DATA = [
	{
		id: 1,
		product_image_md: img1,
		product_name: 'Beauty Product',
		product_price: 265,
	},
	{
		id: 2,
		product_image_md: img2,
		product_name: 'Beauty Product',
		product_price: 340,
	},
	{
		id: 3,
		product_image_md: img3,
		product_name: 'Beauty Product',
		product_price: 450,
	},
	{
		id: 4,
		product_image_md: img4,
		product_name: 'Beauty Product',
		product_price: 260,
	},
]

function AllProducts() {
	return (
		<section>
			<h1>All products</h1>
			<ProductList products={DUMMY_DATA} />
		</section>
	)
}

export default AllProducts
