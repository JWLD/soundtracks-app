import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import { SideBarQuery } from './gql'
import * as SC from './style'

const SideBar = () => {
  const { data } = useQuery(SideBarQuery)
  const { selectedAlbumId } = data

  const renderIframe = () => (
    <SC.SpotifyIframe
      allow="encrypted-media"
      allowtransparency="true"
      frameBorder="0"
      key={selectedAlbumId}
      src={`https://open.spotify.com/embed/album/${selectedAlbumId}`}
    />
  )

  return (
    <SC.SideBar>
      {selectedAlbumId ? renderIframe() : 'Please select an album.'}
    </SC.SideBar>
  )
}

export default SideBar
