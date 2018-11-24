import styled from 'styled-components'

import { vars } from 'style'

export const SpotifyPlayerWrap = styled.div`
  background: #373e48;
  box-shadow: 0 0 1.5rem 0.1rem black;
  height: calc(100vh - ${vars.navBarHeight});
  margin-top: ${vars.navBarHeight};
  width: 300px;
`

export const SpotifyIframe = styled.iframe`
  height: 100%;
  width: 100%;
`
