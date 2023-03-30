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
   yield localStorage.setItem('data', JSON.stringify(response.data));
   const historyData = yield localStorage.getItem('data') || '[]';
   console.log(JSON.parse(historyData));
   yield put(setItems(JSON.parse(historyData)));
}
