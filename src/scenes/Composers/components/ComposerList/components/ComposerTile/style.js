import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { mixins } from 'style'

export const Tile = styled(Link)`
  background-color: #333;
  border-radius: 0.2rem;
  box-shadow: 0 0.5rem 1.5rem -0.5rem black;
  padding-top: 100%;
  position: relative;

  :hover {
    background-color: #3a3a3a;
  }
`

export const TileContent = styled.div`
  ${mixins.flex};

  bottom: 0;
  color: white;
  font-size: 1.6rem;
  left: 0;
  padding: 0.8rem;
  position: absolute;
  right: 0;
  top: 0;
`
