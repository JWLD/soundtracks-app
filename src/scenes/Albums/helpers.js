import { checkStringForSubstring } from 'helpers/filtering'

export const getAlbums = ({ composer, filter }) => {
  return composer.albums.filter(album => {
    return checkStringForSubstring({
      string: album.title,
      subString: filter
    })
  })
}
