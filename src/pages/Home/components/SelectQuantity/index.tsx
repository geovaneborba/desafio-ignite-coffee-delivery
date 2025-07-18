import { Plus, Minus } from 'phosphor-react'
import { Button, Container } from './styles'
import { Product } from '../../../../reducers/cartItems/reducer'

type SelectQuantityProps = {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}

export function SelectQuantity({
  quantity,
  onIncrement,
  onDecrement,
}: SelectQuantityProps) {
  return (
    <Container>
      <Button disabled={quantity <= 0} onClick={() => onDecrement()}>
        <Minus weight="fill" />
      </Button>

      <span>{quantity}</span>

      <Button onClick={() => onIncrement()}>
        <Plus weight="fill" />
      </Button>
    </Container>
  )
}
