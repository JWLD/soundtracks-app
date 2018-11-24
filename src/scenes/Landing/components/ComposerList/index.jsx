import PropTypes from 'prop-types'
import React from 'react'

import { TileGrid } from 'components'

import { ComposerTile } from './components'
import withData from './query'

const ComposerList = ({ composers }) => (
  <TileGrid data={composers} tileComponent={ComposerTile} />
)

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
