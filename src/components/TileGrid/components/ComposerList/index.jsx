import PropTypes from 'prop-types'
import React from 'react'

import { ComposerTile } from './components'
import withData from './query'

const ComposerList = ({ composers }) => {
  return composers.map(composer => (
    <ComposerTile key={composer.id} {...composer} />
  ))
}

ComposerList.propTypes = {
  composers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default withData(ComposerList)
