import PropTypes from 'prop-types'
import React from 'react'

import * as ROUTES from 'constants/routes'

import withData from './query'
import * as SC from './style'

const Composers = ({ composers }) => {
  const tiles = composers.map(composer => (
    <SC.ComposerTile key={composer.id} to={`${ROUTES.COMPOSER}/${composer.id}`}>
      <SC.TileContent>
        <SC.Image url={composer.imageUrl} />
        <SC.Name>{composer.name}</SC.Name>
      </SC.TileContent>
    </SC.ComposerTile>
  ))

  return <SC.TileGrid>{tiles}</SC.TileGrid>
}

Composers.propTypes = {
  composers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default withData(Composers)
