import PropTypes from 'prop-types'
import React from 'react'
import { compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import { withUpdateCache } from 'HOCs'

import withData from './query'
import * as SC from './style'

const AlbumTiles = ({ albums, updateCache }) => {
  return albums.map(album => (
    <SC.AlbumTile
      imageUrl={album.artworkUrl}
      key={album.id}
      onClick={() => updateCache({ selectedAlbumId: album.spotifyId })}
    >
      <SC.TileContent>{album.title}</SC.TileContent>
    </SC.AlbumTile>
  ))
}

AlbumTiles.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      artworkUrl: PropTypes.string,
      id: PropTypes.string.isRequired,
      spotifyId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  updateCache: PropTypes.func.isRequired
}

export default compose(
  withRouter,
  withData,
  withUpdateCache
)(AlbumTiles)
