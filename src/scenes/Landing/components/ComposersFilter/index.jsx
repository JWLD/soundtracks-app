import PropTypes from 'prop-types'
import React from 'react'

import { FilterBar } from 'components'

import withData from './query'

const ComposersFilter = ({ composersFilter }) => (
  <FilterBar stateKey="composersFilter" value={composersFilter} />
)

ComposersFilter.propTypes = {
  composersFilter: PropTypes.string.isRequired
}

export default withData(ComposersFilter)
