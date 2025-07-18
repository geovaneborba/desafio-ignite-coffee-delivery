import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 1rem;
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    line-height: 1.3;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 16px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 1rem;
  }
`
