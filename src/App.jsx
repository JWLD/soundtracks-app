import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import { Composers } from 'scenes'
import GlobalStyle from 'style/global'

const App = () => (
  <Fragment>
    <GlobalStyle />

    <Switch>
      <Route exact path="/" component={Composers} />
    </Switch>
  </Fragment>
)

export default hot(module)(App)
