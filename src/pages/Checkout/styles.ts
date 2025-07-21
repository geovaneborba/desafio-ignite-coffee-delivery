import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 0 10rem;

  margin-bottom: 10rem;

  @media (max-width: 960px) {
    padding: 0 2rem;
  }
`

export const FormContainer = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.125rem;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;

    @media (max-width: 320px) {
      display: flex;
      flex-direction: column;
    }
    @media ((min-width: 321px) and (max-width: 600px)) {
      display: flex;
      flex-direction: column;
    }
    @media ((min-width: 601px) and (max-width: 960px)) {
      display: flex;
      flex-direction: column;
    }
  }
`
