import { Product } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_COFFEE_QUANTITY = 'INCREASE_COFFEE_QUANTITY',
  DECREASE_COFFEE_QUANTITY = 'DECREASE_COFFEE_QUANTITY',
}

export function addNewCoffeeItemAction(newCoffeeItem: Product) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      newCoffeeItem,
    },
  }
}

export function removeCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      coffeeId,
    },
  }
}

export function increaseCoffeeQuantityAction(coffeeId: string) {
  return {
    type: ActionTypes.INCREASE_COFFEE_QUANTITY,
    payload: {
      coffeeId,
    },
  }
}

export function decreaseCoffeeQuantityAction(coffeeId: string) {
  return {
    type: ActionTypes.DECREASE_COFFEE_QUANTITY,
    payload: {
      coffeeId,
    },
  }
}
