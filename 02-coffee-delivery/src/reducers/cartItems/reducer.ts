import { ActionTypes } from './actions'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  imgUrl: string
  type: []
  quantity: number
}

interface CartState {
  items: Product[]
}

interface Action {
  type: string
  payload?: any
}

export function cartReducer(state: CartState, action: Action) {
  function addItem() {
    let itemExists = false

    const updatedItems = state.items.map((item) => {
      if (item.id === action.payload.newCoffeeItem.id) {
        itemExists = true
        return {
          ...item,
          quantity: item.quantity + action.payload.newCoffeeItem.quantity,
        }
      } else {
        return item
      }
    })

    if (itemExists) {
      return updatedItems
    } else {
      return [...state.items, { ...action.payload.newCoffeeItem }]
    }
  }

  function increaseCoffeeQuantity() {
    const updatedItems = state.items.map((item) => {
      if (item.id === action.payload.coffeeId) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })

    return updatedItems
  }

  function decreaseCoffeeQuantity() {
    const updatedItems = state.items.map((item) => {
      if (item.id === action.payload.coffeeId) {
        return {
          ...item,
          quantity: item.quantity > 0 && item.quantity - 1,
        }
      } else {
        return item
      }
    })

    return updatedItems
  }

  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItem(),
      }
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.id !== action.payload.coffeeId),
        ],
      }
    case ActionTypes.INCREASE_COFFEE_QUANTITY:
      return {
        ...state,
        items: increaseCoffeeQuantity(),
      }
    case ActionTypes.DECREASE_COFFEE_QUANTITY:
      return {
        ...state,
        items: decreaseCoffeeQuantity(),
      }
    default:
      return state
  }
}
