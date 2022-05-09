import { createContext, useState } from 'react'

const CartContext = createContext({
	cartItems: [],
	totalCartItems: 0,
	addCartItem: handleAddCartItem => {},
	removeCartItem: handleRemoveCartItem => {},
	itemIsInCart: handleItemIsInCart => {},
})

export function CartContextProvider(props) {
	const [userCartItems, setUserCartItems] = useState([])

	function handleAddCartItem(cartItem) {
		setUserCartItems(prevState => {
			return prevState.concat(cartItem)
		})
	}

	function handleRemoveCartItem(cartItemId) {
		setUserCartItems(prevState => {
			return prevState.filter(item => item.id !== cartItemId)
		})
	}

	function handleItemIsInCart(cartItemId) {
		return userCartItems.some(item => item.id === cartItemId)
	}

	const context = {
		cartItems: userCartItems,
		totalCartItems: userCartItems.length,
		addCartItem: handleAddCartItem,
		removeCartItem: handleRemoveCartItem,
		itemIsInCart: handleItemIsInCart,
	}

	return (
		<CartContext.Provider value={context}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContext
