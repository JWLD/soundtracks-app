export const checkStringForSubString = ({ string, subString }) => {
  const normalisedString = string.toLowerCase()
  const normalisedSubString = subString.toLowerCase()

  return normalisedString.includes(normalisedSubString)
}
