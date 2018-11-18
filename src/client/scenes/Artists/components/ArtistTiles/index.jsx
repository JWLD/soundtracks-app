import React from 'react'

import withData from './data'
import { composersPropType } from './prop_types'
import * as SC from './styled'

const ArtistTiles = ({ composers }) => {
  const tiles = composers.map(composer => (
    <SC.ComposerTile key={composer.id}>{composer.name}</SC.ComposerTile>
  ))

  return <SC.TileGrid>{tiles}</SC.TileGrid>
}

ArtistTiles.propTypes = {
  composers: composersPropType
}

ArtistTiles.defaultProps = {
  composers: []
}

export default withData(ArtistTiles)
