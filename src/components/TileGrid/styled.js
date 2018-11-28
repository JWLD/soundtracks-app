import styled from 'styled-components'

import { vars } from 'style'

const gridGap = '1rem'
const minTileSize = '13rem'

export const TileGridWrap = styled.div`
  background: ${vars.color1};
  border-top-right-radius: 0.6rem;
  box-shadow: inset -1.3rem 1.3rem 1.3rem -1.3rem black;
  display: grid;
  flex-grow: 1;
  grid-gap: ${gridGap};
  grid-template-columns: repeat(auto-fill, minmax(${minTileSize}, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(${minTileSize}, 1fr));
  overflow: scroll;
  padding: ${gridGap};
`
