import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;
  width: 4.5rem;
  height: 2.375rem;

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

export const Button = styled.button`
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
