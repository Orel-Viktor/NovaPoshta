// Core
import { put } from 'redux-saga/effects';
// Parts
import { checkItem } from '../../slice';
// Engine

export function* callTrackingItemWorker(action) {
   const { payload } = action;
   console.log(payload);
   yield put(checkItem(payload));
}
