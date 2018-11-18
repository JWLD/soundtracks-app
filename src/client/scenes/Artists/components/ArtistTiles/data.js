import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

const COMPOSERS_QUERY = gql`
  {
    composers {
      id
      name
    }
  }
`

const withData = Component => () => (
  <Query query={COMPOSERS_QUERY}>
    {queryProps => <Component {...queryProps.data} />}
  </Query>
)

export default withData
