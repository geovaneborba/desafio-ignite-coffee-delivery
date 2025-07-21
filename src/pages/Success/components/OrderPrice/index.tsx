import { priceFormatterCheckout } from '../../../../utils/formatter'

import {
  Container,
  OrderPriceDelivery,
  OrderPriceSubtotal,
  OrderPriceTotal,
} from './styles'

type OrderPriceProps = {
  data: {
    totalItems: number
    total: number
    delivery: number
    totalItemsInCart: number
  }
}

export function OrderPrice({
  data: { totalItems, delivery, total },
}: OrderPriceProps) {
  return (
    <Container>
      <OrderPriceSubtotal>
        Subtotal <span>{priceFormatterCheckout(totalItems)}</span>
      </OrderPriceSubtotal>
      <OrderPriceDelivery>
        Taxa de entrega <span>{priceFormatterCheckout(delivery)}</span>
      </OrderPriceDelivery>
      <OrderPriceTotal>
        Total <span>{priceFormatterCheckout(total)}</span>
      </OrderPriceTotal>
    </Container>
  )
}
