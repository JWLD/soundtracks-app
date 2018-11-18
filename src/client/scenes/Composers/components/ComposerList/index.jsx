import React from 'react'

import { ComposerTile } from './components'
import withData from './data'
import { composersPropType } from './prop_types'
import * as SC from './styled'

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
