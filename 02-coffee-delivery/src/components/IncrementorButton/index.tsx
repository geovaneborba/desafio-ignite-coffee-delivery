import { Minus, Plus } from 'phosphor-react'
import { useCart } from '../../context/CartContext'
import {
  DecrementButton,
  IncrementButton,
  IncrementorContainer,
} from './styles'

interface IncrementorButtonProps {
  quantity?: number
  coffeeId?: string
}

export function IncrementorButton(props: IncrementorButtonProps) {
  const { increaseCoffeeQuantity, decreaseCoffeeQuantity } = useCart()

  return (
    <IncrementorContainer>
      <DecrementButton
        onClick={() => {
          decreaseCoffeeQuantity(props.coffeeId ? props.coffeeId : '')
        }}
      >
        <Minus weight="fill" />
      </DecrementButton>
      <span>{props.quantity ? props.quantity : 0}</span>
      <IncrementButton
        onClick={() => {
          increaseCoffeeQuantity(props.coffeeId ? props.coffeeId : '')
        }}
      >
        <Plus weight="fill" />
      </IncrementButton>
    </IncrementorContainer>
  )
}
