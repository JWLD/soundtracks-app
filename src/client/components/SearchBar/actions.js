import ACTIONS from 'state/constants'

export const setSearchTerm = ({ searchTerm }) => ({
  searchTerm,
  type: ACTIONS.SET_SEARCH_TERM
})

export const resetSearchTerm = () => dispatch => {
  dispatch(setSearchTerm({ searchTerm: '' }))
}
