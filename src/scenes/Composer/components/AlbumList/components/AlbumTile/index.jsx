import PropTypes from 'prop-types'
import React from 'react'

import * as SC from './style'

const AlbumTile = ({ artworkUrl, title }) => (
  <SC.Tile imageUrl={artworkUrl}>
    <SC.TileContent>{title}</SC.TileContent>
  </SC.Tile>
)

AlbumTile.propTypes = {
  artworkUrl: PropTypes.string,
  title: PropTypes.string.isRequired
}

AlbumTile.defaultProps = {
  artworkUrl: ''
}

export default AlbumTile
