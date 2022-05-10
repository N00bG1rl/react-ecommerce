import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import { CartContextProvider } from './store/cart-context'
import { ProductContextProvider } from './store/products-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<CartContextProvider>
		<ProductContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ProductContextProvider>
	</CartContextProvider>
)
