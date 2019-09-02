import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import { SideBarQuery } from './gql'
import * as SC from './style'

const SideBar = () => {
  const { data } = useQuery(SideBarQuery)
  const { activeAlbumId } = data

  const renderIframe = () => (
    <SC.SpotifyIframe
      allow="encrypted-media"
      allowtransparency="true"
      frameBorder="0"
      key={activeAlbumId}
      src={`https://open.spotify.com/embed/album/${activeAlbumId}`}
    />
  )

  return (
    <SC.SideBar>
      {activeAlbumId ? renderIframe() : 'Please select an album.'}
    </SC.SideBar>
  )
}

export default SideBar
