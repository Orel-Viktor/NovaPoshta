// Core
import { call, put } from 'redux-saga/effects';
// Parts
import { addItems, addTrackingNumber, setLoading } from '../../slice';
// Engine

import { api } from '../../../../config/axios';
export function* callTrackingPackageWorker(action) {
   yield put(setLoading(true));
   const { payload } = action;
   const response = yield call(
      api.getInfoTracking,
      payload.tracking,
      payload.phone
   );
   yield put(addTrackingNumber(payload.tracking));
   const data = response.data;
   yield put(addItems(data));
   yield put(setLoading(false));
}
