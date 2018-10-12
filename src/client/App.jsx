import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import { ArtistsScene } from 'scenes'

const App = () => (
  <Switch>
    <Route exact path="/" component={ArtistsScene} />
  </Switch>
)

export default hot(module)(App)
