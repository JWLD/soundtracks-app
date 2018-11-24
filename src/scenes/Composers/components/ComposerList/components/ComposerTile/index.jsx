import PropTypes from 'prop-types'
import React from 'react'

import * as ROUTES from 'constants/routes'

import * as SC from './style'

const ComposerTile = ({ id, name }) => (
  <SC.Tile to={`${ROUTES.COMPOSERS}/${id}`}>
    <SC.TileContent>{name}</SC.TileContent>
  </SC.Tile>
)

ComposerTile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default ComposerTile
