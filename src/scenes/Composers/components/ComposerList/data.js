import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import React from 'react'
import { Query } from 'react-apollo'
import { connect } from 'react-redux'

import { checkStringForSubString } from 'helpers/filtering'
import { getSearchTerm } from 'state/app/selectors'

const QUERY = gql`
  query ComposerList {
    composers {
      id
      name
    }
  }
`

const processData = ({ data, searchTerm }) => {
  if (!data.composers) return data

  const filteredComposers = data.composers.filter(composer => {
    return checkStringForSubString({
      string: composer.name,
      subString: searchTerm
    })
  })

  return {
    composers: filteredComposers
  }
}

const withData = Component => {
  const Wrapper = ({ searchTerm }) => (
    <Query query={QUERY}>
      {({ data }) => {
        const processedData = processData({ data, searchTerm })

        return <Component {...processedData} />
      }}
    </Query>
  )

  Wrapper.propTypes = {
    searchTerm: PropTypes.string.isRequired
  }

  const mapStateToProps = state => ({
    searchTerm: getSearchTerm(state)
  })

  return connect(mapStateToProps)(Wrapper)
}

export default withData
