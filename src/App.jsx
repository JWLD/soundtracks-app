import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import * as ROUTES from 'constants/routes'
import { Landing } from 'scenes'
import GlobalStyle from 'style/global'

const App = () => (
  <Fragment>
    <GlobalStyle />

    <Switch>
      <Route exact path={ROUTES.LANDING} component={Landing} />
    </Switch>
  </Fragment>
)

export default hot(module)(App)
