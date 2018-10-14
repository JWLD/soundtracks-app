import * as ACTIONS from './constants'

const initialState = {
  searchTerm: ''
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm }
    default:
      return state
  }
}

export default appReducer
