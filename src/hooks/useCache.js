import { useApolloClient } from '@apollo/react-hooks'

export default () => {
  const client = useApolloClient()

  const updateCache = data => client.writeData({ data })

  return { updateCache }
}
