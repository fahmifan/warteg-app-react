import * as actionTypes from '../../store/actions/actionTypes';

const initState = {
  resto: null,
  loading: false,
  error: null
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes.DETAILS_FETCH_RESTO_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.DETAILS_FETCH_RESTO_SUCCESS:
      return {
        ...state,
        resto: action.resto,
        loading: false
      }
    case actionTypes.DETAILS_FETCH_RESTO_FAIL:
      return {
        ...state,
        loading: false
      }
    default: 
      return state;
  }
}

export default reducer;