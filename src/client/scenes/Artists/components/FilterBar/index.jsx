import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { FilterBarWrap, Input, ResetButton } from './style'

const FilterBar = () => (
  <FilterBarWrap>
    <Input placeholder="Filter" />

    <ResetButton>
      <FontAwesomeIcon icon="times-circle" />
    </ResetButton>
  </FilterBarWrap>
)

export default FilterBar
