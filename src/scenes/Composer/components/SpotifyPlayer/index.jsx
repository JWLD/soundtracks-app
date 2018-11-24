import React from 'react'

import * as SC from './styled'

const SpotifyPlayer = () => (
  <SC.SpotifyPlayerWrap>
    <SC.SpotifyIframe
      allow="encrypted-media"
      allowtransparency="true"
      frameBorder="0"
      src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
    />
  </SC.SpotifyPlayerWrap>
)

export default SpotifyPlayer
