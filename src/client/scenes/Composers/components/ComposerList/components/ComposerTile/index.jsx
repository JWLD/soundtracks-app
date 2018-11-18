import PropTypes from 'prop-types'
import React from 'react'

import * as SC from './styled'

const ComposerTile = ({ name }) => (
  <SC.Tile>
    <SC.TileContent>{name}</SC.TileContent>
  </SC.Tile>
)

ComposerTile.propTypes = {
  name: PropTypes.string.isRequired
}

export default ComposerTile
