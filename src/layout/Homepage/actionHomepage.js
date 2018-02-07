import * as actionTypes from '../../store/actions/actionTypes';
import axios from 'axios';

const server = "http://localhost:3001/restos";

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

    axios.get(server, {headers: {'Access-Control-Allow-Origin': '*'}})
      .then(res => {
        dispatch(fetchSuccess(res.data));
        console.log(res.data);
      })
      .catch(error => dispatch(fetchFailed(error)))
  }
}