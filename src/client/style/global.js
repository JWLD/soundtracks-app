import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #21252B;
  }

  html {
    font-size: 62.5%;
  }

  a:hover, button:hover {
    cursor: pointer;
  }
`

export default GlobalStyle
