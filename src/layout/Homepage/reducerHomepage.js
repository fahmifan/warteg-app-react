import * as actionTypes from '../../store/actions/actionTypes';

const initState = {
  restos: null,
  loading: false,
  error: null
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes.HOMEPAGE_FETCH_RESTO_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.HOMEPAGE_FETCH_RESTO_SUCCESS:
      return {
        ...state,
        restos: action.restos,
        loading: false
      }
    case actionTypes.HOMEPAGE_FETCH_RESTO_FAILED:
      return {
        ...state,
        loading: false
      }
    default: 
      return state;
  }
}

export default reducer;