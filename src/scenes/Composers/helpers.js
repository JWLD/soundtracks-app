import { checkStringForsubstring } from 'helpers/filtering'

export const getComposers = ({ composers, filter }) => {
  return composers.filter(composer => {
    return checkStringForsubstring({
      string: composer.name,
      substring: filter
    })
  })
}
