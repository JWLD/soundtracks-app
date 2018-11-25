import styled from 'styled-components'

import { mixins, vars } from 'style'

export const SideBarWrap = styled.div`
  ${mixins.flex};

  background-color: ${vars.color2};
  padding-left: 0.8rem;
  color: white;
  font-size: 2rem;
  text-align: center;
  width: 30.8rem;
`

export const SpotifyIframe = styled.iframe`
  height: 100%;
  width: 100%;
`
