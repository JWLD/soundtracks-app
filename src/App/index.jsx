import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Switch } from 'react-router-dom'

import ROUTES from 'constants/routes'
import { Albums, Artists } from 'scenes'

import { FilterBar, SideBar } from './components'
import * as SC from './style'

const App = () => (
  <SC.PageWrap>
    <SC.FilterContentWrap>
      <FilterBar />

      <SC.MainContent>
        <Switch>
          <Route component={Artists} exact path={ROUTES.LANDING} />
          <Route component={Albums} path={`${ROUTES.ARTIST}/:artistId`} />
        </Switch>
      </SC.MainContent>
    </SC.FilterContentWrap>

    <SideBar />
  </SC.PageWrap>
)

export default hot(App)
