import styled from 'styled-components'

export const IncrementorContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  justify-content: center;
`

const BaseIncrementButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    font-family: 'Roboto', sans;
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

export const DecrementButton = styled(BaseIncrementButton)`
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    font-family: 'Roboto', sans;
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

export const IncrementButton = styled(BaseIncrementButton)`
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    font-family: 'Roboto', sans;
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
