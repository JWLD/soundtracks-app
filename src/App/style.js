import styled from 'styled-components'

import { vars } from 'style'

export const PageWrap = styled.div`
  display: flex;
  height: 100vh;
`

export const FilterContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const MainContent = styled.div`
  background: ${vars.color1};
  border-top-right-radius: 0.6rem;
  box-shadow: inset -1.3rem 1.3rem 1.3rem -1.3rem black;
  flex-grow: 1;
  overflow: scroll;
  padding: 1rem;
`
