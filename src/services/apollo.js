import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  defaults: { filter: '', selectedAlbumId: '' },
  resolvers: {}
})

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, httpLink])
})

export default client
