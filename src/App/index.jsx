import React from 'react'
import { hot } from 'react-hot-loader'

import { FilterBar, SideBar, TileGrid } from './components'
import * as SC from './style'

const App = () => (
  <SC.PageWrap>
    <SC.MainContentWrap>
      <FilterBar />
      <TileGrid />
    </SC.MainContentWrap>

    <SideBar />
  </SC.PageWrap>
)

export default hot(module)(App)
