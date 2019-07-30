import { cover } from 'polished'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { mixins } from 'style'

export const TileGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
`

const nameHeight = '3.5rem'
const tilePadding = '0.8rem'

export const ComposerTile = styled(Link)`
  background-color: #333;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1.5rem -0.5rem black;
  padding-top: calc(100% + ${nameHeight} - ${tilePadding});
  position: relative;

  :hover {
    background-color: #3a3a3a;
  }
`

export const TileContent = styled.div`
  ${mixins.flexVertical};
  ${cover()};

  padding: ${tilePadding};
  padding-bottom: 0;
`

export const Image = styled.div`
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  border-radius: 0.2rem;
  filter: grayscale();
  padding-bottom: 100%;
`

export const Name = styled.span`
  ${mixins.flex};

  color: white;
  height: ${nameHeight};
`
