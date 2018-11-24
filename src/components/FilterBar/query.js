import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Query } from 'react-apollo'

const GET_FILTER = gql`
  query GetFilter {
    filter @client
  }
`

export default WrappedComponent => {
  const Wrapper = class extends Component {
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

  Wrapper.propTypes = {
    updateCache: PropTypes.func.isRequired
  }

  return Wrapper
}
