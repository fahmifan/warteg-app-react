import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios';

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  }
}

export const loginSuccess = ({token, email, id}) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token,
    email: email,
    id: id
  }
}

export const loginFailed = (error) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    error: error
  }
}

export const login = ({id, email, password}) => {
  return dispatch => {
    dispatch(loginStart());
    axios({
      url: '/auth',
      method: 'post',
      data: {
        id: id,
        email: email,
        password: password
      }
    })
    .then(res => {
      dispatch(loginSuccess(res.data))
    })
    .catch(error => {
      dispatch(loginFailed(error));
    })
  }
}