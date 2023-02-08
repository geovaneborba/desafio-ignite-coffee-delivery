import styled, { css } from 'styled-components'
import headerBackground from '../../../../assets/background.svg'

export const HeaderContainer = styled.header`
  padding: 5.875rem 10rem 6.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.5rem;
  background-image: url(${headerBackground});

  /* @media (max-width: 320px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100% !important;
  } */
  @media (max-width: 600px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100% !important;
  }
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 320px) {
    order: 2;
    width: 100%;

    h1 {
      font-size: 1.25rem !important;
      width: unset !important;
    }
    p {
      font-size: 1rem !important;
    }
  }

  @media ((min-width: 321px) and (max-width: 600px)) {
    order: 2;
    width: 100%;

    h1 {
      font-size: 1.75rem !important;
      width: unset !important;
    }
    p {
      font-size: 1rem !important;
    }
  }

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
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  width: 36.6875rem;

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 3rem;
  }
`
export const Item = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;
  min-width: 14.4375rem;
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  @media (max-width: 320px) {
  }
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

export const CoffeeCupImage = styled.img`
  @media (max-width: 320px) {
    width: 12rem;
    align-self: center;
    margin-bottom: 1rem;
  }

  @media ((min-width: 321px) and (max-width: 600px)) {
    order: 1;
    width: 20rem;
    align-self: center;
    margin-bottom: 1rem;
  }
`
