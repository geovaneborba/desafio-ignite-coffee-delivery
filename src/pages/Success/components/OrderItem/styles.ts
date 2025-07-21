import styled from 'styled-components'

export const OrderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
`

export const OrderItemImage = styled.img`
  margin: unset !important;
  border-radius: 100%;
  height: 32px;
  width: 32px;
  object-fit: cover;
`

export const OrderItemTitle = styled.h4`
  font-size: 0.875rem;
  margin-left: 0.75rem;

  // Truncate text
  max-width: 100px;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: unset !important;

  @media (min-width: 600px) {
    max-width: 100%;
  }
`

export const OrderItemQuantity = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  margin-left: auto;
`

export const OrderPrice = styled.div``

export const OrderPriceSubtotal = styled.h4`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  display: flex;
  align-items: center;

  span {
    margin-left: auto;
  }
`
export const OrderPriceDelivery = styled.h4`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  display: flex;
  align-items: center;

  span {
    margin-left: auto;
  }
`
export const OrderPriceTotal = styled.h2`
  font-size: 1.25rem !important;
  display: flex;
  align-items: center;
  font-weight: 700 !important;
  color: ${(props) => props.theme['base-subtitle']} !important;

  span {
    margin-left: auto;
    font-size: 1.25rem;
    font-weight: 700 !important;
    font-family: 'Baloo 2', sans-serif !important;
    color: ${(props) => props.theme['base-subtitle']} !important;
  }
`
