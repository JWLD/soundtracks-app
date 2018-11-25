import React from 'react'
import { Route, Switch } from 'react-router-dom'

import * as ROUTES from 'constants/routes'

import { AlbumList, ComposerList } from './components'
import * as SC from './styled'

const TileGrid = () => (
  <SC.TileGridWrap>
    <Switch>
      <Route component={ComposerList} exact path={ROUTES.LANDING} />
      <Route component={AlbumList} path={`${ROUTES.COMPOSER}/:composerId`} />
    </Switch>
  </SC.TileGridWrap>
)

export default TileGrid
