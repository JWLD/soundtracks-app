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
    composersFilter @client
  }
`

const processData = ({ data }) => {
  if (!data.composers) return []

  const filteredComposers = data.composers.filter(composer => {
    return checkStringForSubString({
      string: composer.name,
      subString: data.composersFilter
    })
  })

  return {
    composers: filteredComposers
  }
}

const withData = Component => () => (
  <Query query={GET_COMPOSERS}>
    {({ data }) => <Component {...processData({ data })} />}
  </Query>
)

export default withData
