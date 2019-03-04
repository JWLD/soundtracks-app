import React from 'react'
import { Route, Switch } from 'react-router-dom'

import * as ROUTES from 'constants/routes'

import { AlbumTiles, ComposerTiles } from './components'
import * as SC from './style'

const TileGrid = () => (
  <SC.GridWrap>
    <SC.TileGrid>
      <Switch>
        <Route component={ComposerTiles} exact path={ROUTES.LANDING} />
        <Route component={AlbumTiles} path={`${ROUTES.COMPOSER}/:composerId`} />
      </Switch>
    </SC.TileGrid>
  </SC.GridWrap>
)

export default TileGrid
