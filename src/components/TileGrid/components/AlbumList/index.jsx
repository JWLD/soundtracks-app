import PropTypes from 'prop-types'
import React from 'react'
import { compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import { AlbumTile } from './components'
import withData from './query'

const AlbumList = ({ albums }) => {
  return albums.map(album => <AlbumTile key={album.id} {...album} />)
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      artworkUrl: PropTypes.string,
      id: PropTypes.string.isRequired,
      spotifyId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default compose(
  withRouter,
  withData
)(AlbumList)
