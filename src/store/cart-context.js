import { createContext, useState } from 'react'

const CartContext = createContext({
	cartItems: [],
	totalCartItems: 0,
	addCartItem: handleAddCartItem => {},
	removeCartItem: handleRemoveCartItem => {},
	itemIsInCart: handleItemIsInCart => {},
})

export function CartContextProvider({ children }) {
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

	function handleIncreaseAmount(id) {
		const newCart = [...userCartItems].map(item => {
			return item.id === id ? { ...item, amount: item.amount + 1 } : { ...item }
		})
		setUserCartItems(newCart)
	}

	function handleDecreaseAmount(id, amount) {
		if (amount === 1) {
			handleRemoveCartItem(id)
			return
		} else {
			const newCart = [...userCartItems].map(item => {
				return item.id === id
					? { ...item, amount: item.amount - 1 }
					: { ...item }
			})

			setUserCartItems(newCart)
		}
	}

	const context = {
		cartItems: userCartItems,
		totalCartItems: userCartItems.length,
		addCartItem: handleAddCartItem,
		removeCartItem: handleRemoveCartItem,
		itemIsInCart: handleItemIsInCart,
		decreaseAmount: handleDecreaseAmount,
		increaseAmount: handleIncreaseAmount,
	}

	return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

export default CartContext
