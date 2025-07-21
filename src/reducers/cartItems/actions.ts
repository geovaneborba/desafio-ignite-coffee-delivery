import { CartItem } from '../../context/CartContext'

export type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: CartItem } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
