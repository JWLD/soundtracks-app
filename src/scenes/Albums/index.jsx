import PropTypes from 'prop-types'
import React from 'react'
import compose from 'lodash/flowRight'
import { withRouter } from 'react-router-dom'

import { withUpdateCache } from 'HOCs'

import withData from './query'
import * as SC from './style'

const Albums = ({ albums, updateCache }) => {
  const tiles = albums.map(album => (
    <SC.AlbumTile
      imageUrl={album.imageUrl}
      key={album.id}
      onClick={() => updateCache({ selectedAlbumId: album.spotifyId })}
    >
      <SC.TileContent>{album.title}</SC.TileContent>
    </SC.AlbumTile>
  ))

  return <SC.TileGrid>{tiles}</SC.TileGrid>
}

Albums.propTypes = {
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
)(Albums)
