import styled, { css } from 'styled-components'

export const FormDeliveryAddressContainer = styled.div`
  width: 40rem;

  @media (max-width: 320px) {
    width: 100%;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    width: 100%;
  }
  @media ((min-width: 601px) and (max-width: 960px)) {
    width: 100%;
  }
`

export const FormDeliveryAddressBackground = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  @media (max-width: 320px) {
    padding: 2rem 1rem;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    padding: 2rem 1rem;
  }
`

export const FormHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  div {
    h4 {
      color: ${(props) => props.theme['base-subtitle']};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
    h6 {
      color: ${(props) => props.theme['base-text']};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`

export const FormInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1rem;

  input {
    border-radius: 4px;
    padding: 0.75rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme['base-text']};
    }

    &#street {
      width: 100%;
    }
    &#number {
      width: 12.5rem;
    }

    &#district {
      width: 12.5rem;
    }
    &#city {
      width: 17.375rem;
    }
    &#state {
      width: 3.75rem;
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    @media (max-width: 320px) {
      width: 100% !important;

      &#state {
        width: 3.75rem !important;
      }
    }
    @media ((min-width: 321px) and (max-width: 600px)) {
      width: 100% !important;

      &#state {
        width: 3.75rem !important;
      }
    }
  }
`

export const FormInputGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 21.75rem;

  input {
    width: 100%;
  }

  label {
    position: absolute;
    right: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
  }
`

export const FormPayment = styled.div`
  margin-top: 0.75rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  @media (max-width: 320px) {
    padding: 2rem 1rem;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    padding: 2rem 1rem;
  }
`

export const FormPaymentHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme['purple']};
  }

  div {
    h4 {
      color: ${(props) => props.theme['base-subtitle']};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
    h6 {
      color: ${(props) => props.theme['base-text']};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`

export const FormInputPaymentGroup = styled.div`
  [type='radio']:checked + label {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
    color: ${(props) => props.theme['base-text']};
  }
`

export const LabelPayment = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.3;
  border: 1px solid transparent;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: 11.1706rem;
  height: 3.1875rem;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme.purple};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['purple']};
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 320px) {
    width: 100%;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    width: 100%;
  }
`

export const FormPayments = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
  @media ((min-width: 321px) and (max-width: 600px)) {
    display: flex;
    flex-direction: column;
  }
`
