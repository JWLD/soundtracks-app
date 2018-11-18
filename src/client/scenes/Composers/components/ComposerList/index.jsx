import React from 'react'

import withData from './data'
import { composersPropType } from './prop_types'
import * as SC from './styled'

const ComposerList = ({ composers }) => {
  const tiles = composers.map(composer => (
    <SC.ComposerTile key={composer.id}>{composer.name}</SC.ComposerTile>
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
