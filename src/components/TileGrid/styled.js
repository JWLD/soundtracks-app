import styled from 'styled-components'

import { vars } from 'style'

const gridGap = '1rem'
const minTileSize = '13rem'

export const TileGridWrap = styled.div`
  display: grid;
  flex-grow: 1;
  grid-gap: ${gridGap};
  grid-template-columns: repeat(auto-fill, minmax(${minTileSize}, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(${minTileSize}, 1fr));
  margin: ${gridGap};
  margin-top: calc(${gridGap} + ${vars.navBarHeight});
`
