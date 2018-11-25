import styled from 'styled-components'

import { mixins } from 'style'

export const AlbumTile = styled.button`
  background-color: #333;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
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

  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  color: white;
  display: none;
  font-size: 1.6rem;
  left: 0;
  padding: 0.8rem;
  position: absolute;
  right: 0;
  top: 0;

  ${AlbumTile}:hover & {
    display: flex;
  }
`
