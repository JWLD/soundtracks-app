import compose from 'lodash/flowRight'
import PropTypes from 'prop-types'
import React from 'react'

import { withUpdateCache } from 'HOCs'

import withData from './query'
import * as SC from './style'

const FilterBar = ({ filter, updateCache }) => (
  <SC.FilterBarWrap>
    <SC.Input
      onChange={e => updateCache({ filter: e.target.value })}
      placeholder="Search"
      value={filter}
    />

    {filter && <SC.ResetIcon onClick={() => updateCache({ filter: '' })} />}
  </SC.FilterBarWrap>
)

FilterBar.propTypes = {
  filter: PropTypes.string.isRequired,
  updateCache: PropTypes.func.isRequired
}

export default compose(
  withUpdateCache,
  withData
)(FilterBar)
