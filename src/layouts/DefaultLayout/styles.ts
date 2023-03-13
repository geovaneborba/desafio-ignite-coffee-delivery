import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;

  @media (max-width: 320px) {
    width: 100%;
    margin: 0;
    max-width: unset;
  }

  @media ((min-width: 321px) and (max-width: 600px)) {
    width: 100%;
    margin: 0;
    max-width: unset;
  }
`
