import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

const GET_FILTER = gql`
  query GetFilter {
    filter @client
  }
`

const withData = Component => props => (
  <Query query={GET_FILTER}>
    {({ data }) => <Component {...props} {...data} />}
  </Query>
)

export default withData
