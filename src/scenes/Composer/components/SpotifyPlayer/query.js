import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

const GET_SELECTED_ALBUM_ID = gql`
  query GetSelectedAlbumId {
    selectedAlbumId @client
  }
`

export default Component => props => (
  <Query query={GET_SELECTED_ALBUM_ID}>
    {({ data }) => <Component {...props} {...data} />}
  </Query>
)
