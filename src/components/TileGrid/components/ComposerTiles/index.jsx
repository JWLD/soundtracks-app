import PropTypes from 'prop-types'
import React from 'react'

import { ComposerTile } from './components'
import withData from './query'

const ComposerTiles = ({ composers }) => {
  return composers.map(composer => (
    <ComposerTile key={composer.id} {...composer} />
  ))
}

ComposerTiles.propTypes = {
  composers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default withData(ComposerTiles)
