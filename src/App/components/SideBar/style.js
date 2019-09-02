import styled from 'styled-components'

import { mixins } from 'style'

export const SideBar = styled.div`
  ${mixins.flex};

  color: white;
  font-size: 1.8rem;
  padding-left: 0.8rem;
  text-align: center;
  width: 30.8rem;
`

export const SpotifyIframe = styled.iframe`
  height: 100%;
  width: 100%;
`
