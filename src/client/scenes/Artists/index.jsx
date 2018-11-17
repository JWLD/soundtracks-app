import React from 'react'

import { SearchBar } from 'components'

import { ArtistTiles } from './components'
import * as SC from './styled'

const Artists = () => (
  <>
    <SearchBar />

    <SC.PageContent>
      <ArtistTiles />
    </SC.PageContent>
  </>
)

export default Artists
