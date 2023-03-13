import { Minus, Plus, Trash } from 'phosphor-react'
import { toast } from 'react-toastify'
import { useCart } from '../../../../context/CartContext'
import { priceFormatter } from '../../../../utils/formatter'
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
  CartEmpty,
  SelectQuantityContainer,
  DecrementButton,
  IncrementButton,
  CartItemPrice,
} from './styles'

export function ShoppingCart() {
  const {
    items,
    removeCoffee,
    increaseCoffeeQuantity,
    decreaseCoffeeQuantity,
  } = useCart()

  const totalItemsPrice = items.reduce(
    (accumulator, currentValue) => {
      accumulator.totalItems += currentValue.price * currentValue.quantity

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
    }
  )

  return (
    <CartContainer>
      <h3>Cafés selecionados</h3>

      <CartList>
        {items.length === 0 && (
          <CartEmpty>
            <p>Ainda não há itens no seu carrinho :(</p>
          </CartEmpty>
        )}

        {items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.imgUrl} alt="Expresso Tradicional" />

            <CartItemDescription>
              <h3>{item.name}</h3>
              <CartItemActions>
                <SelectQuantityContainer>
                  <DecrementButton
                    type="button"
                    onClick={() => {
                      decreaseCoffeeQuantity(item.id)

                      if (item.quantity === 0) {
                        console.log(item.quantity)
                        removeCoffee(item.id)
                      }
                    }}
                  >
                    <Minus weight="fill" />
                  </DecrementButton>

                  <span>{item.quantity ? item.quantity : 0}</span>

                  <IncrementButton
                    type="button"
                    onClick={() => increaseCoffeeQuantity(item.id)}
                  >
                    <Plus weight="fill" />
                  </IncrementButton>
                </SelectQuantityContainer>

                <CartRemoveItemButton
                  type="button"
                  onClick={() => {
                    removeCoffee(item.id)

                    toast.error(`${item.name} removido do carrinho!`, {
                      position: 'top-right',
                      theme: 'light',
                      draggable: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                    })
                  }}
                >
                  <Trash />
                  Remover
                </CartRemoveItemButton>
              </CartItemActions>
            </CartItemDescription>

            <CartItemPrice>{priceFormatter.format(item.price)}</CartItemPrice>
          </CartItem>
        ))}
      </CartList>

      <CartCheckout>
        <CartCheckoutTotalItems>
          <h3>Total de itens</h3>
          <span>{priceFormatter.format(totalItemsPrice.totalItems)}</span>
        </CartCheckoutTotalItems>
        <CartCheckoutDelivery>
          <h3>Entrega</h3>
          <span>{priceFormatter.format(totalItemsPrice.delivery)}</span>
        </CartCheckoutDelivery>
        <CartCheckoutTotal>
          <h3>Total</h3>
          <span>
            {items.length === 0
              ? 'R$ 0,00'
              : priceFormatter.format(totalItemsPrice.total)}
          </span>
        </CartCheckoutTotal>
        {/* disabled={items.length === 0} */}
        <CartConfirmationButton type="submit">
          Confirmar pedido
        </CartConfirmationButton>
      </CartCheckout>
    </CartContainer>
  )
}
