import * as actionTypes from '../../store/actions/actionTypes';

const initState = {
  restos: null,
  error: null,
  loading: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.HOMEPAGESIGNED_FETCH_RESTO_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.HOMEPAGESIGNED_FETCH_RESTO_SUCCESS:
      return {
        ...state,
        restos: action.restos,
        loading: false
      }
    case actionTypes.HOMEPAGESIGNED_FETCH_RESTO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default reducer;