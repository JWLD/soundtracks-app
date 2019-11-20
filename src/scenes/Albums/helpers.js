import { checkStringForsubstring } from 'helpers/filtering'

export const getAlbums = ({ albums, filter }) => {
  return albums.filter(album => {
    return checkStringForsubstring({
      string: album.title,
      substring: filter
    })
  })
}
