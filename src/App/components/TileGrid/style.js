import styled from 'styled-components'

import { vars } from 'style'

const gridGap = '1rem'

export const GridWrap = styled.div`
  background: ${vars.color1};
  border-top-right-radius: 0.6rem;
  box-shadow: inset -1.3rem 1.3rem 1.3rem -1.3rem black;
  flex-grow: 1;
  overflow: scroll;
  padding: ${gridGap};
`

export const TileGrid = styled.div`
  display: grid;
  grid-gap: ${gridGap};
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
`
