import { checkStringForSubstring } from 'helpers/filtering'

export const getComposers = ({ composers, filter }) => {
  return composers.filter(composer => {
    return checkStringForSubstring({
      string: composer.name,
      subString: filter
    })
  })
}
