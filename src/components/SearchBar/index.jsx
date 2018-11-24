import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

import { withUpdateCache } from 'HOCs'

import { Input, ResetButton, SearchBarWrap } from './style'

const SearchBar = ({ stateKey, updateCache, value }) => (
  <SearchBarWrap>
    <Input
      onChange={e => updateCache({ [stateKey]: e.target.value })}
      placeholder="Filter"
      value={value}
    />

    {value && (
      <ResetButton onClick={() => updateCache({ [stateKey]: '' })}>
        <FontAwesomeIcon icon="times-circle" />
      </ResetButton>
    )}
  </SearchBarWrap>
)

SearchBar.propTypes = {
  stateKey: PropTypes.string.isRequired,
  updateCache: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default withUpdateCache(SearchBar)
