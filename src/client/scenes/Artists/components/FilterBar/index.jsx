import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { getSearchTerm } from 'state/app/selectors'

import { resetSearchTerm, setSearchTerm } from './actions'
import { FilterBarWrap, Input, ResetButton } from './style'

const FilterBar = ({ resetSearchTerm, searchTerm, setSearchTerm }) => (
  <FilterBarWrap>
    <Input
      onChange={event => setSearchTerm({ searchTerm: event.target.value })}
      placeholder="Filter"
      value={searchTerm}
    />

    {searchTerm && (
      <ResetButton onClick={resetSearchTerm}>
        <FontAwesomeIcon icon="times-circle" />
      </ResetButton>
    )}
  </FilterBarWrap>
)

FilterBar.propTypes = {
  resetSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state)
})

const mapDispatchToProps = {
  resetSearchTerm,
  setSearchTerm
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar)
