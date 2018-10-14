import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import { Artists } from 'scenes'
import GlobalStyle from 'style/global'

const App = () => (
  <Fragment>
    <GlobalStyle />

    <Switch>
      <Route exact path="/" component={Artists} />
    </Switch>
  </Fragment>
)

export default hot(module)(App)
