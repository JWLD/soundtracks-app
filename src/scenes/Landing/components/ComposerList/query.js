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

const filterComposers = ({ data }) => {
  if (!data.composers) return []

  return data.composers.filter(composer => {
    return checkStringForSubString({
      string: composer.name,
      subString: data.filter
    })
  })
}

const withData = Component => () => (
  <Query query={GET_COMPOSERS}>
    {({ data }) => <Component composers={filterComposers({ data })} />}
  </Query>
)

export default withData
