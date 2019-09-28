import { checkStringForsubstring } from 'helpers/filtering'

export const getArtists = ({ artists, filter }) => {
  return artists.filter(artist => {
    return checkStringForsubstring({
      string: artist.name,
      substring: filter
    })
  })
}
