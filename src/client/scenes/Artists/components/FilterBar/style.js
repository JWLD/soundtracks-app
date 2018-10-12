import styled from 'styled-components'

import { vars } from 'style'

export const FilterBarWrap = styled.div`
  background-color: #373e48;
  box-shadow: 0 0 1.5rem 0.1rem black;
  height: ${vars.navBarHeight};
  left: 0;
  padding: 0.8rem;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
`

export const Input = styled.input`
  background-color: #4f5664;
  border-radius: 0.2rem;
  color: white;
  font-size: 3rem;
  height: 100%;
  padding: 1rem;
  text-transform: capitalize;
  width: 100%;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #aaa;
  }
`
