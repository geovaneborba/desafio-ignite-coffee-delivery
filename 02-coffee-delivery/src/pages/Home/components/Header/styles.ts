import styled, { css } from 'styled-components'
import headerBackground from '../../../../assets/background.svg'

export const HeaderContainer = styled.header`
  padding: 5.875rem 10rem 6.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.5rem;
  background-image: url(${headerBackground});
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
    width: 36.75rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4.125rem;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  width: 36.6875rem;
`
export const Item = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;
  min-width: 14.4375rem;
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  color: ${(props) => props.theme['base-text']};
`

const BaseItemIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme['white']};
  height: 1.3;
  font-weight: 400;
`

interface ItemIconProps {
  variant?: 'cart' | 'time' | 'packing' | 'coffee'
}

export const ItemIcon = styled(BaseItemIcon)<ItemIconProps>`
  ${(props) =>
    props.variant === 'cart' &&
    css`
      background: ${(props) => props.theme['yellow-dark']};
    `}

  ${(props) =>
    props.variant === 'time' &&
    css`
      background: ${(props) => props.theme['yellow']};
    `}

    ${(props) =>
    props.variant === 'packing' &&
    css`
      background: ${(props) => props.theme['base-text']};
    `}

    ${(props) =>
    props.variant === 'coffee' &&
    css`
      background: ${(props) => props.theme['purple']};
    `}
`

export const CoffeeCupImage = styled.img``
