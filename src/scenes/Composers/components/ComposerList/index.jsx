import React from 'react'

import { ComposerTile } from './components'
import { composersPropType } from './propTypes'
import withData from './query'
import * as SC from './style'

const ComposerList = ({ composers }) => {
  const tiles = composers.map(composer => (
    <ComposerTile key={composer.id} name={composer.name} />
  ))

  return <SC.TileGrid>{tiles}</SC.TileGrid>
}

ComposerList.propTypes = {
  composers: composersPropType
}

ComposerList.defaultProps = {
  composers: []
}

export default withData(ComposerList)
