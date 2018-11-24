import React from 'react'
import { ApolloConsumer } from 'react-apollo'

const withUpdateCache = Component => props => (
  <ApolloConsumer>
    {client => {
      const updateCache = data => client.writeData({ data })

      return <Component {...props} updateCache={updateCache} />
    }}
  </ApolloConsumer>
)

export default withUpdateCache
