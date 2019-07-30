import { createGlobalStyle, css } from 'styled-components'

import * as vars from './variables'

const globalStyle = css`
  * {
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
    font-family: 'Asap Condensed', sans-serif;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  a {
    :hover {
      cursor: pointer;
    }
  }

  body {
    background-color: ${vars.color2};
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

export default createGlobalStyle`${globalStyle}`
