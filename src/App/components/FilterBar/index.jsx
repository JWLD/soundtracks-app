import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import { compose } from 'react-apollo'

import { withUpdateCache } from 'HOCs'

import withData from './query'
import { Input, ResetButton, FilterBarWrap } from './style'

const FilterBar = ({ filter, updateCache }) => (
  <FilterBarWrap>
    <Input
      onChange={e => updateCache({ filter: e.target.value })}
      placeholder="Filter"
      value={filter}
    />

    {filter && (
      <ResetButton onClick={() => updateCache({ filter: '' })}>
        <FontAwesomeIcon icon="times-circle" />
      </ResetButton>
    )}
  </FilterBarWrap>
)

FilterBar.propTypes = {
  filter: PropTypes.string.isRequired,
  updateCache: PropTypes.func.isRequired
}

export default compose(
  withUpdateCache,
  withData
)(FilterBar)
