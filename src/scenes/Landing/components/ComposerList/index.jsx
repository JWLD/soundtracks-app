import PropTypes from 'prop-types'
import React from 'react'

import { ComposerTile } from './components'
import withData from './query'
import * as SC from './style'

const ComposerList = ({ composers }) => {
  const tiles = composers.map(composer => (
    <ComposerTile key={composer.id} {...composer} />
  ))

  return <SC.TileGrid>{tiles}</SC.TileGrid>
}

ComposerList.propTypes = {
  composers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
}

ComposerList.defaultProps = {
  composers: []
}

export default withData(ComposerList)
