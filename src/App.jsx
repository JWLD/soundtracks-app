import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

import { FilterBar, SideBar, TileGrid } from './components'
import GlobalStyle from './style/global'

const PageWrap = styled.div`
  display: flex;
  height: 100vh;
`

const MainContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => (
  <>
    <GlobalStyle />

    <PageWrap>
      <MainContentWrap>
        <FilterBar />
        <TileGrid />
      </MainContentWrap>

      <SideBar />
    </PageWrap>
  </>
)

export default hot(module)(App)
