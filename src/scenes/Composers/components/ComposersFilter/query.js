import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

const GET_COMPOSERS_FILTER = gql`
  query ComposersFilter {
    composersFilter @client
  }
`

const withData = Component => () => (
  <Query query={GET_COMPOSERS_FILTER}>
    {({ data }) => <Component {...data} />}
  </Query>
)

export default withData
