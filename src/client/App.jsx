import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import LandingPage from './components/main/LandingPage'
import DataEntryPage from './components/data/DataEntryPage'

const App = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/add" component={DataEntryPage} />
  </Switch>
)

export default hot(module)(App)
