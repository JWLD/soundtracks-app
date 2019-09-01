import styled from 'styled-components'

import { vars } from 'style'

export const FilterBarWrap = styled.div`
  flex-shrink: 0;
  height: ${vars.navBarHeight};
  padding: 0.8rem;
  padding-right: 0;
  position: relative;
`

export const Input = styled.input`
  background-color: ${vars.color3};
  border-radius: 0.2rem;
  color: white;
  font-size: 1.8rem;
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

export const ResetButton = styled.button`
  color: #aaa;
  font-size: 2rem;
  height: ${vars.navBarHeight};
  position: absolute;
  right: 0.8rem;
  top: 0;

  :hover {
    color: #bbb;
  }
`
