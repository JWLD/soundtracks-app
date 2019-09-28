import { checkStringForsubstring } from 'helpers/filtering'

export const getAlbums = ({ artist, filter }) => {
  return artist.albums.filter(album => {
    return checkStringForsubstring({
      string: album.title,
      substring: filter
    })
  })
}
