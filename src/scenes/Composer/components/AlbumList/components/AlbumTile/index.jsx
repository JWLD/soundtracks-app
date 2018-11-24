import PropTypes from 'prop-types'
import React from 'react'

import * as SC from './style'

const AlbumTile = ({ title }) => (
  <SC.Tile>
    <SC.TileContent>{title}</SC.TileContent>
  </SC.Tile>
)

AlbumTile.propTypes = {
  title: PropTypes.string.isRequired
}

export default AlbumTile
