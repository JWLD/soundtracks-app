import { cover } from 'polished'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { components, mixins } from 'style'

export const { Spinner } = components

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
  ${cover()};

  padding: ${tilePadding};
  padding-bottom: 0;
`

export const ImageWrap = styled.div`
  padding-bottom: 100%;
  position: relative;
`

const imageBorderRadius = '0.2rem'

export const Image = styled.div`
  ${cover()};

  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  border-radius: ${imageBorderRadius};
  filter: grayscale();
`

export const NoImageWrap = styled.div`
  ${mixins.flex};
  ${cover()};

  background-color: #444;
  border-radius: ${imageBorderRadius};
`

export const NoImageIcon = styled(FaUser)`
  fill: #555;
  font-size: 5rem;
`

export const Name = styled.span`
  ${mixins.flex};

  color: white;
  height: ${nameHeight};
`
