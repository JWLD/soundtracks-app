import PropTypes from 'prop-types'
import React from 'react'

import * as SC from './styled'
import withData from './query'

const SpotifyPlayer = ({ selectedAlbumId }) => {
  if (!selectedAlbumId) return <div>SELECT STH</div>

  return (
    <SC.SpotifyPlayerWrap>
      <SC.SpotifyIframe
        allow="encrypted-media"
        allowtransparency="true"
        frameBorder="0"
        key={selectedAlbumId}
        src={`https://open.spotify.com/embed/album/${selectedAlbumId}`}
        width="300px"
      />
    </SC.SpotifyPlayerWrap>
  )
}

SpotifyPlayer.propTypes = {
  selectedAlbumId: PropTypes.string.isRequired
}

export default withData(SpotifyPlayer)
