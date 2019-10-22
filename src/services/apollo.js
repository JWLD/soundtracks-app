import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()

cache.writeData({
  data: {
    activeAlbumId: '',
    filter: ''
  }
})

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([httpLink]),
  resolvers: {}
})

export default client
