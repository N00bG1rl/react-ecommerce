import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import AllProducts from './pages/AllProducts'
import NewProduct from './pages/NewProduct'
import ShopingCart from './pages/ShopingCart'
import NotFound from './pages/NotFound'

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<AllProducts />} />
				<Route path='new-product' element={<NewProduct />} />
				<Route path='Shoping-cart' element={<ShopingCart />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Layout>
	)
}

export default App
