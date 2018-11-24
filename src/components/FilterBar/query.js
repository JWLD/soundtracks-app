import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'

const GET_FILTER = gql`
  query GetFilter {
    filter @client
  }
`

const withData = WrappedComponent => class extends Component {
  componentWillMount() {
    this.props.updateCache({ filter: '' })
  }

  render() {
    return (
      <Query query={GET_FILTER}>
        {({ data }) => <WrappedComponent {...this.props} {...data} />}
      </Query>
    )
  }
}

export default withData
