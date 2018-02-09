import axios from 'axios';
import * as actionTypes from '../../store/actions/actionTypes';

const url = 'http://localhost:3001';

export const fetchStart = () => {
  return {
    type: actionTypes.HOMEPAGESIGNED_FETCH_RESTO_START
  }
}

export const fetchSuccess = (restos) => {
  return {
    type: actionTypes.HOMEPAGE_FETCH_RESTO_SUCCESS,
    restos: restos
  }
}

export const fetchFail = (error) => {
  return {
    type: actionTypes.HOMEPAGESIGNED_FETCH_RESTO_FAILED,
    error: error
  }
}

export const fetching = () => {
  return dispatch => {
    axios.get(url + '/restos', {headers: {'Access-Control-Allow-Origin': '*'}})
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchFail(error));
      })
  }
}