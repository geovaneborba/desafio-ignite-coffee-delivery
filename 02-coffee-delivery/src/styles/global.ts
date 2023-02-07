import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    /** Jumping scrollbar fix */
    @media screen and (min-width: 960px) {
        margin-left: calc(100vw - 100%);
        margin-right: 0;
    }
  }

  h1 , h2 , h3 , h4 , h5 , h6 {
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
  }

  p {
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }
`
