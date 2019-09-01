import styled, { css, keyframes } from 'styled-components'

import * as mixins from 'style/mixins'

const pulse = keyframes`
  from {
    opacity: 100%;
  }
  to {
    opacity: 0;
  }
`

const defaultSize = '2rem'

const pulsingCircle = css`
  animation: ${pulse} 0.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  border-color: white;
  border-radius: 100%;
  border-style: solid;
  border-width: 0.3rem;
  box-sizing: border-box;
  height: ${props => props.size || defaultSize};
  width: ${props => props.size || defaultSize};
`

const Spinner = styled.div`
  ${mixins.flex};

  height: 100%;
  width: 100%;

  ::after {
    ${pulsingCircle};
    content: '';
  }
`

export default Spinner
