import styled from 'styled-components'

export const Container = styled.div``

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
