import { toast } from 'react-toastify'
import { CartAction } from './actions'

export type Product = {
  id: string
  title: string
  description: string
  image: {
    url: string
    alt: string | null
  }
  price: number
  stock: number
  tags: string[]
}

type CartItems = Product & {
  quantity: number
}

type CartState = {
  cartItems: CartItems[]
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newCoffee = {
        ...action.payload.product,
      }

      const itemInCart = state.cartItems.find(
        (item) => item.id === newCoffee.id
      )

      if (itemInCart) {
        if (itemInCart.quantity >= itemInCart.stock) {
          toast.error('Quantidade indisponível no estoque!')
          return state
        }

        const updatedCart = state.cartItems.map((item) =>
          item.id === newCoffee.id
            ? {
                ...item,
                quantity: item.quantity + newCoffee.quantity,
                stock: item.stock - newCoffee.quantity,
              }
            : item
        )

        return { ...state, cartItems: updatedCart }
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...newCoffee }],
      }
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      }
    }

    case 'UPDATE_QUANTITY': {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      )

      if (!itemInCart) {
        return state
      }

      const updatedCart = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )

      return {
        ...state,
        cartItems: updatedCart,
      }
    }

    default:
      return state
  }
}
