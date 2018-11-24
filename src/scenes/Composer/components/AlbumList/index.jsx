import PropTypes from 'prop-types'
import React from 'react'

import { TileGrid } from 'components'

import { AlbumTile } from './components'
import withData from './query'

const AlbumList = ({ albums }) => (
  <TileGrid data={albums} tileComponent={AlbumTile} />
)

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default withData(AlbumList)
