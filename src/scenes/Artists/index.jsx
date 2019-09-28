import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import ROUTES from 'constants/routes'

import { ArtistsQuery } from './gql'
import { getArtists } from './helpers'
import * as SC from './style'

const Artists = () => {
  const { data, loading } = useQuery(ArtistsQuery)

  if (loading) return <SC.Spinner />

  const tiles = getArtists(data).map(artist => {
    const { id, imageUrl, name } = artist

    return (
      <SC.ArtistTile key={id} to={`${ROUTES.ARTIST}/${id}`}>
        <SC.TileContent>
          <SC.ImageWrap>
            {imageUrl ? (
              <SC.Image url={imageUrl} />
            ) : (
              <SC.NoImageWrap>
                <SC.NoImageIcon />
              </SC.NoImageWrap>
            )}
          </SC.ImageWrap>

          <SC.Name>{name}</SC.Name>
        </SC.TileContent>
      </SC.ArtistTile>
    )
  })

  return <SC.TileGrid>{tiles}</SC.TileGrid>
}

export default Artists
