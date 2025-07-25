import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }



  h1 , h2 , h3 , h4 , h5 , h6 {
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
  }

  p, span {
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }
`
