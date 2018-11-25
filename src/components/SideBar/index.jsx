import PropTypes from 'prop-types'
import React from 'react'

import * as SC from './styled'
import withData from './query'

const SideBar = ({ selectedAlbumId }) => {
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
    <SC.SideBarWrap>
      {selectedAlbumId ? renderIframe() : 'Please select an album.'}
    </SC.SideBarWrap>
  )
}

SideBar.propTypes = {
  selectedAlbumId: PropTypes.string.isRequired
}

export default withData(SideBar)
