import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 28rem;

  @media (max-width: 320px) {
    width: 100%;
    margin-top: 2rem;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    width: 100%;
    margin-top: 2rem;
  }
  @media ((min-width: 601px) and (max-width: 960px)) {
    width: 100%;
    margin-top: 2rem;
  }
`
export const CartList = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 44px;

  @media (max-width: 320px) {
    padding: 1rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    padding: 1rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;
  }
  @media ((min-width: 601px) and (max-width: 960px)) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export const CartEmpty = styled.div`
  @media (max-width: 320px) {
    padding: 1rem 0;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    padding: 1rem 0;
  }
  p {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-text']};
    font-size: 1.25rem;
  }
`
export const CartItem = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  img {
    width: 4rem;
    margin-right: 1.25rem;
  }

  @media (max-width: 320px) {
    flex-wrap: wrap;
    align-items: flex-start;
    column-gap: 0.25rem;
    row-gap: 1rem;
    padding: 1rem 0;

    img {
      width: 3rem !important;
      margin: 0 !important;
    }

    h3 {
      font-size: 1rem;
    }
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    flex-wrap: wrap;
    align-items: flex-start;
    column-gap: 1rem;
    row-gap: 1rem;
    padding: 1rem 0;

    img {
      width: 3rem !important;
      margin: 0 !important;
    }

    h3 {
      font-size: 1rem;
    }
  }
  @media ((min-width: 601px) and (max-width: 960px)) {
    flex-wrap: wrap;
    align-items: flex-start;
    column-gap: 1rem;
    row-gap: 1rem;

    img {
      margin: 0;
    }
  }
`
export const CartItemDescription = styled.div`
  margin-right: 3.125rem;
  width: 10.6875rem;

  @media (max-width: 320px) {
    margin: 0;
  }
  @media ((min-width: 601px) and (max-width: 960px)) {
    margin: 0;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
`

export const SelectQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;
  width: 4.5rem;
  height: 2rem;

  justify-content: center;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    width: 1.25rem;
    height: 1.25rem;
    text-align: center;
  }
`

const BaseIncrementButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  svg {
    color: ${(props) => props.theme['purple']};
    font-size: 0.875rem;
  }

  &:hover {
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
export const DecrementButton = styled(BaseIncrementButton)``
export const IncrementButton = styled(BaseIncrementButton)``

export const CartItemActions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const CartRemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.3;
  border: 0;
  text-transform: uppercase;
  cursor: pointer;
  width: 5.6875rem;

  svg {
    color: ${(props) => props.theme['purple']};
  }
`
export const CartItemPrice = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};

  @media (max-width: 320px) {
    margin-left: 0.5rem;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    margin-left: 0.5rem;
  }
`

export const CartCheckout = styled.div`
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;

  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 44px;

  @media (max-width: 320px) {
    padding: 0 1rem;
    border-radius: 0;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    padding: 0 1rem;
    border-radius: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`
export const CartCheckoutTotalItems = styled.div`
  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
export const CartCheckoutDelivery = styled.div`
  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
export const CartCheckoutTotal = styled.div`
  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CartConfirmationButton = styled.button`
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow']};

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.3;
  border: 0;
  text-transform: uppercase;
  cursor: pointer;

  color: ${(props) => props.theme['white']};

  :disabled {
    cursor: not-allowed;
  }
`
