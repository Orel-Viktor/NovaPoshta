// Core
import { call, put } from 'redux-saga/effects';
// Parts
import { setItems } from '../../slice';
// Engine

import { api } from '../../../../config/axios';

export function* callTrackingPackageWorker(action) {
   console.log(action);
   const { payload } = action;
   const response = yield call(api.getInfo, payload.tracking, '380982094317');
   console.log(response.data);
   yield put(setItems(response.data));
}
