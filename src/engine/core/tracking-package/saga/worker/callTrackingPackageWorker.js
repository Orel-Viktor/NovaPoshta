// Core
import { call, put } from 'redux-saga/effects';
// Parts
import { addItems, addTrackingNumber } from '../../slice';
// Engine

import { api } from '../../../../config/axios';
export function* callTrackingPackageWorker(action) {
   const { payload } = action;
   const response = yield call(api.getInfo, payload.tracking, payload.phone);
   yield put(addTrackingNumber(payload.tracking));
   const data = response.data;
   yield put(addItems(data));
}
