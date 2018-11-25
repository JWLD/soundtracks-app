import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

import { checkStringForSubString } from 'helpers/filtering'

const GET_COMPOSERS = gql`
  query ComposerList {
    composers {
      id
      name
    }
    filter @client
  }
`

const filterComposers = ({ data, error, loading }) => {
  if (error || loading) return []

  return data.composers.filter(composer => {
    return checkStringForSubString({
      string: composer.name,
      subString: data.filter
    })
  })
}

export default Component => () => (
  <Query query={GET_COMPOSERS}>
    {({ data, error, loading }) => (
      <Component composers={filterComposers({ data, error, loading })} />
    )}
  </Query>
)
