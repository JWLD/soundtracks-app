import React from 'react'

import { FilterBar } from 'components'

import { AlbumList } from './components'
import * as SC from './styled'

const Composer = () => (
  <>
    <FilterBar />

    <SC.MainContentWrap>
      <AlbumList />
    </SC.MainContentWrap>
  </>
)

export default Composer
