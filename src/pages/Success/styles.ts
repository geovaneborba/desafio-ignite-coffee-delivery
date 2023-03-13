import styled, { css } from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 0 10rem;

  h2 {
    margin-top: 3.75rem;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 320px) {
    padding: 0 2rem;

    h2 {
      margin-top: 1rem;
    }
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    padding: 0 2rem;

    h2 {
      margin-top: 1rem;
    }
  }
  @media ((min-width: 601px) and (max-width: 960px)) {
    padding: 0 2rem;
  }
`
export const OrderWrapper = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6.375rem;
  position: relative;

  img {
    position: absolute;
    right: 0;
    bottom: -0.9375rem;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;

    img {
      position: unset;
      margin-top: 2rem;
    }
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;

    img {
      position: unset;
      margin-top: 2rem;
    }
  }

  @media ((min-width: 601px) and (max-width: 960px)) {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
  }

  img {
    position: unset;
    margin-top: 2rem;
  }
`
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2.5rem;

  width: 32.875rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme['yellow-dark']},
        ${(props) => props.theme['purple']}
      )
      border-box;
  border: 1px solid transparent;

  @media (max-width: 320px) {
    padding: 1rem;
    width: 100%;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    padding: 1rem;
    width: 100%;
  }
  @media ((min-width: 601px) and (max-width: 960px)) {
    width: 100%;
  }
`
export const OrderItem = styled.div`
  display: flex;
  column-gap: 0.75rem;
  align-items: center;

  @media (max-width: 320px) {
    width: 100%;
  }
  @media ((min-width: 321px) and (max-width:600px)) {
    width: 100%;
  }
`

const BaseItemIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 100%;
  color: ${(props) => props.theme['white']};
  width: 2rem;
  height: 2rem;

  svg {
    font-size: 1rem;
  }
`
interface ItemIconProps {
  variant?: 'local' | 'time' | 'payment'
}
export const ItemIcon = styled(BaseItemIcon)<ItemIconProps>`
  ${(props) =>
    props.variant === 'local' &&
    css`
      background: ${(props) => props.theme['purple']};
    `}

  ${(props) =>
    props.variant === 'time' &&
    css`
      background: ${(props) => props.theme['yellow']};
    `}

    ${(props) =>
    props.variant === 'payment' &&
    css`
      background: ${(props) => props.theme['yellow-dark']};
    `}
`
