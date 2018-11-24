import React from 'react'

import { FilterBar } from 'components'

import { AlbumList, SpotifyPlayer } from './components'
import * as SC from './styled'

const Composer = () => (
  <>
    <FilterBar />

    <SC.MainContentWrap>
      <AlbumList />

      <SpotifyPlayer />
    </SC.MainContentWrap>
  </>
)

export default Composer
