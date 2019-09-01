export const checkStringForSubstring = ({ string, subString }) => {
  const normalisedString = string.toLowerCase()
  const normalisedSubString = subString.toLowerCase()

  return normalisedString.includes(normalisedSubString)
}
