import PropTypes from 'prop-types'
import React from 'react'

import { SearchBar } from 'components'

import withData from './query'

const ComposersFilter = ({ composersFilter }) => (
  <SearchBar stateKey="composersFilter" value={composersFilter} />
)

ComposersFilter.propTypes = {
  composersFilter: PropTypes.string.isRequired
}

export default withData(ComposersFilter)
