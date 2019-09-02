import { checkStringForsubstring } from 'helpers/filtering'

export const getAlbums = ({ composer, filter }) => {
  return composer.albums.filter(album => {
    return checkStringForsubstring({
      string: album.title,
      substring: filter
    })
  })
}
