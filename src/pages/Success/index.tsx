import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { CheckoutFormData } from '../Checkout'
import { CartItem, useCart } from '../../context/CartContext'
import { clearCartFromLocalStorage } from '../../storage/cart'

import {
  Container,
  DeliveryContainer,
  DeliveryImage,
  DeliveryItem,
  ItemIcon,
  OrderContainer,
  SuccessContainer,
  Wrapper,
} from './styles'

import { OrderItem } from './components/OrderItem'
import { OrderPrice } from './components/OrderPrice'

import deliveryMan from '../../assets/deliveryman.svg'

type SuccessParams = CheckoutFormData & {
  cartItems: CartItem[]
  cartItemsPrice: {
    totalItems: number
    total: number
    delivery: number
    totalItemsInCart: number
  }
}

export function Success() {
  const { state } = useLocation()
  const { clearCart } = useCart()
  const navigate = useNavigate()

  if (!state) {
    return navigate('/')
  }

  const {
    city,
    district,
    streetNumber,
    paymentMethod,
    street,
    state: uf,
    cartItems,
    cartItemsPrice,
  } = state.params as SuccessParams

  useEffect(() => {
    clearCartFromLocalStorage()
    clearCart()
  }, [])

  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <Wrapper>
        <Container>
          <DeliveryContainer>
            <DeliveryItem>
              <ItemIcon variant="local">
                <MapPin weight="fill" />
              </ItemIcon>
              <p>
                Entrega em{' '}
                <strong>
                  {street}, {streetNumber}
                </strong>
                <br /> {district} - {city}, {uf}
              </p>
            </DeliveryItem>

            <DeliveryItem>
              <ItemIcon variant="time">
                <Timer weight="fill" />
              </ItemIcon>
              <p>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </p>
            </DeliveryItem>

            <DeliveryItem>
              <ItemIcon variant="payment">
                <CurrencyDollar />
              </ItemIcon>
              <p>
                Pagamento na entrega <br />{' '}
                <strong>
                  {paymentMethod === 'credit' && 'Cartão de Crédito'}
                  {paymentMethod === 'debit' && 'Cartão de Débito'}
                  {paymentMethod === 'money' && 'Dinheiro'}
                </strong>
              </p>
            </DeliveryItem>
          </DeliveryContainer>

          <OrderContainer>
            <h3>Itens do pedido</h3>

            {cartItems.map((item) => (
              <OrderItem key={item.id} data={item} />
            ))}

            <OrderPrice data={cartItemsPrice} />
          </OrderContainer>
        </Container>

        <DeliveryImage
          src={deliveryMan}
          alt="Ilustração de um entregador andando com sua moto"
        />
      </Wrapper>
    </SuccessContainer>
  )
}
