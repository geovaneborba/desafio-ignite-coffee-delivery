import styled from 'styled-components'

export const HomeContainer = styled.main``

export const CoffeesSection = styled.section`
  padding: 0 10rem;
  margin-bottom: 9.8125rem;

  h2 {
    margin-bottom: 3.375rem;
    font-weight: 800;
    font-size: 2rem;
  }

  @media (max-width: 960px) {
    padding: 2rem;

    h2 {
      font-size: 1.5rem;
    }

    margin-bottom: 2rem;
  }
`
export const CoffeeCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media ((min-width: 601px) and (max-width: 960px)) {
    column-gap: 1rem;
  }
`
