import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'

import { cartReducer, Product } from '../reducers/cartItems/reducer'
import {
  saveCartToLocalStorage,
  loadCartFromLocalStorage,
} from '../storage/cart'

export type CartItem = Product & {
  quantity: number
}

type CartContextData = {
  cartItems: CartItem[]
  cartItemsPrice: {
    totalItems: number
    total: number
    delivery: number
    totalItemsInCart: number
  }
  addItemInCart: (data: CartItem) => void
  removeCoffee: (coffeeId: string) => void
  updateCoffeeQuantity: (coffeeId: string, quantity: number) => void
  clearCart: () => void
  getQuantityOfCoffeeInCart: (coffeeId: string) => number
}

const CartContext = createContext({} as CartContextData)

type CartContextProps = {
  children: ReactNode
}

const initialValues = {
  cartItems: [] as CartItem[],
}

export function CartProvider({ children }: CartContextProps) {
  const [cartState, dispatch] = useReducer(cartReducer, initialValues, () => {
    const storedState = loadCartFromLocalStorage()
    return storedState || initialValues
  })

  const { cartItems } = cartState

  function addItemInCart(data: CartItem) {
    const newCoffeeItem = data

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product: newCoffeeItem,
      },
    })
  }

  function removeCoffee(coffeeId: string) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        id: coffeeId,
      },
    })
  }

  function updateCoffeeQuantity(coffeeId: string, quantity: number) {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: coffeeId,
        quantity,
      },
    })
  }

  function getQuantityOfCoffeeInCart(coffeeId: string) {
    const quantity = useMemo(() => {
      return cartItems.find((item) => item.id === coffeeId)?.quantity || 0
    }, [cartItems, coffeeId])

    return quantity
  }

  function clearCart() {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  const cartItemsPrice = cartItems.reduce(
    (accumulator, currentValue) => {
      accumulator.totalItems += currentValue.price * currentValue.quantity
      accumulator.totalItemsInCart += currentValue.quantity

      accumulator.total =
        accumulator.totalItems > 0
          ? accumulator.totalItems + accumulator.delivery
          : 0

      return accumulator
    },
    {
      totalItems: 0,
      total: 0,
      delivery: 8.6,
      totalItemsInCart: 0,
    }
  )

  useEffect(() => {
    saveCartToLocalStorage(cartState)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsPrice,
        addItemInCart,
        removeCoffee,
        updateCoffeeQuantity,
        getQuantityOfCoffeeInCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider')
  }

  return context
}
