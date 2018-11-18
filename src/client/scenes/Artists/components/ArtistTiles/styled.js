import styled from 'styled-components'

import { vars } from 'style'

export const TileGrid = styled.div`
  display: flex;
  margin-top: ${vars.navBarHeight};
  min-height: calc(100vh - ${vars.navBarHeight});
`

export const ComposerTile = styled.span`
  height: 100px;
  color: white;
  font-size: 30px;
  margin: 30px 30px;
`
