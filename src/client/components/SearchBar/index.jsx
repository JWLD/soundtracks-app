import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { getSearchTerm } from 'state/app/selectors'

import { resetSearchTerm, setSearchTerm } from './actions'
import { Input, ResetButton, SearchBarWrap } from './style'

const SearchBar = ({ resetSearchTerm, searchTerm, setSearchTerm }) => (
  <SearchBarWrap>
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
  </SearchBarWrap>
)

SearchBar.propTypes = {
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
)(SearchBar)