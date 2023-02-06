import { createContext, ReactNode, useContext, useReducer } from 'react'
import {
  addNewCoffeeItemAction,
  decreaseCoffeeQuantityAction,
  increaseCoffeeQuantityAction,
  removeCoffeeAction,
} from '../reducers/cartItems/actions'
import { cartReducer, Product } from '../reducers/cartItems/reducer'

interface CartContextData {
  items: Product[]
  addItem: (data: Product) => void
  removeCoffee: (coffeeId: string) => void
  increaseCoffeeQuantity: (coffeeId: string) => void
  decreaseCoffeeQuantity: (coffeeId: string) => void
}

const CartContext = createContext({} as CartContextData)

interface CartContextProps {
  children: ReactNode
}

const inicialValues = {
  items: [],
}

export function CartProvider({ children }: CartContextProps) {
  const [cartState, dispatch] = useReducer(cartReducer, inicialValues)
  const { items } = cartState

  function addItem(data: Product) {
    const newCoffeeItem = data

    dispatch(addNewCoffeeItemAction(newCoffeeItem))
  }

  function increaseCoffeeQuantity(coffeeId: string) {
    dispatch(increaseCoffeeQuantityAction(coffeeId))
  }
  function decreaseCoffeeQuantity(coffeeId: string) {
    dispatch(decreaseCoffeeQuantityAction(coffeeId))
  }

  function removeCoffee(coffeeId: string) {
    dispatch(removeCoffeeAction(coffeeId))
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeCoffee,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        items,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
