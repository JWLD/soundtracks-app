import { checkStringForSubString } from 'helpers/filtering'

export const getComposers = ({ composers, filter }) => {
  return composers.filter(composer => {
    return checkStringForSubString({
      string: composer.name,
      subString: filter
    })
  })
}
