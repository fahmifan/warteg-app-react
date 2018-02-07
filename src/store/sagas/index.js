import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchRestoSaga } from '../../layout/Homepage/sagasHomepage';

export function* watchFetchResto() {
  yield takeEvery(actionTypes.HOMEPAGE_FETCH_RESTO_START);
}

