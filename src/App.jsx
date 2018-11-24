import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import * as ROUTES from 'constants/routes'
import { Composer, Landing } from 'scenes'
import GlobalStyle from 'style/global'

const App = () => (
  <Fragment>
    <GlobalStyle />

    <Switch>
      <Route component={Landing} exact path={ROUTES.LANDING} />
      <Route component={Composer} path={`${ROUTES.COMPOSER}/:composerId`} />
    </Switch>
  </Fragment>
)

export default hot(module)(App)
