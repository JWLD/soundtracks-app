import { FaHome, FaTimesCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { mixins, vars } from 'style'

const navPadding = '0.8rem'

export const FilterBar = styled.div`
  ${mixins.flex};

  flex-shrink: 0;
  height: ${vars.topNavHeight};
  padding: ${navPadding};
  padding-right: 0;
  position: relative;
`

const homeButtonSize = `calc(${vars.topNavHeight} - ${navPadding} * 2)`

export const HomeLink = styled(Link)`
  ${mixins.flex};

  border-radius: 0.2rem;
  height: ${homeButtonSize};
  margin-right: 0.5rem;
  width: ${homeButtonSize};

  :hover {
    background-color: ${vars.color3};
  }
`

export const HomeIcon = styled(FaHome)`
  fill: #aaa;
  font-size: 2rem;
`

export const Input = styled.input`
  background-color: ${vars.color3};
  border-radius: 0.2rem;
  color: white;
  font-size: 1.8rem;
  height: 100%;
  padding: 1rem 0.8rem;
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
  cursor: pointer;
  fill: #aaa;
  font-size: 2rem;
  height: ${vars.topNavHeight};
  position: absolute;
  right: 0.7rem;
  top: 0;

  :hover {
    fill: #bbb;
  }
`
