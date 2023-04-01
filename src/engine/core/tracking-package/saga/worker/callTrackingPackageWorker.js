// Core
import { call, put } from 'redux-saga/effects';
// Parts
import { addItem, addTrackingNumber } from '../../slice';
// Engine

import { api } from '../../../../config/axios';
export function* callTrackingPackageWorker(action) {
   const { payload } = action;
   const response = yield call(api.getInfo, payload.tracking, '380982094317');
   yield put(addTrackingNumber(payload.tracking));
   yield put(addItem(response.data));
}
