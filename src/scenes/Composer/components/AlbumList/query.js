import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

import { checkStringForSubString } from 'helpers/filtering'

const GET_COMPOSER_ALBUMS = gql`
  query ComposerAlbums($id: ID!) {
    composer(id: $id) {
      albums {
        id
        title
      }
    }
    filter @client
  }
`

const filterAlbums = ({ data, error, loading }) => {
  if (error || loading) return []

  return data.composer.albums.filter(album => {
    return checkStringForSubString({
      string: album.title,
      subString: data.filter
    })
  })
}

export default Component => () => (
  <Query query={GET_COMPOSER_ALBUMS} variables={{ id: '1' }}>
    {({ data, error, loading }) => (
      <Component albums={filterAlbums({ data, error, loading })} />
    )}
  </Query>
)
