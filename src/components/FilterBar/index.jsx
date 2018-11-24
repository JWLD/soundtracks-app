import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

import { withUpdateCache } from 'HOCs'

import { Input, ResetButton, FilterBarWrap } from './style'

const FilterBar = ({ stateKey, updateCache, value }) => (
  <FilterBarWrap>
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
  </FilterBarWrap>
)

FilterBar.propTypes = {
  stateKey: PropTypes.string.isRequired,
  updateCache: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default withUpdateCache(FilterBar)
