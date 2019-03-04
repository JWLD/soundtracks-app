import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import React from 'react'
import { Query } from 'react-apollo'

import { checkStringForSubString } from 'helpers/filtering'

const GET_COMPOSER_ALBUMS = gql`
  query ComposerAlbums($composerId: ID!) {
    composer(where: { id: $composerId }) {
      albums(orderBy: year_DESC) {
        id
        imageUrl
        spotifyId
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

export default Component => {
  const Wrapper = ({ match }) => (
    <Query
      query={GET_COMPOSER_ALBUMS}
      variables={{ composerId: match.params.composerId }}
    >
      {({ data, error, loading }) => (
        <Component albums={filterAlbums({ data, error, loading })} />
      )}
    </Query>
  )

  Wrapper.propTypes = {
    match: PropTypes.object.isRequired
  }

  return Wrapper
}
