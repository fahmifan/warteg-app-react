import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios';

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  }
}

export const loginSuccess = ({token, email}) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token,
    email: email
  }
}

export const loginFailed = (error) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    error: error
  }
}

export const login = (cred) => {
  return dispatch => {
    dispatch(loginStart());
    axios({
      url: '/auth',
      method: 'post',
      data: {
        email: cred.email,
        password: cred.password
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