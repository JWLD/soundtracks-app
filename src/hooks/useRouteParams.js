import queryString from 'query-string'
import { useContext } from 'react'
import { __RouterContext as RouterContext } from 'react-router-dom'

export default () => {
  const { location, match } = useContext(RouterContext)

  const { params } = match
  const queryParams = queryString.parse(location.search)

  return {
    ...params,
    ...queryParams
  }
}
