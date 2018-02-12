import * as actionTypes from '../../store/actions/actionTypes';
import axios from '../../axios';

export const fetchRestoStart = () => {
  return {
    type: actionTypes.DETAILS_FETCH_RESTO_START
  }
} 

export const fetchRestoSuccess = (resto) => {
  return {
    type: actionTypes.DETAILS_FETCH_RESTO_SUCCESS,
    resto: resto
  }
}

export const fetchRestoFail = (error) => {
  return {
    type: actionTypes.DETAILS_FETCH_RESTO_FAIL,
    error: error
  }
}

export const fetchResto = (id) => {
  return dispatch => {
    axios.get(`/restaurants/${id}`, {"headers": {"Access-Control-Allow-Origin": "*"}})
      .then(res => {
        dispatch(fetchRestoSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchRestoFail(error))
      })
  }
}