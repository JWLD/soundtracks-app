import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import { useRouteParams } from 'hooks'

import { AlbumsQuery } from './gql'
import { getAlbums } from './helpers'
import * as SC from './style'

const Albums = () => {
  const { composerId } = useRouteParams()

  const { data, loading } = useQuery(AlbumsQuery, {
    pollInterval: 10000,
    variables: { composerId }
  })

  if (loading) return <SC.Spinner />

  const tiles = getAlbums(data).map(album => (
    <SC.AlbumTile imageUrl={album.imageUrl} key={album.id}>
      <SC.TileContent>{album.title}</SC.TileContent>
    </SC.AlbumTile>
  ))

  return <SC.TileGrid>{tiles}</SC.TileGrid>
}

export default Albums
