import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from './actionHomepage';

export function* fetchRestoSaga() {
  yield actions.fetchResto();
  yield put(actions.fetchSuccess);
}

