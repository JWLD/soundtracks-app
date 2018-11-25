import styled from 'styled-components'

import { mixins, vars } from 'style'

export const SideBarWrap = styled.div`
  ${mixins.flex};

  background: #373e48;
  box-shadow: 0 0 1.5rem 0.1rem black;
  color: white;
  font-size: 2rem;
  height: calc(100vh - ${vars.navBarHeight});
  margin-top: ${vars.navBarHeight};
  padding-left: 0.8rem;
  text-align: center;
  width: 30.8rem;
`

export const SpotifyIframe = styled.iframe`
  height: 100%;
  width: 100%;
`
