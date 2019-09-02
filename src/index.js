import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import client from './services/apollo'
import GlobalStyle from './style/global'

const app = (
  <>
    <GlobalStyle />

    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </>
)

render(app, document.getElementById('root'))
