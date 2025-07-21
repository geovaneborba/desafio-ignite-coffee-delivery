import styled, { css } from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 0 10rem;
  margin-bottom: 10rem;

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

  @media (max-width: 960px) {
    padding: 0 2rem;

    h2 {
      margin-top: 1rem;
    }
  }
`
export const Wrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
    column-gap: 6.375rem;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const DeliveryContainer = styled.div`
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
export const DeliveryItem = styled.div`
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
type ItemIconProps = {
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

export const OrderContainer = styled.div`
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  width: 32.875rem;

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

export const DeliveryImage = styled.img`
  margin-top: 2rem;

  @media (min-width: 769px) {
    margin-top: 0;
  }
`
