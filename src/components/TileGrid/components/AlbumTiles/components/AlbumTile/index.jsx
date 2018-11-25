import PropTypes from 'prop-types'
import React from 'react'

import { withUpdateCache } from 'HOCs'

import * as SC from './style'

const AlbumTile = ({ artworkUrl, spotifyId, title, updateCache }) => (
  <SC.Tile
    imageUrl={artworkUrl}
    onClick={() => updateCache({ selectedAlbumId: spotifyId })}
  >
    <SC.TileContent>{title}</SC.TileContent>
  </SC.Tile>
)

AlbumTile.propTypes = {
  artworkUrl: PropTypes.string,
  spotifyId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updateCache: PropTypes.func.isRequired
}

AlbumTile.defaultProps = {
  artworkUrl: ''
}

export default withUpdateCache(AlbumTile)
