import * as actionTypes from '../actions/actionTypes';

const initState = {
  id: null,
  token: null,
  email: null,
  isLogedIn: false,
  loading: false,
  error: null
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        email: action.email,
        id: action.id,
        isLogedIn: true,
        error: null
      }
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default: 
      return state;
  }
}

export default reducer;