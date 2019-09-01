import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import client from './services/apollo'
import GlobalStyle from './style/global'

ReactDOM.render(
  <>
    <GlobalStyle />

    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
)
