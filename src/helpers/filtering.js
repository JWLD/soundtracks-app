export const checkStringForsubstring = ({ string, substring }) => {
  const normalisedString = string.toLowerCase()
  const normalisedsubstring = substring.toLowerCase()

  return normalisedString.includes(normalisedsubstring)
}
