import { CartState } from '../reducers/cartItems/reducer'

const CART_STORAGE_KEY = '@coffee-delivery:cart-state-1.0.0'

export function loadCartFromLocalStorage() {
  try {
    const storedState = localStorage.getItem(CART_STORAGE_KEY)

    if (!storedState) {
      return null
    }

    const parsedState = JSON.parse(storedState)

    return parsedState as CartState
  } catch (error) {
    console.error('Error loading cart state from localStorage:', error)
    return null
  }
}

export function saveCartToLocalStorage(cartState: CartState) {
  try {
    const stateToJSON = JSON.stringify(cartState)

    localStorage.setItem(CART_STORAGE_KEY, stateToJSON)
  } catch (error) {
    console.log('Error saving cart state to localStorage:', error)
  }
}

export function clearCartFromLocalStorage() {
  localStorage.removeItem(CART_STORAGE_KEY)
}
