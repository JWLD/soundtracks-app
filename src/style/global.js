import { createGlobalStyle } from 'styled-components'

import * as vars from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
    font-family: 'Asap Condensed', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    :hover {
      cursor: pointer;
    }
  }

  body {
    background-color: ${vars.colour2};
  }

  button {
    background-color: transparent;

    :focus {
      outline: none;
    }

    :hover {
      cursor: pointer;
    }
  }

  html {
    font-size: 62.5%;
  }
`

export default GlobalStyle
