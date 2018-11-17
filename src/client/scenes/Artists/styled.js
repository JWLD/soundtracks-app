import styled from 'styled-components'

import { vars } from 'style'

export const PageContent = styled.div`
  margin-top: ${vars.navBarHeight};
  min-height: calc(100vh - ${vars.navBarHeight});
`
