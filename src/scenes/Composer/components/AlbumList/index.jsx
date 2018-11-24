import PropTypes from 'prop-types'
import React from 'react'

import withData from './query'

const AlbumList = ({ albums }) => {
  console.log(albums)

  return <div>Album List</div>
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default withData(AlbumList)
