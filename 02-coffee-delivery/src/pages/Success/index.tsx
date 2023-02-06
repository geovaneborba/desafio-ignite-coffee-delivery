import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ItemIcon,
  OrderContainer,
  OrderItem,
  OrderWrapper,
  SuccessContainer,
} from './styles'
import deliveryMan from '../../assets/deliveryman.svg'
import { useLocation } from 'react-router-dom'
import { checkoutFormData } from '../Checkout'

export function Success() {
  const { state } = useLocation()

  const {
    city,
    district,
    streetNumber,
    paymentMethod,
    street,
    state: uf,
  } = state.data as checkoutFormData

  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <OrderWrapper>
        <OrderContainer>
          <OrderItem>
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
          </OrderItem>

          <OrderItem>
            <ItemIcon variant="time">
              <Timer weight="fill" />
            </ItemIcon>
            <p>
              Previsão de entrega <br /> <strong>20 min - 30 min</strong>
            </p>
          </OrderItem>

          <OrderItem>
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
          </OrderItem>
        </OrderContainer>

        <img
          src={deliveryMan}
          alt="Ilustração de um entregador andando com sua moto"
        />
      </OrderWrapper>
    </SuccessContainer>
  )
}
