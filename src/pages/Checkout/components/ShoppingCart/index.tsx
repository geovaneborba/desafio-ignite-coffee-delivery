import { Minus, Plus, Trash } from 'phosphor-react'
import { toast } from 'react-toastify'
import { useCart } from '../../../../context/CartContext'
import { priceFormatterCheckout } from '../../../../utils/formatter'
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
  CartItemPrice,
  Button,
} from './styles'

export function ShoppingCart() {
  const {
    cartItems,
    cartItemsPrice: { totalItems, delivery, total },
    removeCoffee,
    updateCoffeeQuantity,
  } = useCart()

  return (
    <CartContainer>
      <h3>Cafés selecionados</h3>

      <CartList>
        {cartItems.length === 0 && (
          <CartEmpty>
            <p>Ainda não há itens no seu carrinho :(</p>
          </CartEmpty>
        )}

        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <img src={item.image.url} alt={item.image.alt || item.title} />

            <CartItemDescription>
              <h3>{item.title}</h3>
              <CartItemActions>
                <SelectQuantityContainer>
                  <Button
                    type="button"
                    onClick={() => {
                      if (item.quantity <= 1) {
                        return
                      }
                      updateCoffeeQuantity(item.id, item.quantity - 1)
                    }}
                  >
                    <Minus weight="fill" />
                  </Button>

                  <span>{item.quantity ?? 0}</span>

                  <Button
                    type="button"
                    onClick={() => {
                      updateCoffeeQuantity(item.id, item.quantity + 1)
                    }}
                  >
                    <Plus weight="fill" />
                  </Button>
                </SelectQuantityContainer>

                <CartRemoveItemButton
                  type="button"
                  onClick={() => {
                    removeCoffee(item.id)

                    toast.error(`${item.title} removido do carrinho!`, {
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

            <CartItemPrice>{priceFormatterCheckout(item.price)}</CartItemPrice>
          </CartItem>
        ))}
      </CartList>

      <CartCheckout>
        <CartCheckoutTotalItems>
          <h3>Total de itens</h3>
          <span>{priceFormatterCheckout(totalItems)}</span>
        </CartCheckoutTotalItems>
        <CartCheckoutDelivery>
          <h3>Entrega</h3>
          <span>{priceFormatterCheckout(delivery)}</span>
        </CartCheckoutDelivery>
        <CartCheckoutTotal>
          <h3>Total</h3>
          <span>
            {cartItems.length === 0 ? 'R$ 0,00' : priceFormatterCheckout(total)}
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
