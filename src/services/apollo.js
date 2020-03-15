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
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://soundtracks.herokuapp.com/graphql'
      : 'http://localhost:3000/graphql'
})

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([httpLink]),
  resolvers: {}
})

export default client
