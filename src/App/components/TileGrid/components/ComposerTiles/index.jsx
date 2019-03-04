import PropTypes from 'prop-types'
import React from 'react'

import * as ROUTES from 'constants/routes'

import withData from './query'
import * as SC from './style'

const ComposerTiles = ({ composers }) => {
  return composers.map(composer => (
    <SC.ComposerTile key={composer.id} to={`${ROUTES.COMPOSER}/${composer.id}`}>
      <SC.TileContent>{composer.name}</SC.TileContent>
    </SC.ComposerTile>
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
