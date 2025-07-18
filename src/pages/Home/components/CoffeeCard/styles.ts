import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  padding: 1.25rem;

  img {
    width: 7.5rem;
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
  @media ((min-width: 601px) and (max-width: 960px)) {
    width: calc(50% - 1rem);
  }
`

export const BuyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: 'Reboto', sans-serif;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  font-weight: 400;
  line-height: 1.3;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
    font-weight: 800;
    line-height: 1.3;
  }
`

export const CoffeeCardActions = styled.div`
  display: flex;
  column-gap: 0.5rem;
`

export const AddToCartButton = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 2.375rem;
  width: 2.375rem;

  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme['white']};
  }

  background: ${(props) => props.theme['purple-dark']};

  &:hover {
    background: ${(props) => props.theme['purple']};
  }
`
