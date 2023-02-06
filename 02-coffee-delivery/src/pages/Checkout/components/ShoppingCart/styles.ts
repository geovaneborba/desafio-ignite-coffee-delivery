import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 28rem;

  > h3 {
    margin-top: -2.5rem;
    margin-bottom: 1rem;
  }
`
export const CartList = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
`
export const CartItem = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 24px;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  img {
    width: 4rem;
    margin-right: 1.25rem;
  }

  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
export const CartItemDescription = styled.div`
  margin-right: 3.125rem;
  width: 10.6875rem;

  h3 {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
`
export const CartItemActions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  /* Incrementor Button */
  > div {
    border-radius: 6px;
    width: 4.5rem;
    height: 2rem;
  }
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
export const CartCheckout = styled.div`
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;

  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 44px;

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
`
