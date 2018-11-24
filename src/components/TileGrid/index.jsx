import PropTypes from 'prop-types'
import React from 'react'

import * as SC from './styled'

const TileGrid = ({ data, tileComponent: TileComponent }) => {
  const tiles = data.map(item => <TileComponent key={item.id} {...item} />)

  return <SC.TileGridWrap>{tiles}</SC.TileGridWrap>
}

TileGrid.propTypes = {
  data: PropTypes.array.isRequired,
  tileComponent: PropTypes.func.isRequired
}

export default TileGrid
