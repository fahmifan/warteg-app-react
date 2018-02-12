import * as actionTypes from '../../store/actions/actionTypes';
import axios from '../../axios';

export const fetchStart = () => {
  return {
    type: actionTypes.HOMEPAGE_FETCH_RESTO_START
  }
}

export const fetchSuccess = restos => {
  return {
    type: actionTypes.HOMEPAGE_FETCH_RESTO_SUCCESS,
    restos: restos
  }
}

export const fetchFailed = error => {
  return {
    type: actionTypes.HOMEPAGE_FETCH_RESTO_FAILED,
    error: error
  }
}

export const fetchResto = () => {
  return dispatch => {
    dispatch(fetchStart());

    axios.get('/restaurants')
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(error => dispatch(fetchFailed(error)))
  }
}