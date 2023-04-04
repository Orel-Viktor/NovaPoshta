// Core
import { call, put } from 'redux-saga/effects';
// Parts
import { addItems, addTrackingNumber } from '../../slice';
// Engine

import { api } from '../../../../config/axios';
export function* callTrackingPackageWorker(action) {
   const { payload } = action;
   const response = yield call(api.getInfo, payload.tracking, '380982094317');
   yield put(addTrackingNumber(payload.tracking));
   const data = response.data;
   console.log(data);
   yield put(addItems(data));
}
