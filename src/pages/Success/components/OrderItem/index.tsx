import { CartItem } from '../../../../context/CartContext'
import { priceFormatterCheckout } from '../../../../utils/formatter'
import * as S from './styles'

type OrderItemProps = {
  data: CartItem
}

export function OrderItem({ data }: OrderItemProps) {
  return (
    <S.OrderItem>
      <S.OrderItemImage
        src={data.image.url}
        alt={data.image.alt ?? data.title}
      />

      <S.OrderItemTitle title={data.title}>{data.title}</S.OrderItemTitle>

      <S.OrderItemQuantity>
        {data.quantity}x {priceFormatterCheckout(data.price)}
      </S.OrderItemQuantity>
    </S.OrderItem>
  )
}
