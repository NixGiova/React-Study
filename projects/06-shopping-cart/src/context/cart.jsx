import { createContext, useReducer } from 'react'
import {
  cartReducer,
  cartInitialState,
  CART_ACTION_TYPES
} from '../reducers/cart'

// 1. Create a context
export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product
    })

  const removeFromCart = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product
    })

  const clearCart = () =>
    dispatch({
      type: CART_ACTION_TYPES.CLEAR_CART
    })

  return { addToCart, removeFromCart, clearCart, state }
}

// 2. Create a provider, to provide the context
export function CartProvider({ children }) {
  /*   Esta lógica se quita por que se pasó al UseReducer

    const [cart, setCart] = useState([])
    const addToCart = (product) => {
    // check if the product is already in the cart
    const productCartIndex = cart.findIndex((item) => item.id === product.id)

    // if the product is already in the cart, update the quantity
    if (productCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart((prevState) => {
      return [...prevState, { ...product, quantity: 1 }]
    })
  } 

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  }

    const clearCart = () => {
    setCart([])
  }
  */

  const { addToCart, removeFromCart, clearCart, state } = useCartReducer()

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
