import { FaTimesCircle } from 'react-icons/fa'
import styled from 'styled-components'

import { vars } from 'style'

export const FilterBar = styled.div`
  flex-shrink: 0;
  height: ${vars.topNavHeight};
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

export const ResetIcon = styled(FaTimesCircle)`
  fill: #aaa;
  cursor: pointer;
  font-size: 2rem;
  height: ${vars.topNavHeight};
  position: absolute;
  right: 0.7rem;
  top: 0;

  :hover {
    fill: #bbb;
  }
`
