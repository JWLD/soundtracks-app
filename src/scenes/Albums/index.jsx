import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import { useCache, useRouteParams } from 'hooks'

import { AlbumsQuery } from './gql'
import { getAlbums } from './helpers'
import * as SC from './style'

const Albums = () => {
  const { updateCache } = useCache()
  const { artistId } = useRouteParams()

  const { data, loading } = useQuery(AlbumsQuery, {
    fetchPolicy: 'cache-and-network',
    variables: { artistId }
  })

  if (loading) return <SC.Spinner />

  const tiles = getAlbums(data).map(album => (
    <SC.AlbumTile
      imageUrl={album.imageUrl}
      key={album.id}
      onClick={() => updateCache({ activeAlbumId: album.spotifyId })}
    >
      <SC.TileContent>{album.title}</SC.TileContent>
    </SC.AlbumTile>
  ))

  return <SC.TileGrid>{tiles}</SC.TileGrid>
}

export default Albums
