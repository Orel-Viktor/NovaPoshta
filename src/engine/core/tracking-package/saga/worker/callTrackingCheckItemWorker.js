// Core
import { put, call } from 'redux-saga/effects';
// Parts
import { checkItem, addItems, setLoading } from '../../slice';
// Engine
import { api } from '../../../../config/axios';

export function* callTrackingCheckItemWorker(action) {
   yield put(setLoading(true));
   const { payload } = action;
   const currentTrackingNumber = payload[0];
   const currentPhone = payload[1];
   const response = yield call(
      api.getInfoTracking,
      currentTrackingNumber,
      currentPhone
   );
   const data = response.data;
   yield put(checkItem(currentTrackingNumber));
   yield put(addItems(data));
   yield put(setLoading(false));
}
