import { Trash } from 'phosphor-react'
import { IncrementorButton } from '../../../../components/IncrementorButton'
import { useCart } from '../../../../context/CartContext'
import {
  CartContainer,
  CartList,
  CartItem,
  CartItemDescription,
  CartItemActions,
  CartRemoveItemButton,
  CartCheckout,
  CartCheckoutTotalItems,
  CartCheckoutDelivery,
  CartCheckoutTotal,
  CartConfirmationButton,
} from './styles'

export function ShoppingCart() {
  const { items, removeCoffee } = useCart()

  const totalItemsPrice = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity
  }, 0)

  return (
    <CartContainer>
      <h3>Cafés selecionados</h3>

      <CartList>
        {items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.imgUrl} alt="Expresso Tradicional" />

            <CartItemDescription>
              <h3>{item.name}</h3>
              <CartItemActions>
                <IncrementorButton
                  quantity={item.quantity}
                  coffeeId={item.id}
                />

                <CartRemoveItemButton onClick={() => removeCoffee(item.id)}>
                  <Trash />
                  Remover
                </CartRemoveItemButton>
              </CartItemActions>
            </CartItemDescription>

            <span>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              }).format(item.price)}
            </span>
          </CartItem>
        ))}
        {items.length === 0 && <div>Ainda não há itens no seu carrinho :(</div>}
      </CartList>

      <CartCheckout>
        <CartCheckoutTotalItems>
          <h3>Total de itens</h3>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalItemsPrice)}
          </span>
        </CartCheckoutTotalItems>
        <CartCheckoutDelivery>
          <h3>Entrega</h3>
          <span>R$ 3,50</span>
        </CartCheckoutDelivery>
        <CartCheckoutTotal>
          <h3>Total</h3>
          <span>
            {items.length === 0
              ? 'R$ 0,00'
              : new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(totalItemsPrice === 0 ? 0 : totalItemsPrice + 3.5)}
          </span>
        </CartCheckoutTotal>
        <CartConfirmationButton type="submit" disabled={items.length === 0}>
          Confirmar pedido
        </CartConfirmationButton>
      </CartCheckout>
    </CartContainer>
  )
}
